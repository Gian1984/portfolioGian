# Gianluca Tiengo — Personal Portfolio

> Personal portfolio website of Gianluca Tiengo, full-stack web developer specializing in Vue.js, Laravel, PHP and modern web technologies.

**Live site:** [gianlucatiengo.com](https://gianlucatiengo.com)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Vue 3](https://vuejs.org/) (Composition API + `<script setup>`) |
| Build Tool | [Vite](https://vitejs.dev/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Animations | [GSAP](https://gsap.com/) |
| UI Components | [Headless UI](https://headlessui.com/vue) |
| Icons | [Heroicons](https://heroicons.com/) |
| Routing | [Vue Router](https://router.vuejs.org/) |
| Contact Form | [EmailJS](https://www.emailjs.com/) |
| Bot Protection | [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) |
| Image Optimization | [Sharp](https://sharp.pixelplumbing.com/) |

---

## Project Structure

```
portfolioGian/
├── public/
│   ├── img/
│   │   └── logos/          # Tech & client logos (30+ assets)
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/             # Images used inside Vue components (webp/svg)
│   ├── views/
│   │   └── Home.vue        # Main single-page view (hero, skills, projects, contact)
│   ├── App.vue             # Root component — navbar & footer
│   ├── main.js             # App entry point
│   ├── router.js           # Vue Router config + SEO meta injection
│   └── style.css           # Tailwind base/components/utilities imports
├── index.html              # HTML shell — OG tags, JSON-LD schema, CDN scripts
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Sections

The site is a single page (`/`) with the following sections:

- **Hero** — intro and short bio
- **Skills** — tech stack icons (JS, Vue, PHP, Laravel, Tailwind, WordPress, Bootstrap, CSS3, HTML5, Nuxt)
- **Kind of** — personal philosophy and approach
- **At work** — key competencies and working style
- **Philosophy** — values and methodology
- **Projects** — showcase of 16+ client projects (CodeHelper.me, Undiscover.me, The National Venue Brussels, Artfood, DistriCare Pharma, etc.)
- **Contact** — EmailJS form with Cloudflare Turnstile bot protection

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## Features

- **Responsive design** — mobile-first layout with Tailwind CSS
- **GSAP animations** — scroll-triggered transitions and staggered entrance effects
- **SEO optimized** — meta tags, Open Graph, Twitter Cards, JSON-LD structured data (`Person` + `WebSite`), `sitemap.xml`
- **Contact form** — EmailJS integration with Cloudflare Turnstile CAPTCHA
- **Image optimization** — Sharp used at build time for `.webp` assets
- **Social links** — LinkedIn, Instagram, Twitter/X, GitHub

---

## Dependencies

### Runtime

| Package | Version | Purpose |
|---------|---------|---------|
| `vue` | ^3.4.19 | UI framework |
| `vue-router` | ^4.3.0 | Client-side routing |
| `gsap` | ^3.12.5 | Animations |
| `@headlessui/vue` | ^1.7.19 | Accessible UI primitives (mobile nav) |
| `@heroicons/vue` | ^2.1.1 | SVG icon set |
| `@vue-hero-icons/solid` | ^1.7.2 | Additional solid icons |
| `@emailjs/browser` | ^4.1.0 | Contact form email delivery |

### Dev

| Package | Version | Purpose |
|---------|---------|---------|
| `vite` | ^8.0.0 | Build tool & dev server |
| `@vitejs/plugin-vue` | ^5.0.4 | Vue SFC support for Vite |
| `tailwindcss` | ^3.4.1 | Utility-first CSS framework |
| `postcss` | ^8.4.35 | CSS transformation pipeline |
| `autoprefixer` | ^10.4.17 | Vendor prefix injection |
| `sharp` | ^0.34.5 | Image processing & optimization |

---

## License

Private — all rights reserved. © Gianluca Tiengo
