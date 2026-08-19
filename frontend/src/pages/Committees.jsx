import {
  Crown,
  Award,
  UserCheck,
  Globe,
  ShieldCheck,
  BookOpen,
  GraduationCap,
  Users,
  FileText,
  Mic,
  Wrench,
  Code2,
  Megaphone,
  Landmark,
} from 'lucide-react';

// Strip honorifics to build a clean two-letter monogram
const getInitials = (name) => {
  const clean = name.replace(/^(Prof\.\s*)?(Dr\.|Mr\.|Ms\.)\s*/i, '');
  const parts = clean.split(' ').filter(Boolean);
  return (parts[0]?.[0] || '') + (parts[1]?.[0] || parts[0]?.[1] || '');
};

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 mb-10">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-accent/60"></span>
      <span className="w-2 h-2 rotate-45 bg-accent"></span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-accent/60"></span>
    </div>
  );
}

function SectionHeader({ eyebrow, title, icon: Icon }) {
  return (
    <div className="text-center mb-12">
      {eyebrow && (
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-accent mb-3">
          {eyebrow}
        </p>
      )}
      <div className="flex items-center justify-center gap-3 mb-4">
        {Icon && (
          <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </span>
        )}
        <h2 className="text-section font-semibold text-text-primary text-break">
          {title}
        </h2>
      </div>
      <Divider />
    </div>
  );
}

