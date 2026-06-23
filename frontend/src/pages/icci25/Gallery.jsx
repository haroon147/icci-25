import { useEffect, useState } from 'react';
import { Images, X } from 'lucide-react';

const galleryItems = [
  { src: '/icci-pictures/main/IMG_9330.jpg', alt: 'ICCI-25 main event', caption: 'Main Event' },
  { src: '/icci-pictures/main/IMG_9337.jpg', alt: 'ICCI-25 main event', caption: 'Main Event' },
  { src: '/icci-pictures/main/IMG_9504.jpg', alt: 'ICCI-25 main event', caption: 'Main Event' },
  { src: '/icci-pictures/main/IMG_9508.jpg', alt: 'ICCI-25 main event', caption: 'Main Event' },
  { src: '/icci-pictures/main/IMG_9515.jpg', alt: 'ICCI-25 main event', caption: 'Main Event' },
  { src: '/icci-pictures/speaker/IMG_1094.JPG', alt: 'ICCI-25 speaker session', caption: 'Speakers' },
  { src: '/icci-pictures/speaker/IMG_1175.JPG', alt: 'ICCI-25 speaker session', caption: 'Speakers' },
  { src: '/icci-pictures/panel/IMG_9341.jpg', alt: 'ICCI-25 panel discussion', caption: 'Panels' },
  { src: '/icci-pictures/panel/IMG_9349.jpg', alt: 'ICCI-25 panel discussion', caption: 'Panels' },
  { src: '/icci-pictures/workshop/IMG_1224.JPG', alt: 'ICCI-25 workshop', caption: 'Workshops' },
  { src: '/icci-pictures/award/IMG_9331-(1).jpg', alt: 'ICCI-25 awards', caption: 'Awards' },
  { src: '/icci-pictures/award/IMG_9373.jpg', alt: 'ICCI-25 awards', caption: 'Awards' },
  { src: '/icci-pictures/award/IMG_9388.jpg', alt: 'ICCI-25 awards', caption: 'Awards' },
  { src: '/icci-pictures/award/IMG_9395.jpg', alt: 'ICCI-25 awards', caption: 'Awards' },
  { src: '/icci-pictures/award/IMG_9454.jpg', alt: 'ICCI-25 awards', caption: 'Awards' },
  { src: '/icci-pictures/award/IMG_9483.jpg', alt: 'ICCI-25 awards', caption: 'Awards' },
  { src: '/icci-pictures/award/IMG_9504---Copy.jpg', alt: 'ICCI-25 awards', caption: 'Awards' },
  { src: '/icci-pictures/award/IMG_9504.jpg', alt: 'ICCI-25 awards', caption: 'Awards' },
  { src: '/icci-pictures/3mt/IMG_1176.JPG', alt: 'ICCI-25 3MT competition', caption: '3MT Moments' },
  { src: '/icci-pictures/3mt/IMG_1204.JPG', alt: 'ICCI-25 3MT competition', caption: '3MT Moments' },
  { src: '/icci-pictures/3mt/IMG_1214.JPG', alt: 'ICCI-25 3MT competition', caption: '3MT Moments' },
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
