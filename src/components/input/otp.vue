<script setup lang="ts">
  import type { InputInst } from 'naive-ui'

  const props = defineProps<{
    length?: number
    otp?: string
  }>()
  const emit = defineEmits(['update:value'])

  const otp = ref<string[]>(new Array(props.length).fill(0).map(() => '') as string[])
  const otpRef = ref<InputInst[]>()

  const handleKeyDown = function (event: KeyboardEvent, index: number) {
    if (
      event.key !== 'Tab' &&
      event.key !== 'ArrowRight' &&
      event.key !== 'ArrowLeft'
    ) {
      event.preventDefault()
    }

    if (event.key === 'Backspace') {
      otp.value[index] = ''

      if (otpRef.value && index != 0) {
        otpRef.value[index - 1]?.focus()
      }

      return
    }

    if (new RegExp('^([0-9])$').test(event.key)) {
      otp.value[index] = event.key

      if (otpRef.value && index != length - 1) {
        otpRef.value[index + 1]?.focus()
      }
    }
  }

  watch(
    otp,
    () => {
      emit('update:value', otp.value.join(''))
    },
    { deep: true },
  )
</script>

<template>
  <div :class="$style.otp_wrapper">
    <n-input
      v-for="(item, index) in otp"
      :key="index"
      ref="otpRef"
      v-model:value="otp[index]"
      style="height: 4rem"
      placeholder=""
      @keydown="handleKeyDown($event, index)"
    />
  </div>
</template>

<style module lang="postcss">
  .otp_wrapper {
    @apply flex gap-5;
  }
  .otp_wrapper > * {
    @apply text-center flex items-center justify-center;
  }
</style>