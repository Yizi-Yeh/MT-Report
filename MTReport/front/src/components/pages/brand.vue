<template>
<div>
  <Navbar/>
<div class="container mt-5 mb-5 h-100">
  <div class="row mt-5">
   <div class="col-12 mt-5">
<div class="lr padding-lr">
  <div class="heart-rate h-100">
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="150px" height="73px" viewBox="0 0 150 73" enable-background="new 0 0 150 73" xml:space="preserve">
    <polyline fill="none" stroke="#aba6a6" stroke-width="3" stroke-miterlimit="10" points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"
    />
  </svg>
  <div class="fade-in"></div>
  <div class="fade-out"></div>
</div>
      <div class="col-12 mx-auto">
      <span class="sub-txt txtCenter">心電圖結合山的意象<br>
        象徵著人與山林的和諧<br class="hp_brPc">山林帶給我們一股最原始的悸動
        <br class="hp_brPc">在山裡找到自己不再迷惘<br>彷彿重獲新生</span>
   </div>
    </div>
  </div>
  </div>
  </div>
  </div>
</template>

<script>
import Navbar from '../Navbar'
import store from '@/store'
export default {
  name: 'Brand',
  components: {
    Navbar,
    },
  data () {
    return {
    
       }
  },
  computed: {
    user () {
      return store.state.user
    },
  },
    methods: {
    },
   created() {

    }
}
</script>

<style scoped>
.heart-rate {
  width: 150px;
  height: 73px;
  position: relative;
  margin: 20px auto;
}

.fade-in {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  top: 0;
  right: 0;
  animation: heartRateIn 2.5s linear infinite;
}

.fade-out {
  position: absolute;
  width: 120%;
  height: 100%;
  top: 0;
  left: -120%;
  animation: heartRateOut 2.5s linear infinite;
  background: rgba(255, 255, 255, 1);
  background: -moz-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);
  background: -webkit-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);
  background: -o-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);
  background: -ms-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);
  background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, 0) 100%);
}

@keyframes heartRateIn {
  0% {
    width: 100%;
  }
  50% {
    width: 0;
  }
  100% {
    width: 0;
  }
}

@keyframes heartRateOut {
  0% {
    left: -120%;
  }
  30% {
    left: -120%;
  }
  100% {
    left: 0;
  }
}
</style>