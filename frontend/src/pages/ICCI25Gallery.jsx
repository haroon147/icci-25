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
    images: [
      '/icci-pictures/workshop/IMG_1224.JPG',
    ],
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
    title: '3MT Awards',
    images: [
      '/icci-pictures/3mt award/ms/Mr.-Moiz-Khan-2nd-runner-up.jpg',
      '/icci-pictures/3mt award/ms/Ms.-Ayesha-mariam-1st-Runner-up.jpg',
      '/icci-pictures/3mt award/ms/Ms.-Farwa-Khan-1st-winner.jpg',
      '/icci-pictures/3mt award/phd/Mr.-Muhammad-Mohsin-1st-winner.jpg',
      '/icci-pictures/3mt award/phd/Ms.--Abida-Rashid-1st-Runer-Up.jpg',
      '/icci-pictures/3mt award/phd/Ms.--Nadia-Qureshi-2nd-Runer-Up.jpg',
    ],
  },
];

export default function ICCI25Gallery() {
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
            <h1 className="text-hero mb-6 font-bold">ICCI-25 Gallery</h1>
            <p className="text-body text-white/90 content-container-md text-content-center text-break">
              Highlights from ICCI-25. This page preserves conference history while ICCI-2026 content stays current.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background-light">
        <div className="container-custom space-y-14">
          {gallerySections.map((section) => (
            <div key={section.title}>
              <h2 className="text-section mb-4 font-semibold text-text-primary">{section.title}</h2>
              <div className="w-20 h-1 bg-accent mb-8"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.images.map((imagePath) => (
                  <div key={imagePath} className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <img
                      src={imagePath}
                      alt={`${section.title} - ICCI-25`}
                      className="w-full h-72 object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
