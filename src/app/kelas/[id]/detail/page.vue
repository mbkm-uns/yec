<route lang="yaml">
meta:
  layout: authenticated.layout
</route>

<script setup lang="ts">
import { Detail } from '@/app/kelas/components'
// import { ActMenu } from '@/app/kelas/components'
import { ActMenu2 } from '@/app/kelas/components'
</script>
<template>
  <div class="pt-20 p-3 md:px-20 space-y-5">
    <nav class="flex items-center space-x-2">
      <router-link class="text-amber-600 text-lg" to="/beranda">Beranda</router-link>
      <span class="text-gray-400 text-lg">/</span>
      <span class="text-gray-600 text-lg">Kelas</span>
    </nav>
    <section class="md:flex justify-between space-y-3">
      <div>
        <h2 class="text-2xl font-semibold">
          Merancang & Mengembangkan Website Wordpress bagi Pengembang Web Pemula (Bauran)
        </h2>
      </div>
    </section>

    <div class="flex">
      <section class="md:flex space-y-5 md:space-y-0">
        <n-card class="w-1/2" style="width: 856px">
          <Detail></Detail>
        </n-card>
      </section>

      <section>
        <ActMenu></ActMenu>
        <!-- <ActMenu2></ActMenu2> -->
      </section>
      
    </div>
  </div>
</template>

<style scoped></style>
