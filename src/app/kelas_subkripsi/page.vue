<route lang="yaml">
meta:
  layout: authenticated.layout
</route>
<script setup lang="ts"></script>
<template>
  <div class="p-2 mt-5 md:px-20 space-y-5">
    <nav class="flex items-center space-x-2">
      <router-link class="text-amber-600 text-lg" to="/beranda">Beranda</router-link>
      <span class="text-gray-400 text-lg">/</span>
      <span class="text-gray-600 text-lg">Subkripsi</span>
    </nav>
    <div class="flex justify-center items-center">
      <img size="100" src="@/assets/images/stationary.png" alt="" />
    </div>
    <div class="text-center text-2xl font-bold">
      <n-text>Anda belum memiliki paket berlangganan</n-text>
    </div>
  </div>
</template>

<style scoped></style>
