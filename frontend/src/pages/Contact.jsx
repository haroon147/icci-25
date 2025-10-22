import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Riphah International University",
        "Raiwind Road",
        "Lahore, Pakistan"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+92 42 111 747 842",
        "+92 42 352 128 01-10"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@icci2025.org",
        "registration@icci2025.org",
        "submissions@icci2025.org"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
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
            <h1 className="text-hero mb-6 font-bold">Contact Us</h1>
            <p className="text-body text-white/90 max-w-3xl mx-auto">
              Get in touch with the ICCI-2025 organizing committee. We're here to help with 
              any questions about the conference, registration, or submissions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-body text-text-secondary max-w-3xl mx-auto">
              Have questions about ICCI-2025? We're here to help. Contact us through any of the 
              channels below, and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-center">
                    <div className="bg-primary p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-subheading font-medium text-text-primary mb-4">{info.title}</h3>
                    <div className="space-y-2">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-body text-text-secondary">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-section mb-6 font-semibold text-text-primary">
                Send Us a Message
              </h2>
              <p className="text-body text-text-secondary mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-small font-medium text-text-primary mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-small font-medium text-text-primary mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-small font-medium text-text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-small font-medium text-text-primary mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="registration">Registration Inquiry</option>
                    <option value="submission">Paper Submission</option>
                    <option value="technical">Technical Support</option>
                    <option value="general">General Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-small font-medium text-text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 resize-vertical"
                    placeholder="Enter your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div>
              <h2 className="text-section mb-6 font-semibold text-text-primary">
                Conference Venue
              </h2>
              <p className="text-body text-text-secondary mb-8">
                ICCI-2025 will be held at Riphah International University, Raiwind Road Lahore, Pakistan. 
                The venue offers state-of-the-art facilities and is easily accessible.
              </p>

              {/* Interactive Google Map */}
              <div className="h-64 rounded-lg mb-8 overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.1234567890!2d74.2412!3d31.3947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045a1234567%3A0x1234567890abcdef!2sRiphah%20International%20University%20Lahore%20Campus%2C%20Raiwind%20Road%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Riphah International University Location"
                ></iframe>
              </div>
              
              {/* Alternative Map Link */}
              <div className="text-center mb-4">
                <a 
                  href="https://www.google.com/maps/search/Riphah+International+University+Raiwind+Road+Lahore+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Open in Google Maps
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-subheading font-medium text-text-primary mb-4">
                  Venue Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Address</h4>
                  <p className="text-body text-text-secondary">
                    Riphah International University<br />
                    Raiwind Road<br />
                    Lahore, Pakistan
                  </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Transportation</h4>
                    <p className="text-body text-text-secondary">
                      • 30 minutes from Lahore Airport<br />
                      • Accessible by public transport<br />
                      • Parking available on campus
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Facilities</h4>
                    <p className="text-body text-text-secondary">
                      • Free Wi-Fi throughout campus<br />
                      • Modern auditoriums and conference rooms<br />
                      • Dining facilities and coffee shops<br />
                      • Accommodation nearby
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-subheading font-medium text-text-primary mb-4">
                Registration Questions
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-text-primary mb-1">What's included in registration?</h4>
                  <p className="text-small text-text-secondary">
                    Registration includes access to all sessions, proceedings, networking events, and meals.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-1">Can I get a refund?</h4>
                  <p className="text-small text-text-secondary">
                    Yes, refunds are available based on our cancellation policy. Contact us for details.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-subheading font-medium text-text-primary mb-4">
                Submission Questions
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-text-primary mb-1">What's the paper format?</h4>
                  <p className="text-small text-text-secondary">
                    Papers must follow IEEE conference format and be 4-8 pages in length.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-1">When will I know if accepted?</h4>
                  <p className="text-small text-text-secondary">
                    Acceptance notifications will be sent by November 25, 2025.
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