<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/admin">首頁</router-link> |
      <router-link to="/login">管理員登入</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>

</script>

<style lang="scss">
@import './assets/all';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #42b983;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
