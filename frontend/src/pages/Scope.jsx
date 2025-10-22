import { Brain, Shield, Database, Cpu, Network, Code, Eye, Users, Lightbulb, Globe } from 'lucide-react';

export default function Scope() {
  const topics = [
    {
      icon: Brain,
      title: "Artificial Intelligence and Machine Learning",
      description: "Explainable AI (XAI), Generative AI, Agentic AI, Reinforcement Learning"
    },
    {
      icon: Database,
      title: "Data Science and Big Data Analytics",
      description: "Predictive Analytics, Data-driven Decision Making"
    },
    {
      icon: Shield,
      title: "Cybersecurity and Privacy",
      description: "Secure Computing, Blockchain, Digital Forensics"
    },
    {
      icon: Network,
      title: "Internet of Things (IoT), Robotics and Smart Systems",
      description: "Smart Cities, Industry 4.0, Edge and Cloud Computing"
    },
    {
      icon: Code,
      title: "Software Engineering and DevOps",
      description: "Agile Transformation, Sustainable Software Practices"
    },
    {
      icon: Eye,
      title: "Computer Vision and Pattern Recognition",
      description: "Autonomous Systems, AR/VR/MR Technologies"
    },
    {
      icon: Lightbulb,
      title: "Innovation, Entrepreneurship, and Tech Startups",
      description: "AI in Business, Technology Commercialization"
    },
    {
      icon: Users,
      title: "Computing for Social Good and HCI",
      description: "Green Computing, Digital Inclusion, Assistive Technologies"
    },
    {
      icon: Cpu,
      title: "ICT Infrastructure",
      description: "Backbone of information and communication tech with network design, hardware deployment, 5G/6G, scalable architectures for reliable data transmission and connectivity"
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
            <h1 className="text-hero mb-6 font-bold">Scope & Topics</h1>
            <p className="text-body text-white/90 max-w-3xl mx-auto">
              Explore the comprehensive range of computing and innovation topics covered at ICCI-2025
            </p>
          </div>
        </div>
      </section>

      {/* Topics Overview */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Research Topics
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-body text-text-secondary max-w-3xl mx-auto">
              ICCI-2025 welcomes submissions in all areas of computing and innovation and related fields. 
              We encourage original research that advances the state of the art in both theoretical 
              and applied computing and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="bg-primary p-3 rounded-lg mr-6 flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-subheading font-medium text-text-primary mb-3">
                        {topic.title}
                      </h3>
                      <p className="text-body text-text-secondary">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social and Academic Impact */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Social and Academic Impact
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Knowledge Transfer</h3>
              <p className="text-body text-text-secondary">
                Strengthen the bridge between academia and industry through exchange of ideas, case studies, and success stories.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Skill Development</h3>
              <p className="text-body text-text-secondary">
                Hands-on workshops will equip participants with emerging technological competencies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Network className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Research Collaboration</h3>
              <p className="text-body text-text-secondary">
                Facilitate networking for joint research, funded projects, and innovation ecosystems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Community Empowerment</h3>
              <p className="text-body text-text-secondary">
                Inspire young researchers and students to pursue computing solutions for sustainable development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Economic Impact</h3>
              <p className="text-body text-text-secondary">
                Promote innovation-led entrepreneurship, encourage local startups and digital transformation initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Submission Guidelines
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-subheading font-medium text-text-primary mb-6">
                Paper Requirements
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-body text-text-secondary">
                    Papers must be original and not previously published or under review elsewhere
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-body text-text-secondary">
                    Maximum length: 8 pages for full papers, 4 pages for short papers
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-body text-text-secondary">
                    Format: IEEE conference template (double-column)
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-body text-text-secondary">
                    Language: English only
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-subheading font-medium text-text-primary mb-6">
                Review Process
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-body text-text-secondary">
                    Double-blind peer review by at least three reviewers
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-body text-text-secondary">
                    Evaluation based on originality, significance, and technical quality
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-body text-text-secondary">
                    Accepted papers will be published in conference proceedings
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-body text-text-secondary">
                    Best paper awards will be given in each track
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
