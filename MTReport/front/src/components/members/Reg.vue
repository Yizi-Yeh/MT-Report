<template>
<div>
  <Navbar/>
<div class="container ">
  <div class="row">
    <div class="col-12 mt-5 d-flex flex-column align-items-center">
            <h2 text-center> Nice to meet you!</h2>
            <p>Are you ready to have a fantastic hiking with us?</p>
 <form class="form-signin  filter-container rounded border d-flex flex-column align-items-center" >
  <img class="mb-3 mt-5"  src="https://mt10x10.files.wordpress.com/2020/07/cropped-e7b6b2e7ab99e6a899e9a18c-e6a899e8aa8c-4.jpg" alt="" >
  <h4 class="mb-2">MT會員註冊</h4>
  <label for="inputEmail" class="sr-only mb-2 w-75">Email address</label>
  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="account" :state="accountState" >
  <label for="inputPassword" class="sr-only">Password</label>
  <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password" :state="passwordState" required>
  <div class="checkbox mb-3">
  </div>
  <button class="w-50 btn btn-sm btn-dark btn-block rounded" type="submit" @click="regSubmit">註冊</button>
  <button class="w-50 btn btn-sm btn-dark btn-block rounded" type="reset" @reset="onReset">重置</button>
  <div class="row">
    <div class="col-12 mt-4 mr-0">
   <router-link to="/memberReg">
             <button  class="btn btn-dark ml-2 btn-sm rounded">我要註冊</button>
          </router-link>
          <router-link to="/memberLogin">
             <button  class="btn btn-dark ml-2 btn-sm rounded">已經有帳號了</button>
          </router-link>
        </div>
          </div>
  <p class="mt-5 mb-3 text-center">&copy; 2021 MT10x10 Cor.</p>
</form>
</div>
</div>
</div>
</div>
</template>

<script>
import Navbar from '../Navbar'
export default {
   components: {
         Navbar,
  },
  name: 'Reg',
  data () {
    return {
      account: '',
      password: ''
	}
  },
  computed: {
  accountState () {
      if (this.account.length === 0) {
        return null
      } else if (this.account.length >= 4 && this.account.length <= 20) {
        return true
      } else {
        return false
      }
    },
    passwordState () {
      if (this.password.length === 0) {
        return null
      } else if (this.password.length >= 4 && this.password.length <= 20) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
	regSubmit () {
      // 如果帳號密碼驗證通過
      if (this.accountState && this.passwordState) {
        const api = `${process.env.VUE_APP_API}/users`
        this.axios.post(api, this.$data)

          .then(res => {
            if (res.data.success) {
              this.$swal({
                icon: 'success',
                title: '註冊成功',
              })
              this.$router.push('/memberLogin')
            } else {
              this.$swal({
                icon: 'error',
                title: '發生錯誤',
                text: res.data.message
              })
            }
          })
          .catch(err => {
            this.$swal({
              icon: 'error',
              title: '發生錯誤',
              text: err.response.data.message
            })
          })
      }
    },
    onReset () {
      this.account = ''
      this.password = ''
    } 
  }
}
</script>

