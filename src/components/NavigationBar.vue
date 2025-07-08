<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useThemeToggle } from '@/composables/useThemeToggle'

defineEmits<{
    'toggle-drawer': []
}>()

const router = useRouter()
const { currentTheme, toggleTheme } = useThemeToggle()

// Mobile drawer state
const drawer = ref(false)

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
    // Close drawer on mobile after navigation
    drawer.value = false
}

const navigateToRoute = (route: string) => {
    router.push(route)
    drawer.value = false
}

const menuItems = [
    { title: 'Home', action: () => navigateToSection('home') },
    { title: 'About', action: () => navigateToSection('about') },
    { title: 'Portfolio', action: () => navigateToSection('portfolio') },
    { title: 'Contact', action: () => navigateToSection('contact') },
    { title: 'Theme Test', action: () => navigateToRoute('/theme-test') },
    { title: 'Responsive Test', action: () => navigateToRoute('/responsive-test') },
]
</script>

<template>
    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer 
        v-model="drawer" 
        temporary 
        location="left"
        class="d-md-none"
    >
        <v-list>
            <v-list-item
                v-for="item in menuItems"
                :key="item.title"
                @click="item.action"
                class="nav-item"
            >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
            
            <!-- Mobile Theme Toggle -->
            <v-list-item @click="toggleTheme" class="nav-item">
                <template #prepend>
                    <v-icon>
                        {{ currentTheme === 'dark' ? 'mdi-brightness-7' : 'mdi-brightness-4' }}
                    </v-icon>
                </template>
                <v-list-item-title>
                    {{ currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode' }}
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar app elevation="2" color="primary">
        <!-- Mobile menu button -->
        <v-app-bar-nav-icon 
            @click="drawer = !drawer" 
            class="d-md-none"
        ></v-app-bar-nav-icon>

        <!-- Logo/Title -->
        <v-toolbar-title class="font-weight-bold">
            <router-link to="/" class="text-decoration-none text-white">
                <span class="d-none d-sm-inline">Rishad's Portfolio</span>
                <span class="d-sm-none">Rishad</span>
            </router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- Desktop Navigation -->
        <div class="d-none d-md-flex align-center">
            <v-btn 
                text 
                @click="navigateToSection('home')"
                class="nav-btn"
                :size="$vuetify.display.xl ? 'large' : 'default'"
            >
                Home
            </v-btn>

            <v-btn 
                text 
                @click="navigateToSection('about')"
                class="nav-btn"
                :size="$vuetify.display.xl ? 'large' : 'default'"
            >
                About
            </v-btn>

            <v-btn 
                text 
                @click="navigateToSection('portfolio')"
                class="nav-btn"
                :size="$vuetify.display.xl ? 'large' : 'default'"
            >
                Portfolio
            </v-btn>

            <v-btn 
                text 
                @click="navigateToSection('contact')"
                class="nav-btn"
                :size="$vuetify.display.xl ? 'large' : 'default'"
            >
                Contact
            </v-btn>

            <v-btn 
                text 
                @click="() => router.push('/theme-test')"
                class="nav-btn d-none d-xl-flex"
                :size="$vuetify.display.xl ? 'large' : 'default'"
            >
                Theme Test
            </v-btn>

            <v-btn 
                text 
                @click="() => router.push('/responsive-test')"
                class="nav-btn d-none d-xl-flex"
                :size="$vuetify.display.xl ? 'large' : 'default'"
            >
                Responsive Test
            </v-btn>
        </div>

        <!-- Desktop Theme Toggle -->
        <v-btn 
            icon 
            @click="toggleTheme" 
            :title="`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} theme`"
            class="theme-toggle-btn ml-2"
            :size="$vuetify.display.xl ? 'large' : 'default'"
        >
            <v-icon :size="$vuetify.display.xl ? 28 : 24">
                {{ currentTheme === 'dark' ? 'mdi-brightness-7' : 'mdi-brightness-4' }}
            </v-icon>
        </v-btn>
    </v-app-bar>
</template>

<style scoped>
.v-toolbar-title a {
    color: inherit;
}

.theme-toggle-btn {
    transition: all 0.3s ease;
}

.theme-toggle-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
}

.nav-btn {
    margin: 0 2px;
    min-width: 60px;
}

.nav-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.nav-item {
    transition: background-color 0.3s ease;
}

.nav-item:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

/* Mobile optimization */
@media (max-width: 959px) {
    .v-toolbar-title {
        font-size: 1.1rem;
    }
}

@media (max-width: 599px) {
    .v-toolbar-title {
        font-size: 1rem;
    }
}
</style>
