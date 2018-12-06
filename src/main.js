import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Toasted from 'vue-toasted'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faArrowLeft, faArrowRight, faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons'


// library.add(faArrowLeft)
// library.add(faArrowRight)
library.add(faAngleRight)
library.add(faAngleLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Toasted)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
