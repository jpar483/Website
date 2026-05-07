export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  tags?: string[];
  link?: string;
  category: 'robotics' | 'embedded' | 'software' | 'fabrication';
}

export interface Skill {
  name: string;
  level: string;
  percentage: number;
}

export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  tags?: string[];
  type: 'education' | 'project' | 'work';
  current?: boolean;
}
