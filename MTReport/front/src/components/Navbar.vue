<template>

<div>
  <nav class="navbar navbar-expand-lg">
    <div class="row ">
      <div class="nav-log mr-3">
          <!-- logout icon -->
        <a class="nav-link" href="#"> <router-link to="/memberReg"><i class="fas fa-user"></i></router-link></a>
          <a class="nav-link mr-0"  href="#" @click="logout"><i class="fas fa-sign-out-alt"></i></a>    
      </div>
    <ul class="navbar-nav  d-flex flex-column align-items-center justify-content-center">
        <a class="navbar-brand mb-2" href="#"><router-link to="/">
         <img src="../assets/logo.jpg" alt="MT10x10登山社" width="100">
         </router-link>
        </a>
      <div class="navbar-item d-flex flex-row">
      <li class="nav-item active">
        <a class="nav-link" href="#">
          <router-link class="nav-link" to="/brand">關於MT</router-link>
        </a>
      </li>
      <i class="fad fa-heart-rate"></i>
      <li class="nav-item">
        <a class="nav-link">  <router-link class="nav-link" to="/plan">行程資訊</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" > <router-link class="nav-link" to="/newplan">近期開團</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> <router-link class="nav-link" to="/Login">管理員登入</router-link></a>
      </li>  
      </div>
    </ul>
    </div>
</nav>
 
</div>
</template>

<script>
export default {
  name: 'App',
  computed: {
  },
  methods: {
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