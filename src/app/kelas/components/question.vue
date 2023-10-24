<script setup lang="ts">
import type { CountdownInst } from 'naive-ui'
import { ref } from 'vue'

const emit = defineEmits(['update:value'])
const props = defineProps<{
  question: string
  choices: { label: string; value: string }[]
  duration: number
  number: number
  value?: string | null
  totalQuestion: number
}>()

const onUpdate = (value: any) => {
  emit('update:value', value)
}
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
const divideDuration = computed(() => props.duration / props.totalQuestion)
</script>
<template>
  <div class="space-y-3">
    <div class="flex gap-5 justify-between">
      <slot />
      <n-countdown
        ref="countdownRef"
        :duration="divideDuration || 1000"
        :active="active"
        :on-finish="
          () => {
            isDisabled = true
          }
        "
      />
      <div class="flex justify-evenly">
        <n-button>submit</n-button>
      </div>
    </div>
    <div>
      <p>
        <span class="select-none">{{ number || 1 }}. </span>{{ question }}
      </p>
    </div>
    <n-radio-group :value="value || null" :disabled="isDisabled" @update-value="onUpdate">
      <div class="grid grid-cols-1 gap-3">
        <n-radio v-for="choice in choices" :key="choice.label" :value="choice.value">
          {{ choice.label }}
        </n-radio>
      </div>
    </n-radio-group>
  </div>
</template>
