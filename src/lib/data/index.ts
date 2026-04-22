export type Email = {
  address: string;
  provider: string;
};

export type Experience = {
  company: string;
  position: string;
  period: string;
  location: string;
  achievements: string[];
  technologies: string[];
  logo: string;
  current: boolean;
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  featured: boolean;
};

export const emails: Email[] = [
  { address: 'aaditya12raj@gmail.com', provider: 'Gmail' },
  { address: 'aaditya12raj@tuta.io', provider: 'Tutanota' },
  { address: 'InfiniteEcl1pse@protonmail.com', provider: 'ProtonMail' }
];

import IconCode from '~icons/lucide/code';
import IconBookOpen from '~icons/lucide/book-open';
import IconPlay from '~icons/lucide/play';
import IconLock from '~icons/lucide/lock';
import IconFileText from '~icons/lucide/file-text';
import IconShield from '~icons/lucide/shield';

import programizLogo from '$lib/assets/logos/programiz.jpeg';
import neelgaiLogo from '$lib/assets/logos/neelgai.webp';
import icsLogo from '$lib/assets/logos/ics-logo.webp';

export const socialLinks = {
  github: 'https://github.com/KronosWasTaken',
  linkedin: 'https://linkedin.com/in/aaditya-raj-390113324'
} as const;

export const experiences: Experience[] = [
  {
    company: 'Programiz',
    position: 'Cybersecurity Trainee',
    period: 'April 2026 - Present',
    location: 'Nepal',
    achievements: [
      'Managing granular access control levels across Production, Staging, and Dev environments to ensure security compliance.',
      'Optimizing DevOps workflows and resource transparency via cloud API integrations and DevContainer orchestration.',
      'Hardening system security through rigorous Access Management, Software Inventory Management (SBOM), and the implementation of organizational Compliance frameworks.'
    ],
    technologies: ['Cybersecurity', 'DevSecOps', 'DevOps', 'Network Security', 'Cloud Security', 'FinOps'],
    logo: programizLogo,
    current: true
  },
  {
    company: 'Neelgai',
    position: 'Cybersecurity Research Intern',
    period: 'Aug 2025 - Jan 2025',
    location: 'Remote',
    achievements: [
      'Designed and built an MCP server to explore secure integrations with various services.',
      'Researched and implemented defenses against prompt injection, authentication flaws, and insecure agent behaviors.',
      'Developed proof-of-concepts and documented security findings to support blue team use cases.'
    ],
    technologies: ['MCP Server', 'Security Research', 'Blue Team', 'Documentation'],
    logo: neelgaiLogo,
    current: false
  },
  {
    company: 'Innovative Communication System Pvt. Ltd.',
    position: 'Network and System Administrator Intern',
    period: 'Feb 2025 - Aug 2025',
    location: 'Nepal',
    achievements: [
      'Monitored and maintained data center hardware, network, and IT systems.',
      'Performed preventive maintenance and daily infrastructure checks.',
      'Escalated and restored critical faults while maintaining reports and logs.',
      'Worked with Cisco Networking and Juniper Networks products.'
    ],
    technologies: ['Cisco', 'Juniper', 'Network Administration', 'System Maintenance', 'Infrastructure'],
    logo: icsLogo,
    current: false
  }
];

export const projects: Project[] = [
  {
    title: 'Eon',
    description: 'Eon is a small, statically-typed, expression-oriented language that compiles to bytecode and runs on a custom VM.',
    technologies: ['Rust', 'Programming Language', 'Bytecode VM', 'Compiler', 'Type System'],
    githubLink: 'https://github.com/KronosWasTaken/Eon',
    demoLink: null,
    icon: IconCode,
    featured: true
  },
  {
    title: 'Advent of Code',
    description: 'Advent of Code solutions starting from 2015.',
    technologies: ['Algorithms', 'Problem Solving', 'Advent of Code', 'Multi-year', 'Zig'],
    githubLink: 'https://github.com/KronosWasTaken/Advent_Of_Code',
    demoLink: null,
    icon: IconCode,
    featured: false
  },
  {
    title: 'AniRyu',
    description: 'A modern, full-stack anime and manga tracking application with beautiful statistics, bulk management features, and seamless AniList import functionality.',
    technologies: ['React', 'TypeScript', 'Go', 'Gin', 'GORM', 'SQLite', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'],
    githubLink: 'https://github.com/KronosWasTaken/AniRyu',
    demoLink: null,
    icon: IconBookOpen,
    featured: true
  },
  {
    title: 'VFlix',
    description: 'A sophisticated, full-stack streaming platform built with cutting-edge technologies. Features real-time data synchronization and TMDb integration.',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Framer Motion', 'TMDb API', 'Vercel'],
    githubLink: 'https://github.com/KronosWasTaken/VFlix',
    demoLink: 'https://vflix-mocha.vercel.app',
    icon: IconPlay,
    featured: true
  },
  {
    title: 'Xylem',
    description: 'Statically-typed, block-structured programming language with functions and type checking. Built in Rust.',
    technologies: ['Rust', 'Programming Language', 'Type System', 'Compiler'],
    githubLink: 'https://github.com/KronosWasTaken/Xylem',
    demoLink: null,
    icon: IconCode,
    featured: true
  },
  {
    title: 'GPG-Lite',
    description: 'A simple, modular, and educational GPG-like encryption tool in Python supporting AES, Argon2, and RSA hybrid encryption.',
    technologies: ['Python', 'Cryptography', 'AES', 'Argon2', 'RSA', 'Security'],
    githubLink: 'https://github.com/KronosWasTaken/GPG-Lite',
    demoLink: null,
    icon: IconLock,
    featured: true
  },
  {
    title: 'Onyx',
    description: 'A modern, fast, and beautiful note-taking application built with Electron and React. Features rich text editing and local encryption.',
    technologies: ['React', 'TypeScript', 'Electron', 'Tailwind CSS', 'Better-SQLite3', 'SQLCipher', 'TipTap', 'Zustand', 'Vite', 'pnpm'],
    githubLink: 'https://github.com/KronosWasTaken/Onyx',
    demoLink: null,
    icon: IconFileText,
    featured: false
  },
  {
    title: 'Intrusion Detector',
    description: 'Go-based client with Python server for real-time threat detection and network monitoring.',
    technologies: ['Go', 'Python', 'Network Security', 'Threat Detection', 'Real-time Monitoring'],
    githubLink: 'https://github.com/KronosWasTaken/Intrusion_Detector',
    demoLink: null,
    icon: IconShield,
    featured: false
  },
  {
    title: 'Pass-CLI',
    description: 'Secure CLI password manager using Python, SQLite3, Argon2, and Fernet encryption for safe credential storage.',
    technologies: ['Python', 'CLI', 'SQLite3', 'Argon2', 'Fernet', 'Password Management'],
    githubLink: 'https://github.com/KronosWasTaken/pass-cli',
    demoLink: null,
    icon: IconLock,
    featured: false
  }
];
