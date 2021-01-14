<template>
<div>
    <Navbar/>
    <Carousel/>
    <Activity/>
</div>
</template>

<script>
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Activity from '../components/Activity'
import store from '@/store'

export default {
  name: 'home',
  components: {
    Navbar,
    Carousel,
    Activity
  },
  computed:{
    plans(){
      return store.state.plans
    }
  }
}
</script>
