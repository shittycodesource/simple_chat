import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'date-fns';

import textareaDirective from './directives/textarea.directive'
import dateFilter from './filters/date.filter.js'

Vue.directive('textarea', textareaDirective);
Vue.filter('date', dateFilter);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
