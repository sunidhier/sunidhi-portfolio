import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronRight, Star } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Tag from '../ui/Tag';
import { projects, projectCategories, type Project, type ProjectCategory } from '../../data/projects';

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative z-10 card-base max-w-2xl w-full p-8 max-h-[85vh] overflow-y-auto shadow-[0_0_60px_rgba(0,0,0,0.5)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-[#1E2A42] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Category badge */}
        <span className="text-xs font-mono tracking-widest uppercase text-[#00BFFF] border border-[#00BFFF]/20 bg-[#00BFFF]/5 px-2.5 py-1 rounded-full">
          {project.category}
        </span>

        <h3 className="text-2xl font-bold text-white mt-4 mb-3">{project.title}</h3>
        <p className="text-slate-300 leading-relaxed mb-5">{project.longDescription}</p>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-5 p-4 rounded-xl bg-[#00BFFF]/5 border border-[#00BFFF]/15">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#00BFFF] mb-3">Key Metrics</h4>
            <ul className="space-y-1.5">
              {project.metrics.map((m) => (
                <li key={m} className="text-sm text-slate-300 flex items-start gap-2">
                  <ChevronRight size={14} className="text-[#00BFFF] mt-0.5 flex-shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech stack */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Tag key={t} label={t} variant="blue" />
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} variant="neutral" />
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2.5 px-5"
          >
            <Github size={15} />
            View on GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm py-2.5 px-5"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`card-base card-hover flex flex-col cursor-pointer group relative overflow-hidden ${
        project.flagship ? 'border-[#00BFFF]/20' : ''
      }`}
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      role="button"
      aria-label={`View details for ${project.title}`}
    >
      {/* Flagship glow */}
      {project.flagship && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at top left, rgba(0,191,255,0.06) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <span className="text-xs font-mono tracking-widest uppercase text-[#00BFFF]/70">
            {project.category}
          </span>
          <div className="flex items-center gap-2">
            {project.flagship && (
              <span className="flex items-center gap-1 text-[10px] font-mono text-amber-400/70 border border-amber-400/20 bg-amber-400/5 px-2 py-0.5 rounded-full">
                <Star size={9} /> Featured
              </span>
            )}
          </div>
        </div>

        <h3 className="text-white font-semibold text-lg leading-snug mb-3 group-hover:text-[#00BFFF] transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>

        {/* Metrics preview */}
        {project.metrics && (
          <div className="mb-4">
            {project.metrics.slice(0, 1).map((m) => (
              <span key={m} className="text-xs text-[#00BFFF]/80 font-mono">
                • {m}
              </span>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <Tag key={tag} label={tag} small />
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[#1E2A42]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors p-1"
            onClick={(e) => e.stopPropagation()}
            aria-label={`GitHub repository for ${project.title}`}
          >
            <Github size={16} />
          </a>
          <span className="text-xs text-slate-600 group-hover:text-[#00BFFF] transition-colors font-mono flex items-center gap-1">
            View details <ChevronRight size={12} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<'All' | ProjectCategory>('All');
  const [search, setSearch] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = projects.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  const featured = filtered.filter((p) => p.flagship);
  const rest = filtered.filter((p) => !p.flagship);

  return (
    <section id="projects" className="section-padding" aria-labelledby="projects-heading">
      <div className="section-container">
        <SectionHeader
          label="Projects"
          title="Things I've"
          titleHighlight="built"
          subtitle="A curated collection of projects spanning AI/ML, full-stack development, NLP, and automation."
        />

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1 max-w-sm">
            <input
              type="search"
              placeholder="Search projects…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#111827] border border-[#1E2A42] rounded-xl px-4 py-2.5 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-[#00BFFF]/50 focus:ring-1 focus:ring-[#00BFFF]/30 transition-colors"
              aria-label="Search projects"
            />
          </div>

          {/* Category pills */}
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter by category"
          >
            {(['All', ...projectCategories] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as typeof activeCategory)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all focus:outline-none focus:ring-2 focus:ring-[#00BFFF] ${
                  activeCategory === cat
                    ? 'bg-[#00BFFF]/15 text-[#00BFFF] border border-[#00BFFF]/40'
                    : 'bg-[#1E2A42]/40 text-slate-500 border border-[#1E2A42] hover:text-slate-300 hover:border-[#1E2A42]/80'
                }`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured grid */}
        {featured.length > 0 && (
          <div className="mb-8">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-600 mb-5">Flagship Projects</p>
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {featured.map((p) => (
                  <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* Rest */}
        {rest.length > 0 && (
          <div>
            {featured.length > 0 && (
              <p className="text-xs font-mono uppercase tracking-widest text-slate-600 mb-5 mt-8">More Projects</p>
            )}
            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {rest.map((p) => (
                  <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-600">
            <p className="font-mono text-sm">No projects match your search.</p>
          </div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 text-sm mb-4">More experiments and learning projects on GitHub</p>
          <a
            href="https://github.com/sunidhier"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github size={16} />
            github.com/sunidhier
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
