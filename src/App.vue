<script setup>
import {defineComponent, h} from "vue";
import gsap from 'gsap'

import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'


const mobileMenuOpen = ref(false)


const footerNavigation = {
    social: [
        {
            name: 'Linkedin',
            href: 'https://www.linkedin.com/in/gianluca-tiengo/',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 21 21' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z',
                            'clip-rule': 'evenodd',
                        }),
                    ]),
            }),
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/let_you_dev/',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d:
                                'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                            'clip-rule': 'evenodd',
                        }),
                    ]),
            }),
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/truefreedom84',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 23 23' }, [
                        h('path', {
                            d:
                                'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
                        }),
                    ]),
            }),
        },
        {
            name: 'GitHub',
            href: 'https://github.com/Gian1984',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d:
                                'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                            'clip-rule': 'evenodd',
                        }),
                    ]),
            }),
        },
    ],
}


const beforeSlide = (el) => {
    el.style.opacity = 0
    el.style.transform = 'translateY(400px)'
}

const slide = (el, done) => {
    gsap.from(el, {
        rotation: 180
    })
    gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        onComplete: done,
        delay: el.dataset.index * 0.1,
        rotation: 360,
    })
}


</script>

<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Gianluca Tiengo Web Devel0per</span>
          <transition
              appear
              @before-enter="beforeSlide"
              @enter="slide"
          >
          <img class="h-32 w-auto" src="./assets/logoGianlucaTrasparebte.png" alt="Gianluca Tiengo Web Developer Logo" />
          </transition>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-10 w-10 text-black" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <button v-on:click="scrolltoskills()" class="text-sm font-semibold leading-6 text-gray-900">Skills</button>
        <button v-on:click="scrolltokindof()" class="text-sm font-semibold leading-6 text-gray-900">Kind of</button>
        <button v-on:click="scrolltoatwork()" class="text-sm font-semibold leading-6 text-gray-900">At work</button>
        <button v-on:click="scrolltophilosophy()" class="text-sm font-semibold leading-6 text-gray-900">Philosophy</button>
        <button v-on:click="scrolltoprojects()" class="text-sm font-semibold leading-6 text-gray-900">Projects</button>
        <button v-on:click="scrolltocontact()" class="text-sm font-semibold leading-6 text-gray-900">Contact</button>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end"></div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-32 w-auto" src="./assets/logoGianlucaTrasparebte.png" alt="Gianluca Tiengo Web Developer Logo" />
          </a>
          <button type="button" id="close" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-10 w-10 text-black" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <button @click="drawer()" v-on:click="scrolltoskills()" class="block text-3xl font-semibold tracking-tight text-gray-900">Skills</button>
              <button @click="drawer()" v-on:click="scrolltokindof()" class="block text-3xl font-semibold tracking-tight text-gray-900">Kind of</button>
              <button @click="drawer()" v-on:click="scrolltoatwork()" class="block text-3xl font-semibold tracking-tight text-gray-900">At work</button>
              <button @click="drawer()" v-on:click="scrolltophilosophy()" class="block text-3xl font-semibold tracking-tight text-gray-900">Philosophy</button>
              <button @click="drawer()" v-on:click="scrolltoprojects()" class="block text-3xl font-semibold tracking-tight text-gray-900">Projects</button>
              <button @click="drawer()" v-on:click="scrolltocontact()" class="block text-3xl font-semibold tracking-tight text-gray-900">Contact</button>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>



    <router-view/>

        <footer class="relative bg-white pt-24 pb-6">
            <div class="px-4">
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                        <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Want to know more about?</h2>
                        <h3 class="text-3xl font-semibold tracking-tight text-gray-900">
                            Follow me!
                        </h3>
                        <div class="my-6 text-center">
                            <div class="flex space-x-6">
                                <a v-for="item in footerNavigation.social" :key="item.name" :href="item.href" target="_blank" class="bg-white rounded-full p-2 outline-none text-pink-500 hover:text-teal-600">
                                    <span class="sr-only">{{ item.name }}</span>
                                    <component :is="item.icon" class="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="flex flex-wrap items-top mb-6"></div>
                    </div>
                </div>
                <hr class="my-6 border-gray-900" />
                <div class="flex flex-wrap items-center md:justify-between justify-center" >
                    <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div class="text-sm text-gray-900 font-semibold py-1">
                            Copyright © 2024 Gianluca Tiengo.
                        </div>
                    </div>
                </div>
            </div>
        </footer>

</template>
<script>
export default {
  methods: {
    scrolltoskills(){
      const element = document.getElementById('skills');
      element.scrollIntoView({ behavior: 'smooth' });
    },
    scrolltokindof(){
      const element = document.getElementById('kindof');
      element.scrollIntoView({ behavior: 'smooth' });
    },
    scrolltoatwork(){
      const element = document.getElementById('atwork');
      element.scrollIntoView({ behavior: 'smooth' });
    },
    scrolltophilosophy(){
      const element = document.getElementById('philosophy');
      element.scrollIntoView({ behavior: 'smooth' });
    },
    scrolltoprojects(){
      const element = document.getElementById('projects');
      element.scrollIntoView({ behavior: 'smooth' });
    },
    scrolltocontact() {
      const element = document.getElementById('contact');
      element.scrollIntoView({ behavior: 'smooth' });
    },
    drawer() {
      document.getElementById('close').click();
    }
  }

}
</script>

