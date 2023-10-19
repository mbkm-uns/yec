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
    <section>
      <div class="flex justify-center">
        <n-card class="drop-shadow-sm" style="display: flex; width: 60%">
          <div class="flex justify-center items-center flex-col gap-5">
            <img size="100" src="@/assets/images/stationary.png" alt="" />
            <div class="text-2xl font-semibold">Anda belum memiliki paket berlangganan</div>
          </div>
        </n-card>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
