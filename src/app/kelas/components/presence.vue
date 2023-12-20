<script setup lang="ts">
import type { ActivityResponse } from '@/app/kelas/types/activity'
import { useHttp } from '@/composables/http/http'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const { data } = useHttp<ActivityResponse>(
  computed(
    () =>
      `/users/v1/myprogram/detail_activity/${route.query.c}/${route.params.topicId}/${route.query.id}`
  )
)
</script>

<template>
  <div class="space-y-3">
    <div class="prose min-w-full w-full max-w-full" v-html="data?.data.theory.description" />
    <iframe :src="data?.data.theory.link_embed.url" class="w-full" style="height: 100vh"> </iframe>
  </div>
</template>
