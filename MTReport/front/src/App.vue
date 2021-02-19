<template>
  <div id="app">
    <transition name="slide-left">
    <router-view/>
</transition>
<Footer/>
  </div>
</template>
<script>
import '@/assets/scss/main.scss'
import Footer from './components/Footer'
export default {
  name: 'App',
  data () { return { index:0 } },
   components: {
    Footer
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    
  },
   methods: {
   heartbeat () {
      this.axios.get(process.env.VUE_APP_API + '/users/heartbeat')
        .then(res => {
          // 如果 vuex 是登入中
          if (this.user.id.length > 0) {
            // 但是後端沒登入
            if (!res.data) {
              this.$swal({
                icon: 'error',
                title: '錯誤',
                text: '登入時效已過'
              })
              // 登出
              this.$store.commit('logout')
              // 導回首頁
              if (this.$route.path !== '/') {
                this.$router.push('/')
              }
            }
          }
        })
        .catch(() => {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: '發生錯誤'
          })
          // 登出
          this.$store.commit('logout')
          // 導回首頁
          if (this.$route.path !== '/') {
            this.$router.push('/')
          }
        })
    }
   },
  mounted () {
    this.heartbeat()
    setInterval(() => {
      this.heartbeat()
    }, 5000)
  }
}
</script>

<style lang="scss">
  .slide-left-enter-active { animation: slideLeft 0.3s; } 
  @keyframes slideLeft { from { transform: translate3d(100%, 0, 0);/*橫坐標,縱坐標,z坐標*/ visibility: visible; } 
  to { transform: translate3d(0, 0, 0); } }
  </style>

