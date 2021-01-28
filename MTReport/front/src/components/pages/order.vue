<template>
<div>
    <Navbar/>
  <div class="my-5 row justify-content-center">
      <div class="my-5 row justify-content-center">
        <table class="table">
          <thead>
            <th></th>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in order" :key="item.id">
              <td class="align-middle">
                <button type="button" class="btn btn-outline-danger btn-sm">
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
              <td class="align-middle">
                {{ item.product.title }}
                <!-- <div class="text-success" v-if="item.coupon">
                  已套用優惠券
                </div> -->
              </td>
              <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
              <td class="align-middle text-right">{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-right">總計</td>
              <td class="text-right">{{ cart.total }}</td>
            </tr>
            <!-- <tr v-if="cart.final_total">
              <td colspan="3" class="text-right text-success">折扣價</td>
              <td class="text-right text-success">{{ cart.final_total }}</td>
            </tr> -->
          </tfoot>
        </table>
      </div>
    </div>
</div>
</template>

<script>

import Navbar from '../Navbar'
import Vue from 'vue'
import Axios from 'axios'
import store from '@/store'
export default {
  name: 'UsersOrder',
  components: {
    Navbar,
    },
  data () {
    return {
      order:{}
    } 
  },
  computed: {
    user () {
      return this.$store.state.user
    },

  },
    methods: {
      // 訂單資料
        getOredr() {
        const api = `${process.env.VUE_APP_API}`+ '/users/order/'+ `${this.user.id}`
        Axios.get(api,{p_id:id}).then((response) => {
          if(response.data.succuss){
            this.order = response.data.result
          } 
        })
        },

        getOredrDetail() {
        const api = `${process.env.VUE_APP_API}`+ '/users/order/'+ `${this.user.id}`
        Axios.get(api,{p_id:id}).then((response) => {
          if(response.data.succuss){
            this.order = response.data.result
          } 
        })
        },
    
    },
    created() {
    this.getOredr()
    },
}
</script>
