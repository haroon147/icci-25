import { useEffect, useState } from 'react';
import { Images, X } from 'lucide-react';

const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    alt: 'Conference attendees networking',
    caption: 'Networking and collaboration',
  },
  {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    alt: 'Audience in a large conference hall',
    caption: 'Plenary and keynote sessions',
  },
  {
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46638?auto=format&fit=crop&w=1200&q=80',
    alt: 'Speaker presenting to an audience',
    caption: 'Research presentations',
  },
  {
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    alt: 'Workshop or classroom setting',
    caption: 'Workshops and learning',
  },
  {
    src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    alt: 'Theatre-style seating for an event',
    caption: 'Venue experience',
  },
  {
    src: 'https://moellim.com/wp-content/uploads/2025/02/Riphah-International-University-Lahore-900x580-1.webp',
    alt: 'Riphah International University Lahore campus',
    caption: 'Host campus - Riphah International University',
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
    };

    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex]);

  return (
    <section className="section-padding bg-background-light" aria-labelledby="gallery-page-heading">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-primary mb-3">
            <Images className="h-8 w-8" aria-hidden />
          </div>
          <h1 id="gallery-page-heading" className="text-section mb-4 font-semibold text-text-primary">
            Gallery
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-body text-text-secondary content-container-md text-content-center text-break">
            Explore event moments, sessions, and the conference venue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="group text-left rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-md hover:border-accent/25 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-text-primary">{item.caption}</p>
                <p className="text-xs text-text-secondary mt-1">Click to enlarge</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col rounded-xl overflow-hidden shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close gallery image"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex-1 min-h-0 flex items-center justify-center bg-black">
              <img
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].alt}
                className="max-h-[min(78vh,800px)] w-auto max-w-full object-contain"
              />
            </div>
            <div className="px-4 py-3 bg-primary text-white text-center text-sm">
              {galleryItems[lightboxIndex].caption}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
