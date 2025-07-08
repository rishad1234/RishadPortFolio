<script setup lang="ts">
import { ref } from 'vue'
import { useThemeToggle } from '@/composables/useThemeToggle'

const { currentTheme, toggleTheme } = useThemeToggle()

const skipToContent = () => {
    const element = document.getElementById('home')
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<template>
    <!-- Skip Navigation (accessibility) -->
    <a href="#home" class="skip-nav" @click.prevent="skipToContent">
        skip navigation
    </a>

    <!-- Minimal App Bar -->
    <v-app-bar 
        app 
        elevation="0" 
        color="transparent"
        class="minimal-nav"
        height="64"
    >
        <v-spacer></v-spacer>

        <!-- Theme Toggle -->
        <v-btn 
            icon 
            @click="toggleTheme" 
            :title="`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} theme`"
            class="theme-toggle-btn"
            size="small"
        >
            <v-icon size="20">
                {{ currentTheme === 'dark' ? 'mdi-brightness-7' : 'mdi-brightness-4' }}
            </v-icon>
        </v-btn>
    </v-app-bar>
</template>

<style scoped>
.skip-nav {
    position: absolute;
    top: -40px;
    left: 6px;
    background: rgb(var(--v-theme-primary));
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    font-size: 14px;
    z-index: 1000;
    transition: top 0.3s ease;
}

.skip-nav:focus {
    top: 6px;
}

.minimal-nav {
    border-bottom: 1px solid rgba(var(--v-border-color), 0.1);
    background-color: rgba(var(--v-theme-surface), 0.8) !important;
    backdrop-filter: blur(10px);
}

.theme-toggle-btn {
    transition: all 0.3s ease;
    color: inherit !important;
}

.theme-toggle-btn:hover {
    background-color: rgba(var(--v-theme-primary), 0.1) !important;
    transform: scale(1.05);
}

/* Mobile optimization */
@media (max-width: 600px) {
    .minimal-nav {
        height: 56px !important;
    }
}
</style>
