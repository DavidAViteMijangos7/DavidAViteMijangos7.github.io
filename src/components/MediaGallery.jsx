import { useState } from 'react';
import { Maximize2, Images } from 'lucide-react';
import Lightbox from './Lightbox';

// Thumbnail grid + lightbox for a list of media items ({ src, alt, type? }).
// `limit` shows only the first N thumbnails plus a "View all" button.
export default function MediaGallery({ items = [], limit, aspect = 'square', columns = 3, className = '' }) {
  const [index, setIndex] = useState(null);
  if (items.length === 0) return null;

  const visible = limit ? items.slice(0, limit) : items;
  const aspectClass = aspect === '4/3' ? 'aspect-[4/3]' : 'aspect-square';
  const colsClass = { 2: 'grid-cols-2', 3: 'grid-cols-3', 4: 'grid-cols-4' }[columns] ?? 'grid-cols-3';
  const tileClass = `relative w-full ${aspectClass} rounded-lg overflow-hidden border border-stone-200 bg-stone-100 shadow-sm`;

  return (
    <div className={className}>
      <div className={`grid ${colsClass} gap-2`}>
        {visible.map((item, i) =>
          item.type === 'video' ? (
            <div key={item.src} className={tileClass}>
              <video
                src={item.src}
                controls
                muted
                playsInline
                preload="metadata"
                aria-label={item.alt}
                className="w-full h-full object-cover bg-black"
              />
              <button
                onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                aria-label={`Enlarge: ${item.alt}`}
                className="absolute top-1.5 right-1.5 p-1 rounded-md bg-white/90 text-stone-600 hover:text-violet-700 shadow-sm transition-colors"
              >
                <Maximize2 size={12} />
              </button>
            </div>
          ) : (
            <button
              key={item.src}
              onClick={(e) => { e.stopPropagation(); setIndex(i); }}
              aria-label={`Open: ${item.alt}`}
              className={`${tileClass} group/thumb hover:border-violet-300 hover:shadow-md transition-all duration-200 cursor-zoom-in`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
              />
            </button>
          ),
        )}
      </div>

      {limit && items.length > limit && (
        <button
          onClick={(e) => { e.stopPropagation(); setIndex(0); }}
          className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-violet-200 text-violet-700 hover:bg-violet-50 transition-colors duration-200"
        >
          <Images size={12} />
          View all {items.length}
        </button>
      )}

      <Lightbox items={items} index={index} onClose={() => setIndex(null)} onIndexChange={setIndex} />
    </div>
  );
}
