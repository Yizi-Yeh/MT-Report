import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import 'bootstrap';

axios.defaults.withCredentials = true
import App from './App';
import router from './router';
import store from './store'

Vue.config.productionTip = false
Vue.use(VueAxios, axios);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
