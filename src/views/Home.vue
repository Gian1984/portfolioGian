<script setup>
import { AcademicCapIcon,
    ShieldCheckIcon,
    CogIcon,
    ServerIcon,
    CloudArrowUpIcon,
    BeakerIcon,
    ClockIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    XCircleIcon,
} from '@heroicons/vue/24/solid'
import gsap from "gsap";

const beforeEnter = (el) => {
  el.style.opacity = 0
  el.style.transform = 'translateX(-400px)'
}

const beforeRight = (el) => {
  el.style.opacity = 0
  el.style.transform = 'translateX(400px)'
}

const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    x: 0,
    duration: 1.5,
    onComplete: done,
    delay: el.dataset.index * 0.5,
  })
}

</script>

<script>

import emailjs from '@emailjs/browser';
export default {



    computed: {
        galleries() {

            return [
                {
                    name: 'JS',
                    imageSrc: './img/logos/js.png',
                },
                {
                    name: 'VueJS',
                    imageSrc: './img/logos/vuejs.png',
                },
                {
                    name: 'Php',
                    imageSrc: './img/logos/php.png',
                },
                {
                    name: 'Laravel',
                    imageSrc: './img/logos/laravel.png'
                },
                {
                    name: 'TailwindCss',
                    imageSrc: './img/logos/tailwind.png'
                },
              {
                name: 'TailwindCss',
                imageSrc: './img/logos/wordpress.png'
              },
            ]
        },

      projects(){
            return [
                {
                    name: 'Claudio Fava',
                    role: 'Architect',
                    imageUrl:'./img/logos/logo_fava_border.png',
                    href: 'https://www.favaclaudio.com/'
                },
                {
                  name: 'Undiscover.me',
                  role: 'Make sure your new website shows the best of you',
                  imageUrl:'./img/logos/undiscoverme.png',
                  href:'https://www.undiscover.me/',
                },
                {
                  name: 'Belga Mobility',
                  role: 'Luxury car rental service with a private driver',
                  imageUrl:'./img/logos/BELGA-MOBILITY.png',
                  href:'https://belgamobility.com/',
                },
                {
                    name: 'Pizza Vino',
                    role: 'Best pizza in BXL',
                    imageUrl:'./img/logos/pizza-vino-logo.png',
                    href:'https://pizzavino.be/',
                },
                {
                    name: 'Let You Dev',
                    role: 'Platform for personal growth in programming',
                    imageUrl:'./img/logos/letudev.png',
                    href:'https://letudev.com/',
                },
                {
                  name: 'Magritte',
                  role: 'Plongez dans l’univers surréaliste de René Magritte',
                  imageUrl:'./img/logos/magrittelogo.png',
                  href:'https://magritte.com/',
                },
                {
                    name: 'Panoptès',
                    role: 'Art collection',
                    imageUrl:'./img/logos/panoptes.png',
                    href:'https://www.panoptes.art/',
                },
                {
                    name: 'La Villa In The Sky',
                    role: 'Expérience culinaire de haute voltige',
                    imageUrl:'./img/logos/lavilla.png',
                    href:'https://www.lavillainthesky.be/',
                },
                {
                    name: 'Quendra',
                    role: 'European telecom consulting company',
                    imageUrl:'./img/logos/quendra.png',
                    href:'https://www.quendra.com/',
                },
                {
                  name: 'Bioholistic',
                  role: 'Belgian group at the service of health',
                  imageUrl:'./img/logos/logoBio.png',
                  href:'https://www.bioholistic.be/',
                },
                {
                  name: 'Unikpools',
                  role: 'Exclusive swimming pool',
                  imageUrl:'./img/logos/unik.png',
                  href:'https://www.unikpools.com/',
                },
                {
                  name: 'Colonel Gustave',
                  role: 'Croquettes saines pour chiens et chats',
                  imageUrl:'./img/logos/colonel.png',
                  href:'https://www.colonelgustave.com/',
                },
                {
                  name: 'L\'Artigiano della farina',
                  role: 'La création de pains et de pizzas.',
                  imageUrl:'./img/logos/logoartigiano.png',
                  href:'https://www.artigianodellafarina.be/',
                },
                {
                    name: 'Odette en Ville',
                    role: 'Hotel-restaurant',
                    imageUrl:'./img/logos/odette.png',
                    href:'https://www.odetteenville.be/',
                },
                {
                    name: 'Brusano',
                    role: 'Brussels palliative care platform',
                    imageUrl:'./img/logos/brusano_logo_350px.png',
                    href:'https://www.brusano.brussels/',
                },
                {
                    name: '4 Venture',
                    role: 'Privately-held investment fund',
                    imageUrl:'./img/logos/4ventures-3.png',
                    href:'https://www.4ventures.be/',
                },
                // More people...
            ]
        },

        features(){
            return [
                {
                    name: 'Push to Deploy',
                    description: 'Knowledge of the most common provider of internet hosting and version control.',
                    icon: CloudArrowUpIcon,
                },
                {
                    name: 'Style',
                    description: 'Knowledge of most common CSS framework, to easily implement user-friendly UIs.',
                    icon: BeakerIcon,
                },
                {
                    name: 'Performant',
                    description: 'VueJS framework, the most performant way to make blazing fast the Virtual DOM.',
                    icon: ClockIcon,
                },
                {
                    name: 'Advanced Security',
                    description: 'Usage of Laravel framework, the recommended PHP framework for robust application security',
                    icon: ShieldCheckIcon,
                },
                {
                    name: 'Powerful API',
                    description:
                        'API management, to simplify how you connect with your partners ( such as Google, Stripe ...)',
                    icon: CogIcon,
                },
                {
                    name: 'Hosting',
                    description: 'Administrate hosting service, manage your email accounts or setup a Wordpress instance.',
                    icon: ServerIcon,
                },
            ]

        },

        staeps(){
            return  [
                {
                    id: 1,
                    title: 'Roadmap',
                    href: '#',
                    date: 'Mar 16, 2020',
                    datetime: '2020-03-16',
                    category: { name: 'Stage 1' },
                    image:'./img/logos/map.png',
                    preview:
                        'To define the vision of a product or service, I take the time to listen to you and understand your needs and those of your customers. I write a document with the technical specifications, some mockups, a program and a budget estimate.',
                },
                {
                    id: 2,
                    title: 'Prototyping',
                    href: '#',
                    date: 'Mar 10, 2020',
                    datetime: '2020-03-10',
                    category: { name: 'Stage 2' },
                    image:'./img/logos/prototyping.png',
                    preview:
                        'There is no universal and precise formula, because each project can have different characteristics. At the beginning we have to define objectives and potential critical issues, after which we move on to the conception of the product and then to the creation of a prototype.',
                },
                {
                    id: 3,
                    title: 'Development',
                    href: '#',
                    date: 'Feb 12, 2020',
                    datetime: '2020-02-12',
                    category: { name: 'Stage 3' },
                    image:'./img/logos/developer.png',
                    preview:
                        'Do you have the vision, feel the pull and all you need is software? I will work with you to develop this new functional and design product that your customers will love to use. And I\'ll help you get started.',
                },
            ]
        }
    },


    data() {
        return {
            alertsOpen: true,
            subject:'',
            name:'',
            email: '',
            message: '',
            confirmation:'',
            chaptcha:'',
        }
    },

    methods: {
        sendEmail() {
            try {
                emailjs.sendForm('service_58mft2p', 'template_dhvckrb', this.$refs.form, 'AmnMprCMW3riak6qR', {
                    name: this.name,
                    subject: this.subject,
                    email: this.email,
                    message: this.message
                })
            } catch (error) {
                console.log({error})
            }
            // Reset form field
            this.name = '',
                this.subject = '',
                this.email = '',
                this.message = ''
            this.chaptcha = ''
            this.confirmation = 'Your messase has been sent!'
        },

        closeAlert: function(){
            this.alertsOpen = false;
        },

    },
}


