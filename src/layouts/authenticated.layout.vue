<script setup lang="ts">
import { RouterView } from 'vue-router'
import navbar from '../layouts/components/authenticated/navbar.vue'
import Footer from './components/default/footer.vue'
</script>

<template>
  <main>
    <navbar></navbar>
    <router-view> </router-view>
    <Footer></Footer>
  </main>
</template>
