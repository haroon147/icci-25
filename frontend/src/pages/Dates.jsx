import { Calendar, Clock, AlertCircle, CheckCircle } from 'lucide-react';

export default function Dates() {
  const dates = [
    {
      icon: Calendar,
      title: "Call for Technical Paper / Proposal / PhD Symposia",
      date: "15 September 2025",
      status: "upcoming",
      description: "Last date for submitting technical papers, proposals, and PhD symposium abstracts"
    },
    {
      icon: Clock,
      title: "Notification of Acceptance",
      date: "30 September 2025",
      status: "upcoming",
      description: "Authors will be notified about decisions"
    },
    {
      icon: CheckCircle,
      title: "Camera Ready Submission",
      date: "15 October 2025",
      status: "upcoming",
      description: "Final version must be submitted"
    },
    {
      icon: Calendar,
      title: "Conference Date",
      date: "December 8 – 9, 2025",
      status: "upcoming",
      description: "Two days of Presentations, Workshops, Panel Dicussion amd Dialogue and Networking at Riphah School of Computing & Innovation (RSCI)"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'current':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'passed':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
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
            <h1 className="text-hero mb-6 font-bold">Key Dates</h1>
            <p className="text-body text-white/90 content-container-md text-content-center text-break">
              Important deadlines and milestones for ICCI-2025
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Timeline
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-body text-text-secondary content-container-md text-content-center text-break">
              Mark your calendar with these crucial dates to ensure you don't miss any important deadlines.
            </p>
          </div>

          <div className="space-y-8">
            {dates.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-white p-4 rounded-full shadow-sm border-4 border-background-light">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    
                    <div className="ml-8 flex-1">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-subheading font-medium text-text-primary mb-2 text-break">
                              {item.title}
                            </h3>
                            <p className="text-body text-text-secondary text-break">
                              {item.description}
                            </p>
                          </div>
                          <div className="mt-4 md:mt-0 md:ml-6">
                            <div className="flex items-center">
                              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(item.status)}`}>
                                {item.status === 'upcoming' ? 'Upcoming' : 
                                 item.status === 'current' ? 'Current' : 'Completed'}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-primary">
                          {item.date}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {index < dates.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-8 bg-gray-300"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Registration Timeline */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Registration Timeline
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Early Registration</h3>
              <p className="text-body text-text-secondary mb-4 text-break">
                Register before 15 September 2025 to receive discounted rates and secure your spot.
              </p>
              <div className="text-2xl font-bold text-primary">Until 15 September 2025</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Regular Registration</h3>
              <p className="text-body text-text-secondary mb-4 text-break">
                Standard registration rates apply after the early bird deadline.
              </p>
              <div className="text-2xl font-bold text-primary">Dec 1-7, 2025</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">On-Site Registration</h3>
              <p className="text-body text-text-secondary mb-4 text-break">
                Limited on-site registration available during the conference days.
              </p>
              <div className="text-2xl font-bold text-primary">Dec 8-9, 2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      {/* <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-section mb-6 font-semibold text-text-primary">
              Important Notes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-subheading font-medium text-text-primary mb-4">
                  Submission Guidelines
                </h3>
                <ul className="content-spacing-sm text-body text-text-secondary">
                  <li className="text-break">• All submissions must be in English</li>
                  <li className="text-break">• Papers must follow IEEE conference format</li>
                  <li className="text-break">• Maximum 8 pages for full papers</li>
                  <li className="text-break">• Maximum 4 pages for short papers</li>
                  <li className="text-break">• PDF format only</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-subheading font-medium text-text-primary mb-4">
                  Registration Benefits
                </h3>
                <ul className="content-spacing-sm text-body text-text-secondary">
                  <li className="text-break">• Access to all conference sessions</li>
                  <li className="text-break">• Conference proceedings (digital)</li>
                  <li className="text-break">• Networking events and Tea/Coffee breaks</li>
                  <li className="text-break">• Conference materials and certificate</li>
                  <li className="text-break">• Welcome reception and Lunch</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
