import { Upload, FileText, CheckCircle, AlertCircle, Calendar, ExternalLink } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';

export default function Submissions() {
  const defaultSubmissionFormUrl = "https://forms.gle/SoyN5JGZqBq5b1sY7";

  const submissionTypes = [
    {
      icon: FileText,
      title: "Technical Papers",
      description: "Original research contributions with complete results and analysis",
      pages: "8-12 pages (full papers)",
      deadline: "15 September 2026",
      formUrl: "https://forms.gle/SoyN5JGZqBq5b1sY7"
    },
    {
      icon: FileText,
      title: " Proposal for Three-Minutes (3MT) Competition ",
      description: "PhD/MS students present their research work in Three-Minutes Thesis (3MT) Competition",
      pages: "Static One Page PowerPoint Slide",
      deadline: "15 September 2026",
      formUrl: "https://forms.gle/ZFEwn4Cw1xDy3AHz5"
    },
   
  ];

  const submissionGuidelines = [
    {
      title: "Paper Format",
      items: [
        "Paper size: A4, single-column layout",
        "Font: Times New Roman, 11–12 pt with 1-inch (2.54 cm) margins on all sides",
        "Maximum 12 pages; full papers should be 8–12 pages",
        "Number all figures, tables, and equations consistently",
        "Use a consistent reference style throughout (IEEE or APA format)"
      ]
    },
    {
      title: "Submission Requirements",
      items: [
        "Double-blind review: do not include author names, affiliations, or self-identifying references",
        "Papers must be original, unpublished, and not under review elsewhere",
        "Submissions must be plagiarism-free and pass a plagiarism check",
        "Camera-ready papers must follow Springer or ACM formatting guidelines",
        "PDF format only; ensure all fonts are embedded"
      ]
    },
    {
      title: "Review Process",
      items: [
        "Double-blind peer review by at least 3 reviewers",
        "Evaluation based on originality, significance, and technical quality",
        "Review decisions: Accept, Minor Revision, Major Revision, Reject",
        "Camera-ready submission deadline: 15 October 2026"
      ]
    }
  ];

  return (
    <div className="bg-background-white">
      {/* Hero Section */}
      <PageHero
        eyebrow="Call for Papers"
        title="Submissions"
        subtitle="Submit your research contributions to ICCI-2026 and be part of our premier academic conference"
      />

      {/* Submission Types */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Submit"
            title="Submission Types"
            subtitle="We welcome different types of submissions to accommodate various stages of research and different presentation formats."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {submissionTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="text-center">
                    <div className="bg-primary p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-subheading font-medium text-text-primary mb-4 text-break">{type.title}</h3>
                    <p className="text-body text-text-secondary mb-6 text-break">{type.description}</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-small text-text-muted">Pages:</span>
                        <span className="text-small font-medium text-primary">{type.pages}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-small text-text-muted">Deadline:</span>
                        <span className="text-small font-medium text-accent">{type.deadline}</span>
                      </div>
                    </div>
                    <a
                      href={type.formUrl || defaultSubmissionFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary bg-accent hover:bg-accent-dark text-primary w-full mt-6 inline-flex items-center justify-center gap-2"
                    >
                      Submit Now
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Submission Guidelines
            </h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-accent to-accent-dark mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {submissionGuidelines.map((section, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-soft">
                <h3 className="text-subheading font-medium text-text-primary mb-6 text-break">{section.title}</h3>
                <ul className="content-spacing-sm">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-body text-text-secondary text-break">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Important Dates
            </h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-accent to-accent-dark mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-subheading font-medium text-text-primary mb-2">Paper Submission</h3>
                <p className="text-body text-text-secondary mb-2">Deadline</p>
                <p className="text-2xl font-bold text-primary">15 September 2026</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-subheading font-medium text-text-primary mb-2">Acceptance</h3>
                <p className="text-body text-text-secondary mb-2">Notification</p>
                <p className="text-2xl font-bold text-primary">Sep 30, 2026</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-subheading font-medium text-text-primary mb-2">Camera-Ready</h3>
                <p className="text-body text-text-secondary mb-2">Submission</p>
                <p className="text-2xl font-bold text-primary">15 October 2026</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-subheading font-medium text-text-primary mb-2">Conference</h3>
                <p className="text-body text-text-secondary mb-2">Dates</p>
                <p className="text-2xl font-bold text-primary">Dec 8-9</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Portal */}
      {/* <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Submissions
            </h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-accent to-accent-dark mx-auto mb-8 rounded-full"></div>
            <p className="text-body text-text-secondary content-container-sm text-content-center text-break mb-8">
              Ready to submit your Research/Proposal/Symposium? Use our online submission system to upload your work 
              and track the review process.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary to-primary-dark p-8 rounded-lg text-white text-center">
            <div className="max-w-2xl mx-auto">
              <Upload className="h-16 w-16 mx-auto mb-6 text-accent" />
              <h3 className="text-subheading font-medium mb-4 text-break">Online Submission Portal</h3>
              <p className="text-body text-white/90 content-container-sm text-content-center text-break mb-8">
                Submit your paper through our secure online system. You'll receive confirmation 
                and can track your submission status throughout the review process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary bg-accent hover:bg-accent-dark text-primary">
                  Submit Paper
                </button>
                <button className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
                  Track Submission
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
