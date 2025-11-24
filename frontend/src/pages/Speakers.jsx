import { Mic, Award, Globe, Users } from 'lucide-react';

export default function Speakers() {
  const keynoteSpeakers = [
    {
      name: "Prof. Dr. Aisha Rahman",
      title: "Director of AI Research",
      affiliation: "Stanford University, USA",
      expertise: "Artificial Intelligence & Machine Learning",
      bio: "Leading researcher in AI with 20+ years of experience. Author of 150+ papers and recipient of numerous awards including the Turing Award.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Prof. Dr. Fatima Al-Zahra",
      title: "Head of Cybersecurity Lab",
      affiliation: "University of Cambridge, UK",
      expertise: "Cybersecurity & Privacy",
      bio: "World-renowned expert in cybersecurity with extensive experience in government and industry. Advisor to multiple tech companies.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const invitedSpeakers = [
    {
      name: "Dr. Omar Abdullah",
      affiliation: "Tsinghua University, China",
      topic: "Quantum Computing Applications"
    },
    
    {
      name: "Prof. Dr. Khadija Al-Rashid",
      affiliation: "Universidad de Madrid, Spain",
      topic: "Software Engineering"
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
            <h1 className="text-hero mb-6 font-bold">Keynote Speakers</h1>
            <p className="text-body text-white/90 max-w-3xl mx-auto">
              Meet the distinguished researchers and industry leaders who will share their insights at ICCI-2025
            </p>
          </div>
        </div>
      </section>

      {/* Keynote Speakers */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Distinguished Keynote Speakers
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-body text-text-secondary max-w-3xl mx-auto">
              Our keynote speakers are internationally recognized experts who will provide 
              insights into the latest developments and future directions in computer science.
            </p>
            <br />
            <br /><br /><br /><br />
            <p><b>Details will be Annouced Shortly</b></p>
          </div>

          {/* <div className="space-y-12">
            {keynoteSpeakers.map((speaker, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-48 h-48 rounded-full mx-auto lg:mx-0 object-cover shadow-lg"
                    />
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <Mic className="h-6 w-6 text-accent mr-3" />
                      <h3 className="text-subheading font-medium text-text-primary">{speaker.name}</h3>
                    </div>
                    
                    <p className="text-accent font-medium mb-2">{speaker.title}</p>
                    <p className="text-primary font-medium mb-4">{speaker.affiliation}</p>
                    
                    <div className="mb-4">
                      <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-small font-medium">
                        {speaker.expertise}
                      </span>
                    </div>
                    
                    <p className="text-body text-text-secondary">{speaker.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Invited Speakers */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Invited Speakers
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-body text-text-secondary max-w-3xl mx-auto">
              Join us for presentations by leading researchers and practitioners from around the world, 
              covering diverse topics in computing domain.
            </p>
            <br />
            <br />
            <br />
            <br />
            <p><b> Will be Annouced Lator</b> </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {invitedSpeakers.map((speaker, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-full mr-4 flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-subheading font-medium text-text-primary mb-2">{speaker.name}</h3>
                    <p className="text-body text-text-secondary mb-3">{speaker.affiliation}</p>
                    <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-small font-medium inline-block">
                      {speaker.topic}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Speaker Highlights */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Why Our Speakers Matter
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Award-Winning Researchers</h3>
              <p className="text-body text-text-secondary">
                Our speakers include recipients of prestigious awards including the Turing Award, 
                IEEE Fellows, and ACM Distinguished Scientists.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Global Perspective</h3>
              <p className="text-body text-text-secondary">
                Speakers represent leading institutions from around the world, providing 
                diverse perspectives on computer science research and applications.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mic className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Cutting-Edge Topics</h3>
              <p className="text-body text-text-secondary">
                Presentations cover the latest developments in AI, cybersecurity, quantum computing, 
                and other emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}