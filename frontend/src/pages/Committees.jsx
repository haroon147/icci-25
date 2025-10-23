import { Users, Award, Globe, BookOpen, Crown, UserCheck, Shield, User, GraduationCap, Building2 } from 'lucide-react';

export default function Committees() {
  const patronInChief = [
    {
      name: "Prof. Dr. Sheheryar Malik",
      title: "Patron-in-Chief",
      affiliation: "Director RSCI / Professor",
      expertise: "Riphah School of Computing & Innovation",
      image: "data:image/jpeg;base64,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",
      email: "sheheryar.malik@riphah.edu.pk"
    }
  ];

  const convenorChair = [
    {
      name: "Prof. Dr. Muhammad Asif",
      title: "Convenor/Chair",
      affiliation: "Professor, RSCI",
      expertise: "Riphah School of Computing & Innovation",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQERNrmB97zcCA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1652189385981?e=1762992000&v=beta&t=iXzVGANgTbbAtECt6XI7AfKhSaW2DMDcmmQV7lvK8e8",
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
        { name: "Dr. Yasir Niaz Khan", affiliation: "PSCA, Lahore", image: "data:image/jpeg;base64,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" }
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

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-6xl mx-auto">
            {patronInChief.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-white via-gray-50 to-white p-16 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 text-center border border-gray-100 hover:border-primary/30 hover:scale-105 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl"></div>
                
                <div className="relative mb-12">
                  <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-8 border-primary shadow-2xl bg-white relative">
                    {/* Image container with enhanced styling */}
                    <div className="absolute inset-2 rounded-full overflow-hidden">
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
                        <Crown className="h-20 w-20 text-white" />
                      </div>
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-accent/20 animate-pulse"></div>
                  </div>
                  
                  {/* Enhanced title badge */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-accent via-accent to-primary text-white px-8 py-3 rounded-full text-xl font-bold shadow-xl border-2 border-white">
                      {member.title}
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-5xl font-bold text-text-primary mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{member.name}</h3>
                  <p className="text-2xl text-text-secondary mb-6 font-semibold">{member.affiliation}</p>
                  <p className="text-xl text-text-muted mb-8 leading-relaxed max-w-4xl mx-auto">{member.expertise}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl hover:from-primary-dark hover:to-primary transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105"
                    >
                      <User className="h-6 w-6 mr-3" />
                      Contact
                    </a>
                    <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent to-accent-dark text-white rounded-xl hover:from-accent-dark hover:to-accent transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105">
                      <Globe className="h-6 w-6 mr-3" />
                      View Profile
                    </button>
                  </div>
                </div>
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

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-5xl mx-auto">
            {convenorChair.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 text-center border border-gray-100 hover:border-primary/20 hover:scale-105">
                <div className="relative mb-8">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-6 border-primary shadow-2xl bg-white">
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
                      <Award className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-accent to-accent-dark text-white px-6 py-2 rounded-full text-lg font-bold shadow-lg">
                      {member.title}
                    </div>
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-text-primary mb-4">{member.name}</h3>
                <p className="text-xl text-text-secondary mb-4">{member.affiliation}</p>
                <p className="text-lg text-text-muted mb-6">{member.expertise}</p>
                <a 
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  <User className="h-5 w-5 mr-2" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {coConvenorCoChair.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 text-center border border-gray-100 hover:border-accent/20 hover:scale-105">
                <div className="relative mb-6">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-5 border-accent shadow-2xl bg-white">
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
                      <UserCheck className="h-14 w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-primary-dark text-white px-5 py-2 rounded-full text-base font-bold shadow-lg">
                      {member.title}
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-text-primary mb-3">{member.name}</h3>
                <p className="text-lg text-text-secondary mb-3">{member.affiliation}</p>
                <p className="text-base text-text-muted mb-5">{member.expertise}</p>
                <a 
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center px-5 py-2 bg-accent text-white rounded-xl hover:bg-accent-dark transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl"
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

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-5xl mx-auto">
            {secretary.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 text-center border border-gray-100 hover:border-accent/20 hover:scale-105">
                <div className="relative mb-8">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-6 border-accent shadow-2xl bg-white">
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
                      <BookOpen className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-accent to-accent-dark text-white px-6 py-2 rounded-full text-lg font-bold shadow-lg">
                      {member.title}
                    </div>
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-text-primary mb-4">{member.name}</h3>
                <p className="text-xl text-text-secondary mb-4">{member.affiliation}</p>
                <p className="text-lg text-text-muted mb-6">{member.expertise}</p>
                <a 
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-xl hover:bg-accent-dark transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  <User className="h-5 w-5 mr-2" />
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

          <div className="space-y-16">
            {technicalCommittee.map((track, trackIndex) => (
              <div key={trackIndex} className="bg-gradient-to-br from-white via-gray-50 to-white p-10 rounded-3xl shadow-2xl border border-gray-100">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-text-primary mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {track.track}
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {track.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 text-center hover:scale-105 relative overflow-hidden">
                      {/* Background decoration */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl"></div>
                      
                      <div className="relative z-10">
                        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-xl mb-6 relative">
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
                            <GraduationCap className="h-12 w-12 text-white" />
                          </div>
                          {/* Decorative ring */}
                          <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-pulse"></div>
                        </div>
                        <h4 className="font-bold text-text-primary mb-3 text-base">{member.name}</h4>
                        <p className="text-text-secondary text-sm leading-relaxed">{member.affiliation}</p>
                      </div>
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
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-primary/20 hover:scale-105 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-xl mb-6 relative">
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
                      <Shield className="h-10 w-10 text-white" />
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-pulse"></div>
                  </div>
                  <h3 className="font-bold text-text-primary mb-3 text-lg">{member.name}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{member.affiliation}</p>
                </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {organizingCommittee.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-accent/20 hover:scale-105 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-accent shadow-xl mb-6 relative">
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
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
                  </div>
                  <h3 className="font-bold text-text-primary mb-3 text-base">{member.name}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{member.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}