// Large spotlight card for leadership roles
function SpotlightCard({ name, role, affiliation, icon: Icon, accent = false }) {
  return (
    <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 overflow-hidden">
      <div
        className={`absolute inset-x-0 top-0 h-1.5 ${accent ? 'bg-accent' : 'bg-primary'
          }`}
      ></div>
      <div className="p-8 md:p-10 flex flex-col items-center text-center">
        <div
          className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-lg ring-4 ring-white ${accent
            ? 'bg-gradient-to-br from-accent to-accent-dark'
            : 'bg-gradient-to-br from-primary to-primary-dark'
            }`}
        >
          {Icon ? (
            <Icon className="h-10 w-10 text-white" />
          ) : (
            <span className="text-2xl font-bold text-white">
              {getInitials(name)}
            </span>
          )}
        </div>
        <span
          className={`inline-block px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3 ${accent
            ? 'bg-accent/10 text-accent-dark'
            : 'bg-primary/10 text-primary'
            }`}
        >
          {role}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2 text-break">
          {name}
        </h3>
        <p className="text-text-secondary text-sm md:text-base leading-relaxed text-break">
          {affiliation}
        </p>
      </div>
    </div>
  );
}

// Compact card for grid listings
function PersonCard({ name, affiliation, tag }) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1 flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
        <span className="text-sm font-bold text-white">{getInitials(name)}</span>
      </div>
      <div className="min-w-0">
        {tag && (
          <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-accent mb-1">
            {tag}
          </span>
        )}
        <h4 className="font-semibold text-text-primary text-sm leading-snug text-break">
          {name}
        </h4>
        <p className="text-text-muted text-xs mt-1 leading-relaxed text-break">
          {affiliation}
        </p>
      </div>
    </div>
  );
}

// Small self-contained committee block used in the operations grid
function MiniCommitteeCard({ title, icon: Icon, members }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/30 p-7">
      <div className="flex items-center gap-3 mb-5">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent-dark flex-shrink-0">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="font-bold text-text-primary text-base leading-snug">{title}</h3>
      </div>
      <ul className="space-y-3">
        {members.map((m, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-text-primary leading-snug text-break">
                {m.name}
              </p>
              <p className="text-xs text-text-muted leading-relaxed text-break">
                {m.affiliation}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Committees() {
  const patronInChief = {
    name: 'Prof. Dr. Sheheryar Malik',
    role: 'Patron-in-Chief',
    affiliation: 'RSCI, Riphah International University, Islamabad, Lahore Campus, Pakistan',
  };

  const leadership = [
    {
      name: 'Prof. Dr. Muhammad Asif',
      role: 'General Chair',
      affiliation: 'RSCI, Riphah International University, Islamabad, Lahore Campus, Pakistan',
    },
    {
      name: 'Dr. Adnan Ahmad Khan',
      role: 'General Co-Chair',
      affiliation: 'Gachon University, South Korea',
      accent: true,
    },
  ];

  const conferenceSecretary = {
    name: 'Dr. Muhammad Yaseen',
    role: 'Conference Secretary',
    affiliation: 'RSCI, Riphah International University, Islamabad, Lahore Campus, Pakistan',
    accent: true,
  };

  const steeringCommittee = [
    { name: 'Prof. Dr. Muhammad Shafique', affiliation: 'New York University (NYU), Abu Dhabi' },
    { name: 'Prof. Dr. Ammar Ali Almomani', affiliation: 'Al-Balqa Applied University, Jordan' },
    { name: 'Prof. Dr. Sahraoui Dhelim', affiliation: 'Dublin City University, Ireland' },
    { name: 'Prof. Dr. Ayed Alwadain', affiliation: 'University of Hertfordshire, Hatfield, UK' },
    { name: 'Dr. Osama M. Dorgham', affiliation: 'Al-Balqa Applied University, Jordan' },
    { name: 'Dr. Nouh Sabri Elmitwally', affiliation: 'Birmingham City University, UK' },
    { name: 'Dr. Sayyed Jaffar Ali Raza', affiliation: 'Mixed Reality Engineer, Microsoft Corp., USA' },
    { name: 'Dr. Javed Ali Khan', affiliation: 'University of Hertfordshire, Hatfield, UK' },
    { name: 'Dr. Anas Bilal', affiliation: 'Hainan Normal University, Haikou, China' },
    { name: 'Dr. Sajid Iqbal', affiliation: 'King Faisal University, KSA' },
    { name: 'Dr. Farhan Ullah', affiliation: 'Prince Mohammad Bin Fahd University, Alkhobar, KSA' },
    { name: 'Dr. Munir Ahmad', affiliation: 'University College, Korea University, Seoul, Republic of Korea' },
  ];

  const advisoryCommittee = [
    { name: 'Prof. Dr. Muhammad Zubair', affiliation: 'Riphah International University, Islamabad, Pakistan' },
    { name: 'Prof. Dr. Imtiaz Ahmad Taj', affiliation: 'Capital University of Science & Technology, Islamabad, Pakistan' },
    { name: 'Prof. Dr. Usama Ijaz Bajwa', affiliation: 'University of Biological and Applied Sciences, Lahore, Pakistan' },
    { name: 'Prof. Dr. Sagheer Abbas', affiliation: 'Prince Mohammad Bin Fahd University, Alkhobar, KSA' },
    { name: 'Prof. Dr. Atif Alvi', affiliation: 'University of Management and Technology, Lahore, Pakistan' },
    { name: 'Mr. Umer Farooq', affiliation: 'Riphah International University, Islamabad, Lahore-Campus, Pakistan' },
  ];

  const tpcChairs = [
    {
      name: 'Dr. Ayesha Kashif',
      role: 'Technical Program Chair',
      affiliation: 'RSCI, Riphah International University, Islamabad, Lahore Campus, Pakistan',
    },
    {
      name: 'Prof. Dr. Waqar Mehmood',
      role: 'Technical Program Co-Chair',
      affiliation: 'Riphah International University, Islamabad, Lahore Campus, Pakistan',
      accent: true,
    },
  ];

  const tpcMembers = [
    { name: 'Dr. Muhammad Nadeem Chudhary', affiliation: 'Superior University, Lahore, Pakistan' },
    { name: 'Dr. Rafaqat Alam', affiliation: 'Lahore Garrison University, Lahore, Pakistan' },
    { name: 'Dr. Taimoor Hassan', affiliation: 'University of Central Punjab, Lahore, Pakistan' },
    { name: 'Dr. Gohar Mumtaz', affiliation: 'Superior University, Lahore, Pakistan' },
    { name: 'Muhammad Mohsin', affiliation: 'Riphah International University, Islamabad, Lahore Campus, Pakistan' },
    { name: 'Amna Saud', affiliation: 'University of Lahore, Lahore, Pakistan' },
    { name: 'Shahnawaz', affiliation: 'University of Central Punjab, Lahore, Pakistan' },
    { name: 'Aneela Mehmood', affiliation: 'University of Central Punjab, Lahore, Pakistan' },
    { name: 'Sowaiba Khan', affiliation: 'University of Management and Technology, Lahore, Pakistan' },
  ];

  const technicalTrackChairs = [
    ,
    { name: 'Prof. Dr. Maaz Bin Ahmad', affiliation: 'Karachi Institute of Economics and Technology, Karachi, Pakistan' },
    { name: 'Prof. Dr. Mehtab Afzal', affiliation: 'University of Lahore, Lahore, Pakistan' },
    { name: 'Dr. Ali Haider Khan', affiliation: 'Beijing University of Technology, China' },
    { name: 'Dr. Farooq Ahmad', affiliation: 'COMSATS University Islamabad, Lahore Campus, Pakistan' },
    { name: 'Dr. Hamid Turab', affiliation: 'COMSATS University Islamabad, Lahore Campus, Pakistan' },
    { name: 'Dr. Waqar Azeem', affiliation: 'University of Management and Technology, Lahore, Pakistan' },
    { name: 'Dr Allah Dita', affiliation: 'University of Education, Lahore, Pakistan' },
    { name: 'Dr. Tauqeer Mehmood', affiliation: 'National Textile University, Faisalabad, Pakistan' },
    { name: 'Dr Zafar Iqbal', affiliation: 'FAST NUCES, Islamabad, Pakistan' },
    { name: 'Dr. Kashif Shahzad', affiliation: 'CEO, PITC, Lahore, Pakistan' },
    { name: 'Dr. Muhammad Azeem', affiliation: 'University of Sialkot, Sialkot, Pakistan' },
    { name: 'Dr. Salman Ahmad', affiliation: 'University of Lahore, Lahore, Pakistan' },
    { name: 'Dr. Muhammad Hasnain', affiliation: 'Lahore Leads University, Lahore, Pakistan' },
  ];

  const organizingCommittee = [
    {
      name: 'Dr. Madeeha Fatima',
      affiliation: 'RSCI, Riphah International University, Islamabad, Lahore Campus, Pakistan',
      tag: 'Chair',
    },
    {
      name: 'Zarmina Jahangir',
      affiliation: 'RSCI, Riphah International University, Islamabad, Lahore Campus, Pakistan',
      tag: 'Co-Chair',
    },
    {
      name: 'Dua Mahmood',
      affiliation: 'RSCI, Riphah International University, Islamabad, Lahore Campus, Pakistan',
    },
    {
      name: 'Muhammad Naeem',
      affiliation: 'RSCI, Riphah International University, Islamabad, Lahore Campus, Pakistan',
    },
  ];

  const operationsCommittees = [
    {
      title: 'Publication Committee',
      icon: FileText,
      members: [
        { name: 'Dr. Jamal Uddin (Chair)', affiliation: 'RSCI, Riphah International University, Islamabad, Lahore Campus, Pakistan' },
        { name: 'Dr. Asif Saleem', affiliation: 'University of Lahore, Lahore, Pakistan' },
        { name: 'Dr. Burhan ul Haq', affiliation: 'Lahore Garrison University, Lahore, Pakistan' },
      ],
    },
    {
      title: '3MT Committee',
      icon: Mic,
      members: [
        { name: 'Dr. Jamal Uddin (Chair)', affiliation: 'RSCI, Riphah International University, Islamabad, Lahore Campus, Pakistan' },
      ],
    },
    {
      title: 'Workshops',
      icon: Wrench,
      members: [
        { name: 'Dr. Muhammad Adnan (Chair)', affiliation: 'RSCI, Riphah International University, Islamabad, Lahore Campus, Pakistan' },
      ],
    },
    {
      title: 'Technical Support (Website & IT)',
      icon: Code2,
      members: [
        { name: 'Muhammad Haroon', affiliation: 'RSCI, Riphah International University, Islamabad, Lahore Campus, Pakistan' },
        { name: 'Muhammad Sameer', affiliation: 'RSCI, Riphah International University, Islamabad, Lahore Campus, Pakistan' },
      ],
    },
    {
      title: 'Publicity, Industry Liaison, Sponsorship & Registration',
      icon: Megaphone,
      members: [
        { name: 'Dr. Muhammad Fawad (Chair)', affiliation: 'Riphah International University, Islamabad, Lahore Campus, Pakistan' },
        { name: 'Adnan Ahmad (Member)', affiliation: 'Riphah International University, Islamabad, Lahore Campus, Pakistan' },
      ],
    },
    {
      title: 'Finance Committee',
      icon: Landmark,
      members: [
        { name: 'Dr. Jasim Saeed (Chair)', affiliation: 'Riphah International University, Islamabad, Lahore Campus, Pakistan' },
      ],
    },
  ];

  return (
    <div className="bg-background-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white section-padding-lg overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10"></div>
        <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full border border-white/10"></div>
        <div className="container-custom relative z-10 text-center">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 ring-1 ring-white/20 mb-6">
            <ShieldCheck className="h-8 w-8 text-accent" />
          </span>
          <h1 className="text-hero mb-6 font-bold">Conference Committees</h1>
          <p className="text-body text-white/90 content-container-md text-content-center text-break">
            The people leading, guiding, and organizing ICCI&nbsp;2025 &mdash; from patronage and
            steering, through technical review, to on-the-ground execution.
          </p>
        </div>
      </section>

      {/* Patron-in-Chief */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <SectionHeader title="Patron-in-Chief" icon={Crown} />
          <div className="max-w-md mx-auto">
            <SpotlightCard {...patronInChief} icon={Crown} />
          </div>
        </div>
      </section>

      {/* General Chair / Co-Chair */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <SectionHeader title="Conference Chiar & Co-Chair" icon={Award} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {leadership.map((p, i) => (
              <SpotlightCard key={i} {...p} icon={i === 0 ? Award : UserCheck} />
            ))}
          </div>
        </div>
      </section>

      {/* Steering Committee */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <SectionHeader title="Steering Committee" icon={Globe} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {steeringCommittee.map((m, i) => (
              <PersonCard key={i} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Committee + Secretary */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <SectionHeader title="Advisory Committee" icon={ShieldCheck} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-14">
            {advisoryCommittee.map((m, i) => (
              <PersonCard key={i} {...m} />
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <SpotlightCard {...conferenceSecretary} icon={BookOpen} />
          </div>
        </div>
      </section>

      {/* Technical Program Committee */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <SectionHeader title="Technical Program Committee" icon={GraduationCap} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-14">
            {tpcChairs.map((p, i) => (
              <SpotlightCard key={i} {...p} icon={GraduationCap} />
            ))}
          </div>

          <p className="text-center text-xs font-bold tracking-[0.25em] uppercase text-text-muted mb-8">
            Committee Members
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {tpcMembers.map((m, i) => (
              <PersonCard key={i} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Track Chairs */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <SectionHeader title="Technical Track Chairs" icon={Users} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {technicalTrackChairs.map((m, i) => (
              <PersonCard key={i} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* Organizing Committee */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <SectionHeader title="Organizing Committee" icon={Users} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {organizingCommittee.map((m, i) => (
              <PersonCard key={i} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* Operations & Support Committees */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <SectionHeader

            title="Operations &amp; Support Committees"
            icon={Wrench}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {operationsCommittees.map((c, i) => (
              <MiniCommitteeCard key={i} {...c} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}