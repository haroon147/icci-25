import { BookOpen, Download, Award, Globe, FileText } from 'lucide-react';

export default function Schedule() {
  const proceedingsInfo = [
    {
      icon: BookOpen,
      title: "Conference Proceedings",
      description: "All accepted papers will be published in the ICACS 2025 conference proceedings",
      details: "Digital publication with ISBN and DOI assignment"
    },
    {
      icon: Award,
      title: "Best Paper Awards",
      description: "Outstanding papers will be recognized with best paper awards",
      details: "Awards given in each technical track and overall best paper"
    },
    {
      icon: Globe,
      title: "International Indexing",
      description: "Proceedings will be submitted for indexing in major databases",
      details: "IEEE Xplore, Scopus, and other academic databases"
    }
  ];

  const previousProceedings = [
    {
      year: "2024",
      title: "ICACS 2024 Proceedings",
      papers: "95 papers",
      pages: "650+ pages",
      topics: ["AI/ML", "Networks", "Security", "Software Engineering"]
    },
    {
      year: "2023",
      title: "ICACS 2023 Proceedings",
      papers: "87 papers",
      pages: "580+ pages",
      topics: ["Data Science", "Computer Vision", "IoT", "Cloud Computing"]
    },
    {
      year: "2022",
      title: "ICACS 2022 Proceedings",
      papers: "78 papers",
      pages: "520+ pages",
      topics: ["Blockchain", "Quantum Computing", "HCI", "Robotics"]
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
            <h1 className="text-hero mb-6 font-bold">Conference Schedule</h1>
            <p className="text-body text-white/90 max-w-3xl mx-auto">
        
            </p>
          </div>
        </div>
      </section>

      {/* Proceedings Information */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Conference Scheduled will be shared Soon.
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            {/* <p className="text-body text-text-secondary max-w-3xl mx-auto">
              All accepted and presented papers will be published in the ICCI-2025 conference proceedings, 
              ensuring your research reaches the global academic community.
            </p> */}
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {proceedingsInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-center">
                    <div className="bg-primary p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-subheading font-medium text-text-primary mb-4">{info.title}</h3>
                    <p className="text-body text-text-secondary mb-4">{info.description}</p>
                    <p className="text-small text-text-muted">{info.details}</p>
                  </div>
                </div>
              );
            })}
          </div> */}
        </div>
      </section>

      {/* Publication Details */}
      {/* <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Publication Details
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-subheading font-medium text-text-primary mb-6">
                Publication Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">Digital Publication</h4>
                    <p className="text-body text-text-secondary">Proceedings will be published digitally with permanent access</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">ISBN & DOI</h4>
                    <p className="text-body text-text-secondary">Each paper receives unique DOI for citation purposes</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">Open Access</h4>
                    <p className="text-body text-text-secondary">Proceedings will be freely accessible to the research community</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">Peer Review</h4>
                    <p className="text-body text-text-secondary">All papers undergo rigorous peer review process</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-subheading font-medium text-text-primary mb-6">
                Indexing & Impact
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">IEEE Xplore</h4>
                    <p className="text-body text-text-secondary">Proceedings submitted for inclusion in IEEE Xplore Digital Library</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">Scopus Indexing</h4>
                    <p className="text-body text-text-secondary">Application submitted for Scopus database inclusion</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">Google Scholar</h4>
                    <p className="text-body text-text-secondary">Automatic indexing in Google Scholar for maximum visibility</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">Citation Impact</h4>
                    <p className="text-body text-text-secondary">High-quality proceedings with strong citation potential</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Previous Proceedings */}
      {/* <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Previous Proceedings
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-body text-text-secondary max-w-3xl mx-auto">
              Explore our previous conference proceedings to see the quality and scope of research 
              published at ICACS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previousProceedings.map((proceedings, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-center">
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-xl font-bold">{proceedings.year}</span>
                  </div>
                  <h3 className="text-subheading font-medium text-text-primary mb-4">{proceedings.title}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-small text-text-muted">Papers:</span>
                      <span className="text-small font-medium text-primary">{proceedings.papers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-small text-text-muted">Pages:</span>
                      <span className="text-small font-medium text-primary">{proceedings.pages}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-small text-text-muted mb-2">Key Topics:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {proceedings.topics.map((topic, topicIndex) => (
                        <span key={topicIndex} className="bg-accent/10 text-accent px-2 py-1 rounded text-small">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Download & Access */}
      {/* <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Access Proceedings
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="bg-gradient-to-r from-primary to-primary-dark p-8 rounded-lg text-white">
            <div className="max-w-4xl mx-auto text-center">
              <Download className="h-16 w-16 mx-auto mb-6 text-accent" />
              <h3 className="text-subheading font-medium mb-4">Download Proceedings</h3>
              <p className="text-body text-white/90 mb-8">
              Access the complete ICCI-2025 proceedings and previous years' publications. 
              All proceedings are freely available for academic and research purposes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary bg-accent hover:bg-accent-dark text-primary">
                  Download 2025 Proceedings
                </button>
                <button className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
                  Browse Previous Years
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
