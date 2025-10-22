import { Users, Award, Globe, BookOpen, Crown, UserCheck, Shield } from 'lucide-react';

export default function Committees() {
  const patronInChief = [
    {
      name: "Prof. Dr. Sheheryar Malik",
      title: "Patron-in-Chief",
      affiliation: "Director RSCI / Professor",
      expertise: "Riphah School of Computing & Innovation"
    }
  ];

  const convenorChair = [
    {
      name: "Prof. Dr. Muhammad Asif",
      title: "Convenor/Chair",
      affiliation: "Professor, RSCI",
      expertise: "Riphah School of Computing & Innovation"
    }
  ];

  const coConvenorCoChair = [
    {
      name: "Dr. Farrukh Arslan",
      title: "Co-Convenor/Co-Chair",
      affiliation: "Associate Professor, RSCI",
      expertise: "Riphah School of Computing & Innovation"
    },
    {
      name: "Dr. Muhammad Adnan",
      title: "Co-Convenor/Co-Chair",
      affiliation: "Assistant Professor, RSCI",
      expertise: "Riphah School of Computing & Innovation"
    }
  ];

  const secretary = [
    {
      name: "Dr. Ayesha Kashif",
      title: "Secretary",
      affiliation: "Assistant Professor, RSCI",
      expertise: "Riphah School of Computing & Innovation"
    }
  ];

  const technicalCommittee = [
    {
      track: "Artificial Intelligence and Machine Learning",
      members: [
        { name: "Dr. Mian Muhammad Awais", affiliation: "Professor, LUMS, Lahore" },
        { name: "Dr. Atif Alvi", affiliation: "Professor, UMT, Lahore" },
        { name: "Dr. Azhar Imran Mudassir", affiliation: "Assistant Professor, FCAI, Beijing University, China" },
        { name: "Dr Allah Dita", affiliation: "Associate Professor, University of Education, Lahore" },
        { name: "Dr. Umme Hani", affiliation: "Associate Professor, NASTAP, Lahore" },
        { name: "Dr. Jamal Uddin", affiliation: "Associate Professor, RSCI" },
        { name: "Dr Adnan Ahmad Khan", affiliation: "Associate Professor, RSCI" }
      ]
    },
    {
      track: "Data Science and Big Data Analytics",
      members: [
        { name: "Dr. Ali Haider", affiliation: "School of Computing, Beijing Technology University, China" },
        { name: "Dr. Asif Nauman", affiliation: "Assistant Professor, Riphah International University, Lahore" }
      ]
    },
    {
      track: "Cybersecurity and Privacy",
      members: [
        { name: "Dr Maaz Bin Ahmad", affiliation: "Professor, KIET, Karachi" },
        { name: "Dr Zafar Iqbal", affiliation: "Associate Professor, FAST NUCES, Islamabad" },
        { name: "Dr. Madeeha Fatima", affiliation: "Assistant Professor" },
        { name: "Mr. Kukab Jamal Zubari", affiliation: "Professor by Practice, LGU" }
      ]
    },
    {
      track: "Internet of Things (IoT), Robotic and Smart Systems",
      members: [
        { name: "Dr. Waqar Azeem", affiliation: "Associate Professor, UMT" },
        { name: "Dr. Yasir Niaz Khan", affiliation: "PSCA, Lahore" }
      ]
    },
    {
      track: "Software Engineering and DevOps",
      members: [
        { name: "Dr. Farooq Ahmad", affiliation: "Associate Professor, CUI, Lahore" },
        { name: "Dr. Salman Ahmad", affiliation: "Associate Professor, UoL, Lahore" },
        { name: "Prof. Dr. Waqar Mehmood", affiliation: "Professor, Riphah International University" },
        { name: "Dr. Muhammad Yaseen", affiliation: "Associate Professor, RSCI" }
      ]
    },
    {
      track: "Computer Vision and Pattern Recognition",
      members: [
        { name: "Dr. Imtiaz Ahmad Taj", affiliation: "Professor, CUST Islamabad" },
        { name: "Dr Usama Ijaz Bajwa", affiliation: "Associate Professor, COMSAT, Lahore" },
        { name: "Dr Mehtab Afzal", affiliation: "Associate Professor, UoL, Lahore" }
      ]
    },
    {
      track: "Innovation, Entrepreneurship, and Tech Startups",
      members: [
        { name: "Mr Waqar Azeem", affiliation: "Industry Expert" }
      ]
    },
    {
      track: "Computing for Social Good and Human Computing Interaction",
      members: [
        { name: "Prof. Dr. Ibrar Hussain", affiliation: "Professor, UOL, Lahore" },
        { name: "Dr. Hamid Tarub Mirza", affiliation: "CUI, Lahore" }
      ]
    },
    {
      track: "ICT Infrastructure",
      members: [
        { name: "Dr. Muhammad Bilal", affiliation: "Assistant Professor, Middle East Technical University, Turkey" },
        { name: "Dr. Muhammad Azeem", affiliation: "Associate Professor, University of Sialkot, Sialkot" },
        { name: "Dr. Kashif Shahzad", affiliation: "CEO, PITC, Pakistan" },
        { name: "Dr. Jasim Saeed", affiliation: "HOD (CS), Assistant Professor, RSCI" }
      ]
    }
  ];

  const advisoryBoard = [
    { name: "Dr. Tauseef", affiliation: "Campus Director, Riphah International University" },
    { name: "Mr. Arshad", affiliation: "Executive director" },
    { name: "Dr. Zubair", affiliation: "Dean of computing Islamabad" },
    { name: "Mr. Umer", affiliation: "Industry Representative" }
  ];

  const organizingCommittee = [
    { name: "Ms. Dua Mahmood", affiliation: "Senior Lecturer" },
    { name: "Mr. Muhammad Naeem", affiliation: "Senior Lecturer" },
    { name: "Ms. Abida Noaman", affiliation: "Senior Lecturer" },
    { name: "Mr. Asim Mansha", affiliation: "Senior Lecturer" },
    { name: "Mr. Adnan Ahmad", affiliation: "Senior Lecturer" },
    { name: "Ms. Rida Ihtsham", affiliation: "Lecturer" },
    { name: "Mr. Muhammad Haroon", affiliation: "Lecturer" },
    { name: "Mr. Sameer Sohail", affiliation: "Lab Engineer" }
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
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Crown className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">{member.name}</h3>
                <p className="text-accent font-semibold mb-2">{member.title}</p>
                <p className="text-text-secondary">{member.affiliation}</p>
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
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="bg-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">{member.name}</h3>
                <p className="text-accent font-semibold mb-2">{member.title}</p>
                <p className="text-text-secondary">{member.affiliation}</p>
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
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <UserCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">{member.name}</h3>
                <p className="text-accent font-semibold mb-2">{member.title}</p>
                <p className="text-text-secondary">{member.affiliation}</p>
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
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">{member.name}</h3>
                <p className="text-accent font-semibold mb-2">{member.title}</p>
                <p className="text-text-secondary">{member.affiliation}</p>
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
              <div key={trackIndex} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-text-primary mb-6 text-center">
                  {track.track}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {track.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold text-text-primary mb-1">{member.name}</h4>
                      <p className="text-text-secondary text-sm">{member.affiliation}</p>
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
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