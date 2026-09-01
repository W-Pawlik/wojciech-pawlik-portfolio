import Link from 'next/link'

import { BrandLogo } from '@/components/ui/brand-logo'
import { Container } from '@/components/ui/container'
import { NAV_ITEM_KEYS, NAV_ITEM_ROUTES } from '@/data/navigation'
import { localizedHref, ROUTES, switchLocalePath } from '@/data/routes'
import { siteConfig } from '@/data/site'
import { getDictionary, getLocale } from '@/i18n/server'

/**
 * Site footer, in the inverted tone - it is the second half of the CodeBros mode: the page
 * ends dark, where the engineering side of the brand lives
 * (.agents/01-brand-and-design.md#motyw).
 *
 * Every contact route is gated on real data in `src/data/site.ts`. An unfinished footer
 * shows a visible `TODO(brief)` to whoever is building the site rather than an empty line
 * where an email should be - and nobody is tempted to type a plausible-looking address in
 * to fill it (.agents/09-content-and-copy.md).
 */
export async function Footer() {
  const dict = await getDictionary()
  const locale = await getLocale()

  const { email, phone, phoneHref } = siteConfig.contact

  return (
    <footer className="border-t border-line-invert bg-canvas-invert py-section-sm text-content-invert">
      <Container>
        <div className="grid grid-cols-12 gap-x-grid gap-y-12">
          <div className="col-span-12 lg:col-span-5">
            <BrandLogo name={siteConfig.name} size="md" />
            <p className="mt-3 font-mono text-meta text-content-invert-tertiary uppercase">
              {dict.nav.descriptor}
            </p>
          </div>

          <nav aria-label={dict.footer.navTitle} className="col-span-6 lg:col-span-2">
            <p className="font-mono text-meta text-content-invert-tertiary uppercase">
              {dict.footer.navTitle}
            </p>
            <ul className="mt-5 flex flex-col gap-2">
              {NAV_ITEM_KEYS.map((key) => (
                <li key={key}>
                  <Link
                    href={switchLocalePath(NAV_ITEM_ROUTES[key], locale)}
                    className="text-body-sm text-content-invert-secondary transition-colors duration-[var(--duration-fast)] hover:text-content-invert"
                  >
                    {dict.nav.items[key]}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={localizedHref(ROUTES.contact, locale)}
                  className="text-body-sm text-content-invert-secondary transition-colors duration-[var(--duration-fast)] hover:text-content-invert"
                >
                  {dict.footer.contactTitle}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="col-span-6 lg:col-span-2">
            <p className="font-mono text-meta text-content-invert-tertiary uppercase">
              {dict.footer.codebrosTitle}
            </p>
            <p className="mt-5 text-body-sm text-content-invert-secondary">
              {dict.footer.codebrosLabel}
            </p>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <p className="font-mono text-meta text-content-invert-tertiary uppercase">
              {dict.footer.contactTitle}
            </p>
            {email || phone ? (
              <address className="mt-5 not-italic">
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="block text-body-sm text-content-invert-secondary transition-colors duration-[var(--duration-fast)] hover:text-accent"
                  >
                    {email}
                  </a>
                )}
                {phone && (
                  <a
                    href={phoneHref}
                    className="mt-2 block text-body-sm text-content-invert-secondary transition-colors duration-[var(--duration-fast)] hover:text-accent"
                  >
                    {phone}
                  </a>
                )}
              </address>
            ) : (
              /* Visible on purpose: an unfinished footer has to be obvious to the person
                 building the site, not quietly empty. */
              <p className="mt-5 text-body-sm text-content-invert-tertiary">
                TODO(brief): e-mail kontaktowy
              </p>
            )}

            {siteConfig.social.length > 0 && (
              <ul className="mt-4 flex flex-col gap-2">
                {siteConfig.social.map((profile) => (
                  <li key={profile.href}>
                    <a
                      href={profile.href}
                      rel="me noreferrer"
                      target="_blank"
                      className="text-body-sm text-content-invert-secondary transition-colors duration-[var(--duration-fast)] hover:text-accent"
                    >
                      {profile.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-20 flex flex-wrap justify-between gap-x-8 gap-y-2 border-t border-line-invert pt-5 font-mono text-meta text-content-invert-tertiary uppercase">
          <p>{dict.footer.note}</p>
          <p>
            &copy; {siteConfig.copyrightYear} {siteConfig.name}. {dict.footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  )
}
