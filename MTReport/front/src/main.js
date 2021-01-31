import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'bootstrap';
import"../node_modules/bootswatch/dist/lux/bootstrap.min.css"
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate';
import TW from 'vee-validate/dist/locale/zh_TW.json'
import * as rules from 'vee-validate/dist/rules';
import VueI18n from 'vue-i18n';
import App from './App';
import router from './router';
import store from './store'
import { jarallax, jarallaxVideo } from 'jarallax';
jarallaxVideo();

jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.2,
    videoSrc: 'https://www.youtube.com/watch?v=ab0TSkLe-E0'
});

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2)
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(VueI18n);
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

const i18n = new VueI18n({
  locale: 'zhTW'
});


localize('zh_TW', TW);
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
});



new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
