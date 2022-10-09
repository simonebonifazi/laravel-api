import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '.components/pages/HomePage.vue';
import AboutUsPage from '.components/pages/AboutUsPage.vue';
import ContactsPage from '.components/pages/ContactsPage.vue';


Vue.use(VueRouter)

const routes = new VueRouter({
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
     
    ]
})