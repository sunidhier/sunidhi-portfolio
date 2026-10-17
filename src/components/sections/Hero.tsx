import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../../data/profile';

// ─── Stylised 3D-look female character illustration ─────────────────────────
// Artistic avatar only. Not a photograph of any real person.
// Character: confident, warm, curious, modern tech professional aesthetic.
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
      {/* Face */}
      <ellipse cx="230" cy="196" rx="68" ry="76" fill="url(#cSkin)" />
      {/* Face shading — subtle contour */}
      <path d="M168 196 Q168 256 230 268 Q292 256 292 196" fill="url(#cSkinDark)" opacity="0.12" />
      {/* Cheek warmth */}
      <ellipse cx="186" cy="216" rx="16" ry="10" fill="#F08080" opacity="0.18" />
      <ellipse cx="274" cy="216" rx="16" ry="10" fill="#F08080" opacity="0.18" />
      {/* Forehead highlight */}
      <ellipse cx="225" cy="168" rx="28" ry="18" fill="white" opacity="0.08" />

      {/* ── Ears ── */}
      <ellipse cx="163" cy="200" rx="11" ry="14" fill="url(#cSkin)" />
      <ellipse cx="297" cy="200" rx="11" ry="14" fill="url(#cSkin)" />
      <ellipse cx="163" cy="200" rx="6" ry="8" fill="#E09A6A" opacity="0.35" />
      <ellipse cx="297" cy="200" rx="6" ry="8" fill="#E09A6A" opacity="0.35" />
      {/* Small earrings */}
      <circle cx="163" cy="208" r="4" fill="#A78BFA" opacity="0.85" />
      <circle cx="297" cy="208" r="4" fill="#A78BFA" opacity="0.85" />
      <circle cx="163" cy="208" r="2" fill="white" opacity="0.5" />
      <circle cx="297" cy="208" r="2" fill="white" opacity="0.5" />

      {/* ── Eyes ── */}
      {/* Eye socket shadow */}
      <ellipse cx="204" cy="198" rx="18" ry="13" fill="#C8904A" opacity="0.10" />
      <ellipse cx="256" cy="198" rx="18" ry="13" fill="#C8904A" opacity="0.10" />
      {/* Whites */}
      <ellipse cx="204" cy="198" rx="15" ry="10.5" fill="white" />
      <ellipse cx="256" cy="198" rx="15" ry="10.5" fill="white" />
      {/* Iris — warm brown-amber */}
      <circle cx="205" cy="199" r="8.5" fill="#4A2C0A" />
      <circle cx="257" cy="199" r="8.5" fill="#4A2C0A" />
      {/* Iris color overlay */}
      <circle cx="205" cy="199" r="7" fill="#7B4A1E" />
      <circle cx="257" cy="199" r="7" fill="#7B4A1E" />
      {/* Pupil */}
      <circle cx="206" cy="199" r="4.2" fill="#0D0A04" />
      <circle cx="258" cy="199" r="4.2" fill="#0D0A04" />
      {/* Eye shine — multiple for realism */}
      <circle cx="209" cy="195" r="2.5" fill="white" opacity="0.95" />
      <circle cx="261" cy="195" r="2.5" fill="white" opacity="0.95" />
      <circle cx="203" cy="201" r="1.2" fill="white" opacity="0.4" />
      <circle cx="255" cy="201" r="1.2" fill="white" opacity="0.4" />
      {/* Upper lashes */}
      <path d="M190 189 Q198 183 218 188" stroke="#1A0A00" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M242 188 Q262 183 270 189" stroke="#1A0A00" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Lower lash line */}
      <path d="M191 207 Q204 211 217 207" stroke="#6B3C1A" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M243 207 Q256 211 269 207" stroke="#6B3C1A" strokeWidth="1" fill="none" opacity="0.5" />

      {/* ── Eyebrows — natural arched ── */}
      <path d="M190 181 Q204 174 219 179" stroke="#2A1206" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M241 179 Q256 174 270 181" stroke="#2A1206" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Brow fill for density */}
      <path d="M191 181 Q204 175 218 179" stroke="#3D1F06" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M242 179 Q256 175 269 181" stroke="#3D1F06" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />

      {/* ── Nose — subtle ── */}
      <path d="M222 212 Q230 226 238 212" stroke="#C8784A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <ellipse cx="223" cy="222" rx="6" ry="3.5" fill="#C8784A" opacity="0.22" />
      <ellipse cx="237" cy="222" rx="6" ry="3.5" fill="#C8784A" opacity="0.22" />

      {/* ── Smile — warm and genuine ── */}
      <path d="M210 236 Q230 252 250 236" stroke="#B05A38" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M212 238 Q230 250 248 238" fill="#E07050" opacity="0.28" />
      {/* Lip corners — dimple hint */}
      <circle cx="210" cy="236" r="2" fill="#C06040" opacity="0.3" />
      <circle cx="250" cy="236" r="2" fill="#C06040" opacity="0.3" />

      {/* ── Hair — front layer ── */}
      {/* Top / parting crown */}
      <path d="M168 162 Q192 118 230 114 Q268 118 292 162 Q298 138 288 112 Q264 78 230 74 Q196 78 172 112 Q162 138 168 162 Z" fill="url(#cHair)" />
      {/* Front face-framing strands */}
      <path d="M168 162 Q158 190 162 222 Q164 242 172 258 Q162 232 160 200 Q156 172 168 162 Z" fill="url(#cHair)" />
      <path d="M292 162 Q302 190 298 222 Q296 242 288 258 Q298 232 300 200 Q304 172 292 162 Z" fill="url(#cHair)" />
      {/* Long flowing hair */}
      <path d="M162 222 Q132 330 136 450 Q143 508 158 525 Q172 488 176 408 Q180 320 174 258 Z" fill="url(#cHair)" />
      <path d="M298 222 Q328 330 324 450 Q317 508 302 525 Q288 488 284 408 Q280 320 286 258 Z" fill="url(#cHair)" />
      {/* Hair sheen/highlight */}
      <path d="M200 115 Q210 140 205 170" stroke="#7C4AC8" strokeWidth="4" strokeLinecap="round" opacity="0.4" fill="none" />
      <path d="M248 116 Q256 140 253 168" stroke="#7C4AC8" strokeWidth="3" strokeLinecap="round" opacity="0.25" fill="none" />

      {/* ── Left arm — slightly raised, confident pose ── */}
      <path d="M150 330 Q120 345 106 378 Q98 400 110 418 Q124 430 138 414 Q148 392 158 362 Z" fill="url(#cSkin)" />
      {/* Left hand — natural relaxed */}
      <ellipse cx="110" cy="424" rx="16" ry="12" fill="url(#cSkin)" transform="rotate(-10,110,424)" />
      {/* Fingers */}
      <path d="M97 418 Q91 404 96 398" stroke="url(#cSkin)" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M101 414 Q94 398 100 392" stroke="url(#cSkin)" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M107 412 Q102 396 108 390" stroke="url(#cSkin)" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M113 412 Q110 396 117 392" stroke="url(#cSkin)" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M120 415 Q119 400 126 398" stroke="url(#cSkin)" strokeWidth="6" strokeLinecap="round" fill="none" />

      {/* ── Right arm — holding laptop ── */}
      <path d="M310 330 Q340 345 354 378 Q362 400 350 418 Q336 430 322 414 Q312 392 302 362 Z" fill="url(#cSkin)" />

      {/* ── Laptop ── */}
      <g transform="translate(314,375) rotate(-6)">
        {/* Screen lid */}
        <rect x="0" y="-68" width="108" height="70" rx="6" fill="#1A2B44" />
        <rect x="3" y="-65" width="102" height="64" rx="4" fill="url(#cScreen)" />
        {/* Code lines on screen */}
        <rect x="8" y="-60" width="56" height="3.5" rx="1.75" fill="#00BFFF" opacity="0.75" />
        <rect x="8" y="-53" width="40" height="3.5" rx="1.75" fill="#A78BFA" opacity="0.65" />
        <rect x="8" y="-46" width="66" height="3.5" rx="1.75" fill="#00BFFF" opacity="0.55" />
        <rect x="8" y="-39" width="34" height="3.5" rx="1.75" fill="#34D399" opacity="0.65" />
        <rect x="8" y="-32" width="58" height="3.5" rx="1.75" fill="#A78BFA" opacity="0.5" />
        <rect x="8" y="-25" width="48" height="3.5" rx="1.75" fill="#00BFFF" opacity="0.45" />
        <rect x="8" y="-18" width="44" height="3.5" rx="1.75" fill="#FCD34D" opacity="0.45" />
        {/* Screen glare */}
        <path d="M4 -65 L28 -65 L4 -38 Z" fill="white" opacity="0.04" />
        {/* Screen edge glow */}
        <rect x="3" y="-65" width="102" height="2" rx="1" fill="#00BFFF" opacity="0.15" />
        {/* Laptop base */}
        <rect x="-5" y="2" width="118" height="10" rx="4" fill="#243552" />
        {/* Touchpad */}
        <rect x="36" y="5" width="40" height="5" rx="2.5" fill="#1A2B44" opacity="0.7" />
        {/* Hinge */}
        <rect x="44" y="-1" width="20" height="5" rx="2.5" fill="#1A2B44" />
      </g>

      {/* ── Floating tech orbs ── */}
      {/* Python */}
      <g opacity="0.9">
        <circle cx="88" cy="265" r="22" fill="#0D1528" stroke="#00BFFF" strokeWidth="1.5" />
        <circle cx="88" cy="265" r="18" fill="#0D1528" />
        <text x="88" y="270" textAnchor="middle" fill="#00BFFF" fontSize="11" fontFamily="monospace" fontWeight="700">Py</text>
      </g>
      {/* AI */}
      <g opacity="0.88">
        <circle cx="374" cy="248" r="22" fill="#0D1528" stroke="#A78BFA" strokeWidth="1.5" />
        <text x="374" y="254" textAnchor="middle" fill="#A78BFA" fontSize="11" fontFamily="monospace" fontWeight="700">AI</text>
      </g>
      {/* ML */}
      <g opacity="0.82">
        <circle cx="76" cy="358" r="18" fill="#0D1528" stroke="#34D399" strokeWidth="1.4" />
        <text x="76" y="363" textAnchor="middle" fill="#34D399" fontSize="10" fontFamily="monospace" fontWeight="700">ML</text>
      </g>
      {/* data brackets */}
      <g opacity="0.78">
        <circle cx="380" cy="345" r="18" fill="#0D1528" stroke="#FCD34D" strokeWidth="1.4" />
        <text x="380" y="350" textAnchor="middle" fill="#FCD34D" fontSize="13" fontFamily="monospace" fontWeight="700">{'<>'}</text>
      </g>
      {/* star accent */}
      <g opacity="0.7">
        <circle cx="100" cy="450" r="14" fill="#0D1528" stroke="#F472B6" strokeWidth="1.2" />
        <text x="100" y="455" textAnchor="middle" fill="#F472B6" fontSize="13" fontFamily="monospace">✦</text>
      </g>

      {/* ── Ground shadow ── */}
      <ellipse cx="230" cy="500" rx="150" ry="18" fill="url(#cGround)" />
      <ellipse cx="230" cy="502" rx="110" ry="10" fill="#000" opacity="0.12" />
    </svg>
  );
}

