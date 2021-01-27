<template>
<div>
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
                      <input type="password" class="form-control" placeholder="Password" v-model="password" :state="passwordState">
                  </div>
                  <button type="submit" class="btn btn-dark" @click="onSubmit">Submit</button>
                  <button type="reset" class="btn btn-secondary ml-2" @reset="onReset">Reset</button>
                </form>
            </div>
          </div>
      </div>
</div>
</template>

<script>
export default {

  name: 'Log',
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

