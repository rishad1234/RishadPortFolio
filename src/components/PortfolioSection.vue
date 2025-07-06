<script setup lang="ts">
import { ref, computed } from 'vue'

const projects = ref([
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution built with Vue.js, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment processing.',
        image: '/api/placeholder/400/300',
        technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Express.js', 'Stripe API'],
        github: 'https://github.com/yourusername/ecommerce-platform',
        demo: 'https://demo-ecommerce.com',
        featured: true
    },
    {
        id: 2,
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
        image: '/api/placeholder/400/300',
        technologies: ['Vue.js', 'TypeScript', 'Firebase', 'Vuetify'],
        github: 'https://github.com/yourusername/task-manager',
        demo: 'https://demo-taskmanager.com',
        featured: true
    },
    {
        id: 3,
        title: 'Weather Dashboard',
        description: 'A responsive weather dashboard that displays current weather conditions, forecasts, and weather maps using external APIs.',
        image: '/api/placeholder/400/300',
        technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'CSS3'],
        github: 'https://github.com/yourusername/weather-dashboard',
        demo: 'https://demo-weather.com',
        featured: false
    },
    {
        id: 4,
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio website built with Vue.js and Vuetify. Features smooth animations and a clean design.',
        image: '/api/placeholder/400/300',
        technologies: ['Vue.js', 'TypeScript', 'Vuetify', 'Vite'],
        github: 'https://github.com/yourusername/portfolio',
        demo: 'https://yourportfolio.com',
        featured: false
    },
    {
        id: 5,
        title: 'Blog Platform',
        description: 'A full-featured blog platform with markdown support, user authentication, and content management system.',
        image: '/api/placeholder/400/300',
        technologies: ['Vue.js', 'Nuxt.js', 'MongoDB', 'Express.js'],
        github: 'https://github.com/yourusername/blog-platform',
        demo: 'https://demo-blog.com',
        featured: false
    },
    {
        id: 6,
        title: 'Chat Application',
        description: 'Real-time chat application with multiple rooms, file sharing, and user presence indicators.',
        image: '/api/placeholder/400/300',
        technologies: ['Vue.js', 'Socket.io', 'Node.js', 'Redis'],
        github: 'https://github.com/yourusername/chat-app',
        demo: 'https://demo-chat.com',
        featured: false
    }
])

const filter = ref('all')
const filters = ref(['all', 'featured', 'web', 'mobile'])

const filteredProjects = computed(() => {
    if (filter.value === 'all') {
        return projects.value
    } else if (filter.value === 'featured') {
        return projects.value.filter(project => project.featured)
    }
    return projects.value
})
</script>

<template>
    <section id="portfolio" class="portfolio-section">
        <v-container>
            <v-row>
                <v-col cols="12" class="text-center mb-8">
                    <h2 class="display-1 font-weight-bold mb-4">My Portfolio</h2>
                    <p class="headline text-grey-darken-1">
                        Check out some of my recent projects
                    </p>
                </v-col>
            </v-row>

            <v-row class="mb-8">
                <v-col cols="12" class="text-center">
                    <v-btn-toggle v-model="filter" mandatory rounded="pill" color="primary" variant="outlined">
                        <v-btn value="all">All Projects</v-btn>
                        <v-btn value="featured">Featured</v-btn>
                        <v-btn value="web">Web Apps</v-btn>
                        <v-btn value="mobile">Mobile</v-btn>
                    </v-btn-toggle>
                </v-col>
            </v-row>

            <v-row>
                <v-col v-for="project in filteredProjects" :key="project.id" cols="12" md="6" lg="4">
                    <v-card class="project-card" elevation="4" :class="{ 'featured-project': project.featured }">
                        <v-img :src="project.image" :alt="project.title" height="200" cover>
                            <div class="project-overlay">
                                <v-btn icon="mdi-github" size="large" color="white" :href="project.github"
                                    target="_blank" class="ma-2" />
                                <v-btn icon="mdi-open-in-new" size="large" color="white" :href="project.demo"
                                    target="_blank" class="ma-2" />
                            </div>
                        </v-img>

                        <v-card-title class="text-h6 font-weight-bold">
                            {{ project.title }}
                            <v-chip v-if="project.featured" color="primary" size="small" class="ml-2">
                                Featured
                            </v-chip>
                        </v-card-title>

                        <v-card-text>
                            <p class="text-body-2 mb-3">{{ project.description }}</p>

                            <div class="tech-chips">
                                <v-chip v-for="tech in project.technologies" :key="tech" size="small" variant="outlined"
                                    class="ma-1">
                                    {{ tech }}
                                </v-chip>
                            </div>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn color="primary" variant="text" :href="project.demo" target="_blank">
                                <v-icon left>mdi-open-in-new</v-icon>
                                Live Demo
                            </v-btn>

                            <v-btn color="secondary" variant="text" :href="project.github" target="_blank">
                                <v-icon left>mdi-github</v-icon>
                                Code
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>

            <v-row class="mt-8">
                <v-col cols="12" class="text-center">
                    <p class="text-body-1 mb-4">
                        Want to see more of my work?
                    </p>
                    <v-btn color="primary" size="large" href="https://github.com/yourusername" target="_blank">
                        <v-icon left>mdi-github</v-icon>
                        View All Projects on GitHub
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<style scoped>
.portfolio-section {
    padding: 80px 0;
    background-color: #ffffff;
}

.project-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;
}

.featured-project {
    border: 2px solid #1976D2;
}

.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
    opacity: 1;
}

.tech-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
}
</style>
