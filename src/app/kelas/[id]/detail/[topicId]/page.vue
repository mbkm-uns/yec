<route lang="yaml">
meta:
  layout: authenticated.layout
</route>
<script setup lang="ts">
// import layout from '../layout.vue'
import { PDF, Meet, Presence, Instruksi, Upload, Question2 } from '@/app/kelas/components'
import type { ActivityResponse } from '@/app/kelas/types/activity'
import { useHttp } from '@/composables/http/http'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const programId = computed (() => route.params.id.toString())
const topicId = computed (() => route.params.topicId.toString())
const activityId = computed (() => route.query.id?.toString())

const { data } = useHttp<ActivityResponse>(
  computed(
    () =>
      `/users/v1/myprogram/detail_activity/${route.query.c}/${route.params.topicId}/${route.query.id}`
  )
)


</script>
<template>
  <layout>
    <h4 class="mb-5 text-sm font-semibold">
      {{ data?.data.title }}
    </h4>
    <PDF v-if="data?.data.type === 'membaca-e-book'" :src="data?.data.theory.file.url" />
    <Meet v-if="data?.data.type === 'berdiskusi_daring'" />
    <Presence v-if="data?.data.type === 'evaluasi'" />
    <Instruksi v-if="data?.data.type === 'praktek_mandiri'" :url="data?.data.theory.file.url"  :activity-id="activityId" :topic-id="topicId" :program-id="programId" />
    <Upload v-if="data?.data.type === 'evaluasi_praktek_mandiri'" />
    <Question2 v-if="data?.data.type === 'pre_test'" />
    <!-- <Video v-if="data?.data.type === 'menonton_video'" /> -->
  </layout>
</template>
