<template>
<div>
  <Navbar/>
<div class="jarallax">
    <div class="preamble" id="zen-preamble" role="article">
        <h3>The Road to Enlightenment</h3>
        <p>
          Littering a dark and dreary road lay the past relics of
          browser-specific tags, incompatible
          <abbr title="Document Object Model">DOM</abbr>s, broken
          <abbr title="Cascading Style Sheets">CSS</abbr> support, and
          abandoned browsers.
        </p>
        <p>
          We must clear the mind of the past. Web enlightenment has been
          achieved thanks to the tireless efforts of folk like the
          <abbr title="World Wide Web Consortium">W3C</abbr>,
          <abbr title="Web Standards Project">WaSP</abbr>, and the major
          browser creators.
        </p>
        <p>
          The CSS Zen Garden invites you to relax and meditate on the
          important lessons of the masters. Begin to see with clarity. Learn
          to use the time-honored techniques in new and invigorating fashion.
          Become one with the web.
        </p>
      </div>
</div>
  </div>
</template>

<script>
import { jarallax, jarallaxVideo } from 'jarallax';
jarallaxVideo();

jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.2,
    videoSrc: 'https://www.youtube.com/watch?v=DYptgVvkVLQ&list=RDQG_YH7jxVy0&index=5'
});
import Navbar from '../Navbar'
import store from '@/store'
export default {
  name: 'Brand',
  components: {
    Navbar,
    },
  data () {
    return {
         
       }
  },
  computed: {
    user () {
      return store.state.user
    },
    products() {
      return store.state.products
    },
    newplanswiper(){
      return store.state.newplans
    },
    Order() {
       return store.getters.orders
    },
  },
    methods: {


    },
   created() {

    }
}
</script>

<style>
</style>