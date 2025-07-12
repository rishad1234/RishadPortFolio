<template>
  <v-app>
    <v-main>
      <RouterView />
      <ThemeToggle />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import ThemeToggle from '@/components/ThemeToggle.vue'
</script>

<style>
/* Import Inter font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* Global styles for full width content */
.v-application {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: rgb(var(--v-theme-background));
  color: rgb(var(--v-theme-on-background));
}

.v-main {
  min-height: 100vh;
  background-color: rgb(var(--v-theme-background));
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Reset defaults and stretch content full width */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: rgb(var(--v-theme-background));
  color: rgb(var(--v-theme-on-background));
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.v-main__wrap {
  padding: 0 !important;
}

section {
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: rgb(var(--v-theme-background));
  color: rgb(var(--v-theme-on-background));
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced typography */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.2;
}

p {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  font-weight: 400;
}

/* Selection colors */
::selection {
  background-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-on-primary));
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgb(var(--v-theme-surface));
}

::-webkit-scrollbar-thumb {
  background: rgb(var(--v-theme-outline));
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(var(--v-theme-outline-variant));
}

/* Focus styles */
:focus {
  outline: 2px solid rgb(var(--v-theme-primary));
  outline-offset: 2px;
}

/* Link styles */
a {
  color: rgb(var(--v-theme-primary));
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: rgb(var(--v-theme-primary-lighten-1));
}
</style>
