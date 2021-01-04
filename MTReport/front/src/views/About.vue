<template>
  <div class="about">
    <a href="#" @click.prevent="signout">登出</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg:'hello'
    }
  },
  methods: {
    signout() {
      const api = `${process.env.VUE_APP_API}/logout`;
        const vm = this
        console.log(process.env.APIPATH,process.env.CUSTOMPATH);
        this.$http.post(api).then((response)=>{
          console.log(response.data);
          if(response.data.success){
            vm.$router.push('/login')
          }
        })
    }
  }
}

</script>