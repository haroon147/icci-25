import { Target, Eye, Users, Award, BookOpen, Globe } from 'lucide-react';

export default function About() {
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
            <h1 className="text-hero mb-6 font-bold">About ICCI-2025</h1>
            <p className="text-body text-white/90 max-w-3xl mx-auto">
              1st International Conference on Computing & Innovation
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-section mb-6 font-semibold text-text-primary">
                About the Conference
              </h2>
              <div className="w-24 h-1 bg-accent mb-8"></div>
              <p className="text-body text-text-secondary mb-6">
                The 1st International Conference on Computing & Innovation (ICCI-2025) is a premier 
                academic event that brings together researchers, practitioners, and students from around 
                the world to share their latest research findings and innovations in computing and innovation.
              </p>
              <p className="text-body text-text-secondary mb-6">
                This three-day conference will feature keynote presentations, technical paper sessions, 
                workshops, and networking opportunities. We invite submissions in all areas of computer 
                science, including but not limited to artificial intelligence, machine learning, data 
                science, cybersecurity, software engineering, and distributed systems.
              </p>
              <p className="text-body text-text-secondary">
                Our mission is to foster collaboration, promote knowledge sharing, and advance the 
                field of computing and innovation through rigorous academic discourse and practical applications.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-subheading font-medium mb-6 text-text-primary">
                Conference Highlights
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">Keynote Presentations</h4>
                    <p className="text-body text-text-secondary">Leading experts share cutting-edge insights</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">Global Participation</h4>
                    <p className="text-body text-text-secondary">500+ attendees from around the world</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">Multiple Tracks</h4>
                    <p className="text-body text-text-secondary">Comprehensive coverage of all CS areas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Eye className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">Peer-Reviewed Proceedings</h4>
                    <p className="text-body text-text-secondary">High-quality research publication</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Our Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-accent mr-3" />
                <h3 className="text-subheading font-medium text-text-primary">Our Mission</h3>
              </div>
              <p className="text-body text-text-secondary">
                To advance the field of computer science through rigorous academic research, 
                foster international collaboration, and provide a platform for sharing 
                innovative ideas and cutting-edge technologies that address real-world challenges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-accent mr-3" />
                <h3 className="text-subheading font-medium text-text-primary">Our Vision</h3>
              </div>
              <p className="text-body text-text-secondary">
                To become a leading international conference that shapes the future of computer 
                science by bringing together the brightest minds to solve complex problems, 
                drive innovation, and create meaningful impact in society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Objectives */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Conference Objectives
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Knowledge Sharing</h3>
              <p className="text-body text-text-secondary">
                Facilitate the exchange of cutting-edge research and innovative ideas 
                among computer science professionals worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Networking</h3>
              <p className="text-body text-text-secondary">
                Create opportunities for researchers, practitioners, and students to 
                connect and build lasting professional relationships.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Collaboration</h3>
              <p className="text-body text-text-secondary">
                Encourage interdisciplinary collaboration and partnerships that drive 
                innovation in computer science research and applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
