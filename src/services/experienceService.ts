export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  type: 'current' | 'previous';
  technologies: string[];
  achievements: string[];
}

export interface ExperienceSummary {
  totalYears: string;
  currentRole: string;
  currentCompany: string;
  keyTechnologies: string[];
  specializations: string[];
}

export interface ExperienceData {
  description?: string[];
  experiences: Experience[];
  summary: ExperienceSummary;
}

class ExperienceService {
  private experienceData: ExperienceData | null = null;

  async getExperienceData(): Promise<ExperienceData> {
    if (!this.experienceData) {
      const response = await fetch('/src/data/experience.json');
      if (!response.ok) {
        throw new Error('Failed to load experience data');
      }
      this.experienceData = await response.json();
    }
    return this.experienceData!;
  }

  async getDescription(): Promise<string[]> {
    const data = await this.getExperienceData();
    return data.description || [];
  }

  async getExperiences(): Promise<Experience[]> {
    const data = await this.getExperienceData();
    return data.experiences;
  }

  async getSummary(): Promise<ExperienceSummary> {
    const data = await this.getExperienceData();
    return data.summary;
  }

  // Helper methods for filtering experiences
  async getCurrentExperience(): Promise<Experience | null> {
    const experiences = await this.getExperiences();
    return experiences.find(exp => exp.type === 'current') || null;
  }

  async getPreviousExperiences(): Promise<Experience[]> {
    const experiences = await this.getExperiences();
    return experiences.filter(exp => exp.type === 'previous');
  }

  async getExperienceById(id: number): Promise<Experience | null> {
    const experiences = await this.getExperiences();
    return experiences.find(exp => exp.id === id) || null;
  }

  async getExperiencesByCompany(company: string): Promise<Experience[]> {
    const experiences = await this.getExperiences();
    return experiences.filter(exp => exp.company.toLowerCase() === company.toLowerCase());
  }

  // Helper to get all technologies used across experiences
  async getAllTechnologies(): Promise<string[]> {
    const experiences = await this.getExperiences();
    const allTechs = experiences.flatMap(exp => exp.technologies);
    return [...new Set(allTechs)]; // Remove duplicates
  }

  // Helper to get experiences sorted by chronological order (newest first)
  async getExperiencesChronological(): Promise<Experience[]> {
    const experiences = await this.getExperiences();
    return experiences.sort((a, b) => {
      // Current experiences first, then by id (assuming higher id = more recent)
      if (a.type === 'current' && b.type !== 'current') return -1;
      if (b.type === 'current' && a.type !== 'current') return 1;
      return b.id - a.id;
    });
  }
}

export const experienceService = new ExperienceService();
