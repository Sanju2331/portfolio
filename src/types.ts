export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  icon: string;
  color: string;
  image: string;
  caseStudy?: string;
  techStackDetailed?: string[];
  challenges?: string[];
  screenshots?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  score: string;
  type: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
}
