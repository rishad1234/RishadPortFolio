import experienceData from '@/data/experience.json';

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
  private data: ExperienceData = experienceData as ExperienceData;

  getExperienceData(): ExperienceData {
    return this.data;
  }

  getDescription(): string[] {
    return this.data.description || [];
  }

  getExperiences(): Experience[] {
    return this.data.experiences;
  }

  getSummary(): ExperienceSummary {
    return this.data.summary;
  }

  // Helper methods for filtering experiences
  getCurrentExperience(): Experience | null {
    const experiences = this.getExperiences();
    return experiences.find(exp => exp.type === 'current') || null;
  }

  getPreviousExperiences(): Experience[] {
    const experiences = this.getExperiences();
    return experiences.filter(exp => exp.type === 'previous');
  }

  getExperienceById(id: number): Experience | null {
    const experiences = this.getExperiences();
    return experiences.find(exp => exp.id === id) || null;
  }

  getExperiencesByCompany(company: string): Experience[] {
    const experiences = this.getExperiences();
    return experiences.filter(exp => exp.company.toLowerCase() === company.toLowerCase());
  }

  // Helper to get all technologies used across experiences
  getAllTechnologies(): string[] {
    const experiences = this.getExperiences();
    const allTechs = experiences.flatMap(exp => exp.technologies);
    return [...new Set(allTechs)]; // Remove duplicates
  }

  // Helper to get experiences sorted by chronological order (newest first)
  getExperiencesChronological(): Experience[] {
    const experiences = this.getExperiences();
    return experiences.sort((a, b) => {
      // Current experiences first, then by id (assuming higher id = more recent)
      if (a.type === 'current' && b.type !== 'current') return -1;
      if (b.type === 'current' && a.type !== 'current') return 1;
      return b.id - a.id;
    });
  }
}

export const experienceService = new ExperienceService();
