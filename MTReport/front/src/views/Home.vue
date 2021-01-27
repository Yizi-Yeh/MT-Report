<template>
<div>
    <Navbar/>
    <Carousel/>
    <!-- 近期活動 -->
        <section id="section03">
        <div class="container mb-5">
        <h1 class="mb-5">近期活動</h1>
        <div class="row h-100 d-flex flex-row flex-nowrap swiper-wrapper">
        <div id="newplani" class="swiper-slide col-lg-6 d-flex" v-for="(item) in newplanswiper" :key="item._id" >
          <a href="#"  @click.prevent="getNewPlan(item._id)">
        <div class="view mb-3 rounded">
            <img style="height:300px; width:550px;background-size:cover; background-position:center" :src="item.p_id.images[0].imgUrl">
              <div class="text">     
            <h4 class="text-center">{{ item.p_id.title }}</h4>
             <h5 class="text-center">分類：{{ item.p_id.category }}</h5>
            <div  class="text-center">NT{{ item.price | commaFormat | dollarSign }} </div>
               </div>
             </div>
          </a>
        </div>
    </div>
 </div>
    </section>

    <!-- sub-banner -->
   <div class="full-container sub-banner">
      <div class="container">
        <h2 class="banner-title">Welcome to join MT10x10 and follow us!</h2>
        <div class="banner-sub-title">That is the spectacular scenery in Taiwan we want to share with you.</div>
      </div>
    </div>

<!-- 精選行程 -->
      <section id="section03">
        <div class="container">
        <h1 titleclass="mb-5">精選行程</h1>
        <div class="row h-100">
        <div class="col-lg-6 d-flex" v-for="r in recommends" :key="r.id" >
          <a href="#"  @click.prevent="getProduct(r._id)">
        <div class="view mb-3 rounded">
            <img style="height:300px; width:550px;background-size:cover; background-position:center" :src="r.images[0].imgUrl">
              <div class="text">     
            <h4 class="text-center">{{ r.title }}</h4>
              <h5 class="text-center">分類：{{ r.category }}</h5>
            <div  class="text-center">NT{{ r.cost | commaFormat | dollarSign }} </div>
                </div>
              </div>
          </a>
        </div>
    </div>
  </div>
    </section>
<!-- <introswiper/> -->

</div>
</template>

<script>
// import introswiper from '../components/Intro-swiper'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Plans from '../components/pages/plan'
import store from '@/store'
import Axios from 'axios'
// import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  name: 'home',
    components: {
    Navbar,
    Carousel,
    // introswiper,
    // Swiper,
    // SwiperSlide,
    Plans,
  },
  computed:{
    user () {
      return this.store.state.user
    },
    products(){
      return store.state.products
    },
    newplanswiper(){
      return store.state.newplans
    },
    recommends () {
      const products = [...this.products]
      return products.sort(() => Math.random() - 0.5).splice(0, 6)
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
