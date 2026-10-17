import { motion } from 'framer-motion';
import {
  Users,
  MessageSquare,
  Lightbulb,
  BarChart2,
  RefreshCw,
  Clock,
  CalendarCheck,
  Crown,
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const softSkills = [
  {
    icon: Crown,
    title: 'Leadership',
    desc: 'Guided teams and initiatives as Student Placement Coordinator and club treasurer, creating direction and accountability.',
    accent: '#00BFFF',
  },
  {
    icon: Users,
    title: 'Teamwork & Collaboration',
    desc: 'Worked cross-functionally at Boeing India and across academic projects, aligning diverse stakeholders toward shared goals.',
    accent: '#A78BFA',
  },
  {
    icon: MessageSquare,
    title: 'Communication',
    desc: 'Clearly conveyed technical ideas to non-technical stakeholders and coordinated between students and industry recruiters.',
    accent: '#34D399',
  },
  {
    icon: Lightbulb,
    title: 'Problem-Solving',
    desc: 'Turned open-ended enterprise challenges into practical Python tools, reducing hours-long processes to seconds.',
    accent: '#FCD34D',
  },
  {
    icon: BarChart2,
    title: 'Analytical Thinking',
    desc: 'Applied structured thinking to data pipelines, compliance workflows, and ML model evaluation.',
    accent: '#F472B6',
  },
  {
    icon: RefreshCw,
    title: 'Adaptability',
    desc: 'Quickly picked up enterprise Azure DevOps ecosystems, new APIs, and ML frameworks across varied project contexts.',
    accent: '#00BFFF',
  },
  {
    icon: Clock,
    title: 'Time Management',
    desc: 'Balanced internship deliverables, academic coursework, research, and leadership responsibilities simultaneously.',
    accent: '#A78BFA',
  },
  {
    icon: CalendarCheck,
    title: 'Event Coordination',
    desc: 'Organised science outreach programmes, adventure activities, and multi-company campus placement drives.',
    accent: '#34D399',
  },
];

export default function SoftSkills() {
  return (
    <section id="soft-skills" className="section-padding" aria-labelledby="soft-skills-heading">
      <div className="section-container">
        <SectionHeader
          label="Soft Skills"
          title="Beyond the"
          titleHighlight="code"
          subtitle="Professional strengths developed through internships, leadership roles, research, and campus involvement."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {softSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card-base p-5 group cursor-default transition-all duration-300 hover:scale-[1.02]"
                style={{
                  borderColor: `${skill.accent}20`,
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 24px ${skill.accent}18`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${skill.accent}40`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.borderColor = `${skill.accent}20`;
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${skill.accent}12`,
                    border: `1px solid ${skill.accent}28`,
                  }}
                >
                  <span style={{ color: skill.accent, display: 'flex' }}>
                    <Icon size={18} />
                  </span>
                </div>

                <h3
                  className="text-white font-semibold text-sm mb-2 group-hover:transition-colors duration-200"
                  style={{ color: undefined }}
                >
                  {skill.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">{skill.desc}</p>

                {/* Bottom accent line on hover */}
                <div
                  className="h-0.5 mt-4 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: `linear-gradient(to right, ${skill.accent}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
