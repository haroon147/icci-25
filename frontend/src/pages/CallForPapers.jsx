import { Link } from 'react-router-dom';
import {
  FileText,
  Mic,
  Users,
  Wrench,
  Clock,
  AlertCircle,
  Calendar,
  CheckCircle,
  CheckCircle2,
  Building2,
  Globe,
  Phone,
  Mail,
  ArrowRight,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';

export default function CallForPapers() {
  const activities = [
    { icon: FileText, title: 'Paper Presentations' },
    { icon: Mic, title: 'Invited Talks' },
    { icon: Users, title: 'Panel Discussions' },
    { icon: Wrench, title: 'Technical Workshops' },
    { icon: Clock, title: '3-Minute Thesis' },
  ];

  const topics = [
    'Artificial Intelligence & Intelligent Computing',
    'NLP & Human Centered AI',
    'Computer Vision and Pattern Recognition',
    'Data Science, Big Data & Analytics',
    'Cybersecurity, Privacy and Digital Trust',
    'Software Engineering, Systems & DevOps',
    'Cloud & Distributed Computing, ICT Infra.',
    'Internet of Things, Robotics & Smart Systems',
    'Biomedical Engineering and Digital Health',
    'Sustainable & Green Computing',
    'Innovation, Entrepreneurship & Emerging Tech.',
  ];

  const importantDates = [
    {
      icon: AlertCircle,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      label: 'Paper Submission',
      sublabel: 'Deadline',
      date: '30 September 2026',
    },
    {
      icon: Calendar,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      label: 'Acceptance',
      sublabel: 'Notification',
      date: '15 October 2026',
    },
    {
      icon: CheckCircle,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      label: 'Camera-Ready',
      sublabel: 'Submission',
      date: '31 October 2026',
    },
    {
      icon: FileText,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      label: 'Conference',
      sublabel: 'Dates',
      date: '8 - 9 December 2026',
    },
  ];

  const technicalCollaborators = [
    { name: 'CRIC', description: 'Center for Research & Innovation in Computing' },
    { name: 'CRIDS', description: 'Center for Research in Intelligent, Distributed & Secure Computing' },
  ];

  const communityPartners = [
    'Skills ScaleUp',
    'CSA Pakistan Alliance',
    'DMI — Data & Machine Intelligence',
    'Systems & Security Research Group',
  ];

  return (
    <div className="bg-background-white">
      {/* Hero Section */}
      <PageHero
        eyebrow="ICCI-2026"
        title="Call for Papers"
        subtitle="Call for Submissions for Papers, Workshops and 3-Minute Thesis — December 8-9, 2026 · Lahore, Pakistan (Hybrid)"
      />

      {/* Introduction */}
      <section className="section-padding bg-background-white">
        <div className="container-custom max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Introduction"
            title="About ICCI-2026"
            className="mb-10 text-center"
          />
          <div className="text-center">
            <p className="text-body text-text-secondary leading-relaxed mb-4">
              ICCI is the flagship and highly prestigious annual conference of Riphah International University, Pakistan. The 2026 edition will be hosted by the Riphah School of Computing &amp; Innovation in Lahore, Pakistan, and conducted in a hybrid format. ICCI 2026 aims to bring together researchers, academicians, practitioners, and industry professionals to share knowledge and engage in meaningful discussions on the latest advancements shaping the future of computing and digital innovation.
            </p>
            <p className="text-body text-text-secondary leading-relaxed mb-4">
              Organized in technical collaboration with the Center for Research &amp; Innovation in Computing (CRIC), and the Center for Research in Intelligent, Distributed &amp; Secure Computing (CRIDS), ICCI 2026 will feature keynote speeches, invited talks, panel discussions, hands-on workshops, and 3-Minute Thesis presentations, each designed to foster research excellence and promote technological innovation.
            </p>
            <p className="text-body text-text-secondary leading-relaxed">
              We welcome participants to join us either in person in Lahore, Pakistan, or virtually from anywhere in the world for an enriching, intellectually stimulating, and impactful experience at ICCI 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Major Activities */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Program"
            title="Major Activities"
            subtitle="ICCI-2026 brings together a full mix of research and networking formats."
            className="text-center mb-12"
          />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 p-6 text-center flex flex-col items-center"
                >
                  <div className="bg-primary p-4 rounded-full mb-4 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <p className="text-base font-medium text-text-primary leading-snug">
                    {activity.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* List of Topics */}
      <section className="section-padding bg-background-white">
        <div className="container-custom max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Topics"
            title="List of Topics"
            subtitle="ICCI-2026 will cover (but not be limited to) the following research and innovation areas:"
            className="text-center mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white rounded-xl shadow-soft p-4"
              >
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-body text-text-secondary text-break">{topic}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/scope" className="btn-secondary inline-flex items-center gap-2">
              View Detailed Scope &amp; Sub-Topics
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Deadlines"
            title="Important Dates"
            className="text-center mb-12"
          />
          <div className="bg-white p-8 rounded-2xl shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {importantDates.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center">
                    <div className={`${item.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`h-8 w-8 ${item.iconColor}`} />
                    </div>
                    <h3 className="text-subheading font-medium text-text-primary mb-2">{item.label}</h3>
                    <p className="text-body text-text-secondary mb-2">{item.sublabel}</p>
                    <p className="text-2xl font-bold text-primary">{item.date}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Organizer & Collaborators */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Partners"
            title="Organizer & Collaborators"
            className="text-center mb-12"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Organizer */}
            <div className="bg-white p-8 rounded-2xl shadow-soft">
              <div className="text-center mb-6">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-subheading font-medium text-text-primary">Organizer</h3>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  Riphah School of Computing &amp; Innovation
                </h4>
                <p className="text-body text-text-secondary">
                  Riphah International University, Lahore, Pakistan
                </p>
              </div>
            </div>

            {/* Technical Collaboration */}
            <div className="bg-white p-8 rounded-2xl shadow-soft">
              <div className="text-center mb-6">
                <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-subheading font-medium text-text-primary">Technical Collaboration</h3>
              </div>
              <div className="space-y-4">
                {technicalCollaborators.map((collab, index) => (
                  <div key={index} className="text-center">
                    <h4 className="text-base font-semibold text-text-primary">{collab.name}</h4>
                    <p className="text-small text-text-secondary">{collab.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Community Partners */}
          <div className="mt-8 bg-white p-8 rounded-2xl shadow-soft">
            <h3 className="text-subheading font-medium text-text-primary text-center mb-6">
              Community Partners
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {communityPartners.map((partner, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-background-light text-text-secondary text-small font-medium border border-gray-100"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Register / Submit CTA */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary to-primary-dark px-8 py-12 rounded-2xl text-white text-center shadow-soft">
            <h2 className="text-section font-semibold mb-4">
              Ready to Be Part of ICCI-2026?
            </h2>
            <p className="text-body text-white/90 content-container-sm text-content-center text-break mb-8">
              Submit your paper, propose a workshop, or register to attend — join us in Lahore or online for ICCI-2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/submissions" className="btn-primary bg-accent hover:bg-accent-dark text-primary inline-flex items-center justify-center gap-2">
                Submit Your Paper
              </Link>
              <Link to="/registration" className="btn-secondary border-white text-white hover:bg-white hover:text-primary inline-flex items-center justify-center gap-2">
                Register Now
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90 text-small">
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" /> +92 333 5546844
              </span>
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" /> icci@riphah.edu.pk
              </span>
              <span className="inline-flex items-center gap-2">
                <Globe className="h-4 w-4" /> icciconference.org
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
