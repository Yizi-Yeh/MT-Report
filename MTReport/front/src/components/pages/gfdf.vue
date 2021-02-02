<template>
  <mdb-container>
    <mdb-carousel :interval="800000" :items="videoCarousel" indicators controlls></mdb-carousel>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbCarousel } from 'mdbvue';

export default {
  name: 'VideoPage',
  components: {
    mdbContainer,
    mdbCarousel
  },
  data() {
    return {
      videoCarousel: [
        {
          video: true,
          src: "https://mdbootstrap.com/img/video/Lines.mp4",
          loop: true,
          auto: true,
          muted: true,
          mask: 'black-light',
          caption: {
            title: 'Light mask'
          }
        },
        {
          video: true,
          src: "https://mdbootstrap.com/img/video/animation-intro.mp4",
          loop: true,
          auto: true,
          muted: true,
          mask: 'black-slight',
          caption: {
            title: 'Slight mask'
          }
        },
        {
          video: true,
          src: "https://mdbootstrap.com/img/video/Nature-Sunset.mp4",
          loop: true,
          auto: true,
          muted: true,
          mask: 'black-strong',
          caption: {
            title: 'Strong mask'
          }
        }
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>