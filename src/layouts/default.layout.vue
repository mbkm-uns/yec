<script setup lang="ts">
import { RouterView } from 'vue-router'
import navbar from '../components/navbar/navbar.vue';
</script>

<template>
  <main>
    <navbar></navbar>
    <router-view />
  </main>
</template>
