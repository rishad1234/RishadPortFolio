import aboutData from '@/data/about.json';

export interface AboutData {
  description: string[];
  skills: {
    [category: string]: {
      title: string;
      technologies: string[];
    };
  };
  expertise: string[];
}

class AboutService {
  private data: AboutData = aboutData as AboutData;

  getAboutData(): AboutData {
    return this.data;
  }

  getDescription(): string[] {
    return this.data.description;
  }

  getSkills(): AboutData['skills'] {
    return this.data.skills;
  }

  getExpertise(): string[] {
    return this.data.expertise;
  }

  // Helper method to get skills as an array for easier rendering
  getSkillsArray(): Array<{ category: string; title: string; technologies: string[] }> {
    const skills = this.getSkills();
    return Object.entries(skills).map(([category, data]) => ({
      category,
      ...data
    }));
  }
}

export const aboutService = new AboutService();
