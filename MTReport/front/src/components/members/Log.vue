<template>
<div>
<div>
<div class="container mt-5">
  <div class="row mt-5">
    <div class="col-12 mt-5 d-flex flex-column align-items-center">
            <h2 text-center> Feel free to join MT10x10</h2>
            <p>Are you ready to have a fantastic hiking with us?</p>
 <form class="form-signin rounded border d-flex flex-column align-items-center" @submit.prevent="signin" >
  <img class="mb-3 mt-5"  src="https://mt10x10.files.wordpress.com/2020/07/cropped-e7b6b2e7ab99e6a899e9a18c-e6a899e8aa8c-4.jpg" alt="" >
  <h4 class="mb-2">MT會員登入</h4>
  <label for="inputEmail" class="sr-only mb-2">Email address</label>
  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="account" :state="accountState" required autofocus>
  <label for="inputPassword" class="sr-only">Password</label>
  <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password" :state="passwordState" required>
  <div class="checkbox mb-3">
  </div>
  <button class="btn btn-lg btn-dark btn-block" type="submit" @click="onSubmit"> Signin</button>
  <button class="btn btn-lg btn-dark btn-block" type="reset" @reset="onReset"> Reset</button>
  <div class="row">
    <div class="col-12 mt-4 mr-0">
   <router-link to="/memberReg">
             <button  class="btn btn-secondary ml-2">註冊</button>
          </router-link>
          <router-link to="/memberLogin">
             <button  class="btn btn-secondary ml-2">登入</button>
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


<style scoped lang="scss">
html,
body {
  height: 100%;
}



.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>