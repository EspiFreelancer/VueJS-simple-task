import Vue from 'vue'
import App from './App.vue'
import store from './store'

import '@babel/polyfill'

import 'mutationobserver-shim';

import * as VeeValidate from 'vee-validate';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Install components globally
Vue.use(BootstrapVue);
Vue.use(VeeValidate);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
