<template>
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
  <!-- <a class="navbar-brand" href="#section01"><img src="https://mt10x10.files.wordpress.com/2020/07/cropped-e7b6b2e7ab99e6a899e9a18c-e6a899e8aa8c-4.jpg" alt="MT10x10登山社" width="60"></a> -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav d-flex  justify-content-center w-100">
      <li class="nav-item active ml-3 ">
        <router-link class="nav-link" to="/brand">品牌故事</router-link>
      </li>
      <li class="nav-item">
       <router-link class="nav-link" to="/plan">行程資訊</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/newplan">近期開團</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/member">會員專區</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/join">加入我們</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/contact">聯絡我們</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/login">管理員登入</router-link>
      </li>

    </ul>
  </div>
</nav>
</div>
</template>
