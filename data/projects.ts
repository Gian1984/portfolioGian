// Single source of truth for the portfolio projects.
// Used by pages/index.vue (project list) and nuxt.config.ts (JSON-LD ItemList).

export interface Project {
  name: string
  role: string
  imageUrl: string
  href: string
}

export const projects: Project[] = [
  {
    name: 'CodeHelper.me',
    role: '100+ privacy-first tools, 800+ curated resources and 400+ public APIs for developers',
    imageUrl: './img/logos/codehelper_logo.webp',
    href: 'https://codehelper.me/',
  },
  {
    name: 'Unlistened.me',
    role: 'Latest podcasts & music experience',
    imageUrl: './img/logos/unlistened_transparen_logo_176.webp',
    href: 'https://www.unlistened.me/',
  },
  {
    name: 'Barnes Brussels',
    role: 'Luxury real estate agency in Brussels & Brabant',
    imageUrl: './img/logos/barnes_logo.svg',
    href: 'https://www.barnes-brussels.com/',
  },
  {
    name: 'Panoptès',
    role: 'Art collection',
    imageUrl: './img/logos/panoptes.webp',
    href: 'https://www.panoptes.art/',
  },
  {
    name: 'Claudio Fava',
    role: 'Architect',
    imageUrl: './img/logos/logo_fava_border.webp',
    href: 'https://www.favaclaudio.com/',
  },
  {
    name: 'The National Venue Brussels',
    role: 'The exclusive event address at the gates of Brussels',
    imageUrl: './img/logos/theNationalVenue_logo-optimized.webp',
    href: 'https://www.thenationalvenuebrussels.com/',
  },
  {
    name: 'Artfood',
    role: 'Refined catering experiences crafted with authenticity, balance and respect for the environment',
    imageUrl: './img/logos/artfood_traiteur_logo-optimized.webp',
    href: 'https://www.artfood.be/',
  },
  {
    name: 'Mancala Travel',
    role: 'French-speaking travel specialists for tailor-made trips across Southern Africa',
    imageUrl: './img/logos/mancala_logo_new-optimized.webp',
    href: 'https://www.mancalatravel.com/',
  },
  {
    name: 'Brusano',
    role: 'Brussels palliative care platform',
    imageUrl: './img/logos/brusano_logo_350px.webp',
    href: 'https://www.brusano.brussels/',
  },
  {
    name: 'Pizza Vino',
    role: 'Best pizza in BXL',
    imageUrl: './img/logos/pizza-vino-logo.webp',
    href: 'https://pizzavino.be/',
  },
  {
    name: 'La Villa In The Sky',
    role: 'High-flying fine dining experience in Brussels',
    imageUrl: './img/logos/lavilla.webp',
    href: 'https://www.lavillainthesky.be/',
  },
  {
    name: 'DistriCare Pharma SRL',
    role: 'Belgian group at the service of health',
    imageUrl: './img/logos/districare_logo-optimized.webp',
    href: 'https://www.districare.be/',
  },
  {
    name: 'Unikpools',
    role: 'Exclusive swimming pool',
    imageUrl: './img/logos/unik.webp',
    href: 'https://www.unikpools.com/',
  },
  {
    name: 'Colonel Gustave',
    role: 'Healthy and natural food for dogs and cats',
    imageUrl: './img/logos/colonel.webp',
    href: 'https://www.colonelgustave.com/',
  },
  {
    name: 'L\'Artigiano della farina',
    role: 'Artisan bread and pizza maker',
    imageUrl: './img/logos/logoartigiano.webp',
    href: 'https://www.artigianodellafarina.be/',
  },
]
