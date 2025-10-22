import { Users, Award, Globe, BookOpen, Crown, UserCheck, Shield, User, GraduationCap, Building2 } from 'lucide-react';

export default function Committees() {
  const patronInChief = [
    {
      name: "Prof. Dr. Sheheryar Malik",
      title: "Patron-in-Chief",
      affiliation: "Director RSCI / Professor",
      expertise: "Riphah School of Computing & Innovation",
      image: "/committee-members/prof-sheheryar-malik.jpg",
      email: "sheheryar.malik@riphah.edu.pk"
    }
  ];

  const convenorChair = [
    {
      name: "Prof. Dr. Muhammad Asif",
      title: "Convenor/Chair",
      affiliation: "Professor, RSCI",
      expertise: "Riphah School of Computing & Innovation",
      image: "/committee-members/prof-muhammad-asif.jpg",
      email: "muhammad.asif@riphah.edu.pk"
    }
  ];

  const coConvenorCoChair = [
    {
      name: "Dr. Farrukh Arslan",
      title: "Co-Convenor/Co-Chair",
      affiliation: "Associate Professor, RSCI",
      expertise: "Riphah School of Computing & Innovation",
      image: "/committee-members/dr-farrukh-arslan.jpg",
      email: "farrukh.arslan@riphah.edu.pk"
    },
    {
      name: "Dr. Muhammad Adnan",
      title: "Co-Convenor/Co-Chair",
      affiliation: "Assistant Professor, RSCI",
      expertise: "Riphah School of Computing & Innovation",
      image: "/committee-members/dr-muhammad-adnan.jpg",
      email: "muhammad.adnan@riphah.edu.pk"
    }
  ];

  const secretary = [
    {
      name: "Dr. Ayesha Kashif",
      title: "Secretary",
      affiliation: "Assistant Professor, RSCI",
      expertise: "Riphah School of Computing & Innovation",
      image: "/committee-members/dr-ayesha-kashif.jpg",
      email: "ayesha.kashif@riphah.edu.pk"
    }
  ];

  const technicalCommittee = [
    {
      track: "Artificial Intelligence and Machine Learning",
      members: [
        { name: "Dr. Mian Muhammad Awais", affiliation: "Professor, LUMS, Lahore", image: "/committee-members/dr-mian-muhammad-awais.jpg" },
        { name: "Dr. Atif Alvi", affiliation: "Professor, UMT, Lahore", image: "/committee-members/dr-atif-alvi.jpg" },
        { name: "Dr. Azhar Imran Mudassir", affiliation: "Assistant Professor, FCAI, Beijing University, China", image: "/committee-members/dr-azhar-imran-mudassir.jpg" },
        { name: "Dr Allah Dita", affiliation: "Associate Professor, University of Education, Lahore", image: "/committee-members/dr-allah-dita.jpg" },
        { name: "Dr. Umme Hani", affiliation: "Associate Professor, NASTAP, Lahore", image: "/committee-members/dr-umme-hani.jpg" },
        { name: "Dr. Jamal Uddin", affiliation: "Associate Professor, RSCI", image: "/committee-members/dr-jamal-uddin.jpg" },
        { name: "Dr Adnan Ahmad Khan", affiliation: "Associate Professor, RSCI", image: "/committee-members/dr-adnan-ahmad-khan.jpg" }
      ]
    },
    {
      track: "Data Science and Big Data Analytics",
      members: [
        { name: "Dr. Ali Haider", affiliation: "School of Computing, Beijing Technology University, China", image: "/committee-members/dr-ali-haider.jpg" },
        { name: "Dr. Asif Nauman", affiliation: "Assistant Professor, Riphah International University, Lahore", image: "/committee-members/dr-asif-nauman.jpg" }
      ]
    },
    {
      track: "Cybersecurity and Privacy",
      members: [
        { name: "Dr Maaz Bin Ahmad", affiliation: "Professor, KIET, Karachi", image: "/committee-members/dr-maaz-bin-ahmad.jpg" },
        { name: "Dr Zafar Iqbal", affiliation: "Associate Professor, FAST NUCES, Islamabad", image: "/committee-members/dr-zafar-iqbal.jpg" },
        { name: "Dr. Madeeha Fatima", affiliation: "Assistant Professor", image: "/committee-members/dr-madeeha-fatima.jpg" },
        { name: "Mr. Kukab Jamal Zubari", affiliation: "Professor by Practice, LGU", image: "/committee-members/mr-kukab-jamal-zubari.jpg" }
      ]
    },
    {
      track: "Internet of Things (IoT), Robotic and Smart Systems",
      members: [
        { name: "Dr. Waqar Azeem", affiliation: "Associate Professor, UMT", image: "/committee-members/dr-waqar-azeem.jpg" },
        { name: "Dr. Yasir Niaz Khan", affiliation: "PSCA, Lahore", image: "/committee-members/dr-yasir-niaz-khan.jpg" }
      ]
    },
    {
      track: "Software Engineering and DevOps",
      members: [
        { name: "Dr. Farooq Ahmad", affiliation: "Associate Professor, CUI, Lahore", image: "/committee-members/dr-farooq-ahmad.jpg" },
        { name: "Dr. Salman Ahmad", affiliation: "Associate Professor, UoL, Lahore", image: "/committee-members/dr-salman-ahmad.jpg" },
        { name: "Prof. Dr. Waqar Mehmood", affiliation: "Professor, Riphah International University", image: "/committee-members/prof-dr-waqar-mehmood.jpg" },
        { name: "Dr. Muhammad Yaseen", affiliation: "Associate Professor, RSCI", image: "/committee-members/dr-muhammad-yaseen.jpg" }
      ]
    },
    {
      track: "Computer Vision and Pattern Recognition",
      members: [
        { name: "Dr. Imtiaz Ahmad Taj", affiliation: "Professor, CUST Islamabad", image: "/committee-members/dr-imtiaz-ahmad-taj.jpg" },
        { name: "Dr Usama Ijaz Bajwa", affiliation: "Associate Professor, COMSAT, Lahore", image: "/committee-members/dr-usama-ijaz-bajwa.jpg" },
        { name: "Dr Mehtab Afzal", affiliation: "Associate Professor, UoL, Lahore", image: "/committee-members/dr-mehtab-afzal.jpg" }
      ]
    },
    {
      track: "Innovation, Entrepreneurship, and Tech Startups",
      members: [
        { name: "Mr Waqar Azeem", affiliation: "Industry Expert", image: "/committee-members/mr-waqar-azeem-startup.jpg" }
      ]
    },
    {
      track: "Computing for Social Good and Human Computing Interaction",
      members: [
        { name: "Prof. Dr. Ibrar Hussain", affiliation: "Professor, UOL, Lahore", image: "/committee-members/prof-dr-ibrar-hussain.jpg" },
        { name: "Dr. Hamid Tarub Mirza", affiliation: "CUI, Lahore", image: "/committee-members/dr-hamid-tarub-mirza.jpg" }
      ]
    },
    {
      track: "ICT Infrastructure",
      members: [
        { name: "Dr. Muhammad Bilal", affiliation: "Assistant Professor, Middle East Technical University, Turkey", image: "/committee-members/dr-muhammad-bilal.jpg" },
        { name: "Dr. Muhammad Azeem", affiliation: "Associate Professor, University of Sialkot, Sialkot", image: "/committee-members/dr-muhammad-azeem.jpg" },
        { name: "Dr. Kashif Shahzad", affiliation: "CEO, PITC, Pakistan", image: "/committee-members/dr-kashif-shahzad.jpg" },
        { name: "Dr. Jasim Saeed", affiliation: "HOD (CS), Assistant Professor, RSCI", image: "/committee-members/dr-jasim-saeed.jpg" }
      ]
    }
  ];

  const advisoryBoard = [
    { name: "Dr. Tauseef", affiliation: "Campus Director, Riphah International University", image: "/committee-members/dr-tauseef.jpg" },
    { name: "Mr. Arshad", affiliation: "Executive director", image: "/committee-members/mr-arshad.jpg" },
    { name: "Dr. Zubair", affiliation: "Dean of computing Islamabad", image: "/committee-members/dr-zubair.jpg" },
    { name: "Mr. Umer", affiliation: "Industry Representative", image: "/committee-members/mr-umer.jpg" }
  ];

  const organizingCommittee = [
    { name: "Ms. Dua Mahmood", affiliation: "Senior Lecturer", image: "/committee-members/ms-dua-mahmood.jpg" },
    { name: "Mr. Muhammad Naeem", affiliation: "Senior Lecturer", image: "/committee-members/mr-muhammad-naeem.jpg" },
    { name: "Ms. Abida Noaman", affiliation: "Senior Lecturer", image: "/committee-members/ms-abida-noaman.jpg" },
    { name: "Mr. Asim Mansha", affiliation: "Senior Lecturer", image: "/committee-members/mr-asim-mansha.jpg" },
    { name: "Mr. Adnan Ahmad", affiliation: "Senior Lecturer", image: "/committee-members/mr-adnan-ahmad.jpg" },
    { name: "Ms. Rida Ihtsham", affiliation: "Lecturer", image: "/committee-members/ms-rida-ihtsham.jpg" },
    { name: "Mr. Muhammad Haroon", affiliation: "Lecturer", image: "/committee-members/mr-muhammad-haroon.jpg" },
    { name: "Mr. Sameer Sohail", affiliation: "Lab Engineer", image: "/committee-members/mr-sameer-sohail.jpg" }
  ];

  return (
    <div className="bg-background-white">
      {/* Hero Section */}
      <section className="relative text-white section-padding-lg overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://moellim.com/wp-content/uploads/2025/02/Riphah-International-University-Lahore-900x580-1.webp)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-dark/90"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-hero mb-6 font-bold">Conference Committees</h1>
            <p className="text-body text-white/90 max-w-3xl mx-auto">
              Meet the distinguished committee members and advisory board of ICCI-2025
            </p>
          </div>
        </div>
      </section>

      {/* Patron-in-Chief */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Patron-in-Chief
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {patronInChief.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center" style={{display: 'none'}}>
                      <Crown className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {member.title}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">{member.name}</h3>
                <p className="text-text-secondary mb-3">{member.affiliation}</p>
                <p className="text-sm text-text-muted mb-4">{member.expertise}</p>
                <a 
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-300"
                >
                  <User className="h-4 w-4 mr-2" />
                  Contact
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Convenor/Chair */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Convenor/Chair
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {convenorChair.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center" style={{display: 'none'}}>
                      <Award className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {member.title}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">{member.name}</h3>
                <p className="text-text-secondary mb-3">{member.affiliation}</p>
                <p className="text-sm text-text-muted mb-4">{member.expertise}</p>
                <a 
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-300"
                >
                  <User className="h-4 w-4 mr-2" />
                  Contact
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-Convenor/Co-Chair */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Co-Convenor/Co-Chair
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coConvenorCoChair.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="relative mb-6">
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-accent shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center" style={{display: 'none'}}>
                      <UserCheck className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {member.title}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">{member.name}</h3>
                <p className="text-text-secondary mb-3">{member.affiliation}</p>
                <p className="text-sm text-text-muted mb-4">{member.expertise}</p>
                <a 
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center text-accent hover:text-accent-dark transition-colors duration-300"
                >
                  <User className="h-4 w-4 mr-2" />
                  Contact
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secretary */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Secretary
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {secretary.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="relative mb-6">
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-accent shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center" style={{display: 'none'}}>
                      <BookOpen className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {member.title}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">{member.name}</h3>
                <p className="text-text-secondary mb-3">{member.affiliation}</p>
                <p className="text-sm text-text-muted mb-4">{member.expertise}</p>
                <a 
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center text-accent hover:text-accent-dark transition-colors duration-300"
                >
                  <User className="h-4 w-4 mr-2" />
                  Contact
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical/Track Committee Members */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Technical/Track Committee Members
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="space-y-12">
            {technicalCommittee.map((track, trackIndex) => (
              <div key={trackIndex} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {track.track}
                  </h3>
                  <div className="w-16 h-1 bg-accent mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {track.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="bg-gradient-to-br from-background-light to-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300 text-center">
                      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-3 border-primary shadow-md mb-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center" style={{display: 'none'}}>
                          <GraduationCap className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h4 className="font-semibold text-text-primary mb-2 text-sm">{member.name}</h4>
                      <p className="text-text-secondary text-xs leading-relaxed">{member.affiliation}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Advisory Board
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisoryBoard.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-3 border-primary shadow-md mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center" style={{display: 'none'}}>
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{member.name}</h3>
                <p className="text-text-secondary text-sm">{member.affiliation}</p>
              </div>
            ))}
          </div>
            </div>
      </section>

      {/* Organizing Committee Members */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Organizing Committee Members
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizingCommittee.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-3 border-accent shadow-md mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center" style={{display: 'none'}}>
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{member.name}</h3>
                <p className="text-text-secondary text-sm">{member.affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}