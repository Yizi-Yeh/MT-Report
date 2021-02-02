<template>
<div>
  <Navbar/>
<!-- <div class="container mt-5">
  <div class="row mt-5">
   <div class="col-8 mt-5">
<div class="lr padding-lr">
      <div class="col-8 mx-auto">
         <img src="https://mt10x10.files.wordpress.com/2020/07/cropped-e7b6b2e7ab99e6a899e9a18c-e6a899e8aa8c-4.jpg"ç>
      <span class="sub-txt txtCenter">心電圖結合山的意象<br>
        象徵著人與山林的和諧<br class="hp_brPc">山林帶給我們一股最原始的悸動
        <br class="hp_brPc">在山裡找到自己不再迷惘，<br>彷彿重獲新生。</span>
   </div>
    </div>
  </div>
  </div>
  </div> -->
  <mdb-container>
    <mdb-carousel :interval="8000" :items="videoCarousel" indicators controlls></mdb-carousel>
  </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbCarousel } from 'mdbvue';
import { jarallax, jarallaxVideo } from 'jarallax';
jarallaxVideo();
jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.2,
    videoSrc: '.../assets/DJI_0269.MP4'
});
import Navbar from '../Navbar'
import store from '@/store'
export default {
  name: 'Brand',
  components: {
    mdbContainer,
    mdbCarousel,
    Navbar,
    },
  data () {
    return {
       videoCarousel: [
        {
          video: true,
          src: "https://mdbootstrap.com/img/video/Nature-Sunset.mp4",
          loop: true,
          auto: true,
          muted: true,
          mask: 'black-strong',
          caption: {
            title: 'Strong mask'
          }
        },
        {
          video: true,
          src: "https://mdbootstrap.com/img/video/Nature-Sunset.mp4",
          loop: true,
          auto: true,
          muted: true,
          mask: 'black-strong',
          caption: {
            title: 'Strong mask'
          }
        },
        {
          video: true,
          src: "https://mdbootstrap.com/img/video/Nature-Sunset.mp4",
          loop: true,
          auto: true,
          muted: true,
          mask: 'black-strong',
          caption: {
            title: 'Strong mask'
          }
        }
        
      ]
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