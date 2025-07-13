<script setup lang="ts">
import { ref, onMounted } from 'vue'

const currentTime = ref('')
const location = 'Dhaka, Bangladesh'

const updateTime = () => {
    const now = new Date()
    const timeString = now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
    })
    const dayString = now.toLocaleDateString('en-US', { 
        weekday: 'short'
    })
    currentTime.value = `${dayString} ${timeString}`
}

onMounted(() => {
    updateTime()
    setInterval(updateTime, 1000)
})

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<template>
    <section id="home" class="hero-section">
        <div class="hero-container">
            <!-- Header with time and location -->
            <div class="header-info mb-8">
                <h3 class="text-h6 font-weight-light text-grey">
                    {{ currentTime }}, {{ location }}
                </h3>
            </div>

            <!-- Main hero content -->
            <div class="hero-content">
                <h4 class="text-h6 font-weight-light text-grey mb-2">
                    Hi! My Name is
                </h4>
                
                <h1 class="hero-title text-h2 text-md-h1 font-weight-bold mb-6">
                    Rishadul Islam Khan
                </h1>

                <p class="hero-description text-h6 text-md-h5 font-weight-light mb-8 text-grey-lighten-1">
                    Welcome! I specialize in crafting exceptional digital experiences through 
                    full-stack development and innovative problem-solving.
                    <br><br>
                    With years of experience building modern web applications, I bring a unique 
                    blend of technical expertise and creative vision to every project. My passion 
                    lies in transforming complex challenges into elegant, scalable solutions.
                    <br><br>
                    Let's build something extraordinary together.
                </p>

                <!-- Social Links -->
                <div class="social-links">
                    <v-btn 
                        variant="text" 
                        class="social-link pa-0 justify-start"
                        href="https://github.com/rishad1234"
                        target="_blank"
                    >
                        Follow me on Github!
                    </v-btn>
                    
                    <v-btn 
                        variant="text" 
                        class="social-link pa-0 justify-start"
                        href="https://www.linkedin.com/in/rishadul-islam-khan-47931a14b"
                        target="_blank"
                    >
                        Connect with me on LinkedIn!
                    </v-btn>
                    
                    <v-btn 
                        variant="text" 
                        class="social-link pa-0 justify-start"
                        href="mailto:rishadulislam@outlook.com"
                    >
                        Email me
                    </v-btn>

                    <v-btn 
                        variant="text" 
                        class="social-link pa-0 justify-start"
                        @click="scrollToSection('experience')"
                    >
                        View my work experience
                    </v-btn>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero-section {
    min-height: 100vh;
    background-color: rgb(var(--v-theme-background));
    color: rgb(var(--v-theme-on-background));
    display: flex;
    align-items: flex-start;
    padding-top: 20px;
    width: 100%;
    transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-container {
    width: 100%;
    padding: 2rem;
}

.hero-title {
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: rgb(var(--v-theme-on-background));
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-description {
    line-height: 1.6;
    color: rgb(var(--v-theme-secondary));
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.social-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
}

.social-link {
    font-size: 1.1rem !important;
    font-weight: 400 !important;
    text-transform: none !important;
    color: rgb(var(--v-theme-on-background)) !important;
    min-height: auto !important;
    padding: 4px 0 !important;
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color 0.2s ease, text-decoration-color 0.2s ease;
}

.social-link:hover {
    color: rgb(var(--v-theme-primary)) !important;
    text-decoration: underline;
    text-decoration-color: rgb(var(--v-theme-primary));
}

.header-info {
    border-bottom: 1px solid rgb(var(--v-theme-outline));
    padding-bottom: 16px;
    transition: border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.header-info h3 {
    color: rgb(var(--v-theme-secondary)) !important;
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Text color overrides for proper theme support */
.text-grey {
    color: rgb(var(--v-theme-secondary)) !important;
}

.text-grey-lighten-1 {
    color: rgb(var(--v-theme-secondary-lighten-1)) !important;
}
</style>
