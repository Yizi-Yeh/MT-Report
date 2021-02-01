<template>
<div>
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand text-center col-sm-3 col-md-2" href="#">MT10x10後台管理系統</a>
      <input class="form-control form-control-dark w-100" type="text" placeholder="輸入活動名稱" aria-label="Search">
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link ml-5" href="#" @click.prevent="signout">Signout</a>
        </li>
      </ul>
    </nav>
</div>
</template>

<script>
export default {

  methods: {
    signout() {
      const api = `${process.env.VUE_APP_API}/adminusers/logout`;
        const vm = this
        this.$http.delete(api).then((response)=>{
          console.log(response.data);
          if(response.data.success){
            vm.$router.push('/')
          }
        })
    }
  }
}

</script>