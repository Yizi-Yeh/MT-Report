<template>
<div>
    <Navbar/>
<div>
<div class="container">
  <div class="row">
    <div class="col-12 mt-5 d-flex flex-column align-items-center">
            <h2 text-center> Feel free to join MT10x10</h2>
            <p>Are you ready to have a fantastic hiking with us?</p>
 <form class="form-signin rounded border d-flex flex-column align-items-center" >
  <img class="mb-3 mt-5"  src="https://mt10x10.files.wordpress.com/2020/07/cropped-e7b6b2e7ab99e6a899e9a18c-e6a899e8aa8c-4.jpg" alt="" >
  <h4 class="mb-2">MT會員登入</h4>
  <label for="inputEmail" class="sr-only mb-2">Email address</label>
  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="account" :state="accountState" required autofocus>
  <label for="inputPassword" class="sr-only">Password</label>
  <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password" :state="passwordState" required >
  <div class="checkbox mb-3">
  </div>
  <button class="btn btn-sm btn-dark btn-block rounded" type="submit" @click="onSubmit">Signin</button>
  <button class="log-btn btn btn-sm btn-dark btn-block rounded" type="reset" @reset="onReset"> Reset</button>
  <div class="row">
    <div class="col-12 mt-4 mr-0">
   <router-link to="/memberReg">
             <button  class="btn btn-dark ml-2  rounded">註冊</button>
          </router-link>
          <router-link to="/memberLogin">
             <button  class="btn btn-dark ml-2 rounded">登入</button>
          </router-link>
        </div>
          </div>
  <p class="mt-5 mb-3 text-center">&copy; 2021 MT10x10 Cor.</p>
</form>
</div>
</div>
</div>
</div>
</div>
</template>

<script>
import Navbar from '../Navbar'
export default {

  name: 'Log',
    components: {
    Navbar,
    },
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
    onSubmit () {
      // 如果帳號密碼驗證通過
      if (this.accountState && this.passwordState) {
        this.axios.post(process.env.VUE_APP_API + '/users/login', this.$data)
          .then(res => {
            if (res.data.success) {
              this.$store.commit('login', res.data.result)
              this.$swal({
                icon: 'success',
                title: '登入成功'
              }).then(() => {
                // sweet alert 對話框關掉後才跳到相簿頁
                this.$router.push('/')
              })
            } else {
                              console.log(res.data.success)
              this.$swal({
                icon: 'error',
                title: '發生錯誤',
                text: res.data.message

              })
            }
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


