<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineEmits<{
    'toggle-drawer': []
}>()

const router = useRouter()
const theme = ref('dark')

const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

const navigateToSection = (section: string) => {
    if (router.currentRoute.value.path === '/') {
        // If on home page, scroll to section
        const element = document.getElementById(section)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    } else {
        // If not on home page, navigate to home then scroll
        router.push('/').then(() => {
            setTimeout(() => {
                const element = document.getElementById(section)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                }
            }, 100)
        })
    }
}
</script>

<template>
    <v-app-bar app elevation="2" color="primary">
        <v-app-bar-nav-icon @click="$emit('toggle-drawer')" class="d-md-none"></v-app-bar-nav-icon>

        <v-toolbar-title class="font-weight-bold">
            <router-link to="/" class="text-decoration-none text-white">
                Rishad's Portfolio
            </router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn text class="d-none d-md-flex" @click="navigateToSection('home')">
            Home
        </v-btn>

        <v-btn text class="d-none d-md-flex" @click="navigateToSection('about')">
            About
        </v-btn>

        <v-btn text class="d-none d-md-flex" @click="navigateToSection('portfolio')">
            Portfolio
        </v-btn>

        <v-btn text class="d-none d-md-flex" @click="navigateToSection('contact')">
            Contact
        </v-btn>

        <v-btn icon @click="toggleTheme">
            <v-icon>{{ theme === 'dark' ? 'mdi-brightness-7' : 'mdi-brightness-4' }}</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<style scoped>
.v-toolbar-title a {
    color: inherit;
}
</style>
