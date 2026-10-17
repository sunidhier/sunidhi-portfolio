// ============================================================
// EXPERIENCE & ACHIEVEMENTS TIMELINE DATA
// ============================================================

export interface TimelineProject {
  name: string;
  summary: string;
  metric?: string; // single standout metric for the callout chip
}

export interface TimelineItem {
  id: string;
  year: string;
  period?: string;
  title: string;
  organisation: string;
  description: string;
  /** Optional structured detail — rendered only when present */
  detail?: {
    intro: string;
    projects: TimelineProject[];
    closing: string;
    tech?: string[]; // technology tags shown below the projects
  };
  type: 'experience' | 'achievement' | 'education' | 'internship';
  icon: string;
  highlight?: boolean;
}

export const timelineItems: TimelineItem[] = [
  {
    id: 'boeing',
    year: '2026',
    period: 'July – September 2026',
    title: 'Programmer Analyst Intern',
    organisation: 'Boeing India Private Limited',
    description:
      'During my summer internship at Boeing, I worked on developing Python-based automation solutions to streamline enterprise IT processes and improve operational efficiency.',
    detail: {
      intro:
        'I built two proof-of-concept projects that translated real-world business challenges into practical technology solutions:',
      projects: [
        {
          name: 'ITAR Compliance Automation Tool',
          summary:
            'Supported compliance tracking, survey evaluation, automated communications and audit logging across 800+ applications — reducing end-to-end compliance processing from 45–60 minutes to under two minutes.',
          metric: '45–60 min → < 2 min',
        },
        {
          name: 'Azure DevOps Board Health Dashboard',
          summary:
            'Built with Python, Flask and REST APIs to analyze 1,000+ work items and provide actionable insights into board health — cutting auditing time from hours to approximately 30 seconds.',
          metric: 'Hours → ~30 seconds',
        },
      ],
      closing:
        'Beyond technical development, the experience strengthened my analytical thinking, problem-solving, communication and collaboration skills, and gave me valuable exposure to enterprise workflows.',
      tech: ['Python', 'Flask', 'REST APIs', 'Azure DevOps'],
    },
    type: 'internship',
    icon: 'Briefcase',
    highlight: true,
  },
  {
    id: 'ai-minor',
    year: '2025–2026',
    period: '2025 – 2026',
    title: 'Minor in Artificial Intelligence',
    organisation: 'IIT Ropar with Masai School',
    description:
      'Completed a structured minor programme in Artificial Intelligence, covering ML fundamentals, deep learning, and applied AI — delivered in collaboration between IIT Ropar and Masai School.',
    type: 'education',
    icon: 'GraduationCap',
    highlight: true,
  },
  {
    id: 'placement-coord',
    year: '2024–present',
    period: '2024 – Present',
    title: 'Student Placement Coordinator',
    organisation: 'GSSSIETW',
    description:
      'Facilitating campus placement activities, coordinating between students and recruiters, managing placement drives and helping peers prepare for industry roles.',
    type: 'experience',
    icon: 'Users',
    highlight: false,
  },
  {
    id: 'miss-g',
    year: '2025',
    period: '2025',
    title: 'Miss G — Second Runner-Up',
    organisation: 'GSSSIETW',
    description:
      'Achieved second runner-up position in the Miss G college pageant, celebrating talent, personality and achievement within the college community.',
    type: 'achievement',
    icon: 'Award',
    highlight: false,
  },
  {
    id: 'btech-start',
    year: '2023',
    period: '2023',
    title: 'B.Tech CSE — Enrolled',
    organisation: 'GSSSIETW',
    description: 'Began undergraduate studies in Computer Science Engineering with a CGPA of 8.63/10.',
    type: 'education',
    icon: 'BookOpen',
    highlight: false,
  },
  {
    id: 'sci-adventure',
    year: '2023–2024',
    period: '2023 – 2024',
    title: 'Treasurer, Science & Adventure Club',
    organisation: 'GSSSIETW',
    description:
      'Managed club finances and helped organise science outreach and adventure activities for the student community.',
    type: 'experience',
    icon: 'Compass',
    highlight: false,
  },
  {
    id: 'hockey',
    year: '2019',
    period: '2019',
    title: 'KVS National-Level Hockey Player',
    organisation: 'Kendriya Vidyalaya Sangathan',
    description:
      'Represented KVS at the national level in hockey, demonstrating athletic discipline and competitive spirit alongside academic pursuits.',
    type: 'achievement',
    icon: 'Trophy',
    highlight: false,
  },
];
