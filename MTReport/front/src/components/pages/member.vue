<template>
 <form class="form-signin" @submit.prevent="signin">
  <img class="mb-4" src="https://mt10x10.files.wordpress.com/2020/07/cropped-e7b6b2e7ab99e6a899e9a18c-e6a899e8aa8c-4.jpg" alt="" >
  <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
  <label for="inputEmail" class="sr-only">Email address</label>
  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="user.account" required autofocus>
  <label for="inputPassword" class="sr-only">Password</label>
  <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="user.password" required>
  <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"> Remember me
    </label>
  </div>
  <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
  <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
</form>
</template>

<script>
export default {
  name: 'Member',
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
        const api = `${process.env.VUE_APP_API}/users/login`;
        const vm = this
        // console.log(process.env.VUE_APP_API,vm.user);
        this.$http.post(api, vm.user).then((response)=>{
          // console.log(response.data);
          if(response.data.success){
            vm.$router.push('/')
          }
        })
      }
        
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav-tabs {
    margin-bottom: 15px;
}
.sign-with {
    margin-top: 25px;
    padding: 20px;
}
div#OR {
    height: 30px;
    width: 30px;
    border: 1px solid #C2C2C2;
    border-radius: 50%;
    font-weight: bold;
    line-height: 28px;
    text-align: center;
    font-size: 12px;
    float: right;
    position: absolute;
    right: -16px;
    top: 40%;
    z-index: 1;
    background: #DFDFDF;
}
</style>
