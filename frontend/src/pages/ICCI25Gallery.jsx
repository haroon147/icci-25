import { ChevronLeft, ChevronRight, Radio } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const msResults = [
  { title: '1st Winner - MS', image: '/icci-pictures/3mt award/ms/Ms.-Farwa-Khan-1st-winner.jpg' },
  { title: '1st Runner-Up - MS', image: '/icci-pictures/3mt award/ms/Ms.-Ayesha-mariam-1st-Runner-up.jpg' },
  { title: '2nd Runner-Up - MS', image: '/icci-pictures/3mt award/ms/Mr.-Moiz-Khan-2nd-runner-up.jpg' },
];

const phdResults = [
  { title: '1st Winner - PhD', image: '/icci-pictures/3mt award/phd/Mr.-Muhammad-Mohsin-1st-winner.jpg' },
  { title: '1st Runner-Up - PhD', image: '/icci-pictures/3mt award/phd/Ms.--Abida-Rashid-1st-Runer-Up.jpg' },
  { title: '2nd Runner-Up - PhD', image: '/icci-pictures/3mt award/phd/Ms.--Nadia-Qureshi-2nd-Runer-Up.jpg' },
];

const highlights = [
  '/icci-pictures/main/IMG_9330.jpg',
  '/icci-pictures/main/IMG_9337.jpg',
  '/icci-pictures/main/IMG_9504.jpg',
  '/icci-pictures/main/IMG_9508.jpg',
  '/icci-pictures/main/IMG_9515.jpg',
  '/icci-pictures/3mt/IMG_1176.JPG',
  '/icci-pictures/3mt/IMG_1204.JPG',
  '/icci-pictures/3mt/IMG_1214.JPG',
];

export default function ICCI25Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const allSlides = useMemo(() => highlights, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % allSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + allSlides.length) % allSlides.length);

  return (
    <div className="bg-background-white min-h-screen">
      <section className="relative text-white section-padding-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://moellim.com/wp-content/uploads/2025/02/Riphah-International-University-Lahore-900x580-1.webp)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-dark/90"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-hero mb-6 font-bold">ICCI-25</h1>
            <p className="text-body text-white/90 content-container-md text-content-center text-break">
              ICCI-25 overview with highlights, 3MT results, and direct access to virtual proceedings.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="mb-14">
            <h2 className="text-section mb-4 font-semibold text-text-primary">ICCI-25 Highlights</h2>
            <div className="w-20 h-1 bg-accent mb-8"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black">
              <img
                src={allSlides[currentSlide]}
                alt={`ICCI-25 highlight ${currentSlide + 1}`}
                className="w-full h-[320px] md:h-[520px] object-cover"
              />
              <button
                type="button"
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="mb-14">
            <h2 className="text-section mb-4 font-semibold text-text-primary">3MT Results - MS</h2>
            <div className="w-20 h-1 bg-accent mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {msResults.map((result) => (
                <div key={result.title} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                  <img src={result.image} alt={result.title} className="w-full h-72 object-cover" loading="lazy" />
                  <div className="p-4">
                    <h3 className="text-subheading font-semibold text-text-primary">{result.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-14">
            <h2 className="text-section mb-4 font-semibold text-text-primary">3MT Results - PhD</h2>
            <div className="w-20 h-1 bg-accent mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {phdResults.map((result) => (
                <div key={result.title} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                  <img src={result.image} alt={result.title} className="w-full h-72 object-cover" loading="lazy" />
                  <div className="p-4">
                    <h3 className="text-subheading font-semibold text-text-primary">{result.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <Radio className="h-6 w-6 text-red-500 animate-pulse" />
              <h2 className="text-section font-semibold text-text-primary">ICCI-25 Virtual Proceedings</h2>
            </div>
            <p className="text-body text-text-secondary mb-6">
              Watch archived ICCI-25 sessions and live stream tracks through the virtual proceedings page.
            </p>
            <Link
              to="/virtual-proceedings"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Open Virtual Proceedings
            </Link>
          </div>
          <div className="mt-6 text-sm text-text-secondary">
            For all ICCI-25 images, visit <Link to="/gallery" className="text-accent font-medium">Gallery</Link>.
          </div>
        </div>
      </section>
    </div>
  );
}
