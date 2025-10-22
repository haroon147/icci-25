import { Calendar, MapPin, Users, BookOpen, ArrowRight, Globe, Building2, Award } from 'lucide-react';

export default function Home() {
  const collaborators = [
    {
      name: "IEEE",
      logo: "/collaborators/ieee-logo.png",
      description: "Institute of Electrical and Electronics Engineers",
      website: "https://www.ieee.org"
    },
    {
      name: "Software Industry",
      logo: "/collaborators/software-industry-logo.png",
      description: "Industry Partners and Technology Companies",
      website: "#"
    },
    {
      name: "Riphah University",
      logo: "/collaborators/riphah-university-logo.png",
      description: "Riphah International University",
      website: "https://www.riphah.edu.pk"
    },
    {
      name: "University of Lahore",
      logo: "/collaborators/uol-logo.png",
      description: "University of Lahore",
      website: "https://www.uol.edu.pk"
    },
    {
      name: "University of Central Punjab",
      logo: "/collaborators/ucp-logo.png",
      description: "University of Central Punjab",
      website: "https://www.ucp.edu.pk"
    },
    {
      name: "AWS Cloud Computing Club",
      logo: "/collaborators/aws-logo.png",
      description: "Amazon Web Services Community",
      website: "https://aws.amazon.com"
    }
  ];

  const sponsors = [
    {
      name: "Gold Sponsor",
      logo: "/sponsors/gold-sponsor-logo.png",
      tier: "Gold",
      description: "Premier Technology Partner"
    },
    {
      name: "Silver Sponsor",
      logo: "/sponsors/silver-sponsor-logo.png",
      tier: "Silver",
      description: "Technology Innovation Partner"
    },
    {
      name: "Bronze Sponsor",
      logo: "/sponsors/bronze-sponsor-logo.png",
      tier: "Bronze",
      description: "Industry Support Partner"
    },
    {
      name: "Media Partner",
      logo: "/sponsors/media-partner-logo.png",
      tier: "Media",
      description: "Media and Communication Partner"
    }
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
            <h1 className="text-hero mb-6 font-bold">
              
              International Conference on
              <br />
              <span className="text-accent">Computing & Innovation</span>
              <br />
              <span className="text-accent">(ICCI-2025)</span>
            </h1>
            
            {/* Conference Date */}
            <div className="mb-6 flex justify-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/10">
                <div className="text-white/90 text-xl font-medium text-center">
                  📅 10-12 December 2025
                </div>
                <div className="text-white/90 text-xl font-medium text-center">
                  📍 Riphah International University, Lahore
                </div>
              </div>
            </div>
            <p className="text-body text-white/90 mb-8 max-w-3xl mx-auto">
            Join leading researchers, innovators, practitioners, and students in computer science and related
disciplines at ICCI-2025, a premier international conference showcasing cutting-edge research,
emerging technologies, and transformative ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
              <div className="relative flex items-center justify-center">
               
                <button className="btn-primary bg-accent hover:bg-accent-dark text-primary flex items-center justify-center relative z-10">
                  Submission
            
                </button>
              </div>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Overview */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Conference Overview
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-body text-text-secondary leading-relaxed mb-6">
                The 1st International Conference on Computing & Innovation (ICCI-2025) aims to bring together researchers, academicians, practitioners, and industry experts from around the world to exchange knowledge and discuss cutting-edge developments shaping the future of computing and digital innovation. The conference will serve as a platform for interdisciplinary collaboration, knowledge dissemination, and capacity building.
              </p>
              <p className="text-body text-text-secondary leading-relaxed mb-6">
                It will include keynote addresses, technical sessions, panel discussions, and hands-on workshops focused on the latest technologies transforming industries, education, and society. The conference will explore how recent advancements are not only redefining computing but also enhancing our daily lives, driving economic growth, and addressing global challenges.
              </p>
              <p className="text-body text-text-secondary leading-relaxed mb-8">
                Together, let's pave the way for a smarter, more connected future. The 1st ICCI-2025 will be held at Riphah School of Computing and Innovation (RSCI), Lahore, Pakistan on 9th - 10th December 2025. The conference will be organized in hybrid mode, and the authors/speakers have the option to present physically or remotely using online mode of presentation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-subheading font-medium text-text-primary mb-2">Conference Date</h3>
              <p className="text-body text-text-secondary">December 10-12, 2025</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-subheading font-medium text-text-primary mb-2">Location</h3>
              <p className="text-body text-text-secondary">Riphah International University, Raiwind Road Lahore</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-subheading font-medium text-text-primary mb-2">Expected Attendees</h3>
              <p className="text-body text-text-secondary">500+ Researchers</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-subheading font-medium text-text-primary mb-2">Total Submissions</h3>
              <p className="text-body text-text-secondary">100+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-section mb-6 font-semibold text-text-primary">
                Why Attend ICCI-2025?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-subheading font-medium text-text-primary mb-2">
                    	Knowledge Transfer 
                    </h3>
                    <p className="text-body text-text-secondary">
                    Strengthen the bridge between academia and industry through exchange of ideas, case studies, and success stories.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-subheading font-medium text-text-primary mb-2">
                  	Skill Development
                    </h3>
                    <p className="text-body text-text-secondary">
                     Hands-on workshops will equip participants with emerging technological competencies.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-subheading font-medium text-text-primary mb-2">
                    Research Collaboration
                    </h3>
                    <p className="text-body text-text-secondary">
                    Facilitate networking for joint research, funded projects, and innovation ecosystems.
                    </p>
                  </div>
                </div>
                 <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-subheading font-medium text-text-primary mb-2">
                    Research Collaboration
                    </h3>
                    <p className="text-body text-text-secondary">
                    Facilitate networking for joint research, funded projects, and innovation ecosystems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
         
            
            <div className="bg-primary p-8 rounded-lg text-white">
              <h3 className="text-subheading font-medium mb-4">
                Important Dates
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-body">Submissions Deadline</span>
                  <span className="text-body font-medium">November 15, 2025</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-body">Acceptance Notification</span>
                  <span className="text-body font-medium">November 25, 2025</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-body">Camera-Ready Submission</span>
                  <span className="text-body font-medium">December 1, 2025</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-body">Conference Dates</span>
                  <span className="text-body font-medium">December 10-12, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborators & Sponsors Carousel */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          {/* Collaborators Section */}
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Our Collaborators
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-body text-text-secondary max-w-3xl mx-auto mb-12">
              We are proud to collaborate with leading organizations and institutions that share our vision for advancing computing and innovation.
            </p>
          </div>

          {/* Collaborators Carousel */}
          <div className="relative overflow-hidden mb-16">
            <div className="flex animate-scroll">
              {/* First set */}
              {collaborators.map((collaborator, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 w-64 mx-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center h-32 flex flex-col justify-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img
                        src={collaborator.logo}
                        alt={collaborator.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center" style={{display: 'none'}}>
                        <Globe className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-sm font-semibold text-text-primary">{collaborator.name}</h3>
                  </div>
                </div>
              ))}
              {/* Second set for seamless loop */}
              {collaborators.map((collaborator, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 w-64 mx-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center h-32 flex flex-col justify-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img
                        src={collaborator.logo}
                        alt={collaborator.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center" style={{display: 'none'}}>
                        <Globe className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-sm font-semibold text-text-primary">{collaborator.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sponsors Section */}
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Our Sponsors
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-body text-text-secondary max-w-3xl mx-auto mb-12">
              Thank you to our valued sponsors who make ICCI-2025 possible through their generous support.
            </p>
          </div>

          {/* Sponsors Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-reverse">
              {/* First set */}
              {sponsors.map((sponsor, index) => (
                <div key={`sponsor-first-${index}`} className="flex-shrink-0 w-64 mx-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center h-32 flex flex-col justify-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center" style={{display: 'none'}}>
                        <Award className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-sm font-semibold text-text-primary">{sponsor.name}</h3>
                    <p className="text-xs text-text-secondary">{sponsor.tier}</p>
                  </div>
                </div>
              ))}
              {/* Second set for seamless loop */}
              {sponsors.map((sponsor, index) => (
                <div key={`sponsor-second-${index}`} className="flex-shrink-0 w-64 mx-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center h-32 flex flex-col justify-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center" style={{display: 'none'}}>
                        <Award className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-sm font-semibold text-text-primary">{sponsor.name}</h3>
                    <p className="text-xs text-text-secondary">{sponsor.tier}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-background-light">
        <div className="container-custom text-center">
          <h2 className="text-section mb-4 font-semibold text-text-primary">
            Ready to Join Us?
          </h2>
          <p className="text-body text-text-secondary mb-8 max-w-2xl mx-auto">
            Don't miss this opportunity to present your research, learn from experts, 
            and network with peers in the computer science community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center">
              Submission
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="btn-secondary">
              Register Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
