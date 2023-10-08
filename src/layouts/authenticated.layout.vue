<script setup lang="ts">
import { RouterView } from 'vue-router'
import navbar from '../layouts/components/authenticated/navbar.vue'
import Footer from './components/default/footer.vue'
import { useHttp } from '@/composables/http/http';
const {data}=useHttp('/users/v1/member/detail')
</script>

<template>
  <main>
    <navbar :full-name="data?.data.fullname"></navbar>
    <router-view> </router-view>
    <Footer></Footer>
  </main>
</template>
