export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  external: boolean;
}

export interface SourceLink {
  text: string;
  url: string;
  icon: string;
}

export interface ContactData {
  description: string[];
  contactInfo: {
    email: string;
    location: string;
    company: string;
  };
  socialLinks: SocialLink[];
  opportunityAreas: string[];
  footer: {
    text: string;
    sourceLink: SourceLink;
  };
}

class ContactService {
  private contactData: ContactData | null = null;

  async getContactData(): Promise<ContactData> {
    if (!this.contactData) {
      const response = await fetch('/src/data/contact.json');
      if (!response.ok) {
        throw new Error('Failed to load contact data');
      }
      this.contactData = await response.json();
    }
    return this.contactData!;
  }

  async getDescription(): Promise<string[]> {
    const data = await this.getContactData();
    return data.description;
  }

  async getContactInfo(): Promise<ContactData['contactInfo']> {
    const data = await this.getContactData();
    return data.contactInfo;
  }

  async getSocialLinks(): Promise<SocialLink[]> {
    const data = await this.getContactData();
    return data.socialLinks;
  }

  async getOpportunityAreas(): Promise<string[]> {
    const data = await this.getContactData();
    return data.opportunityAreas;
  }

  async getFooter(): Promise<ContactData['footer']> {
    const data = await this.getContactData();
    return data.footer;
  }

  // Helper methods for specific contact info
  async getEmail(): Promise<string> {
    const contactInfo = await this.getContactInfo();
    return contactInfo.email;
  }

  async getLocation(): Promise<string> {
    const contactInfo = await this.getContactInfo();
    return contactInfo.location;
  }

  async getCompany(): Promise<string> {
    const contactInfo = await this.getContactInfo();
    return contactInfo.company;
  }
}

export const contactService = new ContactService();
