<template>
  <swiper
    :options="swiperOption3"
    style="min-height:290px; margin-top:2%"
    ref="swiperMaxCard"
  >
    <swiper-slide
      v-for="(item) in newplans" :key="item._id"
      style="text-align: -webkit-center;"
    >  

   <div v-if=" 
          index != $refs.swiperMaxCard.swiper.activeIndex + 1 &&
            !$vuetify.breakpoint.smOnly
        "></div>
<div  v-if="index == $refs.swiperMaxCard.swiper.activeIndex + 1 ||
            $vuetify.breakpoint.smOnly
        "></div>
</swiper-slide>
  </swiper>
  
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import store from '@/store'
  export default {
    name: 'swiper-example-free-mode',
    title: 'Free mode / No fixed positions',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption3: {
         initialSlide: 0,
        freeMode: true,
        slidesPerView: 2,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },

        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          868: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
      }
    },
    computed:{
          newplans(){
      return store.state.newplans
    },
    },
    created () {
    // this.getAllPlans()
    store.dispatch('getNewPlansInfo')

  }
}
  
</script>

<style lang="scss">
.swiper-slide {
 flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
}
.swiper-container .swiper-notification {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}
.swiper-button-next, .swiper-button-prev {
    transition: opacity .3s linear;
}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    left: 10px;
    right: auto;
}
.swiper-button-next, .swiper-button-prev {
    position: absolute;
    top: 50%;
    width: calc(var(--swiper-navigation-size)/ 44 * 27);
    height: var(--swiper-navigation-size);
    margin-top: calc(-1 * var(--swiper-navigation-size)/ 2);
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--swiper-navigation-color,var(--swiper-theme-color));
}
.swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
    content: 'prev';
}
.swiper-button-next:after, .swiper-button-prev:after {
    font-family: swiper-icons;
    font-size: var(--swiper-navigation-size);
    text-transform: none!important;
    letter-spacing: 0;
    text-transform: none;
    font-variant: initial;
    line-height: 1;
}
.swiper-container-pointer-events {
    touch-action: pan-y;
}
</style>

          

