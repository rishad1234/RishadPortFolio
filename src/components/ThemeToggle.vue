<template>
  <v-btn
    @click="toggleTheme"
    variant="text"
    icon
    size="small"
    class="theme-toggle-btn"
    :title="currentTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
  >
    <v-icon 
      :icon="currentTheme === 'dark' ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent'"
      class="theme-icon"
    ></v-icon>
  </v-btn>
</template>

<script setup lang="ts">
import { useThemeToggle } from '@/composables/useThemeToggle'

const { currentTheme, toggleTheme } = useThemeToggle()
</script>

<style scoped>
.theme-toggle-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  background: rgba(var(--v-theme-surface), 0.9) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgb(var(--v-theme-outline));
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.theme-toggle-btn:hover {
  background: rgba(var(--v-theme-surface), 1) !important;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.theme-icon {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: rgb(var(--v-theme-on-surface));
}

.theme-toggle-btn:hover .theme-icon {
  transform: rotate(15deg);
}

/* Add a subtle pulse animation when toggling */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.theme-toggle-btn:active {
  animation: pulse 0.2s ease-in-out;
}
</style>
