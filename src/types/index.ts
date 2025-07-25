export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'ai' | 'desktop';
  status: 'completed' | 'in-progress' | 'planning';
  featured: boolean;
  year: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
  achievements: string[];
  type: 'full-time' | 'part-time' | 'freelance' | 'contract';
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'database' | 'ai' | 'tools' | 'mobile';
  icon?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description?: string;
  type: 'university' | 'certification' | 'course' | 'self-taught';
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  contact: ContactInfo;
}

export interface SectionProps {
  className?: string;
}

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}
