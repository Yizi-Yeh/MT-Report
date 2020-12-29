<template>
<div>
    <Navbar/>
    <div>
    <Carousel/>
  </div>
    <Activity/>
</div>
</template>

<script>
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Activity from '../components/Activity'

export default {
  name: 'home',
  components: {
    Navbar,
    Carousel,
    Activity
  }
}
</script>
