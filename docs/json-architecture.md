# JSON-Based Content Architecture

## Overview

This document outlines the new modular JSON-based content architecture implemented for the portfolio website. This approach replaces static content with dynamic data loading, making content management more flexible and maintainable.

## Architecture Benefits

### 1. **Maintainability**

- Content updates only require JSON file modifications
- No Vue component changes needed for content updates
- Cleaner separation of data and presentation logic

### 2. **Modularity**

- Each section has its own JSON file (about.json, portfolio.json, etc.)
- Independent data management per section
- Easier to scale and extend

### 3. **Type Safety**

- TypeScript interfaces for all data structures
- Compile-time error checking
- Better IDE support and autocompletion

### 4. **Performance**

- Lazy loading of content
- Caching in service layer
- Reduced bundle size with external data

## Implementation Details

### Directory Structure

```bash
src/
├── data/
│   ├── about.json          # About section data
│   ├── contact.json        # Contact section data
│   ├── experience.json     # Experience section data
│   ├── portfolio.json      # Portfolio projects data
│   └── ...
├── services/
│   ├── aboutService.ts     # About data service
│   ├── contactService.ts   # Contact data service
│   ├── experienceService.ts # Experience data service
│   ├── portfolioService.ts # Portfolio data service
│   └── baseService.ts      # (Future) Common service logic
└── components/
    ├── AboutSection.vue    # Updated to use JSON data
    ├── ContactSection.vue  # Updated to use JSON data
    ├── ExperienceSection.vue # Updated to use JSON data
    ├── PortfolioSection.vue # Updated to use JSON data
    └── ...
```

### About Section Implementation

#### Data Structure (`about.json`)

```json
{
  "description": ["paragraph1", "paragraph2", "..."],
  "skills": {
    "category": {
      "title": "Display Name",
      "technologies": ["tech1", "tech2"]
    }
  },
  "expertise": ["expertise1", "expertise2"]
}
```

#### Service Layer (`aboutService.ts`)

- `AboutService` class with caching
- Type-safe data access methods
- Error handling and loading states
- Helper methods for data transformation

#### Component Integration (`AboutSection.vue`)

- Reactive data loading
- Loading and error states
- Dynamic rendering based on JSON structure
- Maintains original styling and responsiveness

### Contact Section Implementation

#### Data Structure (`contact.json`)

```json
{
  "description": ["contact description"],
  "contactInfo": {
    "email": "email@example.com",
    "location": "City, Country",
    "company": "Company Name"
  },
  "socialLinks": [
    {
      "name": "Platform",
      "url": "https://...",
      "icon": "mdi-icon",
      "external": true
    }
  ],
  "opportunityAreas": ["area1", "area2"],
  "footer": {
    "text": "Footer text",
    "sourceLink": {
      "text": "Link text",
      "url": "https://...",
      "icon": "mdi-icon"
    }
  }
}
```

#### Service Layer (`contactService.ts`)

- `ContactService` class with comprehensive data access
- TypeScript interfaces for all data structures
- Helper methods for specific contact information
- Separation of concerns with dedicated methods

#### Component Integration (`ContactSection.vue`)

- Dynamic social links rendering with conditional attributes
- Flexible opportunity areas display
- Type-safe data binding
- Maintains all original functionality and styling

### Experience Section Implementation

#### Data Structure (`experience.json`)

```json
{
  "description": ["experience overview"],
  "experiences": [
    {
      "id": 1,
      "title": "Job Title",
      "company": "Company Name",
      "period": "Date Range",
      "type": "current|previous",
      "technologies": ["tech1", "tech2"],
      "achievements": ["achievement1", "achievement2"]
    }
  ],
  "summary": {
    "totalYears": "X+",
    "currentRole": "Current Position",
    "currentCompany": "Current Company",
    "keyTechnologies": ["main", "technologies"],
    "specializations": ["area1", "area2"]
  }
}
```

#### Service Layer (`experienceService.ts`)

- `ExperienceService` class with comprehensive filtering methods
- Helper methods for current vs previous experiences
- Technology aggregation and company-based filtering
- Chronological sorting capabilities
- Type-safe interfaces for all experience data

#### Component Integration (`ExperienceSection.vue`)

- Dynamic experience timeline with current/previous indicators
- Conditional "Current" badge for active positions
- Flexible achievements and technologies rendering
- Optional description section support
- Maintains timeline visual design with enhanced data-driven functionality

### Portfolio Section Implementation

#### Data Structure (`portfolio.json`)

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "Project description",
      "technologies": ["tech1", "tech2"],
      "github": "https://github.com/...",
      "demo": "https://..." | null,
      "year": "2024",
      "stars": 0,
      "forks": 0,
      "featured": true,
      "category": "web|desktop|game",
      "status": "completed|in-progress|planned"
    }
  ],
  "githubInfo": {
    "username": "username",
    "profileUrl": "https://github.com/username",
    "moreProjectsText": "View more projects on my GitHub"
  },
  "categories": [
    {"id": "all", "name": "All Projects", "description": "..."}
  ],
  "stats": {
    "totalProjects": 5,
    "featuredProjects": 2,
    "totalStars": 3,
    "totalForks": 1,
    "languages": ["tech1", "tech2"]
  }
}
```

#### Service Layer (`portfolioService.ts`)

- `PortfolioService` class with advanced filtering and sorting
- Category-based project filtering (web, desktop, game)
- Featured projects highlighting
- Technology and year-based filtering
- Multiple sorting options (year, stars, title)
- GitHub statistics and metadata management

#### Component Integration (`PortfolioSection.vue`)

- Dynamic project listing with enhanced metadata
- Featured project badges for highlighted work
- Flexible GitHub integration with configurable text
- Repository statistics display (stars, forks)
- Technology tags with hover effects
- Conditional demo/code links based on availability

## Usage Examples

### Adding New Skills Category

```json
{
  "skills": {
    "existing_category": {...},
    "new_category": {
      "title": "New Technology Stack",
      "technologies": ["Tech1", "Tech2", "Tech3"]
    }
  }
}
```

### Updating Content

Simply modify the JSON files - no component changes required:

- Update descriptions in `about.json`
- Add/remove technologies from skills
- Modify expertise areas

## Error Handling

- Network request failures display user-friendly messages
- Console logging for debugging
- Graceful fallbacks for missing data
- Loading states prevent layout shifts

## Performance Considerations

- Single data fetch per service instance
- In-memory caching after initial load
- Lazy loading - data only fetched when component mounts
- Efficient re-rendering with Vue's reactivity

## Future Extensions

### Planned Services

1. **Portfolio Service** - Project data and filtering
2. **Experience Service** - Work history and achievements
3. **Contact Service** - Contact methods and social links
4. **Theme Service** - Dynamic theme configurations

### Potential Enhancements

- API integration for dynamic content management
- Content versioning and rollback
- Multi-language support
- Content search and filtering
- Admin interface for content management

## Migration Guide

For converting other sections:

1. **Create JSON file** in `src/data/`
2. **Define TypeScript interface** for data structure
3. **Implement service class** with caching and error handling
4. **Update component** to use service instead of static content
5. **Add loading/error states** for better UX
6. **Test thoroughly** with various data scenarios

## Best Practices

- Keep JSON files focused on data only
- Use meaningful property names
- Maintain consistent data structures
- Include comprehensive error handling
- Document data schemas
- Test with invalid/missing data scenarios
