<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { experienceService, type ExperienceData } from '@/services/experienceService';

// Reactive data
const experienceData = ref<ExperienceData | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);

// Load experience data on component mount
onMounted(() => {
  try {
    experienceData.value = experienceService.getExperienceData();
  } catch (err) {
    error.value = 'Failed to load experience information';
    console.error('Error loading experience data:', err);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <section id="experience" class="experience-section">
    <div class="experience-container">
      <!-- Section Title -->
      <h2 class="section-title text-h2 text-md-h1 font-weight-bold mb-12">
        Experience
      </h2>

      <!-- Loading state -->
      <div v-if="loading" class="loading-state">
        <p>Loading...</p>
      </div>
      
      <!-- Error state -->
      <div v-else-if="error" class="error-state">
        <p>{{ error }}</p>
      </div>

      <!-- Content when data is loaded -->
      <template v-else-if="experienceData">
        <!-- Optional description -->
        <div v-if="experienceData.description && experienceData.description.length > 0" class="experience-description mb-8">
          <p v-for="(paragraph, index) in experienceData.description" :key="index" class="text-body-1 text-grey mb-4">
            {{ paragraph }}
          </p>
        </div>

        <!-- Experience Items -->
        <div class="experience-list">
          <div 
            v-for="(exp, index) in experienceData.experiences" 
            :key="exp.id"
            class="experience-item"
            :class="{ 'mb-12': index < experienceData.experiences.length - 1 }"
          >
            <!-- Job Title and Company -->
            <div class="job-header mb-4">
              <h3 class="text-h5 text-md-h4 font-weight-medium">
                {{ exp.title }}
              </h3>
              <h4 class="text-h6 text-md-h5 font-weight-light text-grey mb-2">
                {{ exp.company }}
                <v-chip 
                  v-if="exp.type === 'current'" 
                  size="x-small" 
                  color="primary" 
                  variant="outlined"
                  class="ml-2"
                >
                  Current
                </v-chip>
              </h4>
              <p class="text-body-1 text-grey font-weight-light">
                {{ exp.period }}
              </p>
            </div>

            <!-- Achievements -->
            <div class="achievements mb-4">
              <div 
                v-for="achievement in exp.achievements" 
                :key="achievement"
                class="achievement-item mb-2"
              >
                <span class="achievement-arrow text-primary">❯</span>
                <p class="achievement-text text-body-1 text-md-h6">
                  {{ achievement }}
                </p>
              </div>
            </div>

            <!-- Technologies -->
            <div class="technologies">
              <v-chip
                v-for="tech in exp.technologies"
                :key="tech"
                variant="outlined"
                size="small"
                class="tech-chip ma-1"
              >
                {{ tech }}
              </v-chip>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  padding: 80px 0;
  background-color: rgb(var(--v-theme-background));
  color: rgb(var(--v-theme-on-background));
  width: 100%;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.experience-container {
  width: 100%;
  padding: 2rem;
}

.section-title {
  line-height: 1.2;
  letter-spacing: -0.02em;
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

.experience-description {
  margin-bottom: 2rem;
}

.experience-item {
  border-left: 1px solid rgba(var(--v-border-color), 0.2);
  padding-left: 24px;
  position: relative;
}

.experience-item::before {
  content: '';
  position: absolute;
  left: -4px;
  top: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgb(var(--v-theme-primary));
}

.job-header {
  margin-bottom: 16px;
}

.achievements {
  margin-bottom: 16px;
}

.achievement-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 8px;
}

.achievement-arrow {
  font-size: 14px;
  margin-top: 4px;
  flex-shrink: 0;
}

.achievement-text {
  line-height: 1.6;
  flex: 1;
}

.tech-chip {
  border-color: rgba(var(--v-border-color), 0.3) !important;
  background-color: transparent !important;
}

.tech-chip:hover {
  background-color: rgba(var(--v-theme-primary), 0.1) !important;
  border-color: rgb(var(--v-theme-primary)) !important;
}

/* Text color overrides for proper theme support */
.text-grey {
  color: rgb(var(--v-theme-secondary)) !important;
}

.text-grey-lighten-1 {
  color: rgb(var(--v-theme-secondary-lighten-1)) !important;
}
</style>
