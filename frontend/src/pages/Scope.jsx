import { Brain, Shield, Database, Cpu, Network, Code } from 'lucide-react';

export default function Scope() {
  const topics = [
    {
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning",
      description: "Deep learning, neural networks, computer vision, natural language processing, reinforcement learning, and AI applications."
    },
    {
      icon: Database,
      title: "Data Science & Big Data",
      description: "Data mining, data analytics, big data processing, data visualization, and data-driven decision making."
    },
    {
      icon: Shield,
      title: "Cybersecurity & Privacy",
      description: "Information security, cryptography, privacy-preserving techniques, secure protocols, and threat analysis."
    },
    {
      icon: Cpu,
      title: "Software Engineering",
      description: "Software design, development methodologies, testing, maintenance, and software quality assurance."
    },
    {
      icon: Network,
      title: "Computer Networks & Distributed Systems",
      description: "Network protocols, distributed computing, cloud computing, edge computing, and network security."
    },
    {
      icon: Code,
      title: "Programming Languages & Compilers",
      description: "Language design, compiler construction, runtime systems, and programming paradigms."
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

      {/* Additional Areas */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Additional Research Areas
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-subheading font-medium text-text-primary mb-4">Theoretical Computer Science</h3>
              <ul className="text-body text-text-secondary space-y-2">
                <li>• Algorithms and Data Structures</li>
                <li>• Computational Complexity</li>
                <li>• Formal Methods</li>
                <li>• Graph Theory</li>
                <li>• Optimization</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-subheading font-medium text-text-primary mb-4">Applied Computer Science</h3>
              <ul className="text-body text-text-secondary space-y-2">
                <li>• Human-Computer Interaction</li>
                <li>• Computer Graphics & Visualization</li>
                <li>• Mobile Computing</li>
                <li>• IoT and Embedded Systems</li>
                <li>• Bioinformatics</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-subheading font-medium text-text-primary mb-4">Emerging Technologies</h3>
              <ul className="text-body text-text-secondary space-y-2">
                <li>• Quantum Computing</li>
                <li>• Blockchain Technology</li>
                <li>• Augmented Reality</li>
                <li>• Autonomous Systems</li>
                <li>• Green Computing</li>
              </ul>
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
