import Vue from 'vue'
import App from './App.vue'
import store from './store'

import '@babel/polyfill'

import 'mutationobserver-shim';

import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


// Install rules
Object.keys(rules).forEach(rule => {
	extend(rule, rules[rule]);
});

// Install components globally
Vue.use(BootstrapVue);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
