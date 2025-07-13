<script setup lang="ts">
// About section with detailed background and skills
</script>

<template>
  <section id="about" class="about-section">
    <div class="about-container">
      <div class="about-content">
        <h2 class="section-title">About</h2>
        
        <div class="about-text">
          <p>
            I'm a Senior Software Development Engineer with over 5 years of experience 
            specializing in cloud-native applications, serverless architecture, and modern 
            web development. Currently at Craftsmen, I architect and build scalable systems 
            using AWS services, focusing on multi-region deployments and high-availability solutions.
          </p>
          
          <p>
            My expertise spans the full development lifecycle, from designing DynamoDB data 
            architectures and implementing multi-region active-active systems to building 
            sophisticated media asset management platforms. I have extensive experience with 
            Vue.js ecosystem, TypeScript, and AWS serverless technologies including Lambda, 
            API Gateway, and CloudFront.
          </p>

          <p>
            Beyond individual contributions, I actively mentor and train engineers, having 
            conducted training sessions for 20+ developers on serverless architecture and 
            AWS best practices. I'm passionate about building resilient systems, optimizing 
            performance, and delivering exceptional user experiences.
          </p>
        </div>

        <div class="skills-section">
          <h3 class="subsection-title">Core Technologies</h3>
          <div class="skills-categories">
            <div class="skill-category">
              <h4 class="category-title">Frontend</h4>
              <div class="skills-list">
                <span class="skill-tag">Vue.js</span>
                <span class="skill-tag">TypeScript</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">Vuetify</span>
                <span class="skill-tag">Nuxt.js</span>
              </div>
            </div>

            <div class="skill-category">
              <h4 class="category-title">Backend & Cloud</h4>
              <div class="skills-list">
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">AWS</span>
                <span class="skill-tag">Lambda</span>
                <span class="skill-tag">API Gateway</span>
                <span class="skill-tag">DynamoDB</span>
                <span class="skill-tag">S3</span>
                <span class="skill-tag">CloudFront</span>
                <span class="skill-tag">Serverless Framework</span>
              </div>
            </div>

            <div class="skill-category">
              <h4 class="category-title">DevOps & Tools</h4>
              <div class="skills-list">
                <span class="skill-tag">CodePipeline</span>
                <span class="skill-tag">CodeBuild</span>
                <span class="skill-tag">GitHub Actions</span>
                <span class="skill-tag">Step Functions</span>
                <span class="skill-tag">IAM</span>
                <span class="skill-tag">Lambda@Edge</span>
                <span class="skill-tag">ACM</span>
              </div>
            </div>

            <div class="skill-category">
              <h4 class="category-title">Previous Experience</h4>
              <div class="skills-list">
                <span class="skill-tag">Laravel</span>
                <span class="skill-tag">PHP</span>
                <span class="skill-tag">Express.js</span>
                <span class="skill-tag">MySQL</span>
                <span class="skill-tag">Prismic CMS</span>
                <span class="skill-tag">REST APIs</span>
              </div>
            </div>
          </div>
        </div>

        <div class="expertise-section">
          <h3 class="subsection-title">Areas of Expertise</h3>
          <div class="expertise-list">
            <div class="expertise-item">
              <span class="expertise-arrow">❯</span>
              <span class="expertise-text">Distributed data modeling and architecture with Amazon services</span>
            </div>
            <div class="expertise-item">
              <span class="expertise-arrow">❯</span>
              <span class="expertise-text">Serverless application development and optimization</span>
            </div>
            <div class="expertise-item">
              <span class="expertise-arrow">❯</span>
              <span class="expertise-text">Media asset management and processing systems</span>
            </div>
            <div class="expertise-item">
              <span class="expertise-arrow">❯</span>
              <span class="expertise-text">CI/CD pipeline design and automation</span>
            </div>
            <div class="expertise-item">
              <span class="expertise-arrow">❯</span>
              <span class="expertise-text">DynamoDB data modeling and performance optimization</span>
            </div>
            <div class="expertise-item">
              <span class="expertise-arrow">❯</span>
              <span class="expertise-text">Team mentorship and technical training</span>
            </div>
          </div>
        </div>
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