// ─── Main Hero ────────────────────────────────────────────────────────────────
export default function Hero() {
  const shouldReduce = useReducedMotion();

  const fl = (d = 0) => ({
    initial: { opacity: 0, x: -24 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: d, ease: 'easeOut' },
  });
  const fr = (d = 0) => ({
    initial: { opacity: 0, x: 24 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: d, ease: 'easeOut' },
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-dots opacity-[0.15]" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080B14] via-transparent to-[#080B14]" aria-hidden="true" />
      <div
        className="absolute left-0 top-1/3 w-[480px] h-[480px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,191,255,0.06) 0%, transparent 70%)', filter: 'blur(50px)' }}
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-1/4 w-[480px] h-[480px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)', filter: 'blur(50px)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Three-column grid on desktop: left | character | right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px_1fr] gap-8 lg:gap-6 items-center min-h-[calc(100vh-8rem)]">

          {/* ══ LEFT ══ */}
          <div className="flex flex-col gap-5 order-2 lg:order-1">

            {/* Available badge */}
            <motion.div {...fl(0.1)}>
              <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#00BFFF] px-4 py-1.5 rounded-full border border-[#00BFFF]/25 bg-[#00BFFF]/5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name — single line, responsive clamp */}
            <motion.div {...fl(0.2)}>
              <h1
                className="font-bold text-white leading-none tracking-tight whitespace-nowrap"
                style={{ fontSize: 'clamp(1.9rem, 4.2vw, 3.6rem)' }}
              >
                {profile.displayName ?? profile.name}
              </h1>
              <p
                className="gradient-text font-semibold mt-2 leading-tight"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}
              >
                Computer Science Engineer | AI Enthusiast
              </p>
            </motion.div>

            {/* Summary — exact requested text */}
            <motion.p
              {...fl(0.32)}
              className="text-slate-300 leading-relaxed max-w-lg"
              style={{ fontSize: 'clamp(0.875rem, 1.4vw, 1rem)' }}
            >
              I'm a Computer Science undergraduate at GSSSIETW, passionate about building technology that
              makes a real difference. From developing Python automation solutions during my internship at
              Boeing India to exploring AI-powered applications and speech research, I enjoy turning complex
              problems into practical solutions. I'm curious by nature, driven by challenges, and always
              excited to learn, build, and explore what's next.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fl(0.42)} className="flex flex-wrap gap-3 pt-1">
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Explore Projects
                <ArrowRight size={16} />
              </button>
              <a href={profile.resume} download={profile.resumeDownloadName} className="btn-outline">
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div {...fl(0.52)} className="flex items-center gap-3 pt-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl border border-[#1E2A42] text-slate-400 hover:text-white hover:border-[#00BFFF]/40 hover:bg-[#00BFFF]/5 transition-all focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl border border-[#1E2A42] text-slate-400 hover:text-white hover:border-[#A78BFA]/40 hover:bg-[#A78BFA]/5 transition-all focus:outline-none focus:ring-2 focus:ring-[#A78BFA]"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl border border-[#1E2A42] text-slate-400 hover:text-white hover:border-[#00BFFF]/40 hover:bg-[#00BFFF]/5 transition-all focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
              >
                <Mail size={18} />
              </a>
              <span className="text-slate-600 text-xs font-mono hidden sm:inline">{profile.email}</span>
            </motion.div>
          </div>

          {/* ══ CENTRE — Character ══ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="order-1 lg:order-2 flex items-end justify-center"
            aria-hidden="true"
          >
            <div className="relative w-full max-w-[340px] lg:max-w-none" style={{ height: 'clamp(380px, 55vw, 520px)' }}>
              {/* Pulse glow ring behind character */}
              <motion.div
                animate={shouldReduce ? {} : { scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 50% 60%, rgba(0,191,255,0.13) 0%, rgba(139,92,246,0.1) 40%, transparent 70%)',
                  filter: 'blur(24px)',
                }}
              />
              {/* Floating animation wrapper */}
              <motion.div
                animate={shouldReduce ? {} : { y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-full"
              >
                <CharacterIllustration />
              </motion.div>
            </div>
          </motion.div>

          {/* ══ RIGHT — Identity cards ══ */}
          <div className="flex flex-col gap-4 order-3">

            {/* Identity card */}
            <motion.div
              {...fr(0.28)}
              className="card-base p-4 card-hover"
              style={{ borderColor: 'rgba(0,191,255,0.15)', boxShadow: '0 0 24px rgba(0,191,255,0.05)' }}
            >
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-600 mb-2">Identity</p>
              <p className="text-white font-semibold text-sm">{profile.displayName ?? profile.name}</p>
              <p className="text-[#00BFFF] text-xs font-mono mt-0.5">{profile.education.institution}</p>
              <p className="text-slate-500 text-xs font-mono">{profile.education.degree.split(',')[0]}</p>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="text-[10px] font-mono bg-[#1E2A42]/60 text-slate-400 px-2 py-0.5 rounded-full border border-[#1E2A42]">CGPA {profile.education.cgpa}</span>
                <span className="text-[10px] font-mono bg-[#1E2A42]/60 text-slate-400 px-2 py-0.5 rounded-full border border-[#1E2A42]">2027</span>
              </div>
            </motion.div>

            {/* Boeing badge */}
            <motion.div
              {...fr(0.38)}
              className="card-base p-4 card-hover flex items-center gap-3"
              style={{ borderColor: 'rgba(0,191,255,0.12)' }}
            >
              <div className="w-9 h-9 rounded-xl bg-[#00BFFF]/10 border border-[#00BFFF]/20 flex items-center justify-center flex-shrink-0 text-lg">✈</div>
              <div>
                <p className="text-white text-sm font-semibold">Boeing India</p>
                <p className="text-slate-500 text-[11px] font-mono">Programmer Analyst Intern · 2026</p>
              </div>
            </motion.div>

            {/* AI Minor badge */}
            <motion.div
              {...fr(0.46)}
              className="card-base p-4 card-hover flex items-center gap-3"
              style={{ borderColor: 'rgba(139,92,246,0.12)' }}
            >
              <div className="w-9 h-9 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0 text-lg">🤖</div>
              <div>
                <p className="text-white text-sm font-semibold">AI Minor</p>
                <p className="text-slate-500 text-[11px] font-mono">IIT Ropar · Masai School · 2025–26</p>
              </div>
            </motion.div>

            {/* Currently active */}
            <motion.div
              {...fr(0.54)}
              className="card-base p-4 card-hover"
              style={{ borderColor: 'rgba(52,211,153,0.12)' }}
            >
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-600 mb-2.5">Currently</p>
              <ul className="space-y-1.5">
                {['Speech AI Research', 'AI/ML Development', 'Placement Coordinator', 'Open to Internships'].map((t, i) => (
                  <li key={t} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: ['#00BFFF','#A78BFA','#34D399','#FCD34D'][i] }} />
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
        aria-hidden="true"
      >
        <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-slate-700">scroll</span>
        <motion.div
          animate={shouldReduce ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-5 bg-gradient-to-b from-slate-700 to-transparent"
        />
      </motion.div>
    </section>
  );
}
