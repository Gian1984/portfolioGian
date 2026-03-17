import { createRouter, createWebHistory } from 'vue-router'
import Home from "./views/Home.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: "Gianluca Tiengo — Freelance Full-Stack Web Developer | Vue.js & Laravel",
                metaTags: [
                    {
                        name: 'description',
                        content: "Freelance full-stack web developer in Belgium. I build fast, responsive websites and web apps with Vue.js, Laravel and PHP for businesses that want results."
                    },
                    {
                        property: 'og:title',
                        content: "Gianluca Tiengo — Freelance Full-Stack Web Developer | Vue.js & Laravel"
                    },
                    {
                        property: 'og:url',
                        content: "https://gianlucatiengo.com/"
                    },
                    {
                        property: 'og:type',
                        content: "website"
                    },
                    {
                        property: 'og:description',
                        content: "Freelance full-stack web developer in Belgium. I build fast, responsive websites and web apps with Vue.js, Laravel and PHP for businesses that want results."
                    },
                    {
                        property: 'og:image',
                        content: "https://gianlucatiengo.com/img/OG.png"
                    },
                    {
                        name: 'twitter:card',
                        content: 'summary_large_image'
                    },
                    {
                        name: 'twitter:title',
                        content: "Gianluca Tiengo — Freelance Full-Stack Web Developer | Vue.js & Laravel"
                    },
                    {
                        name: 'twitter:description',
                        content: "Freelance full-stack web developer in Belgium. I build fast, responsive websites and web apps with Vue.js, Laravel and PHP for businesses that want results."
                    },
                    {
                        name: 'twitter:image',
                        content: "https://gianlucatiengo.com/img/OG.png"
                    }
                ]
            }
        },
    ],
})

export default router

router.beforeEach((to, from, next) => {

    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    if(nearestWithTitle) {
        document.title = nearestWithTitle.meta.title;
    } else if(previousNearestWithMeta) {
        document.title = previousNearestWithMeta.meta.title;
    }

    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    if(!nearestWithMeta) return next();

    nearestWithMeta.meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta');

        Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, tagDef[key]);
        });

        tag.setAttribute('data-vue-router-controlled', '');

        return tag;
    })
        .forEach(tag => document.head.appendChild(tag));

    next();
});
