# 🚀 GitHub Pages Deployment Guide

This guide explains how to deploy your portfolio to GitHub Pages.

## 🎯 Automated Deployment (Recommended)

The repository is configured with GitHub Actions for automatic deployment.

### Setup Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "feat: add GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** > **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically trigger

3. **Access Your Site**
   - Your site will be available at: `https://rishad1234.github.io/RishadPortFolio/`
   - The deployment typically takes 2-3 minutes

## 🔧 Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build and deploy manually
npm run deploy
```

## 📝 Configuration Details

### Vite Configuration
The project is configured with the correct base path for GitHub Pages:
```typescript
base: process.env.NODE_ENV === 'production' ? '/RishadPortFolio/' : '/'
```

### GitHub Actions Workflow
- **File**: `.github/workflows/deploy.yml`
- **Triggers**: Push to `main` branch
- **Node Version**: 18.x
- **Build Command**: `npm ci && npm run build`
- **Deploy**: Automated to `gh-pages` branch

## 🛠️ Troubleshooting

### Common Issues:

1. **404 Errors**
   - Ensure the `base` path in `vite.config.ts` matches your repository name
   - Check that GitHub Pages is enabled in repository settings

2. **Build Failures**
   - Check the Actions tab for detailed error logs
   - Ensure all dependencies are in `package.json`
   - Verify TypeScript compilation passes locally

3. **Assets Not Loading**
   - Confirm the base path is correctly set
   - Check that all asset imports use relative paths

### Verification Steps:

```bash
# Test build locally
npm run build
npm run preview

# Check if site works on http://localhost:4173
```

## 🌟 Features

- ✅ Automatic deployment on push
- ✅ HTTPS enabled by default
- ✅ Custom domain support (optional)
- ✅ Build optimization
- ✅ Asset compression

## 🔗 Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder:
   ```
   yourdomain.com
   ```

2. Configure DNS records with your domain provider:
   ```
   Type: CNAME
   Name: www (or @)
   Value: mdrishadulislamkhan.github.io
   ```

3. Update the `base` configuration in `vite.config.ts`:
   ```typescript
   base: process.env.NODE_ENV === 'production' ? '/' : '/'
   ```

## 📊 Monitoring

- **Deployment Status**: Check the Actions tab in your GitHub repository
- **Site Status**: Visit your GitHub Pages URL
- **Analytics**: Add Google Analytics or other tracking (optional)

---

**Your portfolio will be live at:** https://mdrishadulislamkhan.github.io/RishadPortFolio/
