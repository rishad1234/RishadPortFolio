<script setup lang="ts">
// Contact section with real information and social links
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <div class="contact-content">
        <h2 class="section-title">Contact</h2>
        
        <div class="contact-text">
          <p>
            I'm always interested in discussing new opportunities, challenging projects, 
            and innovative solutions in cloud architecture and full-stack development. 
            Whether you have a question about AWS serverless systems, want to collaborate 
            on a project, or just want to connect, feel free to reach out!
          </p>
        </div>

        <div class="contact-links">
          <div class="contact-item">
            <span class="contact-label">Email:</span>
            <a 
              href="mailto:rishadulislam@outlook.com" 
              class="contact-link"
            >
              rishadulislam@outlook.com
            </a>
          </div>
          
          <div class="contact-item">
            <span class="contact-label">Location:</span>
            <span class="contact-value">Dhaka, Bangladesh</span>
          </div>

          <div class="contact-item">
            <span class="contact-label">Company:</span>
            <span class="contact-value">Craftsmen (Software Development Engineer II)</span>
          </div>
        </div>

        <div class="social-section">
          <h3 class="subsection-title">Connect</h3>
          <div class="social-links">
            <a 
              href="https://github.com/rishad1234" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link"
            >
              <v-icon size="small">mdi-github</v-icon>
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/rishadul-islam-khan-47931a14b" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link"
            >
              <v-icon size="small">mdi-linkedin</v-icon>
              LinkedIn
            </a>
            <a 
              href="https://x.com/RishadulIslam6" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link"
            >
              <v-icon size="small">mdi-twitter</v-icon>
              Twitter
            </a>
            <a 
              href="https://www.facebook.com/rishadulislamkhan/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link"
            >
              <v-icon size="small">mdi-facebook</v-icon>
              Facebook
            </a>
            <a 
              href="mailto:rishadulislam@outlook.com" 
              class="social-link"
            >
              <v-icon size="small">mdi-email</v-icon>
              Email
            </a>
          </div>
        </div>

        <div class="expertise-highlight">
          <h3 class="subsection-title">Open to Opportunities</h3>
          <div class="opportunity-tags">
            <span class="opportunity-tag">AWS Cloud Architecture</span>
            <span class="opportunity-tag">Serverless Development</span>
            <span class="opportunity-tag">Vue.js & TypeScript</span>
            <span class="opportunity-tag">Full-stack Development</span>
            <span class="opportunity-tag">Team Leadership</span>
            <span class="opportunity-tag">Technical Mentoring</span>
          </div>
        </div>

        <div class="footer-note">
          <p>
            Built with Vue.js + Vuetify + TypeScript • 
            <a 
              href="https://github.com/rishad1234/RishadPortFolio" 
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
  padding: 80px 0;
  width: 100%;
  background-color: rgb(var(--v-theme-background));
  color: rgb(var(--v-theme-on-background));
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-container {
  width: 100%;
  padding: 2rem;
}

.contact-content {
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

.contact-text {
  margin-bottom: 3rem;
  line-height: 1.7;
}

.contact-text p {
  color: rgb(var(--v-theme-secondary));
  font-size: 1.1rem;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-links {
  margin-bottom: 3rem;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
}

.contact-label {
  min-width: 100px;
  font-weight: 500;
  color: rgb(var(--v-theme-on-background));
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-link {
  color: rgb(var(--v-theme-primary));
  text-decoration: none;
  transition: opacity 0.2s ease;
  font-size: 1rem;
}

.contact-link:hover {
  opacity: 0.8;
}

.contact-value {
  color: rgb(var(--v-theme-secondary));
  font-size: 1rem;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.social-section {
  margin-bottom: 3rem;
}

.subsection-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: rgb(var(--v-theme-on-background));
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.social-link {
  color: rgb(var(--v-theme-primary));
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
  border: 1px solid rgba(var(--v-theme-primary), 0.3);
  border-radius: 6px;
  transition: all 0.2s ease;
}

.social-link:hover {
  background-color: rgba(var(--v-theme-primary), 0.1);
  border-color: rgb(var(--v-theme-primary));
}

.expertise-highlight {
  margin-bottom: 3rem;
}

.opportunity-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.opportunity-tag {
  padding: 0.5rem 1rem;
  background-color: rgba(var(--v-theme-primary), 0.1);
  color: rgb(var(--v-theme-primary));
  border-radius: 6px;
  font-size: 0.875rem;
  border: 1px solid rgba(var(--v-theme-primary), 0.2);
  transition: all 0.2s ease;
}

.opportunity-tag:hover {
  background-color: rgba(var(--v-theme-primary), 0.2);
  border-color: rgba(var(--v-theme-primary), 0.4);
}

.footer-note {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(var(--v-border-color), 0.2);
}

.footer-note p {
  color: rgb(var(--v-theme-secondary));
  font-size: 0.9rem;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .contact-container {
    padding: 1rem;
  }
  
  .contact-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .contact-label {
    min-width: auto;
    font-weight: 600;
  }
  
  .social-links {
    gap: 1rem;
  }
  
  .social-link {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
  
  .opportunity-tags {
    gap: 0.5rem;
  }
  
  .opportunity-tag {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
}
</style>
