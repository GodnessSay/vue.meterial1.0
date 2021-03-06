
import Vue from 'vue'

import App from './app.vue'

import { router } from './config'

import { sync } from 'vuex-router-sync'

import 'material-design-icons/iconfont/material-icons.css'

import store from './store'

sync(store, router)

const root = document.createElement('div');

document.body.appendChild(root);

document.addEventListener('DOMContentLoaded', () => {
    const app = new Vue({
        name: 'SkyCloud',
        router,
        store,
        render: mount => mount(App),
        data: {
            eventHub: new Vue()
        }
    })

    router.onReady(() => {
        app.$mount(root)
    })
})