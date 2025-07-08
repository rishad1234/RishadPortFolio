<template>
  <v-app>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style>
/* Global styles for full width content */
.v-application {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.v-main {
  min-height: 100vh;
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
}

.v-main__wrap {
  padding: 0 !important;
}

section {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
