<template>
<div>
  <Navbar/>
<div class="container  h-100">
  <div class="row ">
   <div class="col-12  brand-intro-outer">
     
  <div class="row">
           <div class="col-12 concept mb-5">
         <p class="concept-title">關於我們</p>
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
 
  </div>

  </div>
    <div class="row">
  <div class="row mt-5 mb-5">
           <div class="col-12 concept">
         <p class="concept-title">那些想和你分享的感動</p>
       </div>
  </div>
 
    <!-- subintro -->
          <div class="container h-100  mx-auto ">
            <div class="left-col">
                  <div data-bottom-top="opacity: 0" data-center="opacity: 1" class="cover">
                  </div>
                  <div class="block-cover"></div>
            </div>
      </div>
      
      <div data-bottom-top="transform: translateY(-50px); opacity: 0" data-center="transform: translateY(0px); opacity: 1" class="row brand-intro-img-txt rounded">
      <div class="col-12">
        <h4>旅程中最美的不一定是風景
            有時是與你一起並肩的夥伴們</h4>
        <p>
            The most beautiful part of the journey is not necessarily the scenery, <br>
            but sometimes the friends who are with you</p>   
      </div>   
    </div> 
      <div class="col-6 brand-img-01">
        <img data-bottom-top="transform: translateY(-100px); opacity: 0" data-center="transform: translateY(0px); opacity: 1" class="rounded ml-5 w-100" src="@/assets/brand-01.jpg">
    </div>
 
     <div class="col-6 brand-img-02">
        <img data-bottom-top="transform: translateY(-100px); opacity: 0" data-center="transform: translateY(0px); opacity: 1" class="rounded ml-5 w-100" src="@/assets/brand-02.jpg">
    </div>
    <div class="col-6 brand-img-03">
        <img data-bottom-top="transform: translateY(-100px); opacity: 0" data-center="transform: translateY(0px); opacity: 1" class="rounded ml-5 w-100" src="@/assets/brand-03.jpg">
    </div>
    <div class="col-6 brand-img-04">
        <img data-bottom-top="transform: translateY(-100px); opacity: 0" data-center="transform: translateY(0px); opacity: 1" class="rounded ml-5 w-100" src="@/assets/brand-04.jpg">
    </div>
    </div>
        <div data-bottom-top="opacity: 0.5" data-center="opacity: 1" class="row brand-intro-img-txt-2 rounded">
      <div class="col-12">  
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

