<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { portfolioService, type PortfolioData } from '@/services/portfolioService';

// Reactive data
const portfolioData = ref<PortfolioData | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);

// Load portfolio data on component mount
onMounted(() => {
  try {
    portfolioData.value = portfolioService.getPortfolioData();
  } catch (err) {
    error.value = 'Failed to load portfolio information';
    console.error('Error loading portfolio data:', err);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="projects-container">
      <div class="projects-content">
        <h2 class="section-title">Projects</h2>
        
        <!-- Loading state -->
        <div v-if="loading" class="loading-state">
          <p>Loading...</p>
        </div>
        
        <!-- Error state -->
        <div v-else-if="error" class="error-state">
          <p>{{ error }}</p>
        </div>

        <!-- Content when data is loaded -->
        <template v-else-if="portfolioData">
          <div class="projects-list">
            <div 
              v-for="project in portfolioData.projects" 
              :key="project.id" 
              class="project-item"
            >
              <div class="project-header">
                <h3 class="project-title">
                  <a 
                    v-if="project.demo"
                    :href="project.demo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="project-link"
                  >
                    {{ project.title }}
                    <v-icon size="small" class="external-link-icon">mdi-open-in-new</v-icon>
                  </a>
                  <span v-else class="project-title-text">
                    {{ project.title }}
                    <v-chip 
                      v-if="project.featured" 
                      size="x-small" 
                      color="primary" 
                      variant="outlined"
                      class="ml-2"
                    >
                      Featured
                    </v-chip>
                  </span>
                </h3>
                <div class="project-meta">
                  <span class="project-year">{{ project.year }}</span>
                  <div v-if="project.stars !== undefined || project.forks !== undefined" class="project-stats">
                    <span v-if="project.stars !== undefined" class="stat-item">
                      <v-icon size="small">mdi-star-outline</v-icon>
                      {{ project.stars }}
                    </span>
                    <span v-if="project.forks !== undefined" class="stat-item">
                      <v-icon size="small">mdi-source-fork</v-icon>
                      {{ project.forks }}
                    </span>
                  </div>
                </div>
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
                    v-if="project.demo"
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
              {{ portfolioData.githubInfo.moreProjectsText }} 
              <a 
                :href="portfolioData.githubInfo.profileUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="github-link"
              >
                GitHub
                <v-icon size="small">mdi-open-in-new</v-icon>
              </a>
            </p>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 80px 0;
  width: 100%;
  background-color: rgb(var(--v-theme-background));
  color: rgb(var(--v-theme-on-background));
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.projects-container {
  width: 100%;
  padding: 2rem;
}

.projects-content {
  width: 100%;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: bold;
  margin-bottom: 3rem;
  color: rgb(var(--v-theme-on-background));
  line-height: 1.2;
  letter-spacing: -0.02em;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.loading-state,
.error-state {
  text-align: center;
  padding: 2rem;
  color: rgb(var(--v-theme-secondary));
}

.error-state {
  color: rgb(var(--v-theme-error));
}

.projects-list {
  margin-bottom: 3rem;
}

.project-item {
  padding: 2rem 0;
  border-bottom: 1px solid rgba(var(--v-border-color), 0.2);
}

.project-item:last-child {
  border-bottom: none;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
}

.project-link {
  color: rgb(var(--v-theme-on-background));
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease;
}

.project-link:hover {
  color: rgb(var(--v-theme-primary));
}

.project-title-text {
  color: rgb(var(--v-theme-on-background));
  font-weight: 600;
}

.external-link-icon {
  opacity: 0.6;
}

.project-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

.project-year {
  font-size: 0.875rem;
  color: rgb(var(--v-theme-secondary));
  font-family: 'Courier New', monospace;
}

.project-stats {
  display: flex;
  gap: 1rem;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: rgb(var(--v-theme-secondary));
}

.project-description {
  margin: 0 0 1.5rem 0;
  color: rgb(var(--v-theme-secondary));
  line-height: 1.6;
  font-size: 1rem;
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
  flex: 1;
}

.tech-tag {
  padding: 0.4rem 0.8rem;
  background-color: transparent;
  color: rgb(var(--v-theme-on-background));
  border-radius: 4px;
  font-size: 0.875rem;
  border: 1px solid rgba(var(--v-border-color), 0.3);
  transition: all 0.2s ease;
}

.tech-tag:hover {
  background-color: rgba(var(--v-theme-primary), 0.1);
  border-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-primary));
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
  padding: 0.5rem 1rem;
  border: 1px solid rgba(var(--v-theme-primary), 0.3);
  border-radius: 4px;
  transition: all 0.2s ease;
}

.project-action:hover {
  background-color: rgba(var(--v-theme-primary), 0.1);
  border-color: rgb(var(--v-theme-primary));
}

.more-projects {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(var(--v-border-color), 0.2);
}

.more-text {
  color: rgb(var(--v-theme-secondary));
  font-size: 1rem;
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .projects-container {
    padding: 1rem;
  }
  
  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .project-meta {
    align-items: flex-start;
    flex-direction: row;
    gap: 1rem;
  }
  
  .project-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .project-links {
    width: 100%;
    justify-content: flex-start;
  }
}
</style>
