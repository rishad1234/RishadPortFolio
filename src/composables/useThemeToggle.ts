import { ref, onMounted, watch } from 'vue'
import { useTheme } from 'vuetify'

export function useThemeToggle() {
  const theme = useTheme()
  const currentTheme = ref(typeof window !== 'undefined' ? (localStorage.getItem('theme') || 'dark') : 'dark')

  // Initialize theme on mount
  onMounted(() => {
    theme.global.name.value = currentTheme.value
    console.log('Theme initialized:', currentTheme.value)
  })

  // Watch for theme changes and sync with Vuetify
  watch(currentTheme, (newTheme) => {
    theme.global.name.value = newTheme
    console.log('Theme changed to:', newTheme)
  }, { immediate: true })

  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark'
    theme.global.name.value = currentTheme.value
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', currentTheme.value)
    }
    
    // Debug logging
    console.log('Theme toggled to:', currentTheme.value)
    console.log('Vuetify theme name:', theme.global.name.value)
  }

  return {
    currentTheme,
    toggleTheme
  }
}
