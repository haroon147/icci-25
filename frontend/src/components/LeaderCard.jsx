import { Mail } from 'lucide-react';

const accentStyles = {
  primary: {
    badge: 'from-primary to-primary-dark',
    text: 'text-primary',
    panel: 'from-primary to-primary-dark',
  },
  accent: {
    badge: 'from-accent to-accent-dark',
    text: 'text-accent',
    panel: 'from-accent to-accent-dark',
  },
};

// Featured-person card used for keynote speakers and committee leadership
// (Patron-in-Chief, Convenor/Chair, Co-Convenor/Co-Chair, Secretary).
// A wide two-tone panel layout: the photo side scales with the card's
// width so it reads as substantial at any container size, instead of a
// small fixed-size box floating in empty space.
export default function LeaderCard({
  image,
  name,
  roleBadge,
  title,
  affiliation,
  expertise,
  bio,
  email,
  icon: Icon,
  accent = 'primary',
}) {
  const styles = accentStyles[accent] || accentStyles.primary;

  return (
    <div className="card-modern-hover overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        {/* Photo panel */}
        <div
          className={`sm:w-2/5 flex items-center justify-center p-8 sm:p-10 bg-gradient-to-br ${styles.panel}`}
        >
          <div className="relative w-40 h-40 sm:w-48 sm:h-48">
            <img
              src={image}
              alt={name}
              className="w-full h-full rounded-2xl object-cover ring-4 ring-white/80 shadow-soft-lg"
              onError={(e) => {
                e.target.style.display = 'none';
                if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
              }}
            />
            {Icon && (
              <div className="hidden absolute inset-0 rounded-2xl items-center justify-center bg-white/10 ring-4 ring-white/80">
                <Icon className="h-16 w-16 text-white" />
              </div>
            )}
          </div>
        </div>

        {/* Content panel */}
        <div className="sm:w-3/5 p-8 sm:p-10 flex flex-col justify-center text-center sm:text-left bg-white">
          {roleBadge && (
            <span
              className={`inline-block self-center sm:self-start px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide bg-gradient-to-r ${styles.badge} text-white mb-3`}
            >
              {roleBadge}
            </span>
          )}
          <h3 className="text-2xl sm:text-3xl font-bold text-text-primary">{name}</h3>
          {title && <p className={`text-base sm:text-lg font-semibold mt-2 ${styles.text}`}>{title}</p>}
          {affiliation && <p className="text-text-secondary text-base mt-1">{affiliation}</p>}
          {expertise && (
            <span className="inline-block self-center sm:self-start mt-4 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
              {expertise}
            </span>
          )}
          {bio && <p className="text-base text-text-secondary mt-4 leading-relaxed">{bio}</p>}
          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center gap-2 mt-5 self-center sm:self-start px-5 py-2.5 rounded-lg bg-primary text-white text-base font-medium hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-300 shadow-soft"
            >
              <Mail className="h-5 w-5" /> Contact
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
