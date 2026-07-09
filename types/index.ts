// Shared type definitions used across the portfolio

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email" | "facebook" | "instagram";
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100, used for progress bars
}

export interface SkillCategory {
  title: string;
  icon: string; // lucide icon name, resolved in component
  items: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  type: "work" | "education" | "leadership" | "certification";
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  images: GalleryImage[];
  span?: "row-span-1" | "row-span-2";
}

export interface Achievement {
  label: string;
  value: number;
  suffix?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export interface AboutStat {
  label: string;
  value: number;
  suffix?: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
