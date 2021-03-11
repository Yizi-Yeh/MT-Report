<template>
<div>
    <Navbar/>
      <Carousel/>
      
        <!-- 近期開團 -->
        <section id="section02">
          <div class="container">
           <p class="act-title mx-auto">近期開團</p>
              <div class="row h-100 d-flex flex-lg-row">
              <div  data-bottom-top="transform: translateY(-100px); opacity: 0" data-center="transform: translateY(0px); opacity: 1" class="swiper-slide col-lg-4 col-md-10 col-sm-12 d-flex flex-lg-row" v-for="(item) in newplanswipersort" :key="item._id" >
            <a href="#"  @click.prevent="getNewPlan(item._id)">      
              <div class="mb-1 rounded ">
            <img  class="act-img  rounded" :src="item.p_id.images[0].imgUrl">
              <div class="text mt-2">
                <p class="list_category"></p>   
            <h5 class="act-text">{{ item.p_id.title }}</h5>
            <h5 class="act-text">活動日期：{{ item.date }}</h5>
             <p class="act-text-category rounded">分類：{{ item.p_id.category }}</p>
            <!-- <h5  class="act-text">NT{{ item.price | commaFormat | dollarSign }} </h5> -->
               </div>
             </div>
          </a>
        </div>
    </div>
 </div>
           <div class="btn-wrap">
              <a class="btn-view btn-outline-info rounded btn-sm">
               <router-link  to="/newplan">查看更多</router-link></a>
          </div>
    </section>

    <section id="section03" >
   <div class="container-full  container-banner">
      <div class="container">
        <h2 class="container-banner-title">Welcome to join MT10x10 and<br> follow us!</h2>
        <div class="container-banner-sub-title">|登山⛰|露營⛺️|健行🥾|戶外探索🗻｜</div>
      </div>
    </div>
    </section>


  <section id="section04">
    <div v-animate-onscroll="{down: 'animated zoomIn 5s', up: 'animated zoomIn 5s' }">
    <div class="container-intro">
        <h5 class="container-intro-title">MT10x10登山社<br><span class="container-intro-subtitle">HIKING CLUB</span></h5>
    <div class="col-12 col-md-10 mx-auto">
       <span class="container-intro-sub-txt">MT10x10（山來水去企業社）<br>
        象徵著台灣最具代表性的一百座山岳，也表達我們對台灣山林的敬愛之情。<br>我們是由熱血的年輕人所創建的登山社，
        <br class="container-intro-sub-txt">用10分熱情與10分愛山林的心，和山友們一步步一同完成百岳，<br>帶領更多人瞭解台灣的美。 <br><br>然而，一提到日本就想到莊嚴的富士山；<br>尼泊爾有崇高的聖母峰；瑞士有秀麗的阿爾卑斯山；<br>我們希望拓展台灣山域風景知名度，讓世界一提到台灣就想到有壯闊的玉山。<br><br>MT10x10登山社（山來水去企業社）歡迎您</span>
   </div>
    </div>
    </div>
               <div class="btn-wrap">
              <a class="btn-view btn-outline-info rounded btn-sm">
               <router-link to="/brand">關於MT</router-link></a>
          </div>
  </section>
    <br>


      <section id="section05">
        <div class="container">
       <h1 class="act-title mx-auto">活動相片</h1>
        <div class="row h-100 rounded">
           <swiper :options="swiperOption">
          <swiper-slide
         class="col-lg-4 col-md-6  d-flex"  v-for="r in recommends" :key="r.id" >
          <a href="#"  @click.prevent="getProduct(r._id)">
        <div class="act-img">
            <img class="rounded" style="height:250px;background-size:cover; background-position:center" :src="r.images[0].imgUrl">
              <div class="text">     
            <h2 class="act-text-bt mt-3 mb-5">{{ r.title }}</h2>
              <!-- <span class="act-text">分類：{{ r.category }}</span>
            <div  class="act-text">NT{{ r.cost | commaFormat | dollarSign }} </div> -->
                </div>
              </div>
          </a> 
         </swiper-slide>
        <div class="swiper-pagination " slot="pagination"></div> 
           </swiper>
         </div>
         </div>
    </section>
<Footer/>

</div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Plans from '../components/pages/plan'
import store from '@/store'
import Axios from 'axios'
import 'swiper/swiper-bundle.css' // require styles
import { swiper, swiperSlide } from "vue-awesome-swiper";
require(['skrollr'], function(skrollr){
    const s = skrollr.init();
});

export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 5,
        speed: 600, 
        autoplay:{
          delay: 2000,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          576: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween:10
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }
      },
    }
  },
  name: 'home',
    components: {
    swiper,
    swiperSlide,
    Navbar,
    Footer,
    Carousel,
    Plans,
  },
  computed:{
    user () {
      return store.state.user
    },
    products(){
      return store.state.products
    },
    newplanswiper(){
      return store.state.newplans
    },
    newplanswipersort(){
     const newplan = [...this.newplanswiper]
      return newplan.slice(0,3)
    },
    recommends () {
      const products = [...this.products]
      return products.sort(() => Math.random() - 0.5).splice(0,8)
    },
    
  },
  methods: {
    getProduct(id) {
      const api = `${process.env.VUE_APP_API}`+ '/products/'  
        const vm = this;
        Axios.get(api).then((response) => {
        vm.plan = response.data.result
        if(response.data.success){
        vm.$router.push('itemPlan/'+id)

          }         
        })
    },
        getNewPlans() {
        const api = `${process.env.VUE_APP_API}`+ '/newplans'
        const vm = this;
        Axios.get(api).then((response) => {
        // console.log(response.data)
        vm.newplans = response.data.result
        console.log(vm.newplans)
        })
        },
        getNewPlan(id) {
        const api = `${process.env.VUE_APP_API}`+ '/newplans/' + id
        const vm = this;
        Axios.get(api).then((response) => {
        vm.newplans = response.data.result
        if(response.data.success){
            console.log(response.data)
            vm.$router.push('newplan/'+`${id}`)
          }        
        })
        },
  },
mounted () {
    // this.getAllPlans()
    store.dispatch('getProductsInfo')
    store.dispatch('getNewPlansInfo')
    // this.getProduct();
    this.getNewPlans()  
  },
  
}
</script>

