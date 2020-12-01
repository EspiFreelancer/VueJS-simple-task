import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import * as VeeValidate from 'vee-validate'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VeeValidate)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
