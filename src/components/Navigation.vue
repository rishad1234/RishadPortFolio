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
  left: 20px;
  z-index: 1000;
  background: rgba(var(--v-theme-surface), 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgb(var(--v-theme-outline));
  border-radius: 12px;
  padding: 8px 16px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
  padding: 8px 0;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: rgb(var(--v-theme-primary));
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover {
  color: rgb(var(--v-theme-primary));
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.active {
  color: rgb(var(--v-theme-primary));
}

.nav-link.active::after {
  width: 100%;
}

/* Responsive design */
@media (max-width: 768px) {
  .main-navigation {
    left: 50%;
    transform: translateX(-50%);
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
  .nav-links {
    gap: 12px;
  }
  
  .nav-link {
    font-size: 0.75rem;
  }
}
</style>
