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
                title: "Gianluca Tiengo - Web Developer",
                metaTags: [
                    {
                        name: 'description',
                        content: "Full-stack web developer specializing in Vue.js, Laravel, PHP and modern web technologies. I create fast, responsive and accessible websites for small and medium businesses."
                    },
                    {
                        property: 'og:title',
                        content: "Gianluca Tiengo - Web Developer"
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
                        content: "Full-stack web developer specializing in Vue.js, Laravel, PHP and modern web technologies. I create fast, responsive and accessible websites for small and medium businesses."
                    },
                    {
                        property: 'og:image',
                        content: "https://gianlucatiengo.com/img_new.png"
                    },
                    {
                        name: 'twitter:card',
                        content: 'summary_large_image'
                    },
                    {
                        name: 'twitter:title',
                        content: "Gianluca Tiengo - Web Developer"
                    },
                    {
                        name: 'twitter:description',
                        content: "Full-stack web developer specializing in Vue.js, Laravel, PHP and modern web technologies."
                    },
                    {
                        name: 'twitter:image',
                        content: "https://gianlucatiengo.com/img_new.png"
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
