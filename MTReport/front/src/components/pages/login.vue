<template>
<div class="container mt-5">
  <div class="row mt-5">
    <div class="col-12 mt-5">
 <form class="form-signin" @submit.prevent="signin">
  <img class="mb-4 mt-5 ml-3"  src="https://mt10x10.files.wordpress.com/2020/07/cropped-e7b6b2e7ab99e6a899e9a18c-e6a899e8aa8c-4.jpg" alt="" >
  <h1 class="h3 mb-3 font-weight-normal text-center">please sign in</h1>
  <label for="inputEmail" class="sr-only">Email address</label>
  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="user.account" required autofocus>
  <label for="inputPassword" class="sr-only">Password</label>
  <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="user.password" required>
  <div class="checkbox mb-3">
  </div>
  <button class="btn btn-lg btn-dark btn-block" type="submit">Signin</button>
  <p class="mt-5 mb-3 text-center">&copy; 2021 MT10x10 Cor.</p>
</form>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
          account: '',
          password: ''
        }
    }
  },
  methods: {
      signin() {
        const api = `${process.env.VUE_APP_API}/adminusers/login`;
        const vm = this
        // console.log(process.env.VUE_APP_API,vm.user);
        this.$http.post(api, vm.user).then((response)=>{
          // console.log(response.data);
          if(response.data.success){
            vm.$router.push('/admin/products')
          }
        })
      }
        
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
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
