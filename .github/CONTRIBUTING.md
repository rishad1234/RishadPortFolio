# Contributing to Rishad's Portfolio

Thank you for your interest in contributing to this project! 🎉

## 🚀 Getting Started

### Prerequisites
- Node.js (v20.11.0 or later)
- npm (v9.6.7 or later)
- Git

### Setup Development Environment

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/yourusername/rishad-portfolio.git
   cd rishad-portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📋 Development Workflow

### Code Style Guidelines

- **Vue.js**: Use Composition API with `<script setup>` syntax
- **TypeScript**: Maintain type safety throughout
- **ESLint**: Follow the configured linting rules
- **Prettier**: Code formatting is enforced

### Commit Message Format

We follow the [Conventional Commits](https://conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

**Examples:**
```bash
feat(navigation): add mobile hamburger menu
fix(contact): resolve form validation issues
docs(readme): update installation instructions
style(hero): improve responsive design
```

### Branch Naming

- `feature/description` - for new features
- `bugfix/description` - for bug fixes
- `hotfix/description` - for critical fixes
- `docs/description` - for documentation changes
- `refactor/description` - for code refactoring

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

### Test Guidelines

- Write unit tests for utility functions
- Write component tests for Vue components
- Maintain test coverage above 80%
- Use meaningful test descriptions
- Mock external dependencies

## 🔍 Code Review Process

### Before Submitting a PR

- [ ] Code follows the style guidelines
- [ ] All tests pass
- [ ] Code is properly documented
- [ ] Commit messages follow the convention
- [ ] Branch is up to date with main
- [ ] No merge conflicts

### Pull Request Guidelines

1. **Fill out the PR template completely**
2. **Keep PRs focused and small**
3. **Include screenshots for UI changes**
4. **Update documentation if needed**
5. **Add or update tests**
6. **Ensure CI passes**

### Review Process

1. **Automated checks** must pass
2. **At least one review** from a maintainer
3. **Address feedback** promptly
4. **Squash commits** before merging (if requested)

## 📝 Issue Guidelines

### Before Creating an Issue

- [ ] Search existing issues
- [ ] Check if it's already fixed in latest version
- [ ] Gather all relevant information
- [ ] Use appropriate issue template

### Issue Types

- **🐛 Bug Report**: For reporting bugs
- **✨ Feature Request**: For suggesting new features
- **📚 Documentation**: For documentation issues
- **🆘 Support Question**: For help with setup/usage
- **🔧 Technical Task**: For development tasks

## 🎨 Design Guidelines

### UI/UX Principles

- **Mobile-first**: Design for mobile, enhance for desktop
- **Accessibility**: Follow WCAG guidelines
- **Performance**: Optimize for speed and efficiency
- **Consistency**: Maintain design system consistency
- **User-centered**: Focus on user experience

### Component Guidelines

- **Single Responsibility**: Each component has one purpose
- **Reusability**: Build components for reuse
- **Props Interface**: Clear and typed props
- **Events**: Use proper event emission
- **Documentation**: Document component usage

## 🔧 Technical Guidelines

### Vue.js Best Practices

- Use Composition API
- Implement proper TypeScript types
- Follow Vue.js style guide
- Use Vuetify components when possible
- Implement proper error handling

### Performance Considerations

- Lazy load components when appropriate
- Optimize images and assets
- Use code splitting for large features
- Monitor bundle size
- Implement proper caching strategies

## 📚 Documentation

### Code Documentation

- **JSDoc comments** for functions and classes
- **Component documentation** for Vue components
- **README updates** for new features
- **API documentation** for public interfaces

### Documentation Standards

- Clear and concise explanations
- Code examples where appropriate
- Up-to-date screenshots
- Links to relevant resources

## 🏷️ Labels and Priorities

### Priority Labels

- `priority: critical` - Security issues, major bugs
- `priority: high` - Important features, significant bugs
- `priority: medium` - Nice-to-have features, minor bugs
- `priority: low` - Future enhancements, documentation

### Type Labels

- `type: bug` - Bug reports
- `type: feature` - New features
- `type: documentation` - Documentation updates
- `type: question` - Support questions
- `type: enhancement` - Improvements to existing features

### Status Labels

- `status: needs-triage` - Needs initial review
- `status: in-progress` - Being worked on
- `status: blocked` - Blocked by other issues
- `status: ready-for-review` - Ready for review
- `status: needs-feedback` - Needs more information

## 🤝 Community Guidelines

### Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Follow the project's code of conduct

### Communication

- Use clear and professional language
- Provide helpful and detailed information
- Be patient with response times
- Ask questions when unsure

## 📞 Getting Help

### Resources

- [Vue.js Documentation](https://vuejs.org/)
- [Vuetify Documentation](https://vuetifyjs.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Vite Documentation](https://vitejs.dev/)

### Support Channels

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and ideas
- **Email**: hello@rishad.dev for direct contact
- **Twitter**: @yourusername for quick questions

## 🎉 Recognition

Contributors will be:
- Added to the contributors section
- Mentioned in release notes
- Given credit in documentation
- Invited to join the maintainers team (for significant contributions)

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to making this project better! 🚀
