<script setup lang="ts">
import { Result } from '../../kelas/components'
</script>
<template>
  <Result
    :score="80"
    :score-max="100"
    :rules="[
      { label: 'Kesempatan mengulang', value: 'Tanpa batas' },
      { label: 'Nilai minimal', value: '70' }
    ]"
  />
</template>
