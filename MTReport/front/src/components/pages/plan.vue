<template>
<div>
    <Navbar/>
    <!-- <Category/> -->
    <div class="container d-flex flex-column">
  <div class="row mt-5 d-flex">
<div class="col-lg-4 mb-5"  v-for="item in plans" :key="item._id" >
  <div class="card border-0 shadow-sm ml-2">
    <div style="height:300px; background-size:cover; background-position:center"
      :style="{backgroundImage:`url(${item.images[0].imgUrl})`}"
      > 
    </div>
    <div class="card-body d-flex flex-column text-left">
      <span class="card-title">
        <span href="#" class="text-dark ">{{ item.title }}</span>
      </span>

      <h5>
      <span class="badge badge-secondary"> {{ item.category }}</span>
      </h5>
      <h5>
      <span class="badge badge-secondary"> NT{{ item.cost | commaFormat | dollarSign }} </span>
      </h5>
    </div>
    <div class="card-footer d-flex">
      <button @click="getProduct(item._id)" type="button" class="btn btn-outline-secondary btn-sm">
       <i class="fas fa-search"></i>
        詳細資訊
      </button>
    </div>
  </div>
</div>
</div>
</div>
</div>
</template>

<script>
import Vue from 'vue'
import Navbar from '../Navbar'
import Category from '../Categoty'

Vue.filter('dollarSign', function (n) {
return `$ ${n}`
})

Vue.filter('commaFormat', (value) => {
  if (!value) return ''
  return value.toString().replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/, function (all, pre, digital) {
    return pre + digital.replace(/\d{3}/g, ',$&')
  })
})

export default {
  name: 'Plan',
  components: {
    Navbar,
    Category
    },
  data () {
    return {
    plans:[],
    plan:{}
    } 
  },
    methods: {
        getProducts() {
        const api = `${process.env.VUE_APP_API}`+ '/products'
        const vm = this;
        this.$http.get(api).then((response) => {
        // console.log(response.data)
        vm.plans = response.data.result
        })
        },
        getProduct(id) {
        const api = `${process.env.VUE_APP_API}`+ '/products/' + `${id}`
        const vm = this;
        vm.$http.get(api).then((response) => {
        vm.plan = response.data.result
        if(response.data.success){
            vm.$router.push('itemPlan/'+`${id}`)
          }        
        })
        },
    },
    created() {
      this.getProducts()
      this.getProduct();
    },
}
</script>
