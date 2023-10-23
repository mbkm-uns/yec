<script setup lang="ts">
  // @ts-ignore

  const props = defineProps<{
    name: string
  }>()

  const getInitials = function (str: string) {
    var names = str.split(' '),
      initials = names[0].substring(0, 1).toUpperCase()

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase()
    }
    return initials
  }

  const getHashOfString = (str: string) => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }
    hash = Math.abs(hash)
    return hash
  }

  const normalizeHash = (hash: number, min: number, max: number) => {
    return Math.floor((hash % (max - min)) + min)
  }

  const avatarColor = computed(() => {
    const h = normalizeHash(getHashOfString(props.name), 0, 360)
    const s = normalizeHash(getHashOfString(props.name), 50, 75)
    const l = normalizeHash(getHashOfString(props.name), 25, 60)

    const HSLtoString = (hsl: number[]) => {
     return `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`
    }

    return HSLtoString([h, s, l])
  })
</script>

<template>
  <template v-if="name">
    <n-avatar
    src=""
    round
      :style="{
        color: '#fff',
        backgroundColor: avatarColor,
      }"
      >{{ getInitials(name) }}</n-avatar
    >
  </template>
</template>