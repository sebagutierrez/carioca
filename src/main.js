import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// fontawesome setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPause, faPlay, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPause, faPlay, faCheck);

Vue.component('font-awesome-icon', FontAwesomeIcon);

// tailwind css file
import '@/assets/css/main.css'

Vue.config.productionTip = false

Vue.filter('formatTime', function (value) {
    return(value-(value%=60))/60+(9<value?':':':0')+value;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
