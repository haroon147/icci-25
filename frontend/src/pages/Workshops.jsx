import { Users, CheckCircle, ClipboardList, ExternalLink, AlertCircle, Calendar, Clock } from 'lucide-react';

export default function Workshops() {
  const workshops = [
    { title: "Database Modeling, Design, Optimization & Administration: A Hands-On Masterclass", summary: "Structured approach to modeling data, normalizing schemas, and administrating SQL Server instances with real lab exercises.", day: "Day 1", time: "10:00 AM - 4:00 PM" },
    { title: "Digital Forensics Lab: Tracing Evidence in Cybercrime", summary: "Acquire evidence collection, chain-of-custody, and investigative tooling skills to track digital footprints securely.", day: "Day 1", time: "10:00 AM - 4:00 PM" },
    { title: "Practical DevOps: Automating Deployments with CI/CD", summary: "Implement automated build, test, and deployment pipelines using industry-standard DevOps toolchains.", day: "Day 1", time: "10:00 AM - 4:00 PM" },
    { title: "Intelligent Vision Systems: Practical Training in Computer Vision & Pattern Recognition", summary: "Build CV pipelines for detection, classification, and tracking with OpenCV libraries and annotated datasets.", day: "Day 1", time: "10:00 AM - 4:00 PM" },
    { title: "Enterprise Networking & Security: VLANs, ACLs, NAT & Site-to-Site VPN", summary: "Configure enterprise-grade network topologies, segmentation strategies, and secure remote connectivity.", day: "Day 2" },
    { title: "Innovation, Entrepreneurship & Tech Startups", summary: "Translate ideas into viable ventures with guidance on product-market fit, fundraising, and go-to-market planning.", day: "Day 2" },
    { title: "Internet of Things (IoT): From Architecture to Hands-On Implementation", summary: "Prototype end-to-end IoT stacks covering sensors, connectivity, edge logic, and cloud dashboards.", day: "Day 2" },
    { title: "Cloud Computing Fundamentals and Deployment", summary: "Deploy cloud workloads, manage resources, and apply best practices for scalability and cost optimization.", day: "Day 2" }
  ];

  const objectives = [
    "Gain practical, job-ready skills on the latest tools and technologies.",
    "Work on real-world case studies and live projects.",
    "Learn industry best practices directly from experienced professionals.",
    "Build portfolio-worthy projects during the workshop.",
    "Network with trainers and peers from academia and industry."
  ];

  const eligibility = [
    "Undergraduate/Graduate students.",
    "Anyone with basic knowledge of programming or the relevant domain.",
    "No prior advanced experience required – workshops start from fundamentals and progress to advanced levels."
  ];

  return (
    <div className="bg-background-white">
      {/* Hero Section */}
      <section className="relative text-white section-padding-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://moellim.com/wp-content/uploads/2025/02/Riphah-International-University-Lahore-900x580-1.webp)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-dark/90"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <p className="uppercase tracking-widest text-white/80 text-sm mb-4">Hands-On</p>
            <h1 className="text-hero mb-6 font-bold"> Workshops</h1>
            <p className="text-body text-white/85 content-container-md text-content-center text-break">
              Eight high-demand, hands-on technical workshops conducted by industry experts and senior academicians.
              Each workshop features practical labs, real-world projects, and digital certificates. Limited seats –
              first come, first served.
            </p>

            <br />
            <br />
            <br />
            <div className="flex justify-center mb-6">
            <div className="relative inline-flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-80 blur-lg rounded-full animate-pulseGlow pointer-events-none"></div>
              <span className="relative z-10 text-xl font-semibold text-white bg-accent px-6 py-2 rounded-full shadow-lg animate-floatBadge">
                Free Registration
              </span>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section mb-6 font-semibold text-text-primary">Overview</h2>
            <div className="w-24 h-1 bg-accent mb-6"></div>
            <p className="text-body text-text-secondary mb-6 text-break">
            ICCI-2025 brings you one of the most comprehensive and diverse hands-on workshop series in Pakistan, featuring 8 high-impact, full-day practical workshops that span every major domain of modern computing: Artificial Intelligence & Computer Vision, Data Science, Cybersecurity, IoT & Robotics, DevOps, Cloud Computing, Enterprise Networking, and Digital Forensics.
            <br />
            <br />
            <br/>
            Led by top-tier industry experts and senior academicians with decades of real-world experience, these workshops go far beyond theory. Participants will work on live tools, build complete end-to-end projects, solve industry-relevant challenges, and leave with strong portfolio pieces, practical skills, and internationally recognized digital certificates.
            </p>
          </div>
        </div>
      </section>

      {/* Workshops List */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">List of Workshops</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-body text-text-secondary content-container-md text-content-center text-break">
              Explore the complete line-up of ICCI-2025 hands-on workshops. Seats are limited, so secure your spot early.
            </p>
          </div>

          <div className="space-y-12">
            {/* Day 1 Workshops */}
            <div>
              <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-primary">
                <Calendar className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold text-primary">Day 1 Workshops</h3>
                <div className="ml-auto flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">10:00 AM - 4:00 PM</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {workshops.filter(w => w.day === "Day 1").map((workshop, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-sm border-2 border-primary/20 hover:shadow-lg transition-all duration-300 flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg text-xs font-bold">
                      {workshop.day}
                    </div>
                    <div className="flex items-center gap-4 mb-4 mt-2">
                      <div className="bg-gradient-to-br from-primary to-primary-dark p-3 rounded-full shadow-md">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-accent uppercase tracking-wide">Workshop {workshops.indexOf(workshop) + 1}</span>
                    </div>
                    <h3 className="text-subheading font-semibold text-text-primary mb-3 text-break">{workshop.title}</h3>
                    <p className="text-body text-text-secondary mb-4 text-break">{workshop.summary}</p>
                    <div className="mt-auto space-y-2">
                      <div className="flex items-center gap-2 text-sm text-primary font-medium">
                        <Clock className="h-4 w-4" />
                        <span>{workshop.time}</span>
                      </div>
                      <p className="text-sm text-text-muted">Format: Hands-on labs · Real-world projects · Digital certificate</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 2 Workshops */}
            <div>
              <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-accent">
                <Calendar className="h-6 w-6 text-accent" />
                <h3 className="text-2xl font-bold text-accent">Day 2 Workshops</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {workshops.filter(w => w.day === "Day 2").map((workshop, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-sm border-2 border-accent/20 hover:shadow-lg transition-all duration-300 flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 rounded-bl-lg text-xs font-bold">
                      {workshop.day}
                    </div>
                    <div className="flex items-center gap-4 mb-4 mt-2">
                      <div className="bg-gradient-to-br from-accent to-accent/80 p-3 rounded-full shadow-md">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-accent uppercase tracking-wide">Workshop {workshops.indexOf(workshop) + 1}</span>
                    </div>
                    <h3 className="text-subheading font-semibold text-text-primary mb-3 text-break">{workshop.title}</h3>
                    <p className="text-body text-text-secondary mb-4 text-break">{workshop.summary}</p>
                    <div className="mt-auto">
                      <p className="text-sm text-text-muted">Format: Hands-on labs · Real-world projects · Digital certificate</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section mb-6 font-semibold text-text-primary">Objectives</h2>
            <div className="w-24 h-1 bg-accent mb-6"></div>
            <ul className="space-y-3">
              {objectives.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-body text-text-secondary text-break">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section mb-6 font-semibold text-text-primary">Eligibility / Who Should Attend</h2>
            <div className="w-24 h-1 bg-accent mb-6"></div>
            <ul className="space-y-3">
              {eligibility.map((item, index) => (
                <li key={index} className="flex items-start">
                  <ClipboardList className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-body text-text-secondary text-break">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-section mb-4 font-semibold text-text-primary">Registration</h2>
                <p className="text-body text-text-secondary mb-4 text-break">
                  Reserve your seat today. Limited seats!
                </p>
                <a
                  href="https://forms.gle/xKo1GwKUofU9wGQLA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-300"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Register for Workshops Here
                </a>
              </div>
              <div className="bg-background-light rounded-xl p-6">
                <div className="flex items-start mb-4">
                  
                </div>
                <p className="text-body text-text-secondary mb-2">
                  Each confirmed participant receives:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-body text-text-secondary">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5" />
                    Hands-on lab access & practice material
                  </li>
                  <li className="flex items-start text-body text-text-secondary">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5" />
                    Live project support during the session
                  </li>
                  <li className="flex items-start text-body text-text-secondary">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5" />
                    ICCI-2025 digital certificate
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

