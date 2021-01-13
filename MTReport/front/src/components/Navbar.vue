<template>
<div>
<nav class="navbar navbar-dark bg-dark d-flex">
  <button class="navbar-toggler align-items-center" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
    <span class="navbar-toggler-icon"></span>
    <br>
    <span>MENU</span>
  </button>
  <a class="navbar-brand mx-auto" ><img src="../assets/logo.png" alt="MT10x10登山社" width="100">
  <span class="text-white my-auto mx-1">MT10x10登山社</span>
  </a>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav d-flex  justify-content-center w-100">
      <li class="nav-item active">
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
