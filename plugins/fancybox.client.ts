// Self-hosted Fancybox (was loaded from jsdelivr CDN — render-blocking CSS).
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox.css'

export default defineNuxtPlugin(() => {
  Fancybox.bind('[data-fancybox]')
})
