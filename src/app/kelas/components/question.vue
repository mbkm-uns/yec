<script setup lang="ts">
import type { CountdownInst } from 'naive-ui'
import { ref } from 'vue'

const props = defineProps<{
  question: string
  choices: { label: string; value: string }[]
  duration?: number
  number: number
}>()

const value = ref()

const active = ref(true)
const countdownRef = ref<CountdownInst>()
const isDisabled = ref(false)

watch(
  computed(() => props.number),
  () => {
    isDisabled.value = false
    countdownRef.value?.reset()
  }
)
</script>
<template>
  <div class="space-y-3">
    <div class="flex gap-5">
      <slot />
      <n-countdown
        ref="countdownRef"
        :duration="duration || 1000"
        :active="active"
        :on-finish="
          () => {
            isDisabled = true
          }
        "
      />
    </div>
    <div>
      <p>
        <span class="select-none">{{ number || 1 }}. </span>{{ question }}
      </p>
    </div>
    <n-radio-group v-model:value="value" :disabled="isDisabled">
      <div class="grid grid-cols-1 gap-3">
        <n-radio v-for="choice in choices" :key="choice.label" :value="choice.value">
          {{ choice.label }}
        </n-radio>
      </div>
    </n-radio-group>
  </div>
</template>
