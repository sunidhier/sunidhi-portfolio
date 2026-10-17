import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Trophy,
  Users,
  Award,
  BookOpen,
  Compass,
  Zap,
  BarChart2,
  Code2,
  ArrowRight,
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { timelineItems, type TimelineItem } from '../../data/timeline';

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  GraduationCap,
  Trophy,
  Users,
  Award,
  BookOpen,
  Compass,
};

// Icon per project name — purely decorative, easy to extend
const projectIconMap: Record<string, React.ElementType> = {
  'ITAR Compliance Automation Tool': Zap,
  'Azure DevOps Board Health Dashboard': BarChart2,
};

const typeColors: Record<TimelineItem['type'], { dot: string; border: string; badge: string }> = {
  internship: {
    dot: 'bg-[#00BFFF]',
    border: 'border-[#00BFFF]/30',
    badge: 'bg-[#00BFFF]/10 text-[#00BFFF] border-[#00BFFF]/20',
  },
  education: {
    dot: 'bg-[#A78BFA]',
    border: 'border-[#8B5CF6]/30',
    badge: 'bg-[#8B5CF6]/10 text-[#A78BFA] border-[#8B5CF6]/20',
  },
  experience: {
    dot: 'bg-emerald-400',
    border: 'border-emerald-500/30',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
  achievement: {
    dot: 'bg-amber-400',
    border: 'border-amber-500/30',
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  },
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding" aria-labelledby="experience-heading">
      <div className="section-container">
        <SectionHeader
          label="Experience & Achievements"
          title="The"
          titleHighlight="journey"
          subtitle="From campus achievements to industry internships — a timeline of experiences that shaped who I am."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Central line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00BFFF]/40 via-[#8B5CF6]/30 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {timelineItems.map((item, index) => {
              const Icon: React.ElementType = iconMap[item.icon] ?? Briefcase;
              const colors = typeColors[item.type];
              const isBoeing = item.id === 'boeing';

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative flex gap-6"
                >
                  {/* Icon node */}
                  <div className="flex-shrink-0 relative z-10">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center border ${colors.border} bg-[#111827] shadow-lg ${
                        isBoeing ? 'shadow-[0_0_16px_rgba(0,191,255,0.15)]' : ''
                      }`}
                    >
                      <Icon size={20} className={colors.dot.replace('bg-', 'text-')} />
                    </div>
                    {/* Dot on line */}
                    <div
                      className={`absolute top-1/2 -left-[calc(2rem-2px)] w-2 h-2 rounded-full -translate-y-1/2 ${colors.dot} ring-4 ring-[#080B14]`}
                    />
                  </div>

                  {/* ── Card ── */}
                  <div
                    className={`flex-1 card-base transition-all duration-300 ${
                      item.highlight
                        ? `${colors.border} shadow-[0_0_24px_rgba(0,0,0,0.35)]`
                        : ''
                    } ${isBoeing ? 'hover:shadow-[0_0_36px_rgba(0,191,255,0.1)]' : 'hover:border-[#1E2A42]/80'}`}
                  >
                    {/* ── Boeing-specific rich card ── */}
                    {isBoeing && item.detail ? (
                      <div className="p-6">
                        {/* Header row */}
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                          <div>
                            <h3 className="text-white font-bold text-lg leading-tight">
                              {item.title}
                            </h3>
                            <p className="text-[#00BFFF] text-sm font-medium mt-0.5">
                              {item.organisation}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                            <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${colors.badge}`}>
                              {item.period}
                            </span>
                            <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${colors.badge} opacity-60`}>
                              Internship
                            </span>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-[#00BFFF]/20 via-[#8B5CF6]/10 to-transparent my-4" />

                        {/* Opening description */}
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Intro line */}
                        <p className="text-slate-400 text-sm leading-relaxed mb-3">
                          {item.detail.intro}
                        </p>

                        {/* Project tiles */}
                        <div className="grid sm:grid-cols-2 gap-3 mb-4">
                          {item.detail.projects.map((proj) => {
                            const ProjIcon: React.ElementType =
                              projectIconMap[proj.name] ?? Code2;
                            return (
                              <div
                                key={proj.name}
                                className="group relative rounded-xl p-4 flex flex-col gap-2 transition-all duration-200 hover:scale-[1.01]"
                                style={{
                                  background:
                                    'linear-gradient(135deg, rgba(0,191,255,0.05) 0%, rgba(139,92,246,0.04) 100%)',
                                  border: '1px solid rgba(0,191,255,0.14)',
                                }}
                              >
                                {/* Project header */}
                                <div className="flex items-start gap-2.5">
                                  <div
                                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                                    style={{
                                      background: 'rgba(0,191,255,0.1)',
                                      border: '1px solid rgba(0,191,255,0.2)',
                                    }}
                                  >
                                    <ProjIcon size={13} className="text-[#00BFFF]" />
                                  </div>
                                  <p className="text-white text-sm font-semibold leading-snug">
                                    {proj.name}
                                  </p>
                                </div>

                                {/* Summary */}
                                <p className="text-slate-400 text-xs leading-relaxed pl-[2.375rem]">
                                  {proj.summary}
                                </p>

                                {/* Metric callout */}
                                {proj.metric && (
                                  <div className="pl-[2.375rem]">
                                    <span
                                      className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full"
                                      style={{
                                        background: 'rgba(0,191,255,0.08)',
                                        border: '1px solid rgba(0,191,255,0.2)',
                                        color: '#00BFFF',
                                      }}
                                    >
                                      <ArrowRight size={10} />
                                      {proj.metric}
                                    </span>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>

                        {/* Closing paragraph */}
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                          {item.detail.closing}
                        </p>

                        {/* Tech tags */}
                        {item.detail.tech && (
                          <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1E2A42]">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-600 self-center mr-1">
                              Tech
                            </span>
                            {item.detail.tech.map((t) => (
                              <span
                                key={t}
                                className="inline-flex items-center text-xs font-mono px-2.5 py-0.5 rounded-full"
                                style={{
                                  background: 'rgba(139,92,246,0.08)',
                                  border: '1px solid rgba(139,92,246,0.2)',
                                  color: '#A78BFA',
                                }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      /* ── Standard card for all other entries ── */
                      <div className="p-5">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div>
                            <h3 className="text-white font-semibold text-base">{item.title}</h3>
                            <p className="text-slate-400 text-sm">{item.organisation}</p>
                          </div>
                          <div className="flex flex-col items-end gap-1.5">
                            <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${colors.badge}`}>
                              {item.year}
                            </span>
                            <span
                              className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${colors.badge} opacity-70`}
                            >
                              {item.type}
                            </span>
                          </div>
                        </div>

                        {item.period && item.period !== item.year && (
                          <p className="text-slate-600 text-xs font-mono mb-2">{item.period}</p>
                        )}

                        <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
