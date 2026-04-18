// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],
  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://gianlucatiengo.com',
    name: 'Gianluca Tiengo — Freelance Full-Stack Web Developer',
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
        { rel: 'icon', type: 'image/png', href: '/img_new.png' },
        { rel: 'apple-touch-icon', href: '/img_new.png' },
        { rel: 'preconnect', href: 'https://cdn.jsdelivr.net', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' },
        { rel: 'preconnect', href: 'https://challenges.cloudflare.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://challenges.cloudflare.com' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Person',
                '@id': 'https://gianlucatiengo.com/#person',
                name: 'Gianluca Tiengo',
                givenName: 'Gianluca',
                familyName: 'Tiengo',
                jobTitle: 'Freelance Full-Stack Web Developer',
                description: 'Freelance full-stack web developer based in Belgium, specializing in Vue.js, Laravel, PHP and modern web technologies. Working with businesses across Belgium, Italy and Europe.',
                url: 'https://gianlucatiengo.com/',
                email: 'gl.tiengo@gmail.com',
                image: 'https://gianlucatiengo.com/og.php',
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
                  'https://twitter.com/truefreedom84',
                ],
              },
              {
                '@type': 'ProfessionalService',
                '@id': 'https://gianlucatiengo.com/#service',
                name: 'Gianluca Tiengo — Freelance Web Development',
                description: 'Freelance full-stack web development: responsive websites, e-commerce, custom web applications and WordPress — built with Vue.js, Laravel and PHP.',
                url: 'https://gianlucatiengo.com/',
                provider: { '@id': 'https://gianlucatiengo.com/#person' },
                areaServed: ['Belgium', 'Italy', 'Europe'],
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
                '@id': 'https://gianlucatiengo.com/#website',
                url: 'https://gianlucatiengo.com/',
                name: 'Gianluca Tiengo — Freelance Full-Stack Web Developer',
                description: 'Portfolio of Gianluca Tiengo, freelance full-stack web developer specializing in Vue.js, Laravel and modern web technologies. Based in Belgium.',
                author: { '@id': 'https://gianlucatiengo.com/#person' },
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://gianlucatiengo.com/#faq',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What web development services do you offer?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'I offer end-to-end web development services: responsive brochure websites, e-commerce platforms, custom web applications, and WordPress development. I also handle hosting setup, email configuration, API integrations (Stripe, Google, and more), and ongoing maintenance.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What technologies do you specialize in?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'My core stack is Vue.js, Nuxt.js, PHP and Laravel for full-stack development, with Tailwind CSS and Bootstrap for styling. I also work with WordPress for content-managed sites and have solid experience with HTML5, CSS3, and JavaScript.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do you work with clients outside Belgium?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. While I am based in Belgium and work with many clients in Brussels and across Belgium, I regularly collaborate with businesses in Italy and other European countries. All projects can be managed fully remotely.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How long does it take to build a website?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'It depends on the scope. A standard brochure website typically takes 3 to 6 weeks from kickoff to launch. A custom web application or e-commerce platform can take 2 to 4 months. I always provide a clear timeline estimate before starting.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can you work on an existing WordPress website?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. I can take over, maintain, redesign or extend an existing WordPress site. Whether it is fixing bugs, improving performance, adding new features or migrating to a new theme, I am happy to help.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How do I get started?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Simply fill in the contact form on my website or send me an email at gl.tiengo@gmail.com. I will get back to you within 24 hours to schedule a call and understand your project needs.',
                    },
                  },
                ],
              },
              {
                '@type': 'ItemList',
                '@id': 'https://gianlucatiengo.com/#projects',
                name: 'Selected Projects by Gianluca Tiengo',
                description: 'A selection of websites and web applications developed by Gianluca Tiengo.',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'CodeHelper.me', url: 'https://codehelper.me/' },
                  { '@type': 'ListItem', position: 2, name: 'Undiscover.me', url: 'https://www.undiscover.me/' },
                  { '@type': 'ListItem', position: 3, name: 'The National Venue Brussels', url: 'https://www.thenationalvenuebrussels.com/' },
                  { '@type': 'ListItem', position: 4, name: 'Artfood', url: 'https://www.artfood.be/' },
                  { '@type': 'ListItem', position: 5, name: 'La Villa In The Sky Brussels', url: 'https://www.lavillainthesky.be/' },
                  { '@type': 'ListItem', position: 6, name: 'Mancala Travel', url: 'https://www.mancalatravel.com/' },
                  { '@type': 'ListItem', position: 7, name: 'DistriCare Pharma', url: 'https://www.districare.be/' },
                ],
              },
            ],
          }),
        },
        { src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js', defer: true },
        { src: 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback&render=explicit', async: true },
      ],
    },
  },
})
