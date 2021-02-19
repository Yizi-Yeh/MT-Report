<template>
<div>
    <Navbar/>
<div class="container d-flex flex-column">
  <div class="row mt-5 d-flex">
    
  <div>
    <div class="container main-content mb-3">
       <div class="row">
       <div class="col-12 concept">
         <p class="concept-title">近期開團</p>
       </div>
     </div>
      <div class="row">
        <div class="col-2">
          <!-- 選單 (List group) -->
          <div class="list-group sticky-top">
            <a class="list-group-item list-group-item-action  rounded-top"
              href="#" @click.prevent="searchText = item"
              :class="{ 'active': item === searchText}"
              v-for="item in categories" :key="item">
              <i class="fad fa-mountain"></i>
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
              <div class="col-6 mb-4" v-for="(item) in filterData" :key="item._id">
                  <div class="card border-0 shadow-sm ml-2">
    <div style="height:300px; background-size:cover; background-position:center"
      :style="{backgroundImage:`url(${item.p_id.images[0].imgUrl})`}"
      > 
    </div>
    <div class="card-body">
      <span class="card-title">
        <span href="#">{{ item.p_id.title }}</span>
      </span>
      <h5>
      <span class="card-txt "> 分類：{{ item.p_id.category }}</span>
      </h5>
      <h5>
      <span class="card-txt " v-if="item.is_closed">報名狀態：額滿</span>
      <span class="card-txt card-status" v-else>報名狀態：招募中</span>
      </h5>
      <h5>
      <span class="card-txt badge">活動日期：{{ item.date }}</span>
      </h5>  
      <h5>
      <span class="card-txt badge">費用： NT{{ item.price | commaFormat | dollarSign }} </span>
      </h5>
    </div>
    <div class="card-footer">
      <button @click="getNewPlan(item._id)" type="button" class="btn btn-outline-secondary btn-sm rounded">
        <i class="fas fa-search"></i>
        詳細資訊
      </button>
      <button @click="addCart(item._id)" type="button" class="btn btn-outline-secondary btn-sm rounded ">
              <i class="fas fa-user-plus"></i>
             我要報名
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
  name: 'NewPlan',
  components: {
    Navbar,
    },
  data () {
    return {
    searchText: '',
    categories: [],
    newplans:[],
    plan:{},
    } 
  },
  computed: {
    user () {
      return store.state.user
    },
    products() {
      return store.state.products; 
    },
    Order() {
       return store.getters.orders
    },
    newplanswiper(){
      return store.state.newplans
    },
    // 開團陣列解構
    getnewplansId() {
      const newplanswiper = [...this.newplanswiper]
      const plansId = newplanswiper.map(item => {
      return {p_id: item}
      })
      return  plansId
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
        const api = `${process.env.VUE_APP_API}`+ '/newplans/' + id
        const vm = this;
        Axios.get(api).then((response) => {
        vm.newplans = response.data.result
        if(response.data.success){
            console.log(response.data)
            vm.$router.push('newplan/'+id)
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
      // 丟入訂單id
      //   removeOrders (id) {  
      //   const api = `${process.env.VUE_APP_API}`+ '/users/order/'+ `${this.user.id}`
      //   Axios.delete(api).then((response) => {
      //   const index = this.Order.findIndex( orders => {
      //   return orders._id === id 
      //     }) 
      //     store.commit('delCart',index)
      //     console.log('已刪除項目', response.data.result.order[0])
      //   }
      //   )
      // },
        // 丟入item_id (開團id)
      // createOrders (id) {  
      //   const api = `${process.env.VUE_APP_API}`+ '/users/order/'+ `${this.user.id}`
      //   Axios.post(api,{p_id:id}).then((response) => {
      //       if(response.data.success){
      //       store.commit('addCart',id)
      //       console.log('已加入項目', response.data.result.order[0]);
      //     } 
      //   })
      // },
        createOrders (Order) {
        const api = `${process.env.VUE_APP_API}`+ '/users/order/'+ `${this.user.id}`
        Axios.patch(api,Order).then((response) => {
            if(response.data.success){
            console.log('已建立訂單', response.data.result);
          } 
        })
      },

    addCart (id) {
       if(id){
        store.commit('addCart', id)
        this.$router.push('/order/'+ id)
         } 
    },
    delCart (index) {
        store.commit('delCart', index)
     
    },
      // 取得訂單
    getOrders() {  
        const api = `${process.env.VUE_APP_API}`+ '/users/order/'+ `${this.user.id}`
        Axios.get(api).then((response) => {
          if(response.data.success){
          // store.commit('getOrdersInfo', response.data.result)
          console.log('已取得訂單資料', response.data.result);
          } 
        })
      },


    },
    created() {
      this.getNewPlans()
      store.dispatch('getProductsInfo')
      store.dispatch('getNewPlansInfo')
    },
}
</script>


