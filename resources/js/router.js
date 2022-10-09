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
            path: '/', component: HomePage, name: 'home'
        },
        {
            path: '/about', component: AboutUsPage, name: 'about'
        },
        {
            path: '/contacts', component: ContactsPage, name: 'contacts'
        },
        {
            path: '*', component: NotFoundPage, name: 'not_found'
        },
     
    ]
})

export default router;