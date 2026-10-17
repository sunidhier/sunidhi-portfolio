import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/profile';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#soft-skills', label: 'Soft Skills' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080B14]/90 backdrop-blur-xl border-b border-[#1E2A42]/60 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleLinkClick('#home'); }}
            className="font-bold text-lg tracking-tight group focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:ring-offset-2 focus:ring-offset-[#080B14] rounded"
            aria-label={`${profile.name} — home`}
          >
            <span className="gradient-text">{profile.firstName}</span>
            <span className="text-slate-500 font-light">.dev</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                  className="px-3 py-1.5 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-[#1E2A42]/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:ring-offset-1 focus:ring-offset-[#080B14]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={profile.resume}
              download={profile.resumeDownloadName}
              className="btn-outline text-sm py-2 px-4"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#1E2A42]/60 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#080B14]/95 backdrop-blur-xl border-b border-[#1E2A42] md:hidden"
          >
            <ul className="px-4 py-4 flex flex-col gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                    className="block px-4 py-2.5 text-slate-300 hover:text-white rounded-lg hover:bg-[#1E2A42]/60 transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-[#1E2A42] mt-2">
                <a
                  href={profile.resume}
                  download={profile.resumeDownloadName}
                  className="block px-4 py-2.5 text-[#00BFFF] hover:text-white font-semibold rounded-lg hover:bg-[#00BFFF]/10 transition-all"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
