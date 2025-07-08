<template>
  <v-chip
    :color="currentTheme === 'dark' ? 'primary' : 'secondary'"
    variant="elevated"
    size="small"
    class="theme-indicator"
  >
    <v-icon start :icon="currentTheme === 'dark' ? 'mdi-brightness-4' : 'mdi-brightness-7'"></v-icon>
    {{ currentTheme === 'dark' ? 'Dark' : 'Light' }} Mode
  </v-chip>
</template>

<script setup lang="ts">
import { useThemeToggle } from '@/composables/useThemeToggle'

const { currentTheme } = useThemeToggle()
</script>

<style scoped>
.theme-indicator {
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 1000;
  transition: all 0.3s ease;
}

@media (max-width: 600px) {
  .theme-indicator {
    top: 70px;
    right: 10px;
  }
}
</style>
