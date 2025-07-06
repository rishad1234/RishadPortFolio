<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const text = ref('')
const fullText = "I'm a Full Stack Developer"
const typewriterSpeed = 100

onMounted(() => {
  let index = 0
  const typeWriter = () => {
    if (index < fullText.length) {
      text.value += fullText.charAt(index)
      index++
      setTimeout(typeWriter, typewriterSpeed)
    }
  }
  typeWriter()
})

const scrollToPortfolio = () => {
  const element = document.getElementById('portfolio')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="home" class="hero-section">
    <v-container fluid class="fill-height">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" md="8" class="text-center">
          <v-avatar size="200" class="mb-8">
            <v-img 
              src="/api/placeholder/200/200" 
              alt="Rishad's Profile"
              class="rounded-circle"
            />
          </v-avatar>
          
          <h1 class="display-2 font-weight-bold mb-4">
            Hi, I'm <span class="text-primary">Rishad</span>
          </h1>
          
          <div class="display-1 mb-6" style="min-height: 60px;">
            <span class="typewriter">{{ text }}</span>
            <span class="cursor">|</span>
          </div>
          
          <p class="headline mb-8">
            Passionate about creating amazing web experiences with modern technologies.
            I specialize in Vue.js, TypeScript, and building scalable applications.
          </p>
          
          <v-btn 
            color="primary" 
            size="large" 
            class="mr-4"
            @click="scrollToContact"
          >
            Get In Touch
          </v-btn>
          
          <v-btn 
            variant="outlined" 
            size="large"
            @click="scrollToPortfolio"
          >
            View My Work
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.typewriter {
  font-family: 'Courier New', monospace;
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.v-avatar {
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
}
</style>
