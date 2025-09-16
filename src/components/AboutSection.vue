<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { aboutService, type AboutData } from '@/services/aboutService';

// Reactive data
const aboutData = ref<AboutData | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);

// Load about data on component mount
onMounted(() => {
  try {
    aboutData.value = aboutService.getAboutData();
  } catch (err) {
    error.value = 'Failed to load about information';
    console.error('Error loading about data:', err);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <section id="about" class="about-section">
    <div class="about-container">
      <div class="about-content">
        <h2 class="section-title">About</h2>
        
        <!-- Loading state -->
        <div v-if="loading" class="loading-state">
          <p>Loading...</p>
        </div>
        
        <!-- Error state -->
        <div v-else-if="error" class="error-state">
          <p>{{ error }}</p>
        </div>
        
        <!-- Content when data is loaded -->
        <template v-else-if="aboutData">
          <div class="about-text">
            <p v-for="(paragraph, index) in aboutData.description" :key="index">
              {{ paragraph }}
            </p>
          </div>

          <div class="skills-section">
            <h3 class="subsection-title">Core Technologies</h3>
            <div class="skills-categories">
              <div 
                v-for="(skillCategory, category) in aboutData.skills" 
                :key="category"
                class="skill-category"
              >
                <h4 class="category-title">{{ skillCategory.title }}</h4>
                <div class="skills-list">
                  <span 
                    v-for="tech in skillCategory.technologies" 
                    :key="tech"
                    class="skill-tag"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="expertise-section">
            <h3 class="subsection-title">Areas of Expertise</h3>
            <div class="expertise-list">
              <div 
                v-for="(expertise, index) in aboutData.expertise" 
                :key="index"
                class="expertise-item"
              >
                <span class="expertise-arrow">❯</span>
                <span class="expertise-text">{{ expertise }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 80px 0;
  width: 100%;
  background-color: rgb(var(--v-theme-background));
  color: rgb(var(--v-theme-on-background));
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.about-container {
  width: 100%;
  padding: 2rem;
}

.about-content {
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

.about-text {
  margin-bottom: 3rem;
  line-height: 1.7;
}

.about-text p {
  margin-bottom: 1.5rem;
  color: rgb(var(--v-theme-secondary));
  font-size: 1.1rem;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.skills-section {
  margin-bottom: 3rem;
}

.subsection-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: rgb(var(--v-theme-on-background));
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.skills-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.skill-category {
  margin-bottom: 1.5rem;
}

.category-title {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
  color: rgb(var(--v-theme-primary));
  position: relative;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.category-title::before {
  content: '❯ ';
  color: rgb(var(--v-theme-primary));
  font-size: 0.9rem;
  margin-right: 0.5rem;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  padding: 0.4rem 0.8rem;
  background-color: transparent;
  color: rgb(var(--v-theme-on-background));
  border-radius: 4px;
  font-size: 0.875rem;
  border: 1px solid rgba(var(--v-border-color), 0.3);
  transition: all 0.2s ease;
}

.skill-tag:hover {
  background-color: rgba(var(--v-theme-primary), 0.1);
  border-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-primary));
}

.expertise-section {
  margin-top: 3rem;
}

.expertise-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0.75rem;
}

.expertise-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 0.5rem 0;
}

.expertise-arrow {
  color: rgb(var(--v-theme-primary));
  font-size: 14px;
  margin-top: 2px;
  flex-shrink: 0;
}

.expertise-text {
  color: rgb(var(--v-theme-secondary));
  line-height: 1.5;
  flex: 1;
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .about-container {
    padding: 1rem;
  }
  
  .skills-categories {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .expertise-list {
    grid-template-columns: 1fr;
  }
}
</style>
