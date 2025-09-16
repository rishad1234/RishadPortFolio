# 🚀 Rishad's Portfolio

> A modern, terminal-inspired portfolio website showcasing my journey as a Senior Software Development Engineer

<div align="center">

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)

</div>

---

##  Quick Start

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v8.0.0 or higher)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mdrishadulislamkhan/RishadPortFolio.git
   cd RishadPortFolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   ```bash
   http://localhost:5173
   ```

### 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | 🚀 Start development server with hot-reload |
| `npm run build` | 📦 Build for production |
| `npm run preview` | 👀 Preview production build locally |
| `npm run lint` | 🔍 Lint code with ESLint |
| `npm run type-check` | ✅ Type-check with TypeScript |
| `npm run deploy` | 🚀 Deploy to GitHub Pages (manual) |

---

## 🌐 Live Demo

**Portfolio is live at:** [https://rishad1234.github.io/RishadPortFolio/](https://rishad1234.github.io/RishadPortFolio/)

### 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

**Automatic Deployment:**

- Push to `main` branch triggers deployment
- Built with GitHub Actions
- Deployed to GitHub Pages

**Manual Deployment:**

```bash
npm run deploy
```

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 📁 Project Structure

```bash
src/
├── components/
│   ├── HeroSection.vue          # Professional introduction
│   ├── ExperienceSection.vue    # Work history and achievements
│   ├── AboutSection.vue         # Skills and expertise
│   ├── PortfolioSection.vue     # Project showcase
│   ├── ContactSection.vue       # Contact information
│   ├── MainNavigation.vue       # Right-aligned navigation
│   └── ThemeToggle.vue         # Theme switching component
├── plugins/
│   └── vuetify.ts              # Custom Vuetify configuration
├── assets/                     # Static assets
├── App.vue                     # Root component
└── main.ts                     # Application entry point
```

---

## 🎨 Design Philosophy

This portfolio embraces a **terminal-inspired minimal design** that stands out from typical Material Design portfolios:

- **Full-width sections** without max-width constraints
- **Right-aligned navigation** with animated underline effects
- **Sophisticated theming** with custom light/dark modes
- **Clean typography** using Inter font
- **Subtle animations** that enhance user experience

---

## 🚀 Deployment

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

The build artifacts will be stored in the `dist/` directory.

### Deployment Options

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Zero-configuration deployment for Vue.js applications
- **GitHub Pages**: Host directly from your repository
- **AWS S3 + CloudFront**: For scalable hosting with CDN

---

## 🔧 Customization

### Theme Configuration

Customize themes in `src/plugins/vuetify.ts`:

```typescript
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          background: '#ffffff',
          surface: '#f8fafc',
          primary: '#2563eb',
          // Add your custom colors
        },
      },
      dark: {
        colors: {
          background: '#0f172a',
          surface: '#1e293b',
          primary: '#3b82f6',
          // Add your custom colors
        },
      },
    },
  },
})
```

### Content Updates

- **Experience**: Update `src/components/ExperienceSection.vue`
- **Skills**: Modify `src/components/AboutSection.vue`
- **Projects**: Edit `src/components/PortfolioSection.vue`
- **Contact**: Update `src/components/ContactSection.vue`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **Vue.js Team** - For the amazing framework
- **Vuetify Team** - For the comprehensive component library
- **abhisheksah.dev** - Design inspiration for the terminal aesthetic
- **Inter Font** - For the beautiful typography

---

<div align="center">

**Built with ❤️ by [Md Rishadul Islam Khan](https://github.com/rishad1234)**

*If you found this project helpful, please consider giving it a ⭐*

</div>
