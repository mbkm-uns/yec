<script setup lang="ts">
const props = defineProps<{
  id: string
  title: string
  price: number
  image: string
}>()

const priceCurrency = computed(() => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(props.price)
})
</script>

<template>
  <div class="block overflow-hidden group">
    <img :src="image" :alt="`${title} image`" />

    <div class="relative pt-3 bg-white space-y-3">
      <n-text>{{ title }}</n-text>
      <p class="mt-2">
        <n-gradient-text type="info"> {{ priceCurrency }}</n-gradient-text>
      </p>
      <div>
        <n-button strong round block type="primary" @click="$router.push(`/kelas/${id}/detail`)">
          Beli Kelas Online
        </n-button>
      </div>
    </div>
  </div>
</template>
