import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false
import store from './store'
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
