<template>
  <v-app>
    <NavigationBar @toggle-drawer="() => {}" />
    <ThemeIndicator />

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import ThemeIndicator from './components/ThemeIndicator.vue'
</script>

<style>
/* Global responsive styles */
.v-application {
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Ensure full height for theme background */
.v-main {
  min-height: 100vh;
}

/* Ultra-wide and large screen optimizations */
@media (min-width: 2560px) {
  .v-container {
    max-width: 95% !important;
    padding: 32px !important;
  }
  
  .v-card {
    margin-bottom: 32px !important;
  }
  
  .v-card-title {
    font-size: 2rem !important;
    padding: 24px !important;
  }
  
  .v-card-text {
    font-size: 1.2rem !important;
    padding: 24px !important;
  }
  
  .v-toolbar-title {
    font-size: 1.8rem !important;
  }
}

@media (min-width: 1920px) and (max-width: 2559px) {
  .v-container {
    max-width: 92% !important;
    padding: 24px !important;
  }
  
  .v-card {
    margin-bottom: 28px !important;
  }
  
  .v-card-title {
    font-size: 1.8rem !important;
    padding: 20px !important;
  }
  
  .v-card-text {
    font-size: 1.1rem !important;
    padding: 20px !important;
  }
  
  .v-toolbar-title {
    font-size: 1.6rem !important;
  }
}

@media (min-width: 1600px) and (max-width: 1919px) {
  .v-container {
    max-width: 88% !important;
    padding: 20px !important;
  }
  
  .v-card {
    margin-bottom: 26px !important;
  }
  
  .v-card-title {
    font-size: 1.7rem !important;
    padding: 18px !important;
  }
  
  .v-card-text {
    font-size: 1.08rem !important;
    padding: 18px !important;
  }
  
  .v-toolbar-title {
    font-size: 1.5rem !important;
  }
}

/* Mobile optimization */
@media (max-width: 959px) {
  .v-container {
    padding: 12px !important;
  }
}

@media (max-width: 599px) {
  .v-container {
    padding: 8px !important;
  }
  
  .v-card {
    margin-bottom: 16px !important;
  }
  
  .v-card-title {
    font-size: 1.2rem !important;
    padding: 12px !important;
  }
  
  .v-card-text {
    padding: 12px !important;
  }
}

/* Wide screen layout optimizations */
@media (min-width: 1920px) {
  .v-container.fluid {
    max-width: 96% !important;
    padding-left: 2% !important;
    padding-right: 2% !important;
  }
  
  .v-row {
    justify-content: space-between !important;
  }
  
  /* Expand hero section for wide screens */
  .hero-section .v-container {
    max-width: 100% !important;
    padding-left: 1% !important;
    padding-right: 1% !important;
  }
  
  /* Portfolio grid adjustments */
  .portfolio-section .v-row {
    gap: 1rem !important;
  }
  
  /* About section expansions */
  .about-section .v-container {
    max-width: 96% !important;
  }
}

/* Specific optimizations for 1920x1080 and similar resolutions */
@media (min-width: 1600px) and (max-width: 1920px) {
  .v-container.fluid {
    max-width: 93% !important;
    padding-left: 3.5% !important;
    padding-right: 3.5% !important;
  }
  
  .hero-section .v-container {
    max-width: 100% !important;
    padding-left: 2% !important;
    padding-right: 2% !important;
  }
  
  .about-section .v-container {
    max-width: 93% !important;
  }
  
  .portfolio-section .v-container {
    max-width: 93% !important;
  }
}

@media (min-width: 2560px) {
  .v-container.fluid {
    max-width: 98% !important;
  }
  
  /* Ultra-wide specific adjustments */
  .hero-section .v-col {
    max-width: 80% !important;
  }
  
  .portfolio-section .v-col {
    min-width: 300px !important;
  }
  
  /* Add more breathing room */
  .v-card {
    min-height: 400px !important;
  }
}

/* Responsive typography for large screens */
@media (min-width: 1920px) {
  .text-h4 {
    font-size: 2.5rem !important;
  }
  
  .text-h5 {
    font-size: 2rem !important;
  }
  
  .text-h6 {
    font-size: 1.6rem !important;
  }
  
  .text-body-1 {
    font-size: 1.2rem !important;
  }
}

@media (min-width: 1280px) and (max-width: 1919px) {
  .text-h4 {
    font-size: 2.2rem !important;
  }
  
  .text-h5 {
    font-size: 1.8rem !important;
  }
  
  .text-h6 {
    font-size: 1.4rem !important;
  }
  
  .text-body-1 {
    font-size: 1.1rem !important;
  }
}

/* Medium screen typography */
@media (max-width: 959px) {
  .text-h4 {
    font-size: 1.5rem !important;
  }
  
  .text-h5 {
    font-size: 1.3rem !important;
  }
}

@media (max-width: 599px) {
  .text-h4 {
    font-size: 1.3rem !important;
  }
  
  .text-h5 {
    font-size: 1.2rem !important;
  }
  
  .text-body-1 {
    font-size: 0.9rem !important;
  }
}

/* Responsive buttons for large screens */
@media (min-width: 1920px) {
  .v-btn {
    font-size: 1.1rem !important;
  }
  
  .v-btn.v-btn--size-large {
    font-size: 1.3rem !important;
  }
  
  .v-btn.v-btn--size-x-large {
    font-size: 1.5rem !important;
  }
}

@media (min-width: 1280px) and (max-width: 1919px) {
  .v-btn {
    font-size: 1.05rem !important;
  }
  
  .v-btn.v-btn--size-large {
    font-size: 1.2rem !important;
  }
}

/* Mobile buttons */
@media (max-width: 599px) {
  .v-btn {
    font-size: 0.8rem !important;
  }
  
  .v-btn.v-btn--size-large {
    font-size: 0.9rem !important;
  }
}

/* Responsive spacing */
@media (min-width: 1920px) {
  .gap-4 {
    gap: 2rem !important;
  }
  
  .mb-6 {
    margin-bottom: 3rem !important;
  }
  
  .mb-8 {
    margin-bottom: 4rem !important;
  }
  
  .mb-12 {
    margin-bottom: 6rem !important;
  }
  
  .py-8 {
    padding-top: 4rem !important;
    padding-bottom: 4rem !important;
  }
  
  .py-12 {
    padding-top: 6rem !important;
    padding-bottom: 6rem !important;
  }
}
</style>
