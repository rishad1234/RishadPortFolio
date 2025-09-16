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
  private portfolioData: PortfolioData | null = null;

  async getPortfolioData(): Promise<PortfolioData> {
    if (!this.portfolioData) {
      const response = await fetch('/src/data/portfolio.json');
      if (!response.ok) {
        throw new Error('Failed to load portfolio data');
      }
      this.portfolioData = await response.json();
    }
    return this.portfolioData!;
  }

  async getProjects(): Promise<Project[]> {
    const data = await this.getPortfolioData();
    return data.projects;
  }

  async getGitHubInfo(): Promise<GitHubInfo> {
    const data = await this.getPortfolioData();
    return data.githubInfo;
  }

  async getCategories(): Promise<Category[]> {
    const data = await this.getPortfolioData();
    return data.categories;
  }

  async getStats(): Promise<PortfolioStats> {
    const data = await this.getPortfolioData();
    return data.stats;
  }

  // Helper methods for filtering projects
  async getFeaturedProjects(): Promise<Project[]> {
    const projects = await this.getProjects();
    return projects.filter(project => project.featured);
  }

  async getProjectsByCategory(category: string): Promise<Project[]> {
    const projects = await this.getProjects();
    if (category === 'all') {
      return projects;
    }
    return projects.filter(project => project.category === category);
  }

  async getProjectsByYear(year: string): Promise<Project[]> {
    const projects = await this.getProjects();
    return projects.filter(project => project.year === year);
  }

  async getProjectsByStatus(status: Project['status']): Promise<Project[]> {
    const projects = await this.getProjects();
    return projects.filter(project => project.status === status);
  }

  async getProjectById(id: number): Promise<Project | null> {
    const projects = await this.getProjects();
    return projects.find(project => project.id === id) || null;
  }

  async getProjectsByTechnology(technology: string): Promise<Project[]> {
    const projects = await this.getProjects();
    return projects.filter(project => 
      project.technologies.some(tech => 
        tech.toLowerCase().includes(technology.toLowerCase())
      )
    );
  }

  // Helper to get all unique technologies
  async getAllTechnologies(): Promise<string[]> {
    const projects = await this.getProjects();
    const allTechs = projects.flatMap(project => project.technologies);
    return [...new Set(allTechs)].sort();
  }

  // Helper to get all unique years
  async getAllYears(): Promise<string[]> {
    const projects = await this.getProjects();
    const allYears = projects.map(project => project.year);
    return [...new Set(allYears)].sort().reverse(); // Most recent first
  }

  // Helper to get projects sorted by various criteria
  async getProjectsSorted(sortBy: 'year' | 'stars' | 'title' = 'year'): Promise<Project[]> {
    const projects = await this.getProjects();
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
