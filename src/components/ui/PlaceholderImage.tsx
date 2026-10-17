interface PlaceholderImageProps {
  category: string;
  alt: string;
  className?: string;
}

const categoryConfig: Record<string, { bg: string; accent: string; icon: string; label: string }> = {
  internship: {
    bg: 'from-blue-950/80 to-slate-900',
    accent: '#00BFFF',
    icon: '✦',
    label: 'Internship',
  },
  events: {
    bg: 'from-violet-950/80 to-slate-900',
    accent: '#A78BFA',
    icon: '◆',
    label: 'Events',
  },
  sports: {
    bg: 'from-emerald-950/80 to-slate-900',
    accent: '#34D399',
    icon: '◉',
    label: 'Sports',
  },
  academic: {
    bg: 'from-amber-950/80 to-slate-900',
    accent: '#FCD34D',
    icon: '▲',
    label: 'Academic',
  },
  club: {
    bg: 'from-rose-950/80 to-slate-900',
    accent: '#FB7185',
    icon: '●',
    label: 'Club',
  },
};

export default function PlaceholderImage({ category, alt, className = '' }: PlaceholderImageProps) {
  const config = categoryConfig[category] ?? categoryConfig['academic'];

  return (
    <div
      className={`relative flex flex-col items-center justify-center bg-gradient-to-br ${config.bg} ${className}`}
      aria-label={alt}
      role="img"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10 grid-dots" />

      {/* Corner decorations */}
      <div
        className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 rounded-tl-sm"
        style={{ borderColor: config.accent }}
      />
      <div
        className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 rounded-br-sm"
        style={{ borderColor: config.accent }}
      />

      {/* Icon */}
      <span className="text-3xl mb-2 opacity-40" style={{ color: config.accent }}>
        {config.icon}
      </span>
      <span className="text-xs font-mono uppercase tracking-widest opacity-40" style={{ color: config.accent }}>
        {config.label}
      </span>
      <span className="text-[10px] text-slate-600 mt-1 font-mono px-2 text-center">
        add photo here
      </span>
    </div>
  );
}
