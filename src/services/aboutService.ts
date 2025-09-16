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
  private aboutData: AboutData | null = null;

  async getAboutData(): Promise<AboutData> {
    if (!this.aboutData) {
      const response = await fetch('/src/data/about.json');
      if (!response.ok) {
        throw new Error('Failed to load about data');
      }
      this.aboutData = await response.json();
    }
    return this.aboutData!;
  }

  async getDescription(): Promise<string[]> {
    const data = await this.getAboutData();
    return data.description;
  }

  async getSkills(): Promise<AboutData['skills']> {
    const data = await this.getAboutData();
    return data.skills;
  }

  async getExpertise(): Promise<string[]> {
    const data = await this.getAboutData();
    return data.expertise;
  }

  // Helper method to get skills as an array for easier rendering
  async getSkillsArray(): Promise<Array<{ category: string; title: string; technologies: string[] }>> {
    const skills = await this.getSkills();
    return Object.entries(skills).map(([category, data]) => ({
      category,
      ...data
    }));
  }
}

export const aboutService = new AboutService();
