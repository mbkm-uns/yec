<template>
  <div class="video-player">
    <video ref="videoPlayer" width="640" height="360" controls>
      <source :src="videoSrc" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="prose min-w-full w-full max-w-full" v-html="description" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VideoPlayer',
  props: {
    videoSrc: {
      type: String,
    },
    description: {
      type: String
    }
  },
});
</script>

<style scoped>
.video-player {
  max-width: 100%;
}
</style>