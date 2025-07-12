<script setup lang="ts">
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with Vue.js, Node.js, and MongoDB. Features user auth, product catalog, and payment processing.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/yourusername/ecommerce-platform',
    demo: 'https://demo-ecommerce.com',
    year: '2024'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates, drag-and-drop, and team features.',
    technologies: ['Vue.js', 'TypeScript', 'Firebase', 'Vuetify'],
    github: 'https://github.com/yourusername/task-manager',
    demo: 'https://demo-taskmanager.com',
    year: '2024'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Responsive weather dashboard with current conditions, forecasts, and interactive maps.',
    technologies: ['Vue.js', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com/yourusername/weather-dashboard',
    demo: 'https://demo-weather.com',
    year: '2023'
  },
  {
    id: 4,
    title: 'Blog Platform',
    description: 'Full-featured blog with markdown support, user authentication, and CMS functionality.',
    technologies: ['Nuxt.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/yourusername/blog-platform',
    demo: 'https://demo-blog.com',
    year: '2023'
  }
])
</script>

<template>
  <section class="projects-section">
    <div class="projects-container">
      <div class="projects-content">
        <h2 class="section-title">Projects</h2>
        
        <div class="projects-list">
          <div 
            v-for="project in projects" 
            :key="project.id" 
            class="project-item"
          >
            <div class="project-header">
              <h3 class="project-title">
                <a 
                  :href="project.demo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="project-link"
                >
                  {{ project.title }}
                  <v-icon size="small" class="external-link-icon">mdi-open-in-new</v-icon>
                </a>
              </h3>
              <span class="project-year">{{ project.year }}</span>
            </div>
            
            <p class="project-description">
              {{ project.description }}
            </p>
            
            <div class="project-footer">
              <div class="project-technologies">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech" 
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
              
              <div class="project-links">
                <a 
                  :href="project.github" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="project-action"
                >
                  <v-icon size="small">mdi-github</v-icon>
                  Code
                </a>
                <a 
                  :href="project.demo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="project-action"
                >
                  <v-icon size="small">mdi-open-in-new</v-icon>
                  Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="more-projects">
          <p class="more-text">
            View more projects on my 
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              class="github-link"
            >
              GitHub
              <v-icon size="small">mdi-open-in-new</v-icon>
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 4rem 0;
  border-top: 1px solid rgb(var(--v-theme-outline));
  width: 100%;
  background-color: rgb(var(--v-theme-background));
  color: rgb(var(--v-theme-on-background));
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.projects-container {
  width: 100%;
  padding: 2rem;
}

.projects-content {
  width: 100%;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: rgb(var(--v-theme-on-background));
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.section-title::before {
  content: '$ ';
  color: rgb(var(--v-theme-primary));
  font-family: 'Courier New', monospace;
}

.projects-list {
  margin-bottom: 3rem;
}

.project-item {
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(var(--v-border-color), 0.1);
}

.project-item:last-child {
  border-bottom: none;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.project-title {
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
}

.project-link {
  color: rgb(var(--v-theme-on-surface));
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease;
}

.project-link:hover {
  color: rgb(var(--v-theme-primary));
}

.external-link-icon {
  opacity: 0.6;
}

.project-year {
  font-size: 0.875rem;
  color: rgb(var(--v-theme-on-surface));
  opacity: 0.6;
  font-family: 'Courier New', monospace;
}

.project-description {
  margin: 0.5rem 0 1rem 0;
  color: rgb(var(--v-theme-on-surface));
  opacity: 0.8;
  line-height: 1.6;
}

.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.25rem 0.5rem;
  background-color: rgba(var(--v-theme-on-surface), 0.1);
  color: rgb(var(--v-theme-on-surface));
  border-radius: 4px;
  font-size: 0.75rem;
  font-family: 'Courier New', monospace;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-action {
  color: rgb(var(--v-theme-primary));
  text-decoration: none;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: opacity 0.2s ease;
}

.project-action:hover {
  opacity: 0.8;
}

.more-projects {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(var(--v-border-color), 0.1);
}

.more-text {
  color: rgb(var(--v-theme-on-surface));
  opacity: 0.8;
}

.github-link {
  color: rgb(var(--v-theme-primary));
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  transition: opacity 0.2s ease;
}

.github-link:hover {
  opacity: 0.8;
}
</style>
