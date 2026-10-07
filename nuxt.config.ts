import { projects } from './data/projects'

const siteUrl = 'https://gianlucatiengo.com'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],
  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      siteUrl,
    },
  },

  site: {
    url: siteUrl,
    name: 'Gianluca Tiengo',
  },

  nitro: {
    prerender: {
      routes: ['/404.html'],
    },
  },

  sitemap: {
    autoLastmod: true,
    urls: [
      { loc: '/', changefreq: 'weekly', priority: 1.0 },
    ],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'theme-color', content: '#ec4899' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://challenges.cloudflare.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://challenges.cloudflare.com' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'ProfilePage',
                '@id': `${siteUrl}/#webpage`,
                url: `${siteUrl}/`,
                name: 'Gianluca Tiengo — Freelance Web Developer | Vue.js & Laravel',
                description: 'Freelance full-stack web developer in Belgium. I build fast, responsive websites and web apps with Vue.js, Laravel and PHP for businesses that want results.',
                inLanguage: 'en',
                isPartOf: { '@id': `${siteUrl}/#website` },
                mainEntity: { '@id': `${siteUrl}/#person` },
                about: { '@id': `${siteUrl}/#person` },
                primaryImageOfPage: { '@id': `${siteUrl}/#photo` },
                hasPart: { '@id': `${siteUrl}/#projects` },
              },
              {
                '@type': 'Person',
                '@id': `${siteUrl}/#person`,
                name: 'Gianluca Tiengo',
                givenName: 'Gianluca',
                familyName: 'Tiengo',
                jobTitle: 'Freelance Full-Stack Web Developer',
                description: 'Freelance full-stack web developer based in Belgium, specializing in Vue.js, Laravel, PHP and modern web technologies. Working with businesses across Belgium, Italy and Europe.',
                url: `${siteUrl}/`,
                email: 'mailto:gl.tiengo@gmail.com',
                image: {
                  '@type': 'ImageObject',
                  '@id': `${siteUrl}/#photo`,
                  url: `${siteUrl}/img/gian.webp`,
                  contentUrl: `${siteUrl}/img/gian.webp`,
                  width: 1078,
                  height: 1076,
                  caption: 'Gianluca Tiengo',
                },
                address: { '@type': 'PostalAddress', addressCountry: 'BE' },
                knowsAbout: [
                  'JavaScript', 'Vue.js', 'Nuxt.js', 'PHP', 'Laravel', 'WordPress',
                  'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3',
                  'Full-Stack Web Development', 'E-commerce', 'Web Applications', 'REST APIs',
                ],
                sameAs: [
                  'https://www.linkedin.com/in/gianluca-tiengo/',
                  'https://github.com/Gian1984',
                  'https://www.instagram.com/let_you_dev/',
                  'https://x.com/truefreedom84',
                ],
              },
              {
                '@type': 'ProfessionalService',
                '@id': `${siteUrl}/#service`,
                name: 'Gianluca Tiengo — Freelance Web Development',
                description: 'Freelance full-stack web development: responsive websites, e-commerce, custom web applications and WordPress — built with Vue.js, Laravel and PHP.',
                url: `${siteUrl}/`,
                email: 'mailto:gl.tiengo@gmail.com',
                image: `${siteUrl}/og.php`,
                logo: `${siteUrl}/apple-touch-icon.png`,
                founder: { '@id': `${siteUrl}/#person` },
                provider: { '@id': `${siteUrl}/#person` },
                areaServed: [
                  { '@type': 'Country', name: 'Belgium' },
                  { '@type': 'Country', name: 'Italy' },
                  { '@type': 'Place', name: 'Europe' },
                ],
                serviceType: [
                  'Web Development',
                  'E-commerce Development',
                  'Web Application Development',
                  'WordPress Development',
                  'API Integration',
                ],
                address: { '@type': 'PostalAddress', addressCountry: 'BE' },
              },
              {
                '@type': 'WebSite',
                '@id': `${siteUrl}/#website`,
                url: `${siteUrl}/`,
                name: 'Gianluca Tiengo',
                alternateName: 'Gianluca Tiengo — Freelance Full-Stack Web Developer',
                description: 'Portfolio of Gianluca Tiengo, freelance full-stack web developer specializing in Vue.js, Laravel and modern web technologies. Based in Belgium.',
                inLanguage: 'en',
                author: { '@id': `${siteUrl}/#person` },
                publisher: { '@id': `${siteUrl}/#person` },
              },
              {
                '@type': 'ItemList',
                '@id': `${siteUrl}/#projects`,
                name: 'Selected Projects by Gianluca Tiengo',
                description: 'A selection of websites and web applications developed by Gianluca Tiengo.',
                numberOfItems: projects.length,
                itemListElement: projects.map((project, index) => ({
                  '@type': 'ListItem',
                  position: index + 1,
                  item: {
                    '@type': 'WebSite',
                    name: project.name,
                    url: project.href,
                    description: project.role,
                    creator: { '@id': `${siteUrl}/#person` },
                  },
                })),
              },
            ],
          }),
        },
        { src: 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback&render=explicit', async: true },
      ],
    },
  },
})
