<template>
<div>
<div class="text-right mt-4">
      <button class="btn btn-dark d-none"  data-toggle="modal" data-target="#productModal" @click="openModal(true)">建立新的行程</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr class="text-center">
          <th width="200">會員帳號</th>
          <th width="200">刪除</th>
        </tr>
      </thead>
      <tbody  class="text-center">
        <tr v-for="item in users" :key="item._id">
          <td>{{ item.account }}</td>
          <td>
        <button @click="delUsers(item._id)"  class="btn rounded btn-outline-danger btn-sm">刪除</button>
          </td>
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
            plansId:[],
            form:{},
            isNew: false,
        }
    },
    methods: {
        getUsers() {
        const api = `${process.env.VUE_APP_API}`+ '/users'
        Axios.get(api).then((response) => {
        this.users = response.data.result
        console.log(response.data.result)
        })
        },

        delUsers(id) {
          // const api = `${process.env.VUE_APP_API}/users`
        const api = `${process.env.VUE_APP_API}/users/${id}`
        Axios.delete(api).then((response) => {
          const index = this.users.findIndex( item => {
          return item._id === id 
          }) 
          this.users.splice(index,1)
          })
        .catch(error => {
          alert(error.response.data.message)
          console.log(error)
        }) 
        },    
    },
    created() {
        this.getUsers()
    }
}
</script>
<style lang="scss" scoped>
table{
   table-layout: fixed;
}
tr{
  white-space:nowrap;
}
.long-text {white-space:nowrap!important;overflow:hidden!important;text-overflow: ellipsis!important }

.btn-outline-success{
  border: 2px solid #c5d1cc;
  color:#c5d1cc ;
}

</style>