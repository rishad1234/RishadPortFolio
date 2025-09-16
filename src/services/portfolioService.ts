import portfolioData from '@/data/portfolio.json';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string | null;
  year: string;
  stars: number;
  forks: number;
  featured: boolean;
  category: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface GitHubInfo {
  username: string;
  profileUrl: string;
  moreProjectsText: string;
}

export interface PortfolioStats {
  totalProjects: number;
  featuredProjects: number;
  totalStars: number;
  totalForks: number;
  languages: string[];
}

export interface PortfolioData {
  projects: Project[];
  githubInfo: GitHubInfo;
  categories: Category[];
  stats: PortfolioStats;
}

class PortfolioService {
  private data: PortfolioData = portfolioData as PortfolioData;

  getPortfolioData(): PortfolioData {
    return this.data;
  }

  getProjects(): Project[] {
    return this.data.projects;
  }

  getGitHubInfo(): GitHubInfo {
    return this.data.githubInfo;
  }

  getCategories(): Category[] {
    return this.data.categories;
  }

  getStats(): PortfolioStats {
    return this.data.stats;
  }

  // Helper methods for filtering projects
  getFeaturedProjects(): Project[] {
    const projects = this.getProjects();
    return projects.filter(project => project.featured);
  }

  getProjectsByCategory(category: string): Project[] {
    const projects = this.getProjects();
    if (category === 'all') {
      return projects;
    }
    return projects.filter(project => project.category === category);
  }

  getProjectsByYear(year: string): Project[] {
    const projects = this.getProjects();
    return projects.filter(project => project.year === year);
  }

  getProjectsByStatus(status: Project['status']): Project[] {
    const projects = this.getProjects();
    return projects.filter(project => project.status === status);
  }

  getProjectById(id: number): Project | null {
    const projects = this.getProjects();
    return projects.find(project => project.id === id) || null;
  }

  getProjectsByTechnology(technology: string): Project[] {
    const projects = this.getProjects();
    return projects.filter(project => 
      project.technologies.some(tech => 
        tech.toLowerCase().includes(technology.toLowerCase())
      )
    );
  }

  // Helper to get all unique technologies
  getAllTechnologies(): string[] {
    const projects = this.getProjects();
    const allTechs = projects.flatMap(project => project.technologies);
    return [...new Set(allTechs)].sort();
  }

  // Helper to get all unique years
  getAllYears(): string[] {
    const projects = this.getProjects();
    const allYears = projects.map(project => project.year);
    return [...new Set(allYears)].sort().reverse(); // Most recent first
  }

  // Helper to get projects sorted by various criteria
  getProjectsSorted(sortBy: 'year' | 'stars' | 'title' = 'year'): Project[] {
    const projects = this.getProjects();
    return [...projects].sort((a, b) => {
      switch (sortBy) {
        case 'year':
          return b.year.localeCompare(a.year); // Most recent first
        case 'stars':
          return b.stars - a.stars; // Most stars first
        case 'title':
          return a.title.localeCompare(b.title); // Alphabetical
        default:
          return 0;
      }
    });
  }
}

export const portfolioService = new PortfolioService();
