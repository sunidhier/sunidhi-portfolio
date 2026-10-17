
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import {
  galleryCategories,
  type GalleryCategory,
  type GalleryPhoto,
} from '../../data/gallery';

/* Placeholder displayed if an image cannot be loaded */
function PhotoPlaceholder({
  accent,
  emoji,
  label,
}: {
  accent: string;
  emoji: string;
  label: string;
}) {
  return (
    <div
      className="relative flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0D1120 0%, #111827 100%)',
      }}
    >
      <div className="absolute inset-0 grid-dots opacity-10" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${accent} 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute left-3 top-3 h-5 w-5 rounded-tl-sm border-l-2 border-t-2"
        style={{ borderColor: `${accent}60` }}
      />
      <div
        className="absolute bottom-3 right-3 h-5 w-5 rounded-br-sm border-b-2 border-r-2"
        style={{ borderColor: `${accent}60` }}
      />
      <Images size={28} className="relative z-10 opacity-40" style={{ color: accent }} />
      <span
        className="relative z-10 text-center font-mono text-[10px] uppercase tracking-widest"
        style={{ color: `${accent}CC` }}
      >
        {label}
      </span>
      <span className="relative z-10 text-[9px] text-slate-500">
        Photo unavailable
      </span>
    </div>
  );
}

/* Photo displayed in the lightbox */
function LightboxPhoto({
  photo,
  accent,
  emoji,
  categoryTitle,
}: {
  photo: GalleryPhoto;
  accent: string;
  emoji: string;
  categoryTitle: string;
}) {
  const [err, setErr] = useState(false);

  useEffect(() => {
    setErr(false);
  }, [photo.src]);

  return (
    <div
      className="relative flex w-full items-center justify-center"
      style={{ minHeight: '55vh' }}
    >
      {!err ? (
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-h-[65vh] max-w-full rounded-xl object-contain"
          onError={() => setErr(true)}
          draggable={false}
        />
      ) : (
        <div
          className="w-full overflow-hidden rounded-xl"
          style={{ aspectRatio: '4/3', maxHeight: '55vh' }}
        >
          <PhotoPlaceholder
            accent={accent}
            emoji={emoji}
            label={categoryTitle}
          />
        </div>
      )}
    </div>
  );
}

