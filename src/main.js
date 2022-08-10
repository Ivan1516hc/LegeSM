import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import intanceAxio from './plugins/axios'
require('./plugins')

// const baseurl='http://localhost:3000/api' 

// Axios.defaults.baseURL=baseurl


Vue.prototype.$http = intanceAxio

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
