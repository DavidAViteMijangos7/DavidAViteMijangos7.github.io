import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Full-screen viewer for a list of media items ({ src, alt, type? }).
// Controlled: the parent owns `index` (null = closed). Portaled to <body> so
// transformed ancestors (fade-in-up, hover:scale) don't break position: fixed.
export default function Lightbox({ items, index, onClose, onIndexChange }) {
  const isOpen = index !== null && index !== undefined && items.length > 0;
  const total = items.length;

  const prev = useCallback(() => onIndexChange((index - 1 + total) % total), [index, total, onIndexChange]);
  const next = useCallback(() => onIndexChange((index + 1) % total), [index, total, onIndexChange]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft' && total > 1) prev();
      else if (e.key === 'ArrowRight' && total > 1) next();
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, total, prev, next, onClose]);

  if (!isOpen) return null;
  const item = items[index];

  const navButton =
    'absolute top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 border border-stone-200 text-stone-600 hover:text-violet-700 hover:border-violet-300 hover:bg-violet-50 transition-all duration-200 shadow-md';

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      // Portal events still bubble through the React tree — keep them away from clickable parents.
      onClick={(e) => { e.stopPropagation(); onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
    >
      <div
        className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-500 hover:text-violet-700 hover:border-violet-300 hover:bg-violet-50 transition-all duration-200 shadow-sm"
        >
          <X size={18} />
        </button>

        <div className="px-6 pt-5 pb-3 pr-14 flex items-baseline gap-3">
          <p className="text-sm text-gray-700 font-medium flex-1">{item.alt}</p>
          {total > 1 && (
            <span className="text-xs font-mono text-stone-400 flex-shrink-0">
              {index + 1} / {total}
            </span>
          )}
        </div>

        <div className="relative px-6 pb-6">
          {item.type === 'video' ? (
            <video
              key={item.src}
              src={item.src}
              controls
              muted
              playsInline
              preload="metadata"
              className="w-full max-h-[75vh] rounded-lg border border-stone-200 shadow-sm bg-black"
            />
          ) : (
            <img
              src={item.src}
              alt={item.alt}
              className="w-full max-h-[75vh] object-contain rounded-lg border border-stone-200 shadow-sm bg-stone-50"
            />
          )}

          {total > 1 && (
            <>
              <button onClick={prev} aria-label="Previous" className={`${navButton} left-2`}>
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} aria-label="Next" className={`${navButton} right-2`}>
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
