<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'

defineProps<{
  srcs: { src: string; type: string }[]
  poster?: string
}>()
const videoRef = ref()
const plyrInst = ref<Plyr>()
onMounted(() => {
  plyrInst.value = new Plyr(videoRef.value, {
    controls: []
  })
})
</script>
<template>
  <video ref="videoRef" crossorigin="anonymous" playsinline :poster="poster">
    <!-- Video files -->
    <source v-for="(item, i) in srcs" :key="i" :src="item.src" :type="item.type" />

    <!-- Caption files -->
    <!-- <track
      kind="captions"
      label="English"
      srclang="en"
      src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
      default
    /> -->
  </video>
</template>
<style scoped>
audio::-webkit-media-controls-timeline,
video::-webkit-media-controls-timeline {
    display: none;
}
audio::-webkit-media-controls,
video::-webkit-media-controls {
    display: none;
}
</style>
