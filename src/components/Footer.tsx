import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#1E2A42] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-bold text-base">
            <span className="gradient-text">{profile.firstName}</span>
            <span className="text-slate-600 font-light">.dev</span>
          </p>
          <p className="text-slate-600 text-xs mt-1">
            {profile.name} · {profile.education.institution} · Class of {profile.education.graduationYear}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors p-2 rounded-lg hover:bg-[#1E2A42] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors p-2 rounded-lg hover:bg-[#1E2A42] focus:outline-none focus:ring-2 focus:ring-[#A78BFA]"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-slate-500 hover:text-white transition-colors p-2 rounded-lg hover:bg-[#1E2A42] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
        </div>

        <p className="text-slate-700 text-xs font-mono">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
