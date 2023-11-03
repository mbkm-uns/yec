<script setup lang="ts">
import type { ActivityResponse } from '@/app/kelas/types/activity'
import { useHttp } from '@/composables/http/http'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const { data } = useHttp<ActivityResponse>(
  computed(
    () =>
      `/users/v1/myprogram/detail_activity/${route.params.id}/${route.params.topicId}/${route.query.id}`
  )
)
</script>

<template>
  <div class="space-y-3">
    <div v-html="data?.data.theory.description" />
    <iframe :src="data?.data.theory.link_embed.url" class="w-full" style="height: 100vh"> </iframe>
  </div>
</template>
