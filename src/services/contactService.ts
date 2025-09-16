import contactData from '@/data/contact.json';

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
  private data: ContactData = contactData as ContactData;

  getContactData(): ContactData {
    return this.data;
  }

  getDescription(): string[] {
    return this.data.description;
  }

  getContactInfo(): ContactData['contactInfo'] {
    return this.data.contactInfo;
  }

  getSocialLinks(): SocialLink[] {
    return this.data.socialLinks;
  }

  getOpportunityAreas(): string[] {
    return this.data.opportunityAreas;
  }

  getFooter(): ContactData['footer'] {
    return this.data.footer;
  }

  // Helper methods for specific contact info
  getEmail(): string {
    return this.data.contactInfo.email;
  }

  getLocation(): string {
    return this.data.contactInfo.location;
  }

  getCompany(): string {
    return this.data.contactInfo.company;
  }
}

export const contactService = new ContactService();
