<template>
<!-- The overlay -->
<div id="app">
  <div class="navbar">
    <span @click="openNav()"><i class="navbar-icon fas fa-bars"></i></span>
   <a  href="#" @click="logout"><i class="navbar-icon fas fa-sign-out-alt"></i></a>  

   </div>
  <div ref="myNav" class="overlay">

    <a class="overlay-closebtn" @click="closeNav()">&times;</a>
    
    <div class="overlay-content">
      <ul class="navbar-nav mr-auto">
        <a class="navbar-brand" href="#"><router-link to="/">
  <img src="../assets/logo-1.svg" alt="MT10x10登山社" width="100">
    </router-link>
</a>
      <li class="nav-item active">
        <a class="nav-link" href="#">
  <router-link class="nav-link" to="/brand"><i class="fas fa-heartbeat"></i>品牌故事</router-link>
        </a>
      </li>
      <i class="fad fa-heart-rate"></i>
      <li class="nav-item">
        <a class="nav-link">  <router-link class="nav-link" to="/plan"><i class="fas fa-user-friends"></i>行程資訊</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" > <router-link class="nav-link" to="/newplan"><i class="fas fa-bullhorn"></i>近期開團</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> <router-link class="nav-link" to="/memberReg"><i class="fas fa-user fa-fw"></i>會員註冊</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> <router-link class="nav-link" to="/Login"><i class="fas fa-user-cog"></i>管理員登入</router-link></a>
      </li>
    </ul>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'App',
  computed: {
  },
 methods:{
    closeNav(){
      this.$refs.myNav.style.width = "0%";
    },
    openNav(){
      this.$refs.myNav.style.width = "100%";
    },
     logout() {
      this.axios
        .delete(process.env.VUE_APP_API + '/users/logout')
        .then((res) => {
          // 如果登出成功
          if (res.data.success) {
            this.$swal({
              icon: 'success',
              title: '成功',
              text: '登出成功',
            })
            this.$store.commit('logout')
            // 導回首頁
          }
        })
    },
    
  },
}
</script>