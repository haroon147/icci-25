import { Mail } from 'lucide-react';

const accentStyles = {
  primary: { badge: 'from-primary to-primary-dark', text: 'text-primary' },
  accent: { badge: 'from-accent to-accent-dark', text: 'text-accent' },
};

// Compact featured-person card used for keynote speakers and committee
// leadership (Patron-in-Chief, Convenor/Chair, Co-Convenor/Co-Chair, Secretary).
// Replaces the old full-bleed, oversized cards with one consistent template.
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
    <div className="card-modern-hover bg-white p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        <div className="flex-shrink-0 relative w-28 h-28 sm:w-32 sm:h-32">
          <img
            src={image}
            alt={name}
            className="w-full h-full rounded-2xl object-cover ring-4 ring-white shadow-soft-md"
            onError={(e) => {
              e.target.style.display = 'none';
              if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
            }}
          />
          {Icon && (
            <div
              className={`hidden absolute inset-0 rounded-2xl items-center justify-center bg-gradient-to-br ${styles.badge}`}
            >
              <Icon className="h-10 w-10 text-white" />
            </div>
          )}
        </div>

        <div className="flex-1 text-center sm:text-left">
          {roleBadge && (
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-gradient-to-r ${styles.badge} text-white mb-2`}
            >
              {roleBadge}
            </span>
          )}
          <h3 className="text-xl sm:text-2xl font-bold text-text-primary">{name}</h3>
          {title && <p className={`text-sm font-semibold mt-1 ${styles.text}`}>{title}</p>}
          {affiliation && <p className="text-text-secondary text-sm mt-1">{affiliation}</p>}
          {expertise && (
            <span className="inline-block mt-3 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
              {expertise}
            </span>
          )}
          {bio && <p className="text-sm text-text-secondary mt-3 leading-relaxed">{bio}</p>}
          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-300 shadow-soft"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