</script>
<template>

    <div class="bg-white">
      <div class="mx-auto px-6 pt-60 pb-20 sm:pt-80 sm:pb-40 lg:px-8">
        <transition
            appear
            @before-enter="beforeEnter"
            @enter="enter"
        >
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl">Gianluca Tiengo<br/>Web Developer</h1>
        </transition>
        <transition
            appear
            @before-enter="beforeRight"
            @enter="enter"
        >
          <h2 class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-6xl mt-5">
            I enjoy building everything from small business<br/> to rich interactive apps.<br/> If you are a business seeking a web presence<br/> or an employer looking to hire,<br/> you can get in touch with me<br/> <a href="mailto:gl.tiengo@gmail.com" aria-label="mail to Gianluca Tiengo"  class="text-pink-500">here</a>.
          </h2>
        </transition>
      </div>
    </div>

    <div class="bg-white pt-12 pb-10 sm:py-24">
      <div class="mx-auto px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-4 mx-auto">
            <div class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <div class="absolute inset-0 bg-gray-900 mix-blend-multiply" />

              <figure class="relative isolate">
                <svg viewBox="0 0 162 128" fill="none" aria-hidden="true" class="absolute -left-2 -top-48 -z-10 h-32 stroke-white/20">
                  <path id="0ef284b8-28c2-426e-9442-8655d393522e" d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z" />
                  <use href="#0ef284b8-28c2-426e-9442-8655d393522e" x="86" />
                </svg>
                <figcaption class="mt-6 text-4xl font-bold tracking-tight sm:text-6xl text-white">Ambition<br> & Integrity</figcaption>
                <blockquote class="mt-6 text-xl font-semibold leading-8 text-white">
                  <p>I approach every challenge with energy and vigour. I come up with innovative solutions and I'm not afraid to think big. I care about my work, my clients and my people. I treat everyone with honesty and respect and expect to be treated in the same way.</p>
                </blockquote>
              </figure>
            </div>
          </div>
          <div>
            <div class="text-base leading-7 text-gray-700">
              <h2 id="skills" class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Skills & Experience</h2>
              <div>
                <p class="mt-6 text-3xl font-semibold tracking-tight text-gray-900">I create successful responsive website that are fast, easy to use, and build with the best practices. The main area of expertise is full-stack development HTML, CSS, JS, PHP, building small and medium web apps, animations. I have also experience with popular open-source CMS like Wordpress.</p>
                <p class="mt-8 text-xl leading-8 text-black font-semibold">As developer I understand the importance to share knowledge. If only one person knows how to do something, that prevents others from developing and hinders progress. When you manage knowledge and give people a platform to share and access it, you’re opening the door to a whole host of benefits!</p>
                <p class="mt-8 text-xl leading-8 text-black font-semibold">Here bellow you can find some important resources that I've collected during my experience and that i want to share. I am not affiliated with any of it, I am just using them personally and would want to share it with you, especially to all self-taught developer.</p>
                <a href="https://letudev.com/" target="_blank" class="mt-8 w-36 flex bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                  <span class="flex">
                    <span class="flex mt-0.5">I'm curious</span>
                    <ArrowRightIcon class="ml-2 h-5 w-5"></ArrowRightIcon>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="overflow-hidden bg-white py-10 sm:py-32">
      <div class="mx-auto max-w-full px-6 lg:flex lg:px-8">
        <div class="mx-auto md:grid max-w-2xl gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none  lg:gap-y-8">
          <div class="lg:col-end-1 lg:w-full lg:max-w-5xl max-w-full lg:pb-8 ">
            <h2 id="kindof" class="text-4xl font-bold text-gray-900 sm:text-6xl">
              Websites Ecommerce<br> Web Application
            </h2>
            <p class="mt-6 text-3xl font-semibold tracking-tight text-gray-900 sm:text-6x">
              I design and develop responsive brochure websites to showcase your products and services in alignment with your brand essence, your target audience and your preferences. My websites follow the latest design trends to ensure they’re up to date for years to come.
            </p>
            <p class="mt-6 text-xl font-semibold leading-8 text-black-600">
              In addition to designing a beautiful, trendy and modern-looking website that fits with your brand, i will also take care of all technical aspects of the e-commerce side to ensure that everything works without issues. I can set up smooth payment systems, integrations and subscriptions.
            </p>
            <p class="mt-6 text-xl font-semibold leading-8 text-black-600">
              I deliver web-based applications that help organizations to keep pace with constantly changing business needs. Such applications boast quick and easy access from anywhere on the Internet, ensure lower hardware and software costs, allow faster time to market, and provide flexible integration with other systems.
            </p>
          </div>
          <div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <a
                  href="img/favascreen.webp"
                  aria-label="visit https://www.favaclaudio.com/"
                  data-fancybox="gallery"
                  data-caption="https://www.favaclaudio.com/"
              >
                <img src="../assets/favascreen.webp" alt="https://www.favaclaudio.com/" class="aspect-[7/5] w-[37rem] max-w-none bg-gray-50 object-cover" />
              </a>
            </div>
            <div class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div class="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <a
                    href="img/bioscreen.webp"
                    data-fancybox="gallery"
                    aria-label="visit https://www.bioholistic.be/"
                    data-caption="https://www.bioholistic.be/"
                >
                  <img src="../assets/bioscreen.webp" alt="https://www.bioholistic.be/" class="aspect-[4/3] w-[24rem] max-w-none flex-none bg-gray-50 object-cover" />
                </a>
              </div>
              <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <a
                    href="img/magrittescreen.webp"
                    aria-label="visit https://magritte.com/"
                    data-fancybox="gallery"
                    data-caption="https://magritte.com/"
                >
                  <img src="../assets/magrittescreen.webp" alt="https://magritte.com/" class="aspect-[7/5] w-[37rem] max-w-none flex-none bg-gray-50 object-cover" />
                </a>
              </div>
              <div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <a
                    href="img/colonelscreen.webp"
                    aria-label="https://www.colonelgustave.com/"
                    data-fancybox="gallery"
                    data-caption="https://www.colonelgustave.com/"
                >
                <img src="../assets/colonelscreen.webp" alt="https://www.colonelgustave.com/" class="aspect-[4/3] w-[24rem] max-w-none bg-gray-50 object-cover" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative py-12 sm:py-32">
      <div class="mx-auto px-4 text-right sm:px-6 lg:px-8">
        <h2 id="atwork" class="mt-2 mb-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Everything you need<br> to deploy your app
        </h2>
        <p class="mt-5 mb-4 text-3xl font-semibold tracking-tight text-gray-900">
          My approach to website development fuses creativity,<br> technology and data analysis,<br> giving you the platform you.
        </p>
        <div class="mt-12">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="feature in features" :key="feature.name" class="pt-6">
              <div class="flow-root shadow-lg px-6 pb-8">
                <div class="-mt-6">
                  <div>
                    <span class="inline-flex items-center justify-center p-3 bg-white rounded-md shadow-lg">
                      <component :is="feature.icon" class="h-8 w-8 sm:h-12 sm:w-12 text-pink-500" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 class="mt-8 text-3xl font-semibold tracking-tight text-gray-900">{{ feature.name }}</h3>
                  <p class="mt-5 mb-4 text-xl leading-8 text-black-600 font-semibold">
                    {{ feature.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-900 py-12 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          <div v-for="category in galleries" :key="category.name" class="bg-white/5 p-8 sm:p-10">
            <img class="max-h-24 w-full object-contain" :src="category.imageSrc" :alt="category.name" />
          </div>
        </div>
      </div>
    </div>

      <div class="relative isolate">
        <div class="overflow-hidden">
          <div class="px-6 pb-12 pt-12 sm:pt-60 lg:px-8 lg:pt-32 lg:pb-32">
            <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div class="relative w-full max-w-7xl lg:shrink-0 xl:max-w-4xl">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">This is how we do it</h1>
                <p class="mt-6 text-3xl font-semibold tracking-tight text-gray-900 sm:max-w-md lg:max-w-none">Depending on the type of project, the basic steps of building a website can vary. Not all websites are the same. Different types of management and planning are required.</p>
                <div v-for="step in staeps" :key="step.id">
                  <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div class="flex-1">
                      <p class="text-3xl font-semibold tracking-tight text-gray-900">
                        {{ step.title }}
                      </p>
                      <p class="mt-3 text-xl leading-8 text-black-600 font-semibold">
                        {{ step.preview }}
                      </p>

                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div class="relative">
                    <a
                        href="img/anamscreen.webp"
                        aria-label="visit https://www.anamkitchen.be/"
                        data-fancybox="gallery2"
                        data-caption="https://www.anamkitchen.be/"
                    >
                      <img src="../assets/anamscreen.webp" alt="Anam Kitchen" class=" w-full bg-gray-900/5 object-cover shadow-lg" />
                    </a>
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div class="relative">
                    <a
                        href="img/bassin.webp"
                        aria-label="https://www.bassin-nord.brussels/"
                        data-fancybox="gallery2"
                        data-caption="https://www.bassin-nord.brussels/agenda/"
                    >
                      <img src="../assets/bassin.webp" alt="Bassin Nord" class="w-full bg-gray-900/5 object-cover shadow-lg" />
                    </a>
                    <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div class="relative">
                    <a
                        href="img/undiscoverscreen.webp"
                        aria-label="visit https://undiscover.me/"
                        data-fancybox="gallery2"
                        data-caption="https://undiscover.me/"
                    >
                      <img src="../assets/undiscoverscreen.webp" alt="Undiscover.me" class=" w-full bg-gray-900/5 object-cover shadow-lg" />
                    </a>
                    <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div class="relative">
                    <a
                        href="img/colonelmobilescreen.webp"
                        aria-label="visit https://www.colonelgustave.com/"
                        data-fancybox="gallery2"
                        data-caption="https://www.colonelgustave.com/"
                    >
                      <img src="../assets/colonelmobilescreen.webp" alt="Colonel Gustave" class=" w-full bg-gray-900/5 object-cover shadow-lg" />
                    </a>
                    <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div class="relative">
                    <a
                        href="img/pizzascreen.webp"
                        aria-label="visit https://www.pizzavino.be/"
                        data-fancybox="gallery2"
                        data-caption="https://www.pizzavino.be/"
                    >
                      <img src="../assets/pizzascreen.webp" alt="Pizza Vino" class=" w-full bg-gray-900/5 object-cover shadow-lg" />
                    </a>
                    <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




    <div id="philosophy" class="bg-black relative mx-auto py-20 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div class="relative lg:flex lg:items-center max-w-7xl mx-auto">

        <div class="relative lg:ml-10">
          <svg class="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50" stroke="currentColor" fill="none" viewBox="0 0 144 144" aria-hidden="true">
            <path stroke-width="2" d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z" />
          </svg>
          <blockquote class="relative">
            <div class="text-xl sm:text-3xl font-semibold tracking-tight text-white">
              <p class="text-left">
                One of the important skills as a Self-taught developer is to be resourceful, my father taught me this skill when I was still very young, and I didn’t know it would take me far in life.
                I started with wordpress for fun, and my curiosity led me to my first HTML / CSS site. Working during the day, at night I took courses on SoloLearn and all the online platforms that could satiate my desire to learn.
              </p>
              <p class="text-left mt-6">
                I realized then that making websites was what I wanted for myself, and I took the time to attend a bootcamp in programming to get better and learn more.<br>
                Through this learning journey that continues to this day, I am happy and I continue to apply the same principles to what is finally my job today.<br><br>
              </p>
              <p>
                <span class="text-pink-500 font-bold">Re-source-ful</span>
                <i>  — Having the ability to find clever ways to overcome difficulties.</i>
              </p>
            </div>
            <div class="mt-8">
              <div class="flex">
                <div class="flex-shrink-0 lg:hidden">
                  <img class="h-12 w-12 rounded-full" src="../assets/gian.jpg" alt="gianluca_tiengo" />
                </div>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </div>

    <div class="pt-20 pb-20">
      <div class="bg-white">
        <div class=" py-1 px-4  lg:py-16 lg:px-8">
          <div class="space-y-8 sm:space-y-12">
            <div class="space-y-5 sm:space-y-4 text-right">
              <h2 id="projects" class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Want to take a look at what I like to do?</h2>
              <p class="text-3xl font-semibold tracking-tight text-gray-900">Whichever platform you choose,<br> I’ll make sure your new website shows the best of you,<br> attracts and convert new leads, and provides a great user experience.</p>
            </div>
            <div class="text-center pt-20">
              <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:gap-x-16 lg:gap-y-12 xl:grid-cols-4">
                <li v-for="project in projects" :key="project.name">
                  <a :href="project.href" :aria-label="project.name" target="_blank" class="space-y-4">
                    <img class="mx-auto h-24 w-24 rounded-full shadow-2xl lg:w-32 lg:h-32 p-1" :src="project.imageUrl" alt="single project image" />
                    <div class="space-y-2">
                      <div class="text-xs font-medium lg:text-sm">
                        <h3 class="text-xl leading-8 font-semibold text-black-600">{{ project.name }}</h3>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative isolate bg-black py-12 sm:py-24">
      <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div class="relative px-6 pb-12 pt-12 sm:pt-24 sm:pb-24 lg:static lg:px-8 lg:py-24">
          <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 id="contact" class="text-4xl font-bold tracking-tight sm:text-6xl text-white">Are you ready?</h2>
            <p class="mt-6 text-3xl font-semibold tracking-tight text-white">
              As your partner i do my best, but what's more important is how i will try help you move forward. Whether it’s to better align on your business challenge, understand the people you need to reach, or define the best process to get there, we do it together as one single, cohesive team.
            </p>

            <p class="mt-6 text-xl leading-8 font-semibold text-white">
              No matter what level of web expertise you have, the whole process of development will be simple and manageable.
            </p>
            <p class="mt-6 text-xl leading-8 font-semibold text-white">
              I dont want to lure you with empty promises and hyperbole. Instead, i prefer results.
            </p>
            <p class="mt-6 text-xl leading-8 font-semibold text-white">
              I know how important is the presence on the web for you, and that's why I'm committed every day to ensure the best result.
            </p>
          </div>
        </div>
        <form ref="form" @submit.prevent="sendEmail">
          <div class="container px-2 py-12 mx-auto flex">
            <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 pt-12 pb-12 pl-6 pr-6">
              <h2 class="text-4xl font-bold tracking-tight sm:text-6x text-black mb-1 ">Get in touch!</h2>
              <p class="text-3xl font-semibold tracking-tight">My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
              <div class="relative mb-4 mt-5">
                <label for="name" class="text-sm sm:text-lg leading-8 text-black font-semibold">Name / Company</label>
                <input v-model="name" type="text" id="name" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required>
              </div>
              <div class="relative mb-4">
                <label for="email" class="text-sm sm:text-lg leading-8 text-black font-semibold">Email</label>
                <input v-model="email" type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required>
              </div>
              <div class="relative mb-4">
                <label for="subject" class="text-sm sm:text-lg leading-8 text-black font-semibold">Subject</label>
                <input v-model="subject" name="subject" id="subject" type="text" class="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required>
              </div>
              <div class="relative mb-4">
                <label for="message" class="text-sm sm:text-lg leading-8 text-black font-semibold">Message</label>
                <textarea v-model="message" id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 h-32 text-sm outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
              </div>
              <div class="relative mb-4">
                <label for="chaptcha" class="text-sm sm:text-lg leading-8 text-black font-semibold">CAPTCHA verification: 6 + 6 = ?</label>
                <input v-model="chaptcha" name="chaptcha" id="chaptcha" type="text" class="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required>
              </div>
              <button v-if="chaptcha == 12" type="submit" value="Send" class="mt-4 w-24 flex bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                <span class="flex">
                  <span class="flex mt-0.5">Send</span>
                  <ArrowRightIcon class="ml-2 h-5 w-5"></ArrowRightIcon>
                </span>
              </button>
            </div>
          </div>
          <div class="mt-3" v-if="confirmation" >
            <div v-if="alertsOpen" class="rounded-md bg-green-50 p-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-green-800">
                    {{ confirmation }}
                  </p>
                </div>
                <div class="ml-auto pl-3">
                  <div class="-mx-1.5 -my-1.5">
                    <button v-on:click="closeAlert()" type="button" class="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">
                      <span class="sr-only">Dismiss</span>
                      <XCircleIcon class="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

</template>

