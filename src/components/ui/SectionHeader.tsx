import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  label,
  title,
  titleHighlight,
  subtitle,
  centered = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      <span className="inline-block text-xs font-mono tracking-[0.2em] uppercase text-[#00BFFF] mb-4 px-3 py-1.5 rounded-full border border-[#00BFFF]/20 bg-[#00BFFF]/5">
        {label}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
        {title}
        {titleHighlight && (
          <>
            {' '}
            <span className="gradient-text">{titleHighlight}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className={`text-slate-400 text-lg ${centered ? 'mx-auto' : ''} max-w-2xl`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
