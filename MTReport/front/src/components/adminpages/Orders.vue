<template>
<div>
<div class="text-right mt-4">
    <table class="table mt-4 table-sm">
      <thead>
        <tr class="text-center">
          <th>會員帳號</th>
          <th>訂單編號</th>
          <th>訂單日期</th>
          <th>活動名稱</th>
          <th>活動日期</th>
          <td>活動金額</td>
        </tr>
      </thead>
      <tbody  class="text-center">
        <tr v-for="item in this.OrderLists" :key="item._id" >
           <td>{{ item.account }}</td>
           <td>
             <div v-for="(value) in item.order" :key="value._id">
               <div class="index-box">
                {{value._id}} 
              </div>
            </div>  

            <td>
             <div v-for="value in item.order" :key="value._id" class="d-felx flex-column flex-wrap" >
	            {{value.orderDate}} 
            </div> 
		    		</td>

            <td>
              <div v-for="value in item.order" :key="value._id" class="d-felx flex-column flex-wrap" >
	               {{value.p_id.p_id.title}} 
              </div> 
            </td>	

            <td>
              <div v-for="value in item.order" :key="value._id" class="d-felx flex-column flex-wrap" >
	               {{value.p_id.date}}
              </div> 
            </td>

            <td>
              <div v-for="value in item.order" :key="value._id" class="d-felx flex-column flex-wrap" >
	               {{value.p_id.price}}
              </div> 
            </td>
        </tr>
      </tbody>
    </table>
 </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Axios from 'axios'
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
  data () {
    return {
      orderConfirm:{
        order:[{
          orderDate:'',
          p_id:{
          p_id:{title:''}
        }
        }]
      },
      userConfirm:[{
      }],
      index:0,
      totalOrder:[],
    }
  },
  computed: {
    user () {
      return store.state.user
    },
    products() {
      return store.state.products; 
    },
    newplanswiper(){
      return store.state.newplans
    },
    OrderLists() {
    return store.state.currentOrder; 
      },     
    OrderDetails() {
    return store.state.currentOrderDetails; 
  }, 
  },
    methods: {
        getOrder() {
        const api = `${process.env.VUE_APP_API}`+ '/users/order'
        Axios.get(api).then((response) => {
        if(response.data.success){
        this.orderConfirm = response.data.result
            this.getOrderList()
          }console.log('已取得訂單資料',response.data.result)
        })
        },
        // 取得報名資料
        getOrderUserDetails() {
        const api = `${process.env.VUE_APP_API}`+ '/userdetails'
        Axios.get(api).then((response) => {
        if(response.data.success){
        this.userConfirm = response.data.result
          
          }console.log('已取得報名資料',response.data)
        })
        },
        getOrderList(){
          const orderList = new Set()
          this.OrderLists.forEach((item) => { orderList.add(item.order);
          })
         this.totalOrder = Array.from(orderList).flat(Infinity) 
        },
    },
    created() {
      this.getOrder() 
      this.getOrderUserDetails()
       store.dispatch('getOrders')
       store.dispatch('getOrderUserDetails')
    }
}
</script>
