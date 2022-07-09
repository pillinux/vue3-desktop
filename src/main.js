import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/styles/site.css"
//import 'bootstrap/scss/bootstrap.scss'
//import './assets/styles/custom.scss'
// import "bootstrap"

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.component('fa-icon',FontAwesomeIcon)
app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"
