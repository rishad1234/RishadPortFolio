<script setup lang="ts">
// Simple contact section with minimal design
</script>

<template>
  <section class="contact-section">
    <div class="contact-container">
      <div class="contact-content">
        <h2 class="section-title">Contact</h2>
        
        <div class="contact-text">
          <p>
            I'm always interested in hearing about new opportunities and 
            exciting projects. Whether you have a question or just want to 
            say hi, feel free to reach out!
          </p>
        </div>

        <div class="contact-links">
          <div class="contact-item">
            <span class="contact-label">Email:</span>
            <a 
              href="mailto:hello@rishad.dev" 
              class="contact-link"
            >
              hello@rishad.dev
            </a>
          </div>
          
          <div class="contact-item">
            <span class="contact-label">Location:</span>
            <span class="contact-value">San Francisco, CA</span>
          </div>
        </div>

        <div class="social-section">
          <h3 class="subsection-title">Connect</h3>
          <div class="social-links">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link"
            >
              <v-icon size="small">mdi-github</v-icon>
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link"
            >
              <v-icon size="small">mdi-linkedin</v-icon>
              LinkedIn
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link"
            >
              <v-icon size="small">mdi-twitter</v-icon>
              Twitter
            </a>
            <a 
              href="mailto:hello@rishad.dev" 
              class="social-link"
            >
              <v-icon size="small">mdi-email</v-icon>
              Email
            </a>
          </div>
        </div>

        <div class="footer-note">
          <p>
            Built with Vue.js + Vuetify • 
            <a 
              href="https://github.com/yourusername/portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              class="source-link"
            >
              View Source
              <v-icon size="small">mdi-open-in-new</v-icon>
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 4rem 0;
  border-top: 1px solid rgb(var(--v-theme-outline));
  width: 100%;
  background-color: rgb(var(--v-theme-background));
  color: rgb(var(--v-theme-on-background));
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-container {
  width: 100%;
  padding: 2rem;
}

.contact-content {
  width: 100%;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: rgb(var(--v-theme-on-surface));
}

.section-title::before {
  content: '$ ';
  color: rgb(var(--v-theme-primary));
  font-family: 'Courier New', monospace;
}

.contact-text {
  margin-bottom: 3rem;
  line-height: 1.7;
}

.contact-text p {
  color: rgb(var(--v-theme-on-surface));
  opacity: 0.8;
}

.contact-links {
  margin-bottom: 3rem;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
}

.contact-label {
  min-width: 80px;
  font-family: 'Courier New', monospace;
  color: rgb(var(--v-theme-on-surface));
  opacity: 0.7;
}

.contact-link {
  color: rgb(var(--v-theme-primary));
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.contact-link:hover {
  opacity: 0.8;
}

.contact-value {
  color: rgb(var(--v-theme-on-surface));
  opacity: 0.8;
}

.subsection-title {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: rgb(var(--v-theme-on-surface));
}

.subsection-title::before {
  content: '> ';
  color: rgb(var(--v-theme-primary));
  font-family: 'Courier New', monospace;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.social-link {
  color: rgb(var(--v-theme-primary));
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: opacity 0.2s ease;
}

.social-link:hover {
  opacity: 0.8;
}

.footer-note {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(var(--v-border-color), 0.1);
}

.footer-note p {
  color: rgb(var(--v-theme-on-surface));
  opacity: 0.6;
  font-size: 0.875rem;
}

.source-link {
  color: rgb(var(--v-theme-primary));
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  transition: opacity 0.2s ease;
}

.source-link:hover {
  opacity: 0.8;
}
</style>
