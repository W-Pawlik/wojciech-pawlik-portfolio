import { readFile, readdir, writeFile } from 'node:fs/promises'
import { basename, join, relative, sep } from 'node:path'

import sharp from 'sharp'

/**
 * One-shot asset preparation. Run manually, never in CI:
 *
 *     pnpm images:prepare
 *
 * It does two things:
 *
 * 1. Re-encodes every photograph in `public/images/` to the largest size the layout can
 *    actually display, using mozjpeg. Source files usually arrive 2-4x larger than
 *    needed, and the bigger the input the longer the first (cold) optimisation of each
 *    variant takes in production.
 * 2. Regenerates `src/lib/images/blur.ts` - a 16px-wide base64 preview per image, used as
 *    a `placeholder="blur"`. Static string paths (as opposed to static imports) do not
 *    get one automatically, and that missing placeholder is most of what "the images load
 *    slowly" actually feels like.
 *
 * Re-encoding is lossy. Running this twice compresses already-compressed files, so the
 * script refuses to write when the result is not meaningfully smaller. Feed it originals.
 *
 * See .agents/decisions/0008-sharp-for-asset-preparation.md
 */

const IMAGES_DIR = 'public/images'
const BLUR_MODULE = 'src/lib/images/blur.ts'

/** A rewrite has to save at least this much to be worth the quality loss. */
const MIN_SAVING = 0.1

/**
 * Max width per image, derived from the widest CSS box each one can occupy, doubled for
 * high-density screens and then capped where the extra detail stops being visible.
 *
 * TODO(brief): add an entry per photograph. A file that is not listed here is skipped -
 * it still renders, at its original size and without a placeholder, which is exactly the
 * problem this script exists to solve.
 *
 * Sizes that usually fit a business-card site:
 *   hero, full-bleed media          1600-2048
 *   half-shell / eight columns      1400
 *   portrait crops, five columns    1000
 *   square thumbnails               900
 *
 * Planned entries for this project, one per shot in the shot list
 * (.agents/01-brand-and-design.md#shot-list-do-sesji). They stay commented out until the
 * session happens - a target for a file that does not exist is noise, and an invented
 * filename is worse.
 *
 *   'portrait-hero':    { width: 1200, quality: 74 }   // 4:5, hero / about
 *   'portrait-close':   { width: 900,  quality: 74 }   // 4:5 or 1:1, about
 *   'environment':      { width: 1800, quality: 72 }   // 3:2, editorial break
 *   'workspace-detail': { width: 1000, quality: 74 }   // 4:3, detail
 *   'codebros-wide':    { width: 2048, quality: 70 }   // 16:9, CodeBros section
 *   'codebros-work':    { width: 1800, quality: 72 }   // 3:2, CodeBros
 *   'project-<slug>':   { width: 2048, quality: 74 }   // 16:10, case study feature
 */
const TARGETS = {
  // These widths preserve a 2x source for the widest desktop boxes and Retina displays.
  // next/image creates the smaller device variants at request time.
  'wojciech-pawlik-detail': { width: 1400, quality: 82 },
  'michal-pawlik': { width: 900, quality: 82 },
  competition: { width: 1800, quality: 82 },
  'ai-datacenter': { width: 1400, quality: 82 },
  'wojciech-pawlik-portrait': { width: 1400, quality: 82 },
  'custom-systems': { width: 1400, quality: 82 },
  'ai-automation': { width: 1400, quality: 82 },
  'website-preview': { width: 1400, quality: 82 },
}

async function imageFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name)
      return entry.isDirectory() ? imageFiles(path) : /\.jpe?g$/i.test(entry.name) ? [path] : []
    }),
  )

  return files.flat().sort()
}

const kb = (bytes) => `${Math.round(bytes / 1024)}kB`

async function encode(inputPath, { width, quality }) {
  const input = await readFile(inputPath)
  const image = sharp(input)
  const meta = await image.metadata()

  const output = await image
    .resize({ width: Math.min(width, meta.width ?? width), withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true, progressive: true })
    .toBuffer()

  return { input, output }
}

async function blurDataUrl(inputPath) {
  const preview = await sharp(await readFile(inputPath))
    .resize({ width: 16 })
    .jpeg({ quality: 40 })
    .toBuffer()

  return `data:image/jpeg;base64,${preview.toString('base64')}`
}

async function main() {
  const files = await imageFiles(IMAGES_DIR)

  if (files.length === 0) {
    console.warn(`No JPEGs in ${IMAGES_DIR} - nothing to do.`)
    return
  }

  const blur = {}
  let before = 0
  let after = 0

  for (const path of files) {
    const file = relative(IMAGES_DIR, path).split(sep).join('/')
    const name = basename(path).replace(/\.jpe?g$/i, '')
    const target = TARGETS[name]

    if (!target) {
      console.warn(`skip  ${file} - no entry in TARGETS`)
      continue
    }

    const { input, output } = await encode(path, target)
    before += input.byteLength

    if (output.byteLength < input.byteLength * (1 - MIN_SAVING)) {
      await writeFile(path, output)
      after += output.byteLength
      console.log(`write ${file}  ${kb(input.byteLength)} -> ${kb(output.byteLength)}`)
    } else {
      after += input.byteLength
      console.log(`keep  ${file}  ${kb(input.byteLength)} (already close to target)`)
    }

    blur[`/images/${file}`] = await blurDataUrl(path)
  }

  await writeFile(BLUR_MODULE, blurModule(blur))

  console.log(`\ntotal ${kb(before)} -> ${kb(after)}`)
  console.log(`wrote ${BLUR_MODULE} with ${Object.keys(blur).length} previews`)
}

function blurModule(blur) {
  const entries = Object.entries(blur)
    .map(([path, data]) => `  '${path}':\n    '${data}',`)
    .join('\n')

  return `/**
 * GENERATED by scripts/prepare-images.mjs - do not edit by hand.
 *
 * A 16px-wide preview per photograph, inlined as base64 and used as next/image's
 * \`placeholder="blur"\`. Static string paths (as opposed to static imports) do not get a
 * blur placeholder automatically, so it is precomputed here.
 */
const BLUR_DATA: Record<string, string> = {
${entries}
}

/**
 * Spread onto a next/image: \`<Image {...blurProps(src)} ... />\`.
 * Returns nothing for an unknown path, so a missing preview degrades to no placeholder
 * rather than to a build error.
 */
export function blurProps(src: string): { placeholder: 'blur'; blurDataURL: string } | object {
  const blurDataURL = BLUR_DATA[src]
  return blurDataURL ? { placeholder: 'blur', blurDataURL } : {}
}
`
}

await main()
