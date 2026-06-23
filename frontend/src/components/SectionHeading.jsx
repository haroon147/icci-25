import Reveal from './Reveal';

// Shared "eyebrow + title + accent underline (+ optional subtitle)" block used to open
// the primary section on every page. Centralizing it keeps section headings consistent
// site-wide the same way PageHero keeps the title bars consistent.
export default function SectionHeading({ eyebrow, title, subtitle, className = 'text-center mb-16' }) {
  return (
    <Reveal className={className}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-section mb-4 font-semibold text-text-primary">{title}</h2>
      <div className="section-accent"></div>
      {subtitle && (
        <p className="text-body text-text-secondary content-container-md text-content-center text-break">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
