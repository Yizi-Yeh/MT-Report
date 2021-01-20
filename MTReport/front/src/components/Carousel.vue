<template>
<div>
 <!-- 輪播圖 section01 --------------------------------------------------------------------------------------------------- ---->
  <section>
    <!-- carousel-fade淡入淡出效果  -->
    <!-- data-ineterval使用控制幻燈片切換間隔 -->
    <div id="coffee-carousel" class="carousel slide carousel-fade h-100 " data-ride="carousel" data-ineterval="1000">
      <!-- 指示器 -->
      <ol class="carousel-indicators">
        <li data-target="#coffee-carousel" data-slide-to="0" class="active">
          <span>1</span>
        </li>
        <li data-target="#coffee-carousel" data-slide-to="1"> <span>2</span></li>
        <li data-target="#coffee-carousel" data-slide-to="2"> <span>3</span></li>
      </ol>
      <!-- 圖片區 -->
      <div class="carousel-inner h-100">
        <div class="carousel-item active">
          <img src="../assets/carousel1.jpg" class="d-block w-100 img-scaleBig brightness" height="1024px">
 <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
    <h1 class="mb-5">LIFE IS AN ADVENTURE.</h1>
    <h2 class="mt-5">一起走入台灣山林尋找更勇敢的自己</h2>
    <h2>|登山⛰|露營⛺️|健行🥾|戶外探索🗻｜</h2>
    <h2>在山的溫暖懷抱中</h2>
    <h2>我們每個人都很渺小卻也很偉大</h2>
    <h2>SHOW YOUR CRAVING FOR FREEDOM!</h2>
  </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/carousel2.jpg" class="d-block w-100  img-scaleBig brightness ">
        <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
    <h1 class="mb-5">LIFE IS AN ADVENTURE.</h1>
    <h2 class="mt-5">一起走入台灣山林尋找更勇敢的自己</h2>
    <h2>|登山⛰|露營⛺️|健行🥾|戶外探索🗻｜</h2>
    <h2>在山的溫暖懷抱中</h2>
    <h2>我們每個人都很渺小卻也很偉大</h2>
    <h2>SHOW YOUR CRAVING FOR FREEDOM!</h2>
  </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/carousel3.jpg" class="d-block w-100  img-scaleBig brightness ">
       <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
    <h1 class="mb-5">LIFE IS AN ADVENTURE.</h1>
    <h2 class="mt-5">一起走入台灣山林尋找更勇敢的自己</h2>
    <h2>|登山⛰|露營⛺️|健行🥾|戶外探索🗻｜</h2>
    <h2>在山的溫暖懷抱中</h2>
    <h2>我們每個人都很渺小卻也很偉大</h2>
    <h2>SHOW YOUR CRAVING FOR FREEDOM!</h2>
  </div>
        </div>
       
      </div>
      <!-- 左右鍵 -->
      <a class="carousel-control-prev" href="#coffee-carousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#coffee-carousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </section>
</div>
</template>
