<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { contactService, type ContactData } from '@/services/contactService';

// Reactive data
const contactData = ref<ContactData | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);

// Load contact data on component mount
onMounted(async () => {
  try {
    contactData.value = await contactService.getContactData();
  } catch (err) {
    error.value = 'Failed to load contact information';
    console.error('Error loading contact data:', err);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <div class="contact-content">
        <h2 class="section-title">Contact</h2>
        
        <!-- Loading state -->
        <div v-if="loading" class="loading-state">
          <p>Loading...</p>
        </div>
        
        <!-- Error state -->
        <div v-else-if="error" class="error-state">
          <p>{{ error }}</p>
        </div>
        
        <!-- Content when data is loaded -->
        <template v-else-if="contactData">
          <div class="contact-text">
            <p v-for="(paragraph, index) in contactData.description" :key="index">
              {{ paragraph }}
            </p>
          </div>

          <div class="contact-links">
            <div class="contact-item">
              <span class="contact-label">Email:</span>
              <a 
                :href="`mailto:${contactData.contactInfo.email}`" 
                class="contact-link"
              >
                {{ contactData.contactInfo.email }}
              </a>
            </div>
            
            <div class="contact-item">
              <span class="contact-label">Location:</span>
              <span class="contact-value">{{ contactData.contactInfo.location }}</span>
            </div>

            <div class="contact-item">
              <span class="contact-label">Company:</span>
              <span class="contact-value">{{ contactData.contactInfo.company }}</span>
            </div>
          </div>

          <div class="social-section">
            <h3 class="subsection-title">Connect</h3>
            <div class="social-links">
              <a 
                v-for="social in contactData.socialLinks"
                :key="social.name"
                :href="social.url" 
                :target="social.external ? '_blank' : undefined"
                :rel="social.external ? 'noopener noreferrer' : undefined"
                class="social-link"
              >
                <v-icon size="small">{{ social.icon }}</v-icon>
                {{ social.name }}
              </a>
            </div>
          </div>

          <div class="expertise-highlight">
            <h3 class="subsection-title">Open to Opportunities</h3>
            <div class="opportunity-tags">
              <span 
                v-for="area in contactData.opportunityAreas"
                :key="area"
                class="opportunity-tag"
              >
                {{ area }}
              </span>
            </div>
          </div>

          <div class="footer-note">
            <p>
              {{ contactData.footer.text }} • 
              <a 
                :href="contactData.footer.sourceLink.url" 
                target="_blank" 
                rel="noopener noreferrer"
                class="source-link"
              >
                {{ contactData.footer.sourceLink.text }}
                <v-icon size="small">{{ contactData.footer.sourceLink.icon }}</v-icon>
              </a>
            </p>
          </div>
        </template>
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

.loading-state,
.error-state {
  text-align: center;
  padding: 2rem;
  color: rgb(var(--v-theme-secondary));
}

.error-state {
  color: rgb(var(--v-theme-error));
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
