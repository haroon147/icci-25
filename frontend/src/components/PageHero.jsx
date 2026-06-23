import Reveal from './Reveal';

const HERO_BG = 'https://moellim.com/wp-content/uploads/2025/02/Riphah-International-University-Lahore-900x580-1.webp';

// Shared title-bar hero for every interior content page (About, Scope, Dates, Speakers,
// Committees, Submissions, 3MT, Workshops, Schedule, Virtual Proceedings, Registration, Contact).
// Keeping this in one place is what guarantees those pages stay visually consistent —
// edit the template here once instead of nudging matching classes in every page file.
export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative text-white section-padding-lg overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-dark/90"></div>
      </div>

      {/* Decorative depth */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {eyebrow && (
            <Reveal>
              <span className="eyebrow-light">{eyebrow}</span>
            </Reveal>
          )}
          <Reveal as="h1" delay={eyebrow ? 1 : 0} className="text-hero mb-6 font-bold">
            {title}
          </Reveal>
          {subtitle && (
            <Reveal as="p" delay={eyebrow ? 2 : 1} className="text-body text-white/90 content-container-md text-content-center text-break">
              {subtitle}
            </Reveal>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
