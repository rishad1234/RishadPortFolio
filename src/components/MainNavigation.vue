<template>
  <nav class="main-navigation">
    <div class="nav-links">
      <a 
        v-for="link in navLinks" 
        :key="link.id"
        :href="link.href"
        @click="scrollToSection(link.id, $event)"
        class="nav-link"
        :class="{ active: activeSection === link.id }"
      >
        {{ link.text }}
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('home')

const navLinks = [
  { id: 'home', text: 'Home', href: '#home' },
  { id: 'experience', text: 'Experience', href: '#experience' },
  { id: 'about', text: 'About', href: '#about' },
  { id: 'projects', text: 'Projects', href: '#projects' },
  { id: 'contact', text: 'Contact', href: '#contact' }
]

const scrollToSection = (sectionId: string, event: Event) => {
  event.preventDefault()
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Track active section based on scroll position
const handleScroll = () => {
  const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean)
  const scrollPosition = window.scrollY + 100 // Offset for better detection
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (section && section.offsetTop <= scrollPosition) {
      activeSection.value = navLinks[i].id
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.main-navigation {
  position: fixed;
  top: 20px;
  right: 70px;
  z-index: 1000;
  background: rgba(var(--v-theme-surface), 0.9);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 12px 16px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  height: 40px;
}

.nav-links {
  display: flex;
  gap: 24px;
  align-items: center;
}

.nav-link {
  position: relative;
  color: rgb(var(--v-theme-on-surface));
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  display: flex;
  align-items: center;
  height: 100%;
  outline: none;
  border: none;
}

.nav-link:focus {
  outline: none;
  border: none;
  box-shadow: none;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, rgb(var(--v-theme-primary)), rgba(var(--v-theme-primary), 0.8));
  transition: width 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border-radius: 1px;
}

.nav-link:hover {
  color: rgb(var(--v-theme-primary));
}

.nav-link:hover::after {
  width: 100%;
  transition: width 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.nav-link.active {
  color: rgb(var(--v-theme-primary));
}

.nav-link.active::after {
  width: 100%;
  background: rgb(var(--v-theme-primary));
}

/* Responsive design */
@media (max-width: 768px) {
  .main-navigation {
    right: 80px;
    padding: 6px 12px;
  }
  
  .nav-links {
    gap: 16px;
  }
  
  .nav-link {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .main-navigation {
    right: 80px;
    padding: 4px 8px;
  }
  
  .nav-links {
    gap: 10px;
  }
  
  .nav-link {
    font-size: 0.7rem;
  }
}
</style>
