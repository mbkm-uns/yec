<script setup lang="ts">
const props = defineProps<{
  rules: { label: string; value: string }[]
  score: number
  scoreMax: number
}>()
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
    >
      <path
        d="M105 50V45L75 15H25C19.45 15 15 19.45 15 25V95C15 97.6522 16.0536 100.196 17.9289 102.071C19.8043 103.946 22.3478 105 25 105H55V95.65L96.95 53.7C99.15 51.5 101.95 50.3 105 50ZM70 22.5L97.5 50H70V22.5ZM114.25 70.95L109.35 75.85L99.15 65.65L104.05 60.75C105 59.75 106.65 59.75 107.65 60.75L114.25 67.35C115.25 68.35 115.25 70 114.25 70.95ZM95.65 69.15L105.85 79.35L75.2 110H65V99.8L95.65 69.15Z"
        fill="#D9D9D9"
      />
    </svg>
    <n-list class="w-full">
      <n-list-item v-for="(item, index) in props.rules" :key="index">
        <div class="flex justify-between">
          <div>{{ item.label }}</div>
          <div>{{ item.value }}</div>
        </div>
      </n-list-item>
    </n-list>
    <div class="font-bold">Nilai</div>
    <div class="font-semibold flex items-center gap-1 text-[#F05326]">
      <div class="text-5xl">{{ props.score }}</div>
      <div class="text-4xl">/</div>
      <div class="text-4xl">{{props.scoreMax}}</div>
    </div>
    <n-button type="primary">Lihat Jawaban</n-button>
    <n-button>Ulangi Kuis</n-button>
    <n-button type="primary">Klik Activity Selanjutnya</n-button>
  </div>
</template>
