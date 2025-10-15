import { Calendar, MapPin, Users, BookOpen, ArrowRight } from 'lucide-react';

export default function Home() {
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
              1st International Conference on
              <br />
              <span className="text-accent">Computing & Innovation</span>
            </h1>
            <p className="text-body text-white/90 mb-8 max-w-3xl mx-auto">
              Join leading researchers, practitioners, and students in computer science 
              for a premier academic conference featuring cutting-edge research, 
              innovative technologies, and networking opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-accent hover:bg-accent-dark text-primary">
                Submit Paper
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
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
            <p className="text-body text-text-secondary max-w-3xl mx-auto">
              ICCI-2025 brings together the global computing and innovation community to share 
              knowledge, explore emerging trends, and foster collaboration in advancing 
              the field of computing and innovation.
            </p>
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
              <h3 className="text-subheading font-medium text-text-primary mb-2">Paper Submissions</h3>
              <p className="text-body text-text-secondary">100+ Papers</p>
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
                      Cutting-Edge Research
                    </h3>
                    <p className="text-body text-text-secondary">
                      Present and discover the latest advances in computer science 
                      across all major research areas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-subheading font-medium text-text-primary mb-2">
                      Expert Keynote Speakers
                    </h3>
                    <p className="text-body text-text-secondary">
                      Learn from distinguished researchers and industry leaders 
                      shaping the future of computer science.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-subheading font-medium text-text-primary mb-2">
                      Networking Opportunities
                    </h3>
                    <p className="text-body text-text-secondary">
                      Connect with peers, potential collaborators, and industry 
                      professionals from around the world.
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
                  <span className="text-body">Paper Submission Deadline</span>
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
            <button className="btn-primary">
              Submit Your Paper
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="btn-secondary">
              Register for Conference
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
