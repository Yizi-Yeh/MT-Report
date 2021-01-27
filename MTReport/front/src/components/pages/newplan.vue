<template>
<div>
    <Navbar/>
<div class="container d-flex flex-column">
  <div class="row mt-5 d-flex">
  <div>
    <div class="container main-content mb-3">
      <div class="row">
        <div class="col-2">
          <!-- 選單 (List group) -->
          <div class="list-group sticky-top">
            <a class="list-group-item list-group-item-action"
              href="#" @click.prevent="searchText = item"
              :class="{ 'active': item === searchText}"
              v-for="item in categories" :key="item">
              <i class="fad fa-mountain"></i>
              {{ item }}
            </a>
            <a href="#" class="list-group-item list-group-item-action"
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
      :style="{backgroundImage:`url(${item.p_id.images[0].imgUrl})`}"
      > 
    </div>
    <div class="card-body d-flex flex-column text-left">
      <span class="card-title">
        <span href="#" class="text-dark ">{{ item.p_id.title }}</span>
      </span>
      <h5>
      <span class="badge badge-secondary"> {{ item.p_id.category }}</span>
      </h5>
      <h5>
      <span class="badge badge-secondary" v-if="item.is_closed">報名狀態：額滿</span>
      <span class="badge badge-secondary" v-else>報名狀態：招募中</span>
      </h5>
      <h5>
      <span class="badge badge-secondary">活動日期：{{ item.date }}</span>
      </h5>  
      <h5>
      <span class="badge badge-secondary"> NT{{ item.price | commaFormat | dollarSign }} </span>
      </h5>
    </div>
    <div class="card-footer d-flex">
      <button @click="getNewPlan(item._id)" type="button" class="btn btn-outline-secondary btn-sm ml-auto">
        <i class="fas fa-search"></i>
        詳細資訊
      </button>
      <button @click="createOrders(item._id)" type="button" class="btn btn-outline-primary btn-sm ml-auto">
              <i class="fas fa-search"></i>
               加入我們
             </button>
    </div>
  </div>
              </div>
            </div>
          </div>
          <div class="d-flex mb-4">
            <!-- 搜尋列 -->
            <form class="form-inline my-3 my-lg-0">
              <div class="input-group">
                <input class="form-control d-none" type="text" v-model="searchText"
                  placeholder="Search" aria-label="Search">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary d-none" type="button"
                    @click="searchText = ''">
                    <i class="fa fa-times"></i>
                  </button>
                </div>
              </div>
            </form>
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
import store from '@/store'

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
    newplans:[],
    plan:{},
    orders:[],
    } 
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    filterData() {
      const vm = this;
      if (vm.searchText) {
        return vm.newplans.filter((item) => {
          const data = item.p_id.category.toLowerCase().includes(vm.searchText.toLowerCase());
          return data;
        });
      }
      return this.newplans;
    }, 

    products() {
      return this.$store.state.products; 
    },

  },
    methods: {
      
      // 取得所有開團資料
        getNewPlans() {
        const api = `${process.env.VUE_APP_API}`+ '/newplans'
        const vm = this;
        Axios.get(api).then((response) => {
        // console.log(response.data)
        vm.newplans = response.data.result
        vm.getUnique()    
        })
        },

        // 取得個別開團資料
        getNewPlan(id) {
        const api = `${process.env.VUE_APP_API}`+ '/newplans/' + `${id}`
        const vm = this;
        Axios.get(api).then((response) => {
        vm.newplans = response.data.result
        if(response.data.success){
            console.log(response.data)
            vm.$router.push('newplan/'+`${id}`)
          }        
        })
        },

        // 篩選資料
        getUnique() {
      const vm = this;
      const categories = new Set();
      vm.newplans.forEach((item) => {
        categories.add(item.p_id.category);
      });
      vm.categories = Array.from(categories);
    },

        // 建立訂單
      createOrders (id) {  
        const api = `${process.env.VUE_APP_API}`+ '/users/order/'+ `${this.user.id}`
        console.log(api)
        Axios.post(api,{p_id:id}).then((response) => {
          if(response.data.succuss){
            this.order = response.data.result
        console.log(this.order)
          // this.$router.push('/order/'+`${id}`)
          } 
        })
      }

    },
    created() {
      this.getNewPlans()
      this.getNewPlan()
      this.createOrders();
    },
}
</script>
