import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Download, ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { profile } from '../../data/profile';

export default function Contact() {
  return (
    <section id="contact" className="section-padding" aria-labelledby="contact-heading">
      <div className="section-container">
        <SectionHeader
          label="Get in Touch"
          title="Let's"
          titleHighlight="connect"
          subtitle="Open to internships, collaborations, research conversations and new opportunities."
          centered
        />

        <div className="max-w-2xl mx-auto">
          {/* Main contact card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-base p-10 text-center relative overflow-hidden"
            style={{ border: '1px solid rgba(0,191,255,0.15)', boxShadow: '0 0 60px rgba(0,191,255,0.05)' }}
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at 50% 0%, rgba(0,191,255,0.08) 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-[#00BFFF]/10 border border-[#00BFFF]/20 flex items-center justify-center mx-auto mb-6">
                <Mail size={24} className="text-[#00BFFF]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">Say hello</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Whether it's a project idea, a research discussion, an internship opportunity, 
                or just a conversation about technology — I'd love to hear from you.
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="btn-primary text-base py-4 px-8 mb-6 inline-flex"
              >
                {profile.email}
                <ArrowRight size={18} />
              </a>

              <p className="text-slate-600 text-sm mb-8">I typically respond within a day or two.</p>

              {/* Social links */}
              <div className="flex items-center justify-center gap-4 pt-6 border-t border-[#1E2A42]">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group focus:outline-none focus:ring-2 focus:ring-[#00BFFF] rounded px-2 py-1"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                  <span className="group-hover:text-[#00BFFF] transition-colors">GitHub</span>
                </a>
                <span className="text-[#1E2A42]">·</span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group focus:outline-none focus:ring-2 focus:ring-[#A78BFA] rounded px-2 py-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                  <span className="group-hover:text-[#A78BFA] transition-colors">LinkedIn</span>
                </a>
                <span className="text-[#1E2A42]">·</span>
                <a
                  href={profile.resume}
                  download={profile.resumeDownloadName}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group focus:outline-none focus:ring-2 focus:ring-[#00BFFF] rounded px-2 py-1"
                  aria-label="Download resume"
                >
                  <Download size={18} />
                  <span className="group-hover:text-[#00BFFF] transition-colors">Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
