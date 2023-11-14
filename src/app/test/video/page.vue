<script setup lang="ts">
import CVideo from './video.vue'
</script>
<template>
  <c-video
    poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
    :srcs="[
      {
        src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
        type: 'video/mp4'
      }
    ]"
  />
</template>
