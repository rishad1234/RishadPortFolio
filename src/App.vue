<template>
  <v-app>
    <v-app-bar app elevation="2" color="primary">
      <v-toolbar-title class="font-weight-bold">
        Rishad's Portfolio
      </v-toolbar-title>
    </v-app-bar>
    
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped>
/* Custom styles */
</style>
