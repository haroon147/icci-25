import { Users, Award, Globe, BookOpen } from 'lucide-react';

export default function Committees() {
  const committeeMembers = [
    {
      name: "Prof. Dr. Sarah Johnson",
      title: "General Chair",
      affiliation: "Stanford University, USA",
      expertise: "Artificial Intelligence & Machine Learning"
    },
    {
      name: "Dr. Ahmed Hassan",
      title: "Program Chair",
      affiliation: "MIT, USA",
      expertise: "Computer Networks & Distributed Systems"
    },
    {
      name: "Prof. Dr. Maria Garcia",
      title: "Publication Chair",
      affiliation: "University of Cambridge, UK",
      expertise: "Software Engineering"
    },
    {
      name: "Dr. Chen Wei",
      title: "Finance Chair",
      affiliation: "Tsinghua University, China",
      expertise: "Data Science & Analytics"
    }
  ];

  const programCommittee = [
    { name: "Prof. Dr. John Smith", affiliation: "Harvard University, USA" },
    { name: "Dr. Lisa Wang", affiliation: "University of Toronto, Canada" },
    { name: "Prof. Dr. Raj Patel", affiliation: "IIT Delhi, India" },
    { name: "Dr. Emma Thompson", affiliation: "University of Melbourne, Australia" },
    { name: "Prof. Dr. Carlos Rodriguez", affiliation: "Universidad de Madrid, Spain" },
    { name: "Dr. Yuki Tanaka", affiliation: "University of Tokyo, Japan" },
    { name: "Prof. Dr. Fatima Al-Zahra", affiliation: "King Saud University, Saudi Arabia" },
    { name: "Dr. Michael Brown", affiliation: "ETH Zurich, Switzerland" }
  ];

  return (
    <div className="bg-background-white">
      {/* Hero Section */}
      <section className="relative text-white section-padding-lg overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://moellim.com/wp-content/uploads/2025/02/Riphah-International-University-Lahore-900x580-1.webp)'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-dark/90"></div>
        </div>
        
        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-hero mb-6 font-bold">Organizing Committees</h1>
            <p className="text-body text-white/90 max-w-3xl mx-auto">
              Meet the distinguished researchers and professionals organizing ICCI-2025
            </p>
          </div>
        </div>
      </section>

      {/* Organizing Committee */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Organizing Committee
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-body text-text-secondary max-w-3xl mx-auto">
              Our organizing committee consists of leading experts in computer science 
              who bring their expertise and experience to ensure a successful conference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {committeeMembers.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-full mr-6 flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-subheading font-medium text-text-primary mb-2">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium mb-2">{member.title}</p>
                    <p className="text-body text-text-secondary mb-3">{member.affiliation}</p>
                    <p className="text-small text-text-muted">
                      <span className="font-medium">Expertise:</span> {member.expertise}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Committee */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Program Committee
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-body text-text-secondary max-w-3xl mx-auto">
              Our international program committee ensures the highest quality of peer review 
              and maintains the academic excellence of ICCI-2025.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programCommittee.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-accent p-2 rounded-full mr-4">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary">{member.name}</h4>
                    <p className="text-small text-text-secondary">{member.affiliation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Advisory Board
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">International Perspective</h3>
              <p className="text-body text-text-secondary">
                Our advisory board includes renowned researchers from leading institutions 
                worldwide, ensuring global representation and international standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Academic Excellence</h3>
              <p className="text-body text-text-secondary">
                Committee members are selected based on their outstanding contributions 
                to computer science research and their commitment to academic excellence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Diverse Expertise</h3>
              <p className="text-body text-text-secondary">
                Our committee covers all major areas of computer science, ensuring 
                comprehensive expertise in reviewing submissions across all tracks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
