import { ref, onMounted, watch } from 'vue'
import { useTheme } from 'vuetify'

export function useThemeToggle() {
  const theme = useTheme()
  const currentTheme = ref(typeof window !== 'undefined' ? (localStorage.getItem('theme') || 'dark') : 'dark')
  const isTransitioning = ref(false)

  // Initialize theme on mount
  onMounted(() => {
    theme.global.name.value = currentTheme.value
    // Add theme class to body for CSS transitions
    document.body.setAttribute('data-theme', currentTheme.value)
    console.log('Theme initialized:', currentTheme.value)
  })

  // Watch for theme changes and sync with Vuetify
  watch(currentTheme, (newTheme) => {
    theme.global.name.value = newTheme
    document.body.setAttribute('data-theme', newTheme)
    console.log('Theme changed to:', newTheme)
  }, { immediate: true })

  const toggleTheme = () => {
    isTransitioning.value = true
    
    // Add a subtle delay for smooth transition
    setTimeout(() => {
      currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark'
      theme.global.name.value = currentTheme.value
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', currentTheme.value)
      }
      
      // Debug logging
      console.log('Theme toggled to:', currentTheme.value)
      console.log('Vuetify theme name:', theme.global.name.value)
      
      // Reset transition state
      setTimeout(() => {
        isTransitioning.value = false
      }, 300)
    }, 50)
  }

  return {
    currentTheme,
    toggleTheme,
    isTransitioning
  }
}
