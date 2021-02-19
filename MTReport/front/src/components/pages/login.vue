<template>
<div class="container mt-5 ">
  <div class="row mt-5">
    <div class="col-12 mt-5">
 <form class="form-signin rounded border d-flex flex-column align-items-center" @submit.prevent="signin" >
  <img class="mb-3 mt-5"  src="https://mt10x10.files.wordpress.com/2020/07/cropped-e7b6b2e7ab99e6a899e9a18c-e6a899e8aa8c-4.jpg" alt="" >
  <h4 class="mb-2">MT管理員登入</h4>
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
