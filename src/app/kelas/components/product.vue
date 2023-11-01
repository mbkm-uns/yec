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
    <n-image class="h-40 object-cover" object-fit="cover" :src="image" :alt="`${title} image`" />

    <div class="relative pt-3 bg-white space-y-3">
      <p class="h-10 w-full truncate">{{ title }}</p>
      <p class="mt-2">
        <n-gradient-text type="info"> {{ priceCurrency }}</n-gradient-text>
      </p>
      <div>
        <n-button
          strong
          round
          block
          type="primary"
          ghost
          @click="$router.push(`/kelas/${id}/detail`)"
        >
          Beli Kelas Online
        </n-button>
      </div>
    </div>
  </div>
</template>
