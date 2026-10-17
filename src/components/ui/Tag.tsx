interface TagProps {
  label: string;
  variant?: 'blue' | 'violet' | 'neutral';
  small?: boolean;
}

export default function Tag({ label, variant = 'neutral', small = false }: TagProps) {
  const variants = {
    blue: 'bg-[#00BFFF]/10 text-[#00BFFF] border-[#00BFFF]/20',
    violet: 'bg-[#8B5CF6]/10 text-[#A78BFA] border-[#8B5CF6]/20',
    neutral: 'bg-[#1E2A42]/60 text-slate-400 border-[#1E2A42]',
  };

  return (
    <span
      className={`inline-flex items-center border rounded-full font-mono ${
        small ? 'text-[10px] px-2 py-0.5' : 'text-xs px-2.5 py-1'
      } ${variants[variant]}`}
    >
      {label}
    </span>
  );
}
