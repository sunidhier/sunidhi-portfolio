
/* ============================================================
   TECHNICAL SKILLS DATA
   ============================================================ */

export interface SkillGroup {
  label: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Programming',
    icon: 'Code2',
    skills: ['Java', 'Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    label: 'AI & Data',
    icon: 'Brain',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
    ],
  },
  {
    label: 'Tools & Platforms',
    icon: 'Wrench',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Eclipse',
      'Jupyter Notebook',
      'Google Colab',
      'Streamlit',
      'MySQL',
      'Excel',
      'Kiro',
      'Antigravity',
    ],
  },
  {
    label: 'Core CS',
    icon: 'Cpu',
    skills: ['DSA', 'OOPS', 'Operating Systems', 'DBMS'],
  },
];
