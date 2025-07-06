<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const formValid = ref(false)
const loading = ref(false)
const submitted = ref(false)

const nameRules = [
  (v: string) => !!v || 'Name is required',
  (v: string) => (v && v.length >= 2) || 'Name must be at least 2 characters'
]

const emailRules = [
  (v: string) => !!v || 'Email is required',
  (v: string) => /.+@.+\..+/.test(v) || 'Email must be valid'
]

const subjectRules = [
  (v: string) => !!v || 'Subject is required'
]

const messageRules = [
  (v: string) => !!v || 'Message is required',
  (v: string) => (v && v.length >= 10) || 'Message must be at least 10 characters'
]

const contactInfo = ref([
  {
    icon: 'mdi-email',
    title: 'Email',
    value: 'hello@rishad.dev',
    link: 'mailto:hello@rishad.dev'
  },
  {
    icon: 'mdi-phone',
    title: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: 'mdi-map-marker',
    title: 'Location',
    value: 'San Francisco, CA',
    link: 'https://maps.google.com'
  }
])

const socialLinks = ref([
  {
    icon: 'mdi-github',
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    color: '#333'
  },
  {
    icon: 'mdi-linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    color: '#0077B5'
  },
  {
    icon: 'mdi-twitter',
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    color: '#1DA1F2'
  },
  {
    icon: 'mdi-instagram',
    name: 'Instagram',
    url: 'https://instagram.com/yourusername',
    color: '#E4405F'
  }
])

const submitForm = async () => {
  if (!formValid.value) return
  
  loading.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In a real application, you would send the form data to your backend
    console.log('Form submitted:', form.value)
    
    submitted.value = true
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
  } catch (error) {
    console.error('Error submitting form:', error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="contact" class="contact-section">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="display-1 font-weight-bold mb-4">Get In Touch</h2>
          <p class="headline text-grey-darken-1">
            Let's discuss your next project
          </p>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12" md="6">
          <v-card elevation="4" class="pa-6">
            <v-card-title class="text-h5 font-weight-bold mb-4">
              Send me a message
            </v-card-title>
            
            <v-form v-model="formValid" @submit.prevent="submitForm">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.name"
                    :rules="nameRules"
                    label="Your Name"
                    variant="outlined"
                    required
                  />
                </v-col>
                
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.email"
                    :rules="emailRules"
                    label="Your Email"
                    type="email"
                    variant="outlined"
                    required
                  />
                </v-col>
              </v-row>
              
              <v-text-field
                v-model="form.subject"
                :rules="subjectRules"
                label="Subject"
                variant="outlined"
                required
              />
              
              <v-textarea
                v-model="form.message"
                :rules="messageRules"
                label="Your Message"
                variant="outlined"
                rows="5"
                required
              />
              
              <v-btn
                type="submit"
                color="primary"
                size="large"
                :loading="loading"
                :disabled="!formValid"
                block
              >
                <v-icon left>mdi-send</v-icon>
                Send Message
              </v-btn>
            </v-form>
            
            <v-alert
              v-if="submitted"
              type="success"
              class="mt-4"
              closable
            >
              Thank you for your message! I'll get back to you soon.
            </v-alert>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="6">
          <div class="contact-info">
            <h3 class="text-h5 font-weight-bold mb-6">Contact Information</h3>
            
            <div class="mb-8">
              <p class="text-body-1 mb-4">
                I'm always interested in hearing about new opportunities and 
                exciting projects. Whether you have a question or just want to 
                say hi, feel free to reach out!
              </p>
            </div>
            
            <div class="contact-details">
              <div 
                v-for="info in contactInfo" 
                :key="info.title"
                class="contact-item mb-4"
              >
                <v-btn
                  :href="info.link"
                  variant="text"
                  size="large"
                  class="justify-start pa-0"
                  target="_blank"
                >
                  <v-icon :icon="info.icon" size="24" class="mr-3" />
                  <div class="text-left">
                    <div class="text-body-2 text-grey-darken-1">{{ info.title }}</div>
                    <div class="text-body-1 font-weight-medium">{{ info.value }}</div>
                  </div>
                </v-btn>
              </div>
            </div>
            
            <div class="social-links mt-8">
              <h4 class="text-h6 font-weight-bold mb-4">Follow me on</h4>
              <div class="d-flex flex-wrap gap-3">
                <v-btn
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  :icon="social.icon"
                  :color="social.color"
                  size="large"
                  target="_blank"
                  variant="outlined"
                />
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.contact-info {
  padding: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.social-links {
  margin-top: 2rem;
}

.gap-3 {
  gap: 12px;
}
</style>
