<script setup lang="ts">
import { ref } from 'vue'

const skills = ref([
  { name: 'Vue.js', level: 95, color: '#4FC08D' },
  { name: 'TypeScript', level: 90, color: '#3178C6' },
  { name: 'JavaScript', level: 95, color: '#F7DF1E' },
  { name: 'Node.js', level: 85, color: '#339933' },
  { name: 'Python', level: 80, color: '#3776AB' },
  { name: 'MongoDB', level: 75, color: '#47A248' },
  { name: 'PostgreSQL', level: 70, color: '#336791' },
  { name: 'Docker', level: 65, color: '#2496ED' },
])

const stats = ref([
  { title: 'Years of Experience', value: '5+', icon: 'mdi-calendar' },
  { title: 'Projects Completed', value: '50+', icon: 'mdi-code-tags' },
  { title: 'Happy Clients', value: '30+', icon: 'mdi-account-heart' },
  { title: 'Cups of Coffee', value: '1000+', icon: 'mdi-coffee' },
])
</script>

<template>
  <section id="about" class="about-section">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="display-1 font-weight-bold mb-4">About Me</h2>
          <p class="headline text-grey-darken-1">
            Get to know me better
          </p>
        </v-col>
      </v-row>
      
      <v-row align="center">
        <v-col cols="12" md="6">
          <div class="about-content">
            <h3 class="text-h4 font-weight-bold mb-4">
              I'm a passionate developer who loves creating digital solutions
            </h3>
            
            <p class="text-body-1 mb-4">
              With over 5 years of experience in web development, I specialize in creating 
              modern, responsive, and user-friendly applications. My journey started with 
              curiosity about how websites work, and it has evolved into a passion for 
              building exceptional digital experiences.
            </p>
            
            <p class="text-body-1 mb-4">
              I believe in writing clean, maintainable code and staying up-to-date with 
              the latest technologies. When I'm not coding, you can find me exploring 
              new frameworks, contributing to open-source projects, or sharing knowledge 
              with the developer community.
            </p>
            
            <v-btn 
              color="primary" 
              size="large" 
              class="mt-4"
              @click="downloadCV"
            >
              <v-icon left>mdi-download</v-icon>
              Download CV
            </v-btn>
          </div>
        </v-col>
        
        <v-col cols="12" md="6">
          <v-card class="pa-4">
            <v-card-title class="text-h5 font-weight-bold">
              Skills & Technologies
            </v-card-title>
            
            <v-card-text>
              <div v-for="skill in skills" :key="skill.name" class="mb-4">
                <div class="d-flex justify-space-between align-center mb-2">
                  <span class="font-weight-medium">{{ skill.name }}</span>
                  <span class="text-caption">{{ skill.level }}%</span>
                </div>
                <v-progress-linear 
                  :model-value="skill.level" 
                  :color="skill.color"
                  height="8"
                  rounded
                />
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
      <v-row class="mt-12">
        <v-col cols="12" class="text-center mb-6">
          <h3 class="text-h4 font-weight-bold">By the Numbers</h3>
        </v-col>
        
        <v-col 
          v-for="stat in stats" 
          :key="stat.title"
          cols="6" 
          md="3"
        >
          <v-card class="text-center pa-4" elevation="2">
            <v-icon :icon="stat.icon" size="48" color="primary" class="mb-2" />
            <div class="text-h4 font-weight-bold text-primary">{{ stat.value }}</div>
            <div class="text-body-2 text-grey-darken-1">{{ stat.title }}</div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
export default {
  methods: {
    downloadCV() {
      // In a real application, you would link to your actual CV file
      const link = document.createElement('a')
      link.href = '/path/to/your/cv.pdf'
      link.download = 'Rishad_CV.pdf'
      link.click()
    }
  }
}
</script>

<style scoped>
.about-section {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.about-content {
  padding: 20px;
}

.v-progress-linear {
  border-radius: 4px;
}
</style>
