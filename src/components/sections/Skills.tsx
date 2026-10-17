
import { motion } from 'framer-motion';
import { Code2, Brain, Wrench, Cpu } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const skillGroups = [
  {
    label: 'Programming Languages',
    icon: 'Code2',
    skills: ['Java', 'Python', 'SQL'],
  },
  {
    label: 'AI & Data Science',
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
      'Git & GitHub',
      'VS Code',
      'Jupyter Notebook',
      'Google Colab',
      'Streamlit',
      'MySQL',
      'Excel',
    ],
  },
  {
    label: 'Core CS',
    icon: 'Cpu',
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Operating Systems',
      'DBMS',
    ],
  },
];

const iconMap: Record<string, typeof Code2> = {
  Code2,
  Brain,
  Wrench,
  Cpu,
};

const groupColors = [
  {
    accent: '#00BFFF',
    light: 'rgba(0,191,255,0.07)',
    border: 'rgba(0,191,255,0.15)',
  },
  {
    accent: '#A78BFA',
    light: 'rgba(139,92,246,0.07)',
    border: 'rgba(139,92,246,0.15)',
  },
  {
    accent: '#34D399',
    light: 'rgba(52,211,153,0.07)',
    border: 'rgba(52,211,153,0.15)',
  },
  {
    accent: '#FCD34D',
    light: 'rgba(252,211,77,0.07)',
    border: 'rgba(252,211,77,0.15)',
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding"
      aria-labelledby="skills-heading"
    >
      <div className="section-container">
        <SectionHeader
          label="TECHNICAL SKILLS"
          title="My"
          titleHighlight="toolkit"
          subtitle="The programming languages, tools and technologies I use to build practical software and AI solutions."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, gi) => {
            const Icon = iconMap[group.icon] ?? Code2;
            const color = groupColors[gi % groupColors.length];

            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
                className="card-base p-6 flex flex-col"
                style={{ border: `1px solid ${color.border}` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: color.light,
                    border: `1px solid ${color.border}`,
                  }}
                >
                  <span
                    style={{ color: color.accent, display: 'flex' }}
                  >
                    <Icon size={18} />
                  </span>
                </div>

                <h3
                  className="font-semibold text-sm mb-4"
                  style={{ color: color.accent }}
                >
                  {group.label}
                </h3>

                <ul className="space-y-2 flex-1">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: color.accent }}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
