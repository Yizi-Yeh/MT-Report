<template>
<div>
    <Navbar/>
    <Carousel/>
    <!-- 近期活動 -->
        <transition name="slide-left">
        <section id="section03">
        <div class="container">
        <h1 class="mb-5">近期活動</h1>
        <div class="row h-100">
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
</transition>
    <!-- sub-banner -->
   <div class="full-container sub-banner">
      <div class="container">
        <h2 class="banner-title mt-2">Welcome to join MT10x10 and follow us!</h2>
        <div class="banner-sub-title mt-3">That is the spectacular scenery in Taiwan we want to share with you.</div>
      </div>
    </div>

<!-- 精選行程 -->
      <section id="section03">
        <div class="container mb-5">
        <h1 titleclass="mb-5">精選行程</h1>
        <div class="row h-100">
        <div class="col-lg-4 d-flex" v-for="r in recommends" :key="r.id" >
          <a href="#"  @click.prevent="getProduct(r._id)">
        <div class="view mb-3 rounded">
            <img style="height:250px;background-size:cover; background-position:center" :src="r.images[0].imgUrl">
              <div class="text">     
            <span class="text-center">{{ r.title }}</span>
              <span class="text-center">分類：{{ r.category }}</span>
            <div  class="text-center">NT{{ r.cost | commaFormat | dollarSign }} </div>
                </div>
              </div>
          </a>
        </div>
    </div>
  </div>
    </section>

<section id="section03">
        <div class="container d-flex flex-">
        <div class="row ">
          <div class="col-8">
             <h1 class="mb-3 text-center">MT10x10登山社</h1>
          <h2 class="text-center mb-3">展現渴望自由的你</h2>
          <h3 class="text-center mb-3">Show your craving for freedom.</h3>
          </div>
          <div class="col-12">
          <h5 class="text-center">MT10x10（山來水去企業社）象徵著台灣最具代表性的一百座山岳，也表達我們對台灣山林的敬愛之情。   我們是由熱血的年輕人所創建的登山社，用10分熱情與10分愛山林的心，和山友們一步步一同完成百岳，帶領更多人瞭解台灣的美。    然而，一提到日本就想到莊嚴的富士山；尼泊爾有崇高的聖母峰；瑞士有秀麗的阿爾卑斯山，我們希望拓展台灣山域風景知名度，讓世界一提到台灣就想到有壯闊的玉山。 MT10x10登山社（山來水去企業社）歡迎您</h5>
          </div>

    </div>
  </div>
    </section>


</div>
</template>

<script>
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Plans from '../components/pages/plan'
import store from '@/store'
import Axios from 'axios'


export default {
  name: 'home',
    components: {
    Navbar,
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
    recommends () {
      const products = [...this.products]
      return products.sort(() => Math.random() - 0.5).splice(0, 3)
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
