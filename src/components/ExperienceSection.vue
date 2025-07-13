<script setup lang="ts">
import { ref } from 'vue'

const experiences = ref([
  {
    id: 1,
    title: 'Software Development Engineer II',
    company: 'Craftsmen',
    period: 'Jan 2024 - Present',
    technologies: ['Vue.js', 'TypeScript', 'Node.js', 'DynamoDB', 'AWS', 'Serverless Framework', 'CloudFront', 'CodeBuild', 'CodePipeline', 'Cognito', 'Vuetify', 'IAM', 'S3', 'Lambda', 'API Gateway', 'Multi-region Architecture', 'CI/CD', 'Data Migration'],
    achievements: [
      'Implemented multi-region active-active architecture using AWS, enabling resilient and highly available unified login system across API, UI, and DB layers',
      'Automated Lambda@Edge versioning and IAM role updates via DB-configured stages with automated ACM certificate provisioning for CloudFront distributions',
      'Overhauled bookmark system with data migration, Lexorank-based folder reordering, and new UI for improved user experience',
      'Migrated core components from Vue 2 to Vue 3 to enhance maintainability and compatibility with modern tooling',
      'Trained 20+ engineers at Craftsmen Excellence Academy on Serverless architecture, covering AWS Lambda, API Gateway, DynamoDB, and CI/CD best practices',
      'Improved media processing with custom player supporting SRT/VTT subtitles, swimlane UI for metadata visualization, and searchable asset deletion interface',
      'Strengthened system reliability with region-to-region data replication for disaster recovery and retry logic for uploads in poor network conditions'
    ]
  },
  {
    id: 2,
    title: 'Software Development Engineer I',
    company: 'Craftsmen',
    period: 'Dec 2021 - Jan 2024',
    technologies: ['Vue.js', 'TypeScript', 'Node.js', 'DynamoDB', 'AWS', 'Serverless Framework', 'CloudFront', 'CodeBuild', 'CodePipeline', 'S3', 'Lambda', 'API Gateway', 'Step Functions', 'SNS'],
    achievements: [
      'Architected core components of cloud-based media asset management (MAM) platform supporting multi-tenant workflows across hybrid storage environments',
      'Leveraged AWS services (S3, Lambda, API Gateway, CloudFront, DynamoDB) to build scalable and performant media and metadata operations',
      'Designed DynamoDB data architecture ensuring efficient access patterns, tenant isolation, and seamless scalability',
      'Engineered resilient upload system using S3 multipart uploads with automatic retry and resume logic, reducing interruptions during large file transfers',
      'Designed flexible metadata modeling framework to dynamically attach structured metadata to media assets with real-time UI management',
      'Orchestrated asset transfer workflows using AWS Step Functions, coordinating Lambda, S3, and SNS for secure media file movement between cloud and on-premise environments',
      'Implemented CI/CD pipelines with AWS CodePipeline, CodeBuild, and GitHub Actions, reducing deployment time by 40%'
    ]
  },
  {
    id: 3,
    title: 'Back End Developer',
    company: 'Symbl',
    period: 'Jan 2020 - Jul 2020',
    technologies: ['Express.js', 'Nuxt.js', 'Prismic', 'Node.js', 'JavaScript', 'REST APIs', 'Agile'],
    achievements: [
      'Specialized in building scalable websites by seamlessly integrating backend systems, focusing on Express.js for server-side development',
      'Collaborated closely with the Nuxt.js frontend framework and utilized Prismic, a headless CMS, to deliver dynamic content',
      'Crafted robust APIs, managed databases, and implemented server-side logic to ensure optimal performance',
      'Operated within an agile framework, actively participating in sprint planning and contributing to continuous integration processes'
    ]
  },
  {
    id: 4,
    title: 'Back End Developer',
    company: 'Moodron',
    period: 'Jul 2019 - Dec 2019',
    technologies: ['Laravel', 'Vue.js', 'PHP', 'JavaScript', 'MySQL', 'Full-stack Development'],
    achievements: [
      'Generated innovative ideas to improve product features and backend functionality during internship at Moodron',
      'Enhanced and optimized existing website components, collaborating closely with the Vue.js frontend team to improve user experience',
      'Spearheaded the development of a comprehensive invoice management system using the Laravel framework',
      'Built robust backend systems ensuring seamless functionality and optimal performance',
      'Gained valuable full-stack development experience by working with both Laravel (backend) and Vue.js (frontend) technologies'
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
