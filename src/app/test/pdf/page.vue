<script setup lang="ts">
import VuePdfApp from "vue3-pdf-app";
// import this to use default icons for buttons
import "vue3-pdf-app/dist/icons/main.css";
const source1 = "https://sgp1.vultrobjects.com/prakerja/company/60dd42e4ba82458c8b28896d/documents/1683530963080324603-pelayanan-prima-untuk-staf-toko.pdf"
</script>
<template>
  <!-- used `style="height: 100vh;"` because without it in the Firefox 89 and Chrome 91 (June 2021) the `vue-pdf-app` is not rendering on the page, just empty space without any errors (since `vue-pdf-app` does not have height and it is the top tag in the generated markup ) -->
  <!-- or you can just wrap `vue-pdf-app` in <div> tag and set height for it via CSS (like in `Script tag (unpkg)` example below) -->
  <vue-pdf-app style="height: 100vh;" :pdf="source1"></vue-pdf-app>
</template>