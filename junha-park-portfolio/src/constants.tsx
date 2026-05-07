import { Project, Skill, TimelineItem } from './types';

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/junha-park/',
  github: 'https://github.com/junha7710',
  email: 'mailto:junha7710@gmail.com',
  portfolio: '#',
};

export const PROJECTS: Project[] = [
  {
    id: 'winnie-the-boht',
    title: 'Winnie the Boht',
    date: 'AUG 2025',
    description: 'Interactive embedded robot featuring servo control, AI-driven face and speech detection, and custom 3D printed components.',
    image: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=2000&auto=format&fit=crop',
    category: 'robotics',
    tags: ['Embedded', 'AI', 'CV'],
    link: 'https://github.com/junha7710/winnie-the-boht'
  },
  {
    id: 'smart-energy-monitor',
    title: 'Smart Energy Monitor',
    date: 'JUL - OCT 2025',
    description: 'End-to-end PCB design with ATmega architecture, C firmware development, and usage visualization simulated via LTSpice/Proteus.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop',
    category: 'embedded',
    tags: ['PCB Design', 'Atmega', 'C'],
    link: '#'
  },
  {
    id: 'roastworks-dashboards',
    title: 'RoastWorks Coffee Dashboards',
    date: 'AUG 2025',
    description: 'Python + PyQt6 automation suite featuring sophisticated forecasting models and integrated AI chatbot functionality.',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2000&auto=format&fit=crop',
    category: 'software',
    tags: ['Python', 'PyQt6', 'AI'],
    link: '#'
  },
  {
    id: 'java-navigation',
    title: 'Java Navigation & Search',
    date: '2024 - 2026',
    description: 'Android application development utilizing XML for UI and implementing BFS algorithms for optimized shortest-path findings.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop',
    category: 'software',
    tags: ['Java', 'Android', 'Algorithms'],
    link: '#'
  }
];

export const PHILOSOPHY = [
  {
    title: 'Embedded Innovation',
    description: 'Expertise in C and PCB design to build responsive, low-level systems for hardware-software integration.',
    icon: 'cpu'
  },
  {
    title: 'AI & Intelligence',
    description: 'Integrating machine learning models and data-driven logic into functional software frameworks using Python and Java.',
    icon: 'brain'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Microcontroller Programming', level: 'Advanced', percentage: 95 },
  { name: 'LLM / Prompt Design', level: 'Advanced', percentage: 92 },
  { name: 'PCB Design & Simulation', level: 'Proficient', percentage: 88 },
  { name: 'Machine Learning', level: 'Proficient', percentage: 85 },
  { name: 'Mechanical Fabrication', level: 'Proficient', percentage: 82 },
  { name: 'Software Architecture', level: 'Advanced', percentage: 90 },
];

export const TIMELINE: TimelineItem[] = [
  {
    id: 'uark',
    title: 'Bachelor of Engineering: Computer Systems',
    subtitle: 'University of Auckland',
    date: '2024 — PRESENT',
    description: 'Focused on the integration of hardware and software architectures, embedded systems, and advanced computation.',
    type: 'education',
    current: true
  },
  {
    id: 'ecse-comp',
    title: 'ECSE Design Competition 2025',
    subtitle: '3rd Place Finish',
    date: '2025',
    description: 'Recognized for excellence in electrical and computer systems engineering design, demonstrating innovative problem-solving and technical execution.',
    type: 'project',
    tags: ['Award Winning', 'System Design']
  },
  {
    id: 'tutoring',
    title: 'Calculus and Physics Tutoring',
    subtitle: 'NCEA Level 1 Academic Support',
    date: '2023 — 2024',
    description: 'Provided specialized academic mentorship for NCEA Level 1 students. Developed tailored lesson plans for complex STEM concepts.',
    type: 'work'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Iterative Design',
    subtitle: 'Hands-on Engineering',
    date: 'CONTINUOUS',
    description: 'Precision machining including Lathe work, milling, and drilling. Metal fabrication involving MIG welding and high-precision cutting.',
    type: 'project',
    tags: ['Machining', 'Welding']
  }
];
