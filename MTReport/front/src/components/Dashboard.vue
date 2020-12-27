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
import Navbar from './Navbar'
import Carousel from './Carousel'
import Activity from './Activity'

export default {
  components: {
    Navbar,
    Carousel,
    Activity
  }
}
</script>
