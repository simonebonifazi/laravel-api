import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './components/pages/HomePage.vue';
import AboutUsPage from './components/pages/AboutUsPage.vue';
import ContactsPage from './components/pages/ContactsPage.vue';
import NotFoundPage from './components/pages/NotFoundPage.vue';


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', component: HomePage
        },
        {
            path: '/about', component: AboutUsPage
        },
        {
            path: '/contacts', component: ContactsPage
        },
        {
            path: '*', component: NotFoundPage
        },
     
    ]
})

export default router;