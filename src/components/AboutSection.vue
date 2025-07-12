<script setup lang="ts">
// Simple about section with minimal design
</script>

<template>
  <section class="about-section">
    <div class="about-container">
      <div class="about-content">
        <h2 class="section-title">About</h2>
        
        <div class="about-text">
          <p>
            I'm a passionate full-stack developer with over 5 years of experience 
            building modern web applications. I specialize in Vue.js, TypeScript, 
            and Node.js, with a focus on creating clean, maintainable code and 
            exceptional user experiences.
          </p>
          
          <p>
            When I'm not coding, you can find me exploring new technologies, 
            contributing to open-source projects, or sharing knowledge with the 
            developer community. I believe in continuous learning and staying 
            up-to-date with the latest industry trends.
          </p>
        </div>

        <div class="skills-section">
          <h3 class="subsection-title">Tech Stack</h3>
          <div class="skills-list">
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">TypeScript</span>
            <span class="skill-tag">Vue.js</span>
            <span class="skill-tag">React</span>
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">Python</span>
            <span class="skill-tag">MongoDB</span>
            <span class="skill-tag">PostgreSQL</span>
            <span class="skill-tag">Docker</span>
            <span class="skill-tag">AWS</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 4rem 0;
  border-top: 1px solid rgb(var(--v-theme-outline));
  width: 100%;
  background-color: rgb(var(--v-theme-background));
  color: rgb(var(--v-theme-on-background));
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.about-container {
  width: 100%;
  padding: 2rem;
}

.about-content {
  width: 100%;
}

.about-content {
  max-width: 1000px;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: rgb(var(--v-theme-on-background));
  position: relative;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.section-title::before {
  content: '$ ';
  color: rgb(var(--v-theme-primary));
  font-family: 'Courier New', monospace;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.about-text {
  margin-bottom: 3rem;
  line-height: 1.7;
}

.about-text p {
  margin-bottom: 1.5rem;
  color: rgb(var(--v-theme-secondary));
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.subsection-title {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: rgb(var(--v-theme-on-background));
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.subsection-title::before {
  content: '> ';
  color: rgb(var(--v-theme-primary));
  font-family: 'Courier New', monospace;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  padding: 0.25rem 0.75rem;
  background-color: rgba(var(--v-theme-primary), 0.1);
  color: rgb(var(--v-theme-primary));
  border-radius: 4px;
  font-size: 0.875rem;
  font-family: 'Courier New', monospace;
  border: 1px solid rgba(var(--v-theme-primary), 0.2);
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.skill-tag:hover {
  background-color: rgba(var(--v-theme-primary), 0.2);
  border-color: rgba(var(--v-theme-primary), 0.4);
}
</style>
