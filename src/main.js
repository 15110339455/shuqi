import Vue from 'vue'
import MintUI from 'mint-ui'
import router from './router'
import 'mint-ui/lib/style.css'
import App from './App.vue'
// import resource_s from './vue-resource'
// import vue_s from './vue'

Vue.use(MintUI)
// Vue.use(resource_s)
// Vue.use(vue_s)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
