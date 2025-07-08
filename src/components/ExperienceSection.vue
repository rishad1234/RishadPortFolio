<script setup lang="ts">
import { ref } from 'vue'

const experiences = ref([
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    period: 'Jan 2023 - Present',
    technologies: ['Vue.js', 'TypeScript', 'Node.js', 'MongoDB', 'AWS'],
    achievements: [
      'Led the development of a scalable microservices architecture, improving system performance by 40%',
      'Mentored junior developers and established coding standards that reduced bugs by 60%',
      'Implemented CI/CD pipelines using Docker and AWS, reducing deployment time by 75%'
    ]
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: 'March 2021 - Dec 2022',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    achievements: [
      'Built and deployed 15+ responsive web applications serving 10,000+ users',
      'Optimized database queries and API endpoints, achieving 50% faster response times',
      'Collaborated with cross-functional teams to deliver projects 20% ahead of schedule'
    ]
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'StartupVenture',
    period: 'June 2019 - Feb 2021',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'Firebase'],
    achievements: [
      'Developed user-facing features for a SaaS platform with 95% user satisfaction',
      'Implemented responsive designs that increased mobile engagement by 35%',
      'Reduced page load times by 60% through code optimization and lazy loading'
    ]
  }
])
</script>

<template>
  <section id="experience" class="experience-section">
    <div class="experience-container">
      <!-- Section Title -->
      <h2 class="section-title text-h2 text-md-h1 font-weight-bold mb-12">
        Experience
      </h2>

      <!-- Experience Items -->
      <div class="experience-list">
        <div 
          v-for="(exp, index) in experiences" 
          :key="exp.id"
          class="experience-item"
          :class="{ 'mb-12': index < experiences.length - 1 }"
        >
          <!-- Job Title and Company -->
          <div class="job-header mb-4">
            <h3 class="text-h5 text-md-h4 font-weight-medium">
              {{ exp.title }}
            </h3>
            <h4 class="text-h6 text-md-h5 font-weight-light text-grey mb-2">
              {{ exp.company }}
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

      <!-- Additional Links -->
      <div class="additional-links mt-16">
        <h3 class="text-h5 font-weight-medium mb-4">Additional Links</h3>
        <div class="links-list">
          <v-btn 
            variant="text" 
            class="link-btn pa-0 justify-start mb-2"
            href="/"
          >
            Home
          </v-btn>
          <v-btn 
            variant="text" 
            class="link-btn pa-0 justify-start mb-2"
            href="/projects"
          >
            Projects
          </v-btn>
          <v-btn 
            variant="text" 
            class="link-btn pa-0 justify-start mb-2"
            href="/resume.pdf"
            target="_blank"
          >
            Resume
          </v-btn>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  padding: 80px 0;
  background-color: transparent;
  width: 100%;
}

.experience-container {
  width: 100%;
  padding: 2rem;
}

.section-title {
  line-height: 1.2;
  letter-spacing: -0.02em;
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
}

.additional-links {
  border-top: 1px solid rgba(var(--v-border-color), 0.2);
  padding-top: 32px;
}

.link-btn {
  font-size: 1.1rem !important;
  font-weight: 400 !important;
  text-transform: none !important;
  color: inherit !important;
  min-height: auto !important;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.link-btn:hover {
  color: rgb(var(--v-theme-primary)) !important;
}
</style>