/* Full-screen photo gallery */
function Lightbox({
  category,
  initialIndex,
  onClose,
}: {
  category: GalleryCategory;
  initialIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(initialIndex);
  const photos = category.photos;
  const photo = photos[idx];

  const prev = useCallback(() => {
    setIdx((i) => (i - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const next = useCallback(() => {
    setIdx((i) => (i + 1) % photos.length);
  }, [photos.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, prev, next]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${category.title} photo gallery`}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl"
        style={{
          background: '#0D1120',
          border: `1px solid ${category.coverAccent}40`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between gap-3 border-b border-[#1E2A42] px-5 py-3.5">
          <div className="flex min-w-0 items-center gap-2.5">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                {category.title}
              </p>
              <p className="truncate text-xs text-slate-400">
                {photo.caption}
              </p>
            </div>
          </div>

          <div className="flex flex-shrink-0 items-center gap-3">
            <span className="font-mono text-xs text-slate-400">
              {idx + 1} / {photos.length}
            </span>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-[#1E2A42] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
              aria-label="Close gallery"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Main photo */}
        <div className="relative bg-[#080B14] px-4 py-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${category.id}-${idx}`}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.18 }}
            >
              <LightboxPhoto
                photo={photo}
                accent={category.coverAccent}
                emoji={category.coverEmoji}
                categoryTitle={category.title}
              />
            </motion.div>
          </AnimatePresence>

          {photos.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-6 top-1/2 -translate-y-1/2 rounded-xl border border-[#1E2A42] p-2 text-slate-300 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                style={{ background: 'rgba(13,17,32,0.85)' }}
                aria-label="Previous photo"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={next}
                className="absolute right-6 top-1/2 -translate-y-1/2 rounded-xl border border-[#1E2A42] p-2 text-slate-300 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                style={{ background: 'rgba(13,17,32,0.85)' }}
                aria-label="Next photo"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail navigation */}
        {photos.length > 1 && (
          <div className="flex gap-2 overflow-x-auto border-t border-[#1E2A42] px-5 py-3">
            {photos.map((p, i) => (
              <ThumbNail
                key={p.id}
                photo={p}
                accent={category.coverAccent}
                emoji={category.coverEmoji}
                active={i === idx}
                onClick={() => setIdx(i)}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

/* Individual thumbnail */
function ThumbNail({
  photo,
  accent,
  emoji,
  active,
  onClick,
}: {
  photo: GalleryPhoto;
  accent: string;
  emoji: string;
  active: boolean;
  onClick: () => void;
}) {
  const [err, setErr] = useState(false);

  useEffect(() => {
    setErr(false);
  }, [photo.src]);

  return (
    <button
      onClick={onClick}
      className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
      style={{
        border: active ? `2px solid ${accent}` : '2px solid transparent',
        opacity: active ? 1 : 0.65,
      }}
      aria-label={`View ${photo.alt}`}
      aria-pressed={active}
    >
      {!err ? (
        <img
          src={photo.src}
          alt={photo.alt}
          className="h-full w-full object-cover"
          onError={() => setErr(true)}
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center text-lg"
          style={{ background: '#111827' }}
        >
          {emoji}
        </div>
      )}
    </button>
  );
}

/* Clickable gallery cover card */
function GalleryCoverCard({
  category,
  onOpen,
}: {
  category: GalleryCategory;
  onOpen: (cat: GalleryCategory) => void;
}) {
  const [coverErr, setCoverErr] = useState(false);

  useEffect(() => {
    setCoverErr(false);
  }, [category.coverImage]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpen(category);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card-base group relative cursor-pointer overflow-hidden"
      style={{ borderColor: `${category.coverAccent}30` }}
      onClick={() => onOpen(category)}
      tabIndex={0}
      role="button"
      aria-label={`Open ${category.title} gallery`}
      onKeyDown={handleKeyDown}
    >
      {/* Cover image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0D1120]">
        {!coverErr ? (
          <img
            src={category.coverImage}
            alt={category.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setCoverErr(true)}
            loading="lazy"
          />
        ) : (
          <PhotoPlaceholder
            accent={category.coverAccent}
            emoji={category.coverEmoji}
            label={category.title}
          />
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B14]/85 via-[#080B14]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span
            className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm"
            style={{
              background: `${category.coverAccent}35`,
              border: `1px solid ${category.coverAccent}70`,
            }}
          >
            <Images size={14} />
            View {category.photos.length} Photos
          </span>
        </div>

        {/* Photo count */}
        <div
          className="absolute right-3 top-3 rounded-full px-2 py-1 font-mono text-[10px] backdrop-blur-sm"
          style={{
            background: 'rgba(13,17,32,0.85)',
            border: `1px solid ${category.coverAccent}50`,
            color: category.coverAccent,
          }}
        >
          {category.photos.length} photos
        </div>
      </div>

      {/* Card footer */}
      <div className="p-4">
        <div className="mb-1">
          <h3 className="text-sm font-semibold text-white transition-colors group-hover:text-[#00BFFF]">
            {category.title}
          </h3>
        </div>
        <p className="text-xs leading-relaxed text-slate-400">
          {category.subtitle}
        </p>
      </div>
    </motion.div>
  );
}

/* Main Gallery section — no photo-instructions banner */
export default function Gallery() {
  const [openCategory, setOpenCategory] =
    useState<GalleryCategory | null>(null);

  const closeGallery = useCallback(() => {
    setOpenCategory(null);
  }, []);

  return (
    <section
      id="gallery"
      className="section-padding"
      aria-labelledby="gallery-heading"
    >
      <div className="section-container">
        <SectionHeader
          label="Beyond the Code"
          title="Life in"
          titleHighlight="moments"
          subtitle="A glimpse into my internship, achievements, leadership, and campus experiences."
        />

        {/* Gallery cards only — instruction strip removed */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryCategories.map((category) => (
            <GalleryCoverCard
              key={category.id}
              category={category}
              onOpen={setOpenCategory}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {openCategory && (
          <Lightbox
            category={openCategory}
            initialIndex={0}
            onClose={closeGallery}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
