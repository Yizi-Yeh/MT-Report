<template>
<div>
  <div class="sidenav">
            <div class="login-main-text">
            <h2> Nice to meet you!<br>Feel free to join MT10x10.</h2>
            <p>Are you ready to have a fantastic hiking with us?</p>
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
                  <button type="submit" class="btn btn-black" @click="logSubmit">Submit</button>
                  <button type="reset" class="btn btn-secondary ml-2" @reset="onReset">Reset</button>
                </form>
            </div>
          </div>
      </div>
</div>
</template>

<script>

export default {
  name: 'Member',
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
    logSubmit () {
      // 如果帳號密碼驗證通過
      if (this.accountState && this.passwordState) {
        const api = `${process.env.VUE_APP_API}/users/login`;
        this.$http.post(api, this.$data)
          .then(res => {
            if (res.data.success) {
              console.log(api)
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
              })
            }
          })
          .catch(err => {
            this.$swal({
              icon: 'error',
              title: '發生錯誤',
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

