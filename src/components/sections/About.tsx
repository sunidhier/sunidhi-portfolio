import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Zap, MapPin, Briefcase, FlaskConical, Bot, BookOpen, School } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { profile } from '../../data/profile';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
};


function ProfilePortrait() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer decorative ring — animated slow spin */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0%, #00BFFF 20%, transparent 40%, #8B5CF6 60%, transparent 80%, #00BFFF 100%)',
          padding: '1.5px',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          borderRadius: '9999px',
          opacity: 0.45,
        }}
      />

      {/* Static second ring for depth */}
      <div
        className="absolute w-[275px] h-[275px] sm:w-[315px] sm:h-[315px] rounded-full border border-[#1E2A42]/70 pointer-events-none"
        aria-hidden="true"
      />

      {/* Glow behind photo */}
      <div
        className="absolute w-[200px] h-[200px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 40% 60%, rgba(0,191,255,0.18) 0%, rgba(139,92,246,0.12) 50%, transparent 75%)',
          filter: 'blur(28px)',
        }}
        aria-hidden="true"
      />

      {/* Photo frame */}
      <div
        className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full overflow-hidden flex-shrink-0"
        style={{
          boxShadow:
            '0 0 0 3px rgba(0,191,255,0.25), 0 0 0 6px rgba(0,191,255,0.08), 0 20px 60px rgba(0,0,0,0.5)',
        }}
      >
        {!imgError ? (
          <img
            src={profile.profilePhoto}
            alt="E. R. Sunidhi — profile photograph"
            className="w-full h-full object-cover object-top"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Tasteful placeholder when photo is not yet added */
          <div className="w-full h-full bg-gradient-to-br from-[#0D1120] via-[#111827] to-[#0D1120] flex flex-col items-center justify-center gap-3">
            <div className="grid-dots absolute inset-0 opacity-20" />
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
              style={{
                background:
                  'linear-gradient(135deg, rgba(0,191,255,0.15) 0%, rgba(139,92,246,0.15) 100%)',
                border: '1px solid rgba(0,191,255,0.2)',
                color: '#00BFFF',
              }}
            >
              S
            </div>
            <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest px-3 text-center">
              add profile.jpeg
            </span>
          </div>
        )}
      </div>

      {/* Floating accent badge — Boeing */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="absolute bottom-4 -right-2 sm:bottom-6 sm:-right-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono backdrop-blur-sm"
        style={{
          background: 'rgba(17,24,39,0.9)',
          border: '1px solid rgba(0,191,255,0.25)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
        }}
      >
        <Briefcase size={11} className="text-[#00BFFF]" />
        <span className="text-slate-300">Boeing India, 2026</span>
      </motion.div>

      {/* Floating accent badge — AI Minor */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.75, duration: 0.4 }}
        className="absolute top-4 -left-2 sm:top-6 sm:-left-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono backdrop-blur-sm"
        style={{
          background: 'rgba(17,24,39,0.9)',
          border: '1px solid rgba(139,92,246,0.25)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
        }}
      >
        <FlaskConical size={11} className="text-[#A78BFA]" />
        <span className="text-slate-300">AI Minor · IIT Ropar</span>
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding" aria-labelledby="about-heading">
      <div className="section-container">
        <SectionHeader
          label="About Me"
          title="Building with"
          titleHighlight="purpose"
        />

        {/* ── Top row: portrait + bio ── */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-14">

          {/* Portrait — left on desktop, top on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-start"
          >
            <ProfilePortrait />
          </motion.div>

          {/* Bio — right on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Intro */}
            <div>
              <p className="text-slate-200 text-lg leading-relaxed mb-4">
                I'm a <span className="text-white font-semibold">Computer Science Engineering</span> undergraduate
                at GSSSIETW (graduating 2027), with a CGPA of{' '}
                <span className="text-[#00BFFF] font-semibold">8.63&thinsp;/&thinsp;10</span>. I completed a{' '}
                <span className="text-[#A78BFA] font-semibold">Minor in Artificial Intelligence</span> with IIT
                Ropar and Masai School, and spent the summer of 2026 as a{' '}
                <span className="text-white font-semibold">Programmer Analyst Intern at Boeing India</span>.
              </p>
              <p className="text-slate-400 leading-relaxed">
                My interests sit at the intersection of AI/ML, Python automation and software engineering.
                Outside academics, I lead campus placement efforts, research automated speech correction,
                and enjoy the challenge of turning messy real-world problems into clean, useful software.
              </p>
            </div>

            {/* Education showcase card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card-base p-5 card-hover"
            >
              <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-[#1E2A42]">
                <h3 className="text-white font-semibold text-xs font-mono uppercase tracking-wider flex items-center gap-2">
                  <GraduationCap size={16} className="text-[#00BFFF]" />
                  Education &amp; Qualifications
                </h3>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  Academic Milestones
                </span>
              </div>

              <div className="space-y-3">
                {/* 1. B.Tech — Highlighted */}
                <div className="p-3.5 rounded-xl bg-[#0D1120]/80 border border-[#00BFFF]/25 hover:border-[#00BFFF]/50 transition-all flex items-start gap-3.5 shadow-[0_0_20px_rgba(0,191,255,0.05)]">
                  <div className="p-2.5 rounded-lg bg-[#00BFFF]/10 border border-[#00BFFF]/25 text-[#00BFFF] flex-shrink-0 mt-0.5">
                    <GraduationCap size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-1.5">
                      <h4 className="text-white font-semibold text-sm leading-tight">
                        B.Tech, Computer Science Engineering
                      </h4>
                      <span className="text-xs font-mono font-medium bg-[#00BFFF]/10 text-[#00BFFF] px-2.5 py-0.5 rounded-full border border-[#00BFFF]/25">
                        CGPA: 8.63 / 10
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs mt-1">GSSSIETW, Mysore</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[10px] font-mono bg-[#1E2A42]/60 text-slate-400 px-2 py-0.5 rounded-full border border-[#1E2A42]">
                        Class of 2027
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">2023 – 2027</span>
                    </div>
                  </div>
                </div>

                {/* 2. AI Minor — Highlighted */}
                <div className="p-3.5 rounded-xl bg-[#0D1120]/80 border border-[#8B5CF6]/25 hover:border-[#8B5CF6]/50 transition-all flex items-start gap-3.5 shadow-[0_0_20px_rgba(139,92,246,0.05)]">
                  <div className="p-2.5 rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 text-[#A78BFA] flex-shrink-0 mt-0.5">
                    <Bot size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-1.5">
                      <h4 className="text-white font-semibold text-sm leading-tight">
                        Minor in Artificial Intelligence
                      </h4>
                      <span className="text-xs font-mono font-medium bg-[#8B5CF6]/10 text-[#A78BFA] px-2.5 py-0.5 rounded-full border border-[#8B5CF6]/25">
                        Completed 2025–2026
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs mt-1">IIT Ropar with Masai School</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[10px] font-mono bg-[#8B5CF6]/10 text-[#A78BFA] px-2 py-0.5 rounded-full border border-[#8B5CF6]/20">
                        AI &amp; ML Specialization
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. Pre-University (Base PU College) */}
                <div className="p-3.5 rounded-xl bg-[#0D1120]/80 border border-emerald-500/20 hover:border-emerald-500/45 transition-all flex items-start gap-3.5 shadow-[0_0_20px_rgba(16,185,129,0.04)]">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex-shrink-0 mt-0.5">
                    <BookOpen size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-1.5">
                      <h4 className="text-white font-semibold text-sm leading-tight">
                        Pre-University (PUC) — PCMC
                      </h4>
                      <span className="text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/25">
                        81.5%
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs mt-1">Base PU College, Mysore</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[10px] font-mono bg-[#1E2A42]/60 text-slate-400 px-2 py-0.5 rounded-full border border-[#1E2A42]">
                        Physics · Chemistry · Math · Computer Science
                      </span>
                    </div>
                  </div>
                </div>

                {/* 4. Schooling (KV Mysore) */}
                <div className="p-3.5 rounded-xl bg-[#0D1120]/80 border border-amber-500/20 hover:border-amber-500/45 transition-all flex items-start gap-3.5 shadow-[0_0_20px_rgba(245,158,11,0.04)]">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-400 flex-shrink-0 mt-0.5">
                    <School size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-1.5">
                      <h4 className="text-white font-semibold text-sm leading-tight">
                        Secondary School (SSLC / Class 10)
                      </h4>
                      <span className="text-xs font-mono font-medium bg-amber-500/10 text-amber-400 px-2.5 py-0.5 rounded-full border border-amber-500/25">
                        85.5%
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs mt-1">Kendriya Vidyalaya, Mysore</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[10px] font-mono bg-[#1E2A42]/60 text-slate-400 px-2 py-0.5 rounded-full border border-[#1E2A42]">
                        CBSE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <MapPin size={13} />
              <span>{profile.location}</span>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom row: Current Focus ── */}
        <div className="grid gap-6">

          {/* Current Focus — full width */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="card-base p-6 card-hover"
          >
            <h3 className="text-white font-semibold mb-5 flex items-center gap-2 text-sm uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#00BFFF] animate-pulse flex-shrink-0" />
              Current Focus
            </h3>
            <ul className="space-y-4">
              {profile.currentFocus.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#00BFFF] mt-1 flex-shrink-0 font-bold text-base leading-none">›</span>
                  <div>
                    <p className="text-white text-sm font-semibold leading-snug mb-0.5">{item.title}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
