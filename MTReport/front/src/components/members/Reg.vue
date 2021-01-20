<template>
<div>
     <Navbar/>
  <div class="sidenav">
          <div class="login-main-text">
            <h2> Nice to meet you!<br>Feel free to join MT10x10.</h2>
            <p>Are you ready to have a fantastic hiking with us?</p>
           <router-link to="/memberReg">
             <button  class="btn btn-secondary ml-2">註冊</button>
          </router-link>
          <router-link to="/memberLogin">
             <button  class="btn btn-secondary ml-2">登入</button>
          </router-link>
          </div>
      </div>
      <div class="main">
          <div class="col-md-6 col-sm-12">
            <div class="login-form">
              
                <form>
                  <div class="form-group">
                      <label>Email Address</label>
                      <input type="text" class="form-control" placeholder="Email Address" v-model="account" :state="accountState">
                  </div>
                  <div class="form-group">
                      <label>Password</label>
                      <input type="password" class="form-control" placeholder="Password" v-model="password" :state="passwordState" >
                  </div>
                  <button type="submit" class="btn btn-dark" @click="regSubmit" >Submit</button>
                  <button type="reset" class="btn btn-secondary ml-2" @reset="onReset">Reset</button>
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
    Navbar
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

