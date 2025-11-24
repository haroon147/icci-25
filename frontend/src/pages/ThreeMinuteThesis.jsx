import { Award, FileText, Video, Calendar, CheckCircle, AlertCircle, Mail, ExternalLink, PowerSquare, Presentation } from 'lucide-react';

export default function ThreeMinuteThesis() {
  const objectives = [
    "Strengthen scientific communication and presentation skills, enabling researchers to clearly convey complex ideas to diverse audiences.",

    "Increase the visibility, reach, and impact of emerging scholars’ research within the broader scientific community.",

  
    "Promote meaningful engagement and cross-disciplinary dialogue through clear, concise communication across research domains.",
  ];

  const eligibility = [

    "Open to all current MS and PhD students worldwide, with no institutional or regional restrictions.",
    
    "All applicants must have research related to Computer Science and Related Domains ",
  ];

  const submissionRequirements = [
    {
      icon: FileText,
      title: "Written Summary (1 page)",
      items: [
        { type: "text", content: "Clearly outline your research topic, including:" },
        { type: "bullet", content: "Problem statement and motivation" },
        { type: "bullet", content: "Research objectives" },
        { type: "bullet", content: "Methodology" },
        { type: "bullet", content: "Key contributions and findings" },
    
      ]
    },
    {
      icon: Presentation,
      title: "PowerPoint Presentation (3 minutes maximum)",
      items: [
        { type: "text", content: "Duration: Exactly 3 minutes (strictly enforced)" },
        { type: "text", content: "Visual aid: One static slide only" },
        { type: "text", content: "The presentation will be evaluated based on the following criteria:" },
        { type: "bullet", content: "Clarity and effectiveness of communication" },
        { type: "bullet", content: "Engagement and presentation style" },
        { type: "bullet", content: "Ability to convey complex ideas accessibly" },
        { type: "bullet", content: "Adherence to format requirements" }
      ]
    },
    {
      icon: CheckCircle,
      title: "Submission Process",
      items: [
        { type: "text", content  : "Complete the Google Form (https://forms.gle/ZFEwn4Cw1xDy3AHz5)" },
        { type: "text", content: "The form will require:" },
        { type: "bullet", content: "Personal and institutional information" },
        { type: "bullet", content: "Upload of one-page summary (PDF)" },
        { type: "bullet", content: "Video link with public access" },
        { type: "text", content: "Ensure all required fields are completed before submission" },
        { type: "text", content: "Confirmation email will be sent upon successful submission" }
      ]
    }
  ];

  const importantDates = [
    { event: "Submission Deadline (video + summary)", date: "November 30, 2025" },
    { event: "Finalists Announced", date: "December 03, 2025" },
    { event: "Final Competition at ICCI-2025", date: "December 8-9, 2025" },
    { event: "Award Ceremony", date: "December 9, 2025" }
  ];


  const evaluationCriteria = [
    "Research significance and originality",
    "Clarity and effectiveness of communication",
    "Engagement and presentation style",
    "Ability to convey complex ideas accessibly",
    "Adherence to format requirements"
  ];

  const presentationGuidelines = {
    effective: [
      "Clarity over complexity: Make your research understandable without sacrificing accuracy",
      "Story structure: Clear beginning (problem), middle (approach), and end (impact)",
      "Audience awareness: Assume technical literacy but not specialized domain knowledge",
      "Visual support: Design your single slide to complement, not duplicate, your spoken words",
      "Practice: Rehearse extensively to meet the strict time limit naturally"
    ],
    pitfalls: [
      "Excessive jargon or unexplained acronyms",
      "Attempting to cover too much detail",
      "Weak opening that doesn't capture attention",
      "Unclear statement of research significance",
      "Poor time management"
    ]
  };



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
            <h1 className="text-hero mb-6 font-bold">THREE-MINUTE THESIS (3MT) COMPETITION</h1>
            <p className="text-body text-white/90 content-container-md text-content-center text-break">
              ICCI-2025 - THREE-MINUTE THESIS (3MT) COMPETITION
            </p>
            <p className="text-lg text-white/80 mt-4 font-medium">
              Call for Participation
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section mb-6 font-semibold text-text-primary">OVERVIEW</h2>
            <div className="w-24 h-1 bg-accent mb-6"></div>
            <p className="text-body text-text-secondary mb-4 text-break">
              The International Conference on Computing & Innovation (ICCI-2025) is pleased to announce its Three-Minute Thesis (3MT) Competition. This competition challenges doctoral students, master's students, and recent graduates to distill the essence and significance of their research into a compelling three-minute presentation accessible to a broad technical audience.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section mb-6 font-semibold text-text-primary">OBJECTIVES</h2>
            <div className="w-24 h-1 bg-accent mb-6"></div>
            <p className="text-body text-text-secondary mb-4">The 3MT competition aims to:</p>
            <ul className="space-y-3">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-body text-text-secondary text-break">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section mb-6 font-semibold text-text-primary">ELIGIBILITY</h2>
            <div className="w-24 h-1 bg-accent mb-6"></div>
            <ul className="space-y-3">
              {eligibility.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-body text-text-secondary text-break">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Submission Requirements Section */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section mb-6 font-semibold text-text-primary">SUBMISSION REQUIREMENTS</h2>
            <div className="w-24 h-1 bg-accent mb-6"></div>
            <p className="text-body text-text-secondary mb-6 text-break">
              Participants must submit two components:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {submissionRequirements.map((requirement, index) => {
                const Icon = requirement.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-br from-primary to-primary-dark p-3 rounded-full mr-4 shadow-md">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-subheading font-semibold text-text-primary">{requirement.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {requirement.items.map((item, itemIndex) => {
                        if (item.type === "bullet") {
                          return (
                            <li key={itemIndex} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-body text-text-secondary text-break">{item.content}</span>
                            </li>
                          );
                        } else {
                          return (
                            <li key={itemIndex} className="flex items-start">
                              <span className="text-body text-text-secondary font-medium text-break">{item.content}</span>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Competition Structure Section */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section mb-6 font-semibold text-text-primary">COMPETITION STRUCTURE</h2>
            <div className="w-24 h-1 bg-accent mb-6"></div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-subheading font-medium text-text-primary mb-4">Selection Process</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-body text-text-secondary text-break"><strong>Initial Review:</strong> All submissions will be evaluated by the technical committee</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-body text-text-secondary text-break"><strong>Finalist Notification:</strong> Selected finalists will be announced</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-body text-text-secondary text-break"><strong>Final Competition:</strong> In-person presentations at ICCI-2025</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-body text-text-secondary text-break"><strong>Award Ceremony:</strong> Winners announced at the conference</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-subheading font-medium text-text-primary mb-4">Final Competition Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-body text-text-secondary text-break"><strong>Mandatory attendance:</strong> Finalists must present in person at the conference</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-body text-text-secondary text-break"><strong>Strict time enforcement:</strong> Presentations exceeding 3 minutes will be stopped</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-body text-text-secondary text-break"><strong>Finalist benefit:</strong> Complimentary one-day conference registration for the 3MT event day </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Criteria Section */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section mb-6 font-semibold text-text-primary">EVALUATION CRITERIA</h2>
            <div className="w-24 h-1 bg-accent mb-6"></div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <p className="text-body text-text-secondary mb-6 text-break">
                Presentations will be evaluated based on the following criteria:
              </p>
              <ul className="space-y-4">
                {evaluationCriteria.map((criterion, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-gradient-to-br from-accent to-primary p-2 rounded-full mr-4 mt-0.5 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-body text-text-secondary text-break font-medium">{criterion}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-body text-text-secondary text-break italic">
                  <strong>Note:</strong> The evaluation committee's decision is final. The committee reserves the right to withhold awards if submissions do not meet the required standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation Guidelines Section */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section mb-6 font-semibold text-text-primary">PRESENTATION GUIDELINES</h2>
            <div className="w-24 h-1 bg-accent mb-6"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-subheading font-medium text-text-primary mb-4">What Makes an Effective 3MT Presentation:</h3>
                <ul className="space-y-2">
                  {presentationGuidelines.effective.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-body text-text-secondary text-break">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-subheading font-medium text-text-primary mb-4">Common Pitfalls to Avoid:</h3>
                <ul className="space-y-2">
                  {presentationGuidelines.pitfalls.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-body text-text-secondary text-break">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section mb-6 font-semibold text-text-primary">AWARDS</h2>
            <div className="w-24 h-1 bg-accent mb-6"></div>
            
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-subheading font-semibold text-text-primary mb-3">First Place</h4>
                  <p className="text-body text-accent font-bold text-lg">Sheild  &<br/> Certificate of Appreciation</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-gradient-to-br from-gray-400 to-gray-600 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-subheading font-semibold text-text-primary mb-3">Second Place</h4>
                  <p className="text-body text-accent font-medium">Certificate of Appreciation</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-subheading font-semibold text-text-primary mb-3">Third Place</h4>
                  <p className="text-body text-accent font-medium">Certificate of Recognition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary p-8 rounded-lg text-white text-center">
              <h2 className="text-section mb-4 font-semibold">Submission</h2>
              <p className="text-body text-white/90 mb-4 text-break">
              Submit your Proposal through the following link:
              </p>
              <a
                href="https://forms.gle/ZFEwn4Cw1xDy3AHz5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 mt-4"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Submit Your Application
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

