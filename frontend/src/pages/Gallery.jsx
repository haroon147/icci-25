import { useEffect, useMemo, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Images,
  X,
  Camera,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

const gallerySections = [
  {
    title: 'Main Event',
    images: [
      '/icci-pictures/main/IMG_9330.jpg',
      '/icci-pictures/main/IMG_9337.jpg',
      '/icci-pictures/main/IMG_9504.jpg',
      '/icci-pictures/main/IMG_9508.jpg',
      '/icci-pictures/main/IMG_9515.jpg',
    ],
  },
  {
    title: 'Speakers',
    images: [
      '/icci-pictures/speaker/IMG_1094.JPG',
      '/icci-pictures/speaker/IMG_1175.JPG',
    ],
  },
  {
    title: 'Panels',
    images: [
      '/icci-pictures/panel/IMG_9341.jpg',
      '/icci-pictures/panel/IMG_9349.jpg',
    ],
  },
  {
    title: 'Workshops',
    images: ['/icci-pictures/workshop/IMG_1224.JPG'],
  },
  {
    title: 'Awards',
    images: [
      '/icci-pictures/award/IMG_9331-(1).jpg',
      '/icci-pictures/award/IMG_9373.jpg',
      '/icci-pictures/award/IMG_9388.jpg',
      '/icci-pictures/award/IMG_9395.jpg',
      '/icci-pictures/award/IMG_9454.jpg',
      '/icci-pictures/award/IMG_9483.jpg',
      '/icci-pictures/award/IMG_9504---Copy.jpg',
      '/icci-pictures/award/IMG_9504.jpg',
    ],
  },
  {
    title: '3MT Moments',
    images: [
      '/icci-pictures/3mt/IMG_1176.JPG',
      '/icci-pictures/3mt/IMG_1204.JPG',
      '/icci-pictures/3mt/IMG_1214.JPG',
    ],
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const allImages = useMemo(
    () =>
      gallerySections.flatMap((section) =>
        section.images.map((src, idx) => ({
          src,
          alt: `${section.title} image ${idx + 1}`,
        }))
      ),
    []
  );

  const moveLightbox = (direction) => {
    if (lightboxIndex === null) return;

    const total = allImages.length;

    setLightboxIndex(
      (lightboxIndex + direction + total) % total
    );
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') moveLightbox(1);
      if (e.key === 'ArrowLeft') moveLightbox(-1);
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
    <div className="bg-background-white">
      <PageHero
        eyebrow="ICCI-25 Event Highlights"
        title="Event Gallery"
        subtitle="Explore unforgettable moments from ICCI-25 including keynote sessions, inspiring speakers, workshops, awards, and 3MT highlights."
      />

      {/* GALLERY SECTIONS */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="space-y-20">
            {gallerySections.map((section) => (
              <Reveal key={section.title}>
                {/* Section Header */}
                <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-text-primary tracking-tight">
                      {section.title}
                    </h2>

                    <div className="mt-3 w-16 h-1.5 rounded-full bg-gradient-to-r from-accent to-accent-dark" />
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft border border-gray-100">
                    <Camera className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-text-secondary">
                      {section.images.length} Photos
                    </span>
                  </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
                  {section.images.map((src, index) => {
                    const globalIndex = allImages.findIndex(
                      (item) => item.src === src
                    );

                    return (
                      <button
                        key={`${section.title}-${src}`}
                        type="button"
                        onClick={() =>
                          setLightboxIndex(globalIndex)
                        }
                        className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-2"
                      >
                        {/* Image */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={src}
                            alt={`${section.title} image ${index + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />

                          {/* Dark Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition duration-500" />

                          {/* Floating Button */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 px-5 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                              <span className="text-white font-semibold text-sm tracking-wide">
                                View Image
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative w-full max-w-7xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Left */}
            <button
              type="button"
              onClick={() => moveLightbox(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            {/* Right */}
            <button
              type="button"
              onClick={() => moveLightbox(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            {/* Main Image */}
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-black">
              <img
                src={allImages[lightboxIndex].src}
                alt={allImages[lightboxIndex].alt}
                className="w-full max-h-[85vh] object-contain"
              />
            </div>

            {/* Footer */}
            <div className="mt-5 flex items-center justify-between flex-wrap gap-4">
              <p className="text-sm text-gray-300">
                Image {lightboxIndex + 1} of {allImages.length}
              </p>

              <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-sm">
                Use ← → arrow keys to navigate
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}