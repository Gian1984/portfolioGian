// Centralized SEO registry.
// Add a new entry per page here, then call useSeoRegistry().apply('<key>') from that page.
// Designed to grow: add jsonLd, alternates, article, product, etc. without touching pages.

export interface SeoEntry {
  title: string
  description: string
  canonical: string
  keywords?: string
  ogImage?: string
  ogImageAlt?: string
  ogType?: 'website' | 'article' | 'profile'
  twitterImage?: string
}

const SITE = {
  url: 'https://gianlucatiengo.com',
  name: 'Gianluca Tiengo',
  locale: 'en_US',
  twitterHandle: '@truefreedom84',
} as const

const defaultOgImage = `${SITE.url}/og.php`

const registry = {
  home: {
    title: 'Gianluca Tiengo — Freelance Full-Stack Web Developer | Vue.js & Laravel',
    description: 'Freelance full-stack web developer in Belgium. I build fast, responsive websites and web apps with Vue.js, Laravel and PHP for businesses that want results.',
    canonical: `${SITE.url}/`,
    keywords: 'freelance web developer Belgium, Vue.js developer, Laravel developer, PHP developer, full-stack developer, website development Brussels, WordPress developer, web application developer',
    ogImage: defaultOgImage,
    ogImageAlt: 'Gianluca Tiengo — Freelance Full-Stack Web Developer',
    ogType: 'website',
    twitterImage: defaultOgImage,
  },
} satisfies Record<string, SeoEntry>

export type SeoKey = keyof typeof registry

export const useSeoRegistry = () => ({
  get(key: SeoKey): SeoEntry {
    return registry[key]
  },

  apply(key: SeoKey) {
    const e = registry[key]

    useSeoMeta({
      title: e.title,
      description: e.description,
      keywords: e.keywords,
      author: SITE.name,
      robots: 'index, follow',

      ogType: e.ogType ?? 'website',
      ogUrl: e.canonical,
      ogTitle: e.title,
      ogDescription: e.description,
      ogImage: e.ogImage,
      ogImageWidth: 1200,
      ogImageHeight: 630,
      ogImageAlt: e.ogImageAlt ?? e.title,
      ogLocale: SITE.locale,
      ogSiteName: SITE.name,

      twitterCard: 'summary_large_image',
      twitterSite: SITE.twitterHandle,
      twitterCreator: SITE.twitterHandle,
      twitterTitle: e.title,
      twitterDescription: e.description,
      twitterImage: e.twitterImage ?? e.ogImage,
    })

    useHead({
      link: [{ rel: 'canonical', href: e.canonical }],
      meta: [
        { name: 'geo.region', content: 'BE' },
        { name: 'geo.placename', content: 'Belgium' },
      ],
    })
  },
})

export const seoSite = SITE
