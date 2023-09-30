<script setup lang="ts">
import { RouterView } from 'vue-router'
import navbar from '../components/navbar/navbar.vue';
import Footer from '../components/footer/index.vue';
</script>

<template>
  <main>
    <navbar></navbar>
    <router-view> </router-view>
    <Footer></Footer>
  </main>
</template>
