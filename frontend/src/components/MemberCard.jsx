const accentStyles = {
  primary: 'from-primary to-primary-dark',
  accent: 'from-accent to-accent-dark',
};

// Compact grid card used for invited speakers and committee member listings
// (Technical Committee, Advisory Board, Organizing Committee). One consistent
// photo size and shadow language across every grid, instead of each section
// picking its own size.
export default function MemberCard({ image, name, title, affiliation, icon: Icon, accent = 'primary' }) {
  const badge = accentStyles[accent] || accentStyles.primary;

  return (
    <div className="card-modern-hover bg-white p-7 text-center">
      <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden ring-4 ring-white shadow-soft mb-5 relative bg-gray-50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
          }}
        />
        {Icon && (
          <div className={`hidden absolute inset-0 items-center justify-center bg-gradient-to-br ${badge}`}>
            <Icon className="h-10 w-10 text-white" />
          </div>
        )}
      </div>
      <h3 className="font-semibold text-text-primary text-base leading-snug">{name}</h3>
      {title && <p className="text-accent text-sm font-medium mt-1.5">{title}</p>}
      <p className="text-text-secondary text-sm mt-1.5 leading-relaxed">{affiliation}</p>
    </div>
  );
}
