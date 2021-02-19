<template>
<div>
    <Navbar/>
    
<div class="container d-flex flex-column">
  <div class="row mt-5 d-flex">
  <div>
    <div class="container main-content mb-3">
      <div class="row">
       <div class="col-12 concept">
         <p class="concept-title">所有行程</p>
       </div>
     </div>
      <div class="row">
        <div class="col-2">

          <!-- 選單 (List group) -->
          <div class="d-flex mb-4">
            <!-- 搜尋列 -->
            <!-- <form class="form-inline my-3 my-lg-0">
              <div class="input-group">
                <input class="form-control" type="text" v-model="searchText"
                  placeholder="Search" aria-label="Search">
                <div class="input-group-append">
                </div>
              </div>
            </form> -->
          </div>
          <div class="list-group sticky-top ">
            <a class="list-group-item list-group-item-action rounded-top"
              href="#" @click.prevent="searchText = item"
              :class="{ 'active': item === searchText}"
              v-for="item in categories" :key="item">
              {{ item }}
            </a>
            <a href="#" class="list-group-item rounded-bottom list-group-item-action"
              @click.prevent="searchText = ''"
              :class="{ 'active': searchText === ''}">
              全部行程
            </a>
          </div>


        </div>
        <div class="col-10">
          <div class="tab-pane">
            <div class="row align-items-stretch">
              <div class="col-6 mb-4" v-for="(item) in filterData" :key="item.id">
                  <div class="card border-0 shadow-sm ml-2">
    <div style="height:300px; background-size:cover; background-position:center"
      :style="{backgroundImage:`url(${item.images[0].imgUrl})`}"
      > 
    </div>
    <div class="card-body">
      <h5 class="card-title">
        <span href="#">{{ item.title }}</span>
      </h5>
      <span class="card-txt">分類：{{ item.category }}</span>
      <br>
      <span class="card-txt">費用： NT{{ item.cost | commaFormat | dollarSign }} </span>
    </div>
    <div class="card-foot">
      <button @click="getProduct(item._id)" type="button" class="rounded btn btn-outline-secondary btn-md">
        詳細資訊
      </button>
    </div>
  </div>
              </div>
            </div>
          </div>

            </div>
          </div>
        </div>
      </div>
</div>
</div>

</div>
</template>

<script>
import Vue from 'vue'
import Axios from 'axios'
import Navbar from '../Navbar'

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
    },
  data () {
    return {
    searchText: '',
    categories: [],
    plans:[],
    plan:{}
    } 
  },
  computed: {
      filterData() {
      const vm = this;
      if (vm.searchText) {
        return vm.plans.filter((item) => {
          const data = item.category.toLowerCase().includes(vm.searchText.toLowerCase());
          return data;
        });
      }
      return this.plans;
    },
      products() {
      return this.$store.state.products; 
    },
    get() {
      return this.$store.state.keywords;
    },
    set(value) {
      this.$store.commit('setKeywords', value)
    }

  },
    methods: {
        getProducts() {
        const api = `${process.env.VUE_APP_API}`+ '/products'
        const vm = this;
        Axios.get(api).then((response) => {
        // console.log(response.data)
        vm.plans = response.data.result
        vm.getUnique()    
        })
        },

        getUnique() {
         const vm = this;
          const categories = new Set();
          vm.plans.forEach((item) => {
        categories.add(item.category);
      });
      vm.categories = Array.from(categories);
    },
        
        getProduct(id) {
        const api = `${process.env.VUE_APP_API}`+ '/products/' + `${id}`
        const vm = this;
        Axios.get(api).then((response) => {
        vm.plan = response.data.result
        if(response.data.success){
            vm.$router.push('itemPlan/'+`${id}`)
          }        
        })
        },
    },
    created() {
      this.getProducts()
     
    },
}
</script>
