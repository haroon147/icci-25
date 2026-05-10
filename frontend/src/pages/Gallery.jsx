import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Images, X } from 'lucide-react';

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
    images: ['/icci-pictures/speaker/IMG_1094.JPG', '/icci-pictures/speaker/IMG_1175.JPG'],
  },
  {
    title: 'Panels',
    images: ['/icci-pictures/panel/IMG_9341.jpg', '/icci-pictures/panel/IMG_9349.jpg'],
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
    images: ['/icci-pictures/3mt/IMG_1176.JPG', '/icci-pictures/3mt/IMG_1204.JPG', '/icci-pictures/3mt/IMG_1214.JPG'],
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
          caption: section.title,
        }))
      ),
    []
  );

  const moveLightbox = (direction) => {
    if (lightboxIndex === null) return;
    const total = allImages.length;
    setLightboxIndex((lightboxIndex + direction + total) % total);
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
            ICCI-25 complete image gallery. Open any image and use left/right controls for a full carousel view.
          </p>
        </div>

        <div className="space-y-10">
          {gallerySections.map((section) => (
            <div key={section.title}>
              <h2 className="text-subheading font-semibold text-text-primary mb-4">{section.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {section.images.map((src, index) => {
                  const globalIndex = allImages.findIndex((item) => item.src === src);
                  return (
                    <button
                      key={`${section.title}-${src}`}
                      type="button"
                      onClick={() => setLightboxIndex(globalIndex)}
                      className="group text-left rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-md hover:border-accent/25 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                        <img
                          src={src}
                          alt={`${section.title} image ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm font-medium text-text-primary">{section.title}</p>
                        <p className="text-xs text-text-secondary mt-1">Click to enlarge</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
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
              <button
                type="button"
                onClick={() => moveLightbox(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={() => moveLightbox(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            <div className="flex-1 min-h-0 flex items-center justify-center bg-black">
              <img
                  src={allImages[lightboxIndex].src}
                  alt={allImages[lightboxIndex].alt}
                className="max-h-[min(78vh,800px)] w-auto max-w-full object-contain"
              />
            </div>
            <div className="px-4 py-3 bg-primary text-white text-center text-sm">
                {allImages[lightboxIndex].caption}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
