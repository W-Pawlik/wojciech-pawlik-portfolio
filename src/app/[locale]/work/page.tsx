import type { Metadata } from 'next'

import { WorkIndexPage as WorkRouteContent } from '@/components/pages/work-index-page'
import { buildMetadata } from '@/lib/seo/metadata'
import { getLocale, getDictionary } from '@/i18n/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const dict = await getDictionary()
  return buildMetadata({
    locale,
    path: '/work',
    title: dict.work.indexTitle,
    description: dict.work.pageIntro,
  })
}

export default async function WorkPage() {
  return <WorkRouteContent />
}
