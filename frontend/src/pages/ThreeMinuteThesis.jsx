import { Award, FileText, Video, Calendar, CheckCircle, AlertCircle, Mail, ExternalLink } from 'lucide-react';

export default function ThreeMinuteThesis() {
  const objectives = [
    "Develop critical communication skills for effectively conveying complex research to diverse audiences",
    "Enhance public speaking abilities and presentation techniques",
    "Increase visibility and impact of research conducted by emerging scholars",
    "Foster engagement between early-career researchers and the broader research community",
    "Promote clear, concise scientific communication across disciplinary boundaries"
  ];

  const eligibility = [
    "Current PhD students at any stage of their doctoral program",
    "Current Master's (M.Sc.) students conducting substantial research",
    "Recent PhD graduates (within 12 months of degree conferral)",
    "Recent Master's graduates (within 12 months of degree conferral) with significant research contributions"
  ];

  const submissionRequirements = [
    {
      icon: FileText,
      title: "Written Summary (1 page)",
      items: [
        "Clearly outline your research topic, including:",
        "Problem statement and motivation",
        "Research objectives",
        "Methodology",
        "Key contributions and findings",
        "Use the official template (link to be provided)",
        "This summary provides context for the evaluation committee"
      ]
    },
    {
      icon: Video,
      title: "Video Presentation (3 minutes maximum)",
      items: [
        "Duration: Exactly 3 minutes (strictly enforced)",
        "Visual aid: One static slide only",
        "Content requirements:",
        "• Present your research clearly to a general technical audience",
        "• Emphasize the scientific challenge and your specific contributions",
        "• Avoid oversimplification while maintaining accessibility",
        "• Focus on significance and impact, not just topic description"
      ]
    },
    {
      icon: ExternalLink,
      title: "Video Accessibility Requirements",
      items: [
        "Upload to an accessible platform (Dropbox, Google Drive, institutional server, etc.)",
        "Ensure public viewing and downloading access (no login required)",
        "Video will be published on the conference website—verify appropriate sharing permissions"
      ]
    },
    {
      icon: CheckCircle,
      title: "Submission Process",
      items: [
        "Complete the Google Form (https://forms.gle/jLLgb583s8B763Rg8)",
        "The form will require:",
        "• Personal and institutional information",
        "• Upload of one-page summary (PDF)",
        "• Video link with public access",
        "Ensure all required fields are completed before submission",
        "Confirmation email will be sent upon successful submission"
      ]
    }
  ];

  const importantDates = [
    { event: "Submission Deadline (video + summary)", date: "1st February" },
    { event: "Finalists Announced", date: "28th February" },
    { event: "Final Competition at ICMLCN 2026", date: "TBA" },
    { event: "Award Ceremony", date: "TBA" }
  ];

  const awards = [
    { place: "First Place", prize: "$500" },
    { place: "Second Place", prize: "Certificate of Recognition" },
    { place: "Third Place", prize: "Certificate of Recognition" }
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

  const studentProgramChairs = [
    {
      name: "Ali Alfayly",
      affiliation: "Public Authority of Applied Education and Training, Kuwait",
      email: "ah.alfayly@paaet.edu.kw"
    },
    {
      name: "Hamad Yahya",
      affiliation: "Khalifa University, UAE",
      email: "hamad.myahya@ku.ac.ae"
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
            <h1 className="text-hero mb-6 font-bold">THREE-MINUTE THESIS (3MT) COMPETITION</h1>
            <p className="text-body text-white/90 content-container-md text-content-center text-break">
              IEEE ICMLCN 2026 - THREE-MINUTE THESIS (3MT) COMPETITION
            </p>
            <p className="text-lg text-white/80 mt-4 font-medium">
              Call for Participation - Second Edition
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
              Following the success of its inaugural edition, the IEEE International Conference on Machine Learning, Communication, and Networking (ICMLCN 2026) is pleased to announce the second edition of its Three-Minute Thesis (3MT) Competition. This competition challenges doctoral students, master's students, and recent graduates to distill the essence and significance of their research into a compelling three-minute presentation accessible to a broad technical audience.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {submissionRequirements.map((requirement, index) => {
                const Icon = requirement.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary p-3 rounded-full mr-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-subheading font-medium text-text-primary">{requirement.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {requirement.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-body text-text-secondary text-break">{item}</span>
                        </li>
                      ))}
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
                  <span className="text-body text-text-secondary text-break"><strong>Final Competition:</strong> In-person presentations at ICMLCN 2026</span>
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
                  <span className="text-body text-text-secondary text-break"><strong>Finalist benefit:</strong> Complimentary one-day conference registration for the 3MT event day <em>(Note: does not cover paper presentation sessions)</em></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section mb-6 font-semibold text-text-primary">AWARDS</h2>
            <div className="w-24 h-1 bg-accent mb-6"></div>
            
            <div className="mb-8">
              <h3 className="text-subheading font-medium text-text-primary mb-4">Prizes</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {awards.map((award, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-100">
                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Award className={`h-8 w-8 ${index === 0 ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    <h4 className="text-subheading font-medium text-text-primary mb-2">{award.place}</h4>
                    <p className="text-body text-accent font-medium">{award.prize}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-subheading font-medium text-text-primary mb-4">Evaluation Criteria</h3>
              <ul className="space-y-2">
                {evaluationCriteria.map((criterion, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-body text-text-secondary text-break">{criterion}</span>
                  </li>
                ))}
              </ul>
              <p className="text-body text-text-secondary mt-4 text-break italic">
                <strong>Note:</strong> The evaluation committee's decision is final. The committee reserves the right to withhold awards if submissions do not meet the required standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section mb-6 font-semibold text-text-primary">IMPORTANT DATES</h2>
            <div className="w-24 h-1 bg-accent mb-6"></div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-subheading font-medium text-text-primary">Date</th>
                      <th className="text-left py-3 px-4 text-subheading font-medium text-text-primary">Event</th>
                    </tr>
                  </thead>
                  <tbody>
                    {importantDates.map((date, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 px-4 text-body text-text-secondary font-medium">{date.date}</td>
                        <td className="py-3 px-4 text-body text-text-secondary">{date.event}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

      {/* Student Program Chairs Section */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section mb-6 font-semibold text-text-primary">STUDENT PROGRAM CO-CHAIRS</h2>
            <div className="w-24 h-1 bg-accent mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {studentProgramChairs.map((chair, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-subheading font-medium text-text-primary">{chair.name}</h3>
                      <p className="text-small text-text-secondary">{chair.affiliation}</p>
                    </div>
                  </div>
                  <a 
                    href={`mailto:${chair.email}`}
                    className="text-body text-accent hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    {chair.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary p-8 rounded-lg text-white text-center">
              <h2 className="text-section mb-4 font-semibold">CONTACT INFORMATION</h2>
              <p className="text-body text-white/90 mb-4 text-break">
                For inquiries regarding the 3MT competition or Doctoral Forum, please contact the Student Program Co-Chairs at the emails listed above.
              </p>
              <a
                href="https://forms.gle/jLLgb583s8B763Rg8"
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

