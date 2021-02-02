<template>
<div>
<div class="text-right mt-4">
    </div>
    <table class="table mt-4">
      <thead>
        <tr class="text-center">
          <th width="100">訂單日期</th>
          <th width="100">活動名稱</th>
          <th width="100">活動日期</th>
          <th width="100">會員姓名</th>
          <th width="100">訂單金額</th>
          <th width="100">匯款金額</th>
          <th width="100">匯款日期</th>
          <th width="80">編輯</th> 
        </tr>
      </thead>
      <tbody  class="text-center">
        <tr v-for="order in orderConfirm" :key="order._id">

        </tr>
      </tbody>
    </table>
   
</div>
</template>
<script>
import Axios from 'axios'
import store from '@/store'
export default {
  data () {
    return {
      orderConfirm:{
        order:[{
          orderDate:'',
          p_id:{
          p_id:{
            title:''
          }
        }
        }]
      
      },
      userConfirm:[{
        
      }]
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
  },     
    methods: {
        getOrder() {
        const api = `${process.env.VUE_APP_API}`+ '/users/order'
        Axios.get(api).then((response) => {
        if(response.data.success){
        this.orderConfirm = response.data.result
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
    },
    created() {
      this.getOrder() 
      this.getOrderUserDetails()
    }
}
</script>
