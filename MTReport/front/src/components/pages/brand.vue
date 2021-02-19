<template>
<div>
  <Navbar/>
 

<div class="container mt-5 h-100">
  <div class="row mt-5">
   <div class="col-12 mt-5 brand-intro-outer">
     
     <div class="row">
       <div class="col-12 concept">
         <p class="concept-title">CONCEPT</p>
       </div>
     </div>

       <video-background 
    src="../intro.mp4"

    :sources="[
        {src: '../intro.mp4', res: 900, autoplay: true}, 
        {src: '../intro.mp4', res: 638, autoplay: true}
    ]"
    style="max-height: 700px; height: 100vh;"
    overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)" 
        >
      </video-background>

<div class="brand-intro-container">
    </div>

      <div class="brand-intro-text">
<img src='@/assets/logo.png' class="w-25">
      <span >心電圖結合山的意象<br>
        象徵著人與山林的和諧<br>山林帶給我們一股最原始的悸動
        <br >在山裡找到自己不再迷惘<br>彷彿重獲新生</span>
   </div>
    <!-- <div class="heart-rate">
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="150px" height="73px" viewBox="0 0 150 73" enable-background="new 0 0 150 73" xml:space="preserve">
    <polyline fill="none" stroke="#aba6a6" stroke-width="3" stroke-miterlimit="10" points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"
    />
  </svg>
  <div class="fade-in"></div>
  <div class="fade-out"></div>
</div> -->
  </div>
  </div>
    <div class="row">
       <div class="col-12 concept-text">
        <p> 那些想和你分享的感動</p>
        </div>
      <div class="col-10 brand-intro-img">
        <img src="@/assets/自由狼_200915_101.jpg" class="w-50 mr-3">
        <img src="@/assets/自由狼_200915_160.jpg" class="w-50 ml-3">
      </div>
      <div class="row brand-intro-img-txt rounded">
      <div class="col-12">
        <h4>旅程中最美的不一定是風景
有時是與你一起並肩的夥伴們</h4>
        <!-- <p>
The most beautiful part of the journey is not necessarily the scenery, <br>
but sometimes the friends who are with you</p>    -->
        <p>
         我們是由熱血的年輕人所創建的登山社，<br>
用10分熱情與10分愛山林的心，<br>和山友們一步步一同完成百岳，<br>
帶領更多人瞭解台灣的美。
        </p>
        <p>
          Are you in Taiwan and have never had a real hiking?<br>
          It’s time to go on an epic outdoor adventure with MT10x10!
        </p>
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

