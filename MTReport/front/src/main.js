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
import VueAwesomeSwiper from 'vue-awesome-swiper'
import swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
import Introswiper from './components/pages/swiper'
import './assets/scss/main.scss';
import VueAnimateOnScroll from 'vue-animate-onscroll'
import VideoBackground from 'vue-responsive-video-background-player'
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";


//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
gsap.registerPlugin(PixiPlugin, MotionPathPlugin);







Vue.config.productionTip = false

axios.defaults.withCredentials = true

Vue.use(VueAxios, axios); 
Vue.use(VueSweetalert2)
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(VueI18n);
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.component('Introswiper', Introswiper)
swiper.use([Navigation, Pagination, Autoplay])
Vue.use(VueAnimateOnScroll)
Vue.component('video-background', VideoBackground);


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
