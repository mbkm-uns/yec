<script setup lang="ts">
import { RouterView } from 'vue-router'
import { NConfigProvider, type GlobalThemeOverrides } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: 'rgba(225, 110, 27, 0.91)',
    primaryColorHover: 'rgba(225, 110, 27, 0.91)',
    primaryColorPressed: 'rgba(225, 110, 27, 0.91)'
  },
  Button: {
    textColor: '#FF0000'
  }
}
</script>

<template>
  <n-config-provider preflight-style-disabled :theme-overrides="themeOverrides">
    <n-message-provider> <router-view /></n-message-provider>
  </n-config-provider>
</template>

<style></style>
