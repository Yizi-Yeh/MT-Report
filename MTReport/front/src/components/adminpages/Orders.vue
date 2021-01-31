<template>
<div>
<div class="text-right mt-4">
      <button class="btn btn-dark"  data-toggle="modal" data-target="#productModal" @click="openModal(true)">建立新的行程</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr class="text-center">


          <th width="100">訂單日期</th>
          <th width="100">會員帳號</th>
          <th width="100">行程名稱</th>
          <th width="100">訂單金額</th>
          <th width="100">匯款金額</th>
          <th width="100">匯款日期</th>
          <th width="80">編輯</th> 
        </tr>
      </thead>
      <tbody  class="text-center">
        <tr v-for="user in users" :key="user._id">
          <td>{{ user.order[0].orderDate }}</td>
          <td>{{ user._id }}</td>
          <td>{{ user.order[0].p_id }}</td>
          <td>{{ user.account }}</td>
          <td>{{ user.order[0].p_id }}</td>
        </tr>
      </tbody>
    </table>
   
</div>
</template>
<script>
import Axios from 'axios'
export default {
    data() {
        return {
            users:[],
                }
    },
    methods: {
      // 取得所有會員資料
        getUsers() {
        const api = `${process.env.VUE_APP_API}`+ '/users'
        Axios.get(api).then((response) => {
        this.users = response.data.result
        console.log(response.data.result)
        })
        },

        // 取得會員訂單資料
        getUsersOrders() {
        const api = `${process.env.VUE_APP_API}`+ '/orders' + id
        Axios.get(api).then((response) => {
        this.users = response.data.result
        console.log(response.data.result)
        })
        },
    },
    created() {
        this.getUsers()
        this.getUsersOrders()
    }
}
</script>
