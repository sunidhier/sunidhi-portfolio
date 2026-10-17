import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Image as ImageIcon } from 'lucide-react';
import { profile } from '../../data/profile';

// ─── Stylised 3D-look female character illustration (retained as artistic alternative) ───
function CharacterIllustration() {
  return (
    <svg
      viewBox="0 0 460 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className="w-full h-full select-none"
      style={{ filter: 'drop-shadow(0 8px 40px rgba(0,191,255,0.18))' }}
    >
      <defs>
        {/* Hair */}
        <linearGradient id="cHair" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#3D1F6E" />
          <stop offset="45%" stopColor="#23144A" />
          <stop offset="100%" stopColor="#120A28" />
        </linearGradient>
        {/* Skin — warm natural tone */}
        <linearGradient id="cSkin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDDBB4" />
          <stop offset="100%" stopColor="#F2B98A" />
        </linearGradient>
        <linearGradient id="cSkinDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F2B98A" />
          <stop offset="100%" stopColor="#E09A6A" />
        </linearGradient>
        {/* Jacket */}
        <linearGradient id="cJacket" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1B3A7A" />
          <stop offset="60%" stopColor="#0F2255" />
          <stop offset="100%" stopColor="#091535" />
        </linearGradient>
        {/* Shirt */}
        <linearGradient id="cShirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#D6E4FF" />
        </linearGradient>
        {/* Halo */}
        <radialGradient id="cHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.32" />
          <stop offset="50%" stopColor="#0EA5E9" stopOpacity="0.15" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cHaloInner" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.2" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        {/* Ground */}
        <radialGradient id="cGround" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.15" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        {/* Laptop screen glow */}
        <linearGradient id="cScreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0D1F3C" />
          <stop offset="100%" stopColor="#0A1628" />
        </linearGradient>
        <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* ── Halo glow ── */}
      <ellipse cx="230" cy="280" rx="190" ry="240" fill="url(#cHalo)" />
      <ellipse cx="230" cy="210" rx="100" ry="110" fill="url(#cHaloInner)" />

      {/* ── Hair — back (behind body) ── */}
      <path d="M155 165 Q120 290 126 420 Q134 470 152 490 Q168 450 172 370 Q178 280 174 215 Z" fill="url(#cHair)" />
      <path d="M305 165 Q340 290 334 420 Q326 470 308 490 Q292 450 288 370 Q282 280 286 215 Z" fill="url(#cHair)" />
      {/* Hair highlights */}
      <path d="M156 180 Q130 280 135 380" stroke="#5B2D9E" strokeWidth="3" strokeLinecap="round" opacity="0.35" fill="none" />
      <path d="M304 180 Q330 280 325 380" stroke="#5B2D9E" strokeWidth="3" strokeLinecap="round" opacity="0.35" fill="none" />

      {/* ── Neck ── */}
      <rect x="207" y="266" width="46" height="44" rx="12" fill="url(#cSkin)" />
      {/* Neck shadow */}
      <rect x="207" y="266" width="14" height="44" rx="7" fill="#C88A5A" opacity="0.18" />

      {/* ── Body — blazer/jacket ── */}
      <path d="M145 316 Q145 284 168 272 L207 266 L230 292 L253 266 L292 272 Q315 284 315 316 L322 470 Q274 492 230 494 Q186 492 138 470 Z" fill="url(#cJacket)" />
      {/* Jacket lapels */}
      <path d="M207 266 L230 290 L210 340 L184 320 Z" fill="#0A1E50" opacity="0.7" />
      <path d="M253 266 L230 290 L250 340 L276 320 Z" fill="#0A1E50" opacity="0.7" />
      {/* Shirt visible between lapels */}
      <path d="M210 340 L250 340 L254 430 L206 430 Z" fill="url(#cShirt)" opacity="0.92" />
      {/* Collar */}
      <path d="M207 266 L230 284 L253 266 L242 260 L230 270 L218 260 Z" fill="#EEF4FF" />
      {/* Jacket edge detail */}
      <path d="M150 462 Q188 484 230 486 Q272 484 310 462" stroke="#2A5CB8" strokeWidth="1.5" opacity="0.5" fill="none" />
      {/* Buttons on shirt */}
      <circle cx="230" cy="358" r="3.5" fill="#C0CCE0" opacity="0.7" />
      <circle cx="230" cy="378" r="3.5" fill="#C0CCE0" opacity="0.7" />
      <circle cx="230" cy="398" r="3.5" fill="#C0CCE0" opacity="0.7" />

      {/* ── Head ── */}
      <ellipse cx="230" cy="196" rx="68" ry="76" fill="url(#cSkin)" />
      <path d="M168 196 Q168 256 230 268 Q292 256 292 196" fill="url(#cSkinDark)" opacity="0.12" />
      <ellipse cx="186" cy="216" rx="16" ry="10" fill="#F08080" opacity="0.18" />
      <ellipse cx="274" cy="216" rx="16" ry="10" fill="#F08080" opacity="0.18" />
      <ellipse cx="225" cy="168" rx="28" ry="18" fill="white" opacity="0.08" />

      {/* ── Ears ── */}
      <ellipse cx="163" cy="200" rx="11" ry="14" fill="url(#cSkin)" />
      <ellipse cx="297" cy="200" rx="11" ry="14" fill="url(#cSkin)" />
      <ellipse cx="163" cy="200" rx="6" ry="8" fill="#E09A6A" opacity="0.35" />
      <ellipse cx="297" cy="200" rx="6" ry="8" fill="#E09A6A" opacity="0.35" />
      <circle cx="163" cy="208" r="4" fill="#A78BFA" opacity="0.85" />
      <circle cx="297" cy="208" r="4" fill="#A78BFA" opacity="0.85" />
      <circle cx="163" cy="208" r="2" fill="white" opacity="0.5" />
      <circle cx="297" cy="208" r="2" fill="white" opacity="0.5" />

      {/* ── Eyes ── */}
      <ellipse cx="204" cy="198" rx="18" ry="13" fill="#C8904A" opacity="0.10" />
      <ellipse cx="256" cy="198" rx="18" ry="13" fill="#C8904A" opacity="0.10" />
      <ellipse cx="204" cy="198" rx="15" ry="10.5" fill="white" />
      <ellipse cx="256" cy="198" rx="15" ry="10.5" fill="white" />
      <circle cx="205" cy="199" r="8.5" fill="#4A2C0A" />
      <circle cx="257" cy="199" r="8.5" fill="#4A2C0A" />
      <circle cx="205" cy="199" r="7" fill="#7B4A1E" />
      <circle cx="257" cy="199" r="7" fill="#7B4A1E" />
      <circle cx="206" cy="199" r="4.2" fill="#0D0A04" />
      <circle cx="258" cy="199" r="4.2" fill="#0D0A04" />
      <circle cx="209" cy="195" r="2.5" fill="white" opacity="0.95" />
      <circle cx="261" cy="195" r="2.5" fill="white" opacity="0.95" />
      <circle cx="203" cy="201" r="1.2" fill="white" opacity="0.4" />
      <circle cx="255" cy="201" r="1.2" fill="white" opacity="0.4" />
      <path d="M190 189 Q198 183 218 188" stroke="#1A0A00" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M242 188 Q262 183 270 189" stroke="#1A0A00" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M191 207 Q204 211 217 207" stroke="#6B3C1A" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M243 207 Q256 211 269 207" stroke="#6B3C1A" strokeWidth="1" fill="none" opacity="0.5" />

      {/* ── Eyebrows ── */}
      <path d="M188 178 Q204 168 220 174" stroke="#2D124D" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      <path d="M240 174 Q256 168 272 178" stroke="#2D124D" strokeWidth="3.2" strokeLinecap="round" fill="none" />

      {/* ── Nose ── */}
      <path d="M228 200 L226 226 L235 228" stroke="#C88045" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <ellipse cx="230" cy="229" rx="5" ry="2.5" fill="#C88045" opacity="0.35" />

      {/* ── Mouth / Smile ── */}
      <path d="M213 243 Q230 255 247 243" stroke="#B84A5A" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      <path d="M216 244 Q230 253 244 244" fill="#E8657A" opacity="0.5" />
      <path d="M217 244 Q230 250 243 244" fill="white" opacity="0.8" />
      <ellipse cx="211" cy="242" rx="2" ry="2" fill="#C88045" opacity="0.4" />
      <ellipse cx="249" cy="242" rx="2" ry="2" fill="#C88045" opacity="0.4" />

      {/* ── Hair — front ── */}
      <path d="M152 175 Q165 110 230 110 Q295 110 308 175 Q314 205 310 230 Q298 160 270 148 Q235 138 200 152 Q168 165 152 175 Z" fill="url(#cHair)" />
      <path d="M162 170 Q180 135 220 138 Q185 145 168 180 Z" fill="#4D278A" opacity="0.5" />
      <path d="M152 175 Q144 230 155 270 Q160 240 162 205 Z" fill="url(#cHair)" />
      <path d="M308 175 Q316 230 305 270 Q300 240 298 205 Z" fill="url(#cHair)" />

      {/* ── Glasses ── */}
      <rect x="186" y="186" width="36" height="26" rx="8" stroke="#00BFFF" strokeWidth="2.5" fill="rgba(0,191,255,0.06)" />
      <rect x="238" y="186" width="36" height="26" rx="8" stroke="#00BFFF" strokeWidth="2.5" fill="rgba(0,191,255,0.06)" />
      <path d="M222 196 Q230 193 238 196" stroke="#00BFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M186 195 L168 192" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" />
      <path d="M274 195 L292 192" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" />
      <path d="M190 190 L204 190" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M242 190 L256 190" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* ── Laptop in hands ── */}
      <g transform="translate(155, 410)">
        <path d="M15 50 L135 50 L145 75 L5 75 Z" fill="#1E2A42" stroke="#2D3F5E" strokeWidth="1.5" />
        <rect x="20" y="8" width="110" height="44" rx="4" fill="url(#cScreen)" stroke="#00BFFF" strokeWidth="1.5" />
        {/* Code lines on screen */}
        <line x1="28" y1="18" x2="60" y2="18" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        <line x1="64" y1="18" x2="85" y2="18" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        <line x1="34" y1="25" x2="75" y2="25" stroke="#34D399" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
        <line x1="34" y1="32" x2="90" y2="32" stroke="#CBD5E1" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
        <line x1="40" y1="39" x2="70" y2="39" stroke="#00BFFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
        <circle cx="75" cy="62" r="3" fill="#00BFFF" opacity="0.6" />
        <ellipse cx="22" cy="58" rx="10" ry="7" fill="url(#cSkin)" />
        <ellipse cx="128" cy="58" rx="10" ry="7" fill="url(#cSkin)" />
      </g>

      {/* ── Ground shadow ── */}
      <ellipse cx="230" cy="500" rx="150" ry="18" fill="url(#cGround)" />
      <ellipse cx="230" cy="502" rx="110" ry="10" fill="#000" opacity="0.12" />
    </svg>
  );
}

