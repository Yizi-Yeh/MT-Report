<template>

<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand ml-5" href="#"><router-link to="/">
  <img src="../assets/logo.jpg" alt="MT10x10登山社" width="100">
  <span class="text-dark">MT10x10登山社</span>
    </router-link>
</a>

  <div class=" collapse navbar-collapse mx-uto" id="navbarColor02">
    <div class="row mx-auto ml-5">
    <ul class="navbar-nav mr-auto">
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
        <a class="nav-link" > <router-link class="nav-link" to="/newplan"><i class="fas fa-bullhorn"></i>近期活動</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> <router-link class="nav-link" to="/memberReg"><i class="fas fa-user fa-fw"></i>會員註冊</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> <router-link class="nav-link" to="/admin"><i class="fas fa-user-cog"></i>管理員登入</router-link></a>
      </li>
    </ul>
    </div>
     <li class="nav-item d-flex mr-4 mt-2">
          <a class="nav-link" href="https://www.facebook.com/MT10x10/"><i class="fab fa-facebook-f"></i></a>
          <a class="nav-link" href="https://www.instagram.com/mt10x10/"><i class="fab fa-instagram"></i></a>
          <a class="nav-link" href="https://line.me/ti/g2/X3878mSeMzAZFaPqgOu7oA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"><i class="fab fa-line"></i></a>
          <a class="nav-link"  href="#" @click="logout"><i class="fas fa-sign-out-alt"></i></a>    
          <i class="fad fa-heart-rate"  href="#"></i>  
    </li>
  
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