import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          // Main colors
          background: '#0a0a0a',
          surface: '#111111',
          'surface-bright': '#1a1a1a',
          'surface-light': '#1f1f1f',
          'surface-variant': '#2c2c2c',
          
          // Primary colors
          primary: '#00ff88',
          'primary-darken-1': '#00cc6a',
          'primary-lighten-1': '#33ff99',
          
          // Secondary colors
          secondary: '#888888',
          'secondary-darken-1': '#666666',
          'secondary-lighten-1': '#aaaaaa',
          
          // Text colors
          'on-background': '#ffffff',
          'on-surface': '#ffffff',
          'on-primary': '#000000',
          'on-secondary': '#ffffff',
          
          // Accent colors
          accent: '#00ff88',
          error: '#ff4444',
          warning: '#ffaa00',
          info: '#00aaff',
          success: '#00ff88',
          
          // Border and divider
          'outline': '#333333',
          'outline-variant': '#444444',
        },
      },
      light: {
        dark: false,
        colors: {
          // Main colors
          background: '#fafafa',
          surface: '#ffffff',
          'surface-bright': '#ffffff',
          'surface-light': '#f5f5f5',
          'surface-variant': '#e0e0e0',
          
          // Primary colors
          primary: '#000000',
          'primary-darken-1': '#333333',
          'primary-lighten-1': '#666666',
          
          // Secondary colors
          secondary: '#666666',
          'secondary-darken-1': '#444444',
          'secondary-lighten-1': '#888888',
          
          // Text colors
          'on-background': '#000000',
          'on-surface': '#000000',
          'on-primary': '#ffffff',
          'on-secondary': '#ffffff',
          
          // Accent colors
          accent: '#000000',
          error: '#d32f2f',
          warning: '#f57c00',
          info: '#1976d2',
          success: '#388e3c',
          
          // Border and divider
          'outline': '#e0e0e0',
          'outline-variant': '#cccccc',
        },
      },
    },
  },
})
