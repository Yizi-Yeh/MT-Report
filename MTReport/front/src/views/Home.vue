<template>
<div>
    <Navbar/>
    <Carousel/>
      <section id="section03">
        <div class="container">
        <h1 class="mb-5">精選行程</h1>
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

   <div class="full-container sub-banner">
      <div class="container">
        <h2 class="banner-title">Welcome to join MT10x10 and follow us!</h2>
        <div class="banner-sub-title">That is the spectacular scenery in Taiwan we want to share with you.</div>
      </div>
    </div>


</div>

</template>

<script>
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Plans from '../components/pages/plan'
import store from '@/store'

export default {
  name: 'home',
  components: {
    Navbar,
    Carousel,
    Plans
  },
  computed:{
     user () {
      return this.$store.state.user
    },
    products(){
      return $store.state.products
    },
     recommends () {
      const products = [...this.products]
      return products.sort(() => Math.random() - 0.5).splice(0, 6)
    },
  },
  methods: {
    getProduct(id) {
      const api = `${process.env.VUE_APP_API}`+ '/products/' + `${id}`
        const vm = this;
        vm.$http.get(api).then((response) => {
        vm.plan = response.data.result
        if(response.data.success){
        vm.$router.push('itemPlan/'+`${id}`)
          }            console.log(this.$router.params.id)
        })
    }
  },
created () {
    // this.getAllPlans()
    store.dispatch('getProductsInfo')
    this.getProduct();
  }
}
</script>