// ─── Main Hero Section ────────────────────────────────────────────────────────
export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduce = useReducedMotion();
  const [showIllustration, setShowIllustration] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  // Scroll-driven parallax progress for Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Vertical scroll motion for the large "PORTFOLIO" title
  const portfolioY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduce ? ['0%', '0%'] : ['0%', '42%']
  );

  const portfolioOpacity = useTransform(scrollYProgress, [0, 0.8], [0.85, 0.15]);

  // Subtle parallax for portrait image
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduce ? ['0%', '0%'] : ['0%', '-12%']
  );

  // Staggered reveal animations
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduce ? 0 : 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#080B14] pt-24 pb-12 lg:pb-16"
      aria-label="Introduction and Hero"
    >
      {/* ── Background Subtle Monochrome Grids & Glows ── */}
      <div className="absolute inset-0 grid-dots opacity-[0.10]" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080B14] via-transparent to-[#080B14]" aria-hidden="true" />

      {/* Ambient futuristic Cyan & Violet radial lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] sm:w-[850px] sm:h-[850px] pointer-events-none -z-10"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(0, 191, 255, 0.07) 0%, rgba(139, 92, 246, 0.06) 45%, transparent 70%)',
          filter: 'blur(70px)',
        }}
        aria-hidden="true"
      />

      {/* ── LAYER 1 (Deep Layer): Large "PORTFOLIO" Title moving vertically on scroll ── */}
      <motion.div
        style={{ y: portfolioY, opacity: portfolioOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none z-0 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-extrabold uppercase tracking-[-0.05em] text-stroke-subtle text-[22vw] sm:text-[18vw] lg:text-[16vw] leading-none whitespace-nowrap opacity-60 transition-opacity"
          style={{
            letterSpacing: '0.04em',
            textShadow: '0 0 80px rgba(0, 191, 255, 0.08)',
          }}
        >
          PORTFOLIO
        </span>
      </motion.div>

      {/* ── Top Status Bar ── */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-6">
        <motion.div
          {...fadeUp(0.1)}
          className="flex items-center justify-between gap-3 border-b border-white/[0.08] pb-4 text-xs font-mono"
        >
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 text-[#00BFFF] bg-[#00BFFF]/5 px-3 py-1 rounded-full border border-[#00BFFF]/20 text-[11px] font-mono tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] animate-pulse" />
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>

          {/* Visual style switch (Photo vs Illustration) */}
          <button
            onClick={() => setShowIllustration(!showIllustration)}
            className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-400 hover:text-white border border-white/10 hover:border-[#00BFFF]/40 px-3 py-1 rounded-full transition-colors bg-[#111827]/40"
            title="Toggle between monochrome photography and vector illustration"
          >
            {showIllustration ? (
              <>
                <ImageIcon size={12} className="text-[#00BFFF]" />
                <span>Photo Mode</span>
              </>
            ) : (
              <>
                <Sparkles size={12} className="text-[#A78BFA]" />
                <span>Art Mode</span>
              </>
            )}
          </button>
        </motion.div>
      </div>

      {/* ── MAIN COMPOSITION: Layered Typography + Monochrome Image ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* ══ LEFT & OVERLAPPING FOREGROUND (Cols 1 to 7): Editorial Typography ══ */}
          <div className="lg:col-span-7 z-30 flex flex-col justify-center">
            
            {/* Editorial Category Tagline */}
            <motion.div {...fadeUp(0.18)} className="mb-3">
              <span className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-slate-400 flex items-center gap-2">
                <span className="w-6 h-px bg-[#00BFFF]/60" />
                Aspiring Software &amp; AI Engineer
              </span>
            </motion.div>

            {/* Oversized Editorial Name: SUNIDHI E. R. */}
            <motion.div {...fadeUp(0.25)} className="relative">
              <h1 className="font-serif tracking-[-0.03em] uppercase text-white leading-[0.88] select-text">
                <span className="block text-[13vw] sm:text-[9.5vw] lg:text-[5.8rem] xl:text-[6.8rem] font-light text-white drop-shadow-lg">
                  SUNIDHI
                </span>
                <span className="block text-[11vw] sm:text-[8vw] lg:text-[4.8rem] xl:text-[5.6rem] font-normal italic gradient-text">
                  E. R.
                </span>
              </h1>
            </motion.div>

            {/* Secondary Editorial Subheading */}
            <motion.div {...fadeUp(0.35)} className="mt-4 sm:mt-5 max-w-xl">
              <p className="text-slate-200 font-sans text-base sm:text-lg lg:text-xl font-light tracking-wide leading-relaxed">
                Computer Science undergraduate actively pursuing Software Engineering and AI roles.
              </p>
              <p className="text-slate-400 font-sans text-xs sm:text-sm leading-relaxed mt-2.5">
                Experienced in Python automation from my internship at <span className="text-white font-medium">Boeing India</span>, speech AI research, and an AI Minor from IIT Ropar — ready to contribute, learn, and build impactful software.
              </p>
            </motion.div>

            {/* Key Factual Credentials Bar */}
            <motion.div
              {...fadeUp(0.42)}
              className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono"
            >
              <div className="bg-[#111827]/90 border border-white/10 hover:border-[#00BFFF]/30 px-3 py-1.5 rounded-lg text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF]" />
                <span>Boeing Programmer Analyst Intern</span>
              </div>
              <div className="bg-[#111827]/90 border border-white/10 hover:border-[#8B5CF6]/30 px-3 py-1.5 rounded-lg text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                <span>AI Minor · IIT Ropar × Masai</span>
              </div>
              <div className="bg-[#111827]/90 border border-white/10 px-3 py-1.5 rounded-lg text-slate-400">
                <span>GSSSIETW · CGPA {profile.education.cgpa}</span>
              </div>
            </motion.div>

            {/* CTAs and Direct Actions */}
            <motion.div {...fadeUp(0.5)} className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Explore Selected Projects
                <ArrowRight size={16} />
              </button>

              <a
                href={profile.resume}
                download={profile.resumeDownloadName}
                className="btn-outline"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links & Direct Contact */}
            <motion.div {...fadeUp(0.58)} className="mt-6 flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-[#00BFFF]/40 hover:bg-[#00BFFF]/5 transition-all focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-[#A78BFA]/40 hover:bg-[#A78BFA]/5 transition-all focus:outline-none focus:ring-2 focus:ring-[#A78BFA]"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-[#00BFFF]/40 hover:bg-[#00BFFF]/5 transition-all focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
              >
                <Mail size={18} />
              </a>
              <span className="text-slate-500 text-xs font-mono hidden sm:inline ml-2">{profile.email}</span>
            </motion.div>
          </div>

          {/* ══ LAYER 2: MIDDLE LAYER (Cols 8 to 12) Monochrome Subject ══ */}
          {/* Layered between the giant background "PORTFOLIO" title and foreground text */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end z-20 mt-4 lg:mt-0">
            <motion.div
              style={{ y: imageY }}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]"
            >
              {/* Subtle back ambient glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none -z-10"
                style={{
                  background:
                    'radial-gradient(circle at 50% 50%, rgba(0, 191, 255, 0.18) 0%, rgba(139, 92, 246, 0.14) 50%, transparent 80%)',
                  filter: 'blur(32px)',
                }}
              />

              {/* Monochromatic Portrait Frame or Vector Illustration */}
              {!showIllustration ? (
                <div className="relative group">
                  {/* Architectural Asymmetrical Frame */}
                  <div
                    className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0D1120] aspect-[3/4] shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
                    style={{
                      boxShadow:
                        '0 0 0 1px rgba(255,255,255,0.08), 0 24px 60px rgba(0,0,0,0.7), 0 0 40px rgba(0,191,255,0.12)',
                    }}
                  >
                    {!photoError ? (
                      <img
                        src={profile.profilePhoto}
                        alt="Sunidhi E. R. — Monochrome Portrait"
                        className="w-full h-full object-cover object-top filter grayscale contrast-[1.08] brightness-[0.96] transition-all duration-700 group-hover:scale-[1.02] group-hover:contrast-[1.12]"
                        onError={() => setPhotoError(true)}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#111827] to-[#080B14] p-6 text-center">
                        <div className="w-20 h-20 rounded-full border border-[#00BFFF]/30 flex items-center justify-center font-serif text-3xl text-white mb-4">
                          S
                        </div>
                        <p className="font-serif text-lg text-white">Sunidhi E. R.</p>
                        <p className="text-xs font-mono text-slate-500 mt-1">Portrait Archive</p>
                      </div>
                    )}

                    {/* Subtle monochrome vignette & film gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B14]/80 via-transparent to-transparent pointer-events-none" />

                    {/* Editorial corner hairline accents */}
                    <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/40 pointer-events-none" />
                    <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/40 pointer-events-none" />
                    <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/40 pointer-events-none" />
                    <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/40 pointer-events-none" />

                    {/* Floating editorial caption inside photo card */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-300">
                      <span className="tracking-widest uppercase text-white/90">FIG. 01 — PORTRAIT</span>
                      <span className="text-[#00BFFF] tracking-wider">MYS // 2026</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Vector 3D Character Illustration Alternative */
                <div className="relative w-full aspect-[3/4] flex items-center justify-center p-2 rounded-2xl border border-white/10 bg-[#0D1120]/60 backdrop-blur-sm">
                  <div className="w-full h-full max-h-[460px]">
                    <CharacterIllustration />
                  </div>
                </div>
              )}
            </motion.div>
          </div>

        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6">
        <motion.div
          {...fadeUp(0.6)}
          className="flex items-center justify-center border-t border-white/[0.08] pt-4 text-[10px] sm:text-xs font-mono text-slate-500 uppercase tracking-widest"
        >
          {/* Central Scroll Cue */}
          <div
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 text-slate-400 hover:text-white cursor-pointer transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <motion.div
              animate={shouldReduce ? {} : { y: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-[#00BFFF]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
