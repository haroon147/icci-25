import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import SocialIcons from '../components/SocialIcons';

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
        "+92335546844"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "icci@riphah.edu.pk"
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
      <section className="bg-background-white py-12 border-t">
  <div className="container-custom">
    <h2 className="text-section text-center mb-6 font-semibold text-text-primary">
      Connect With Us on Social Media
    </h2>
    <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>

    <div className="flex items-center justify-center space-x-8">

      {/* Instagram */}
      <a
        href="https://www.instagram.com/riphahsci/"
        target="_blank"
        className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center 
                   hover:scale-110 transition-all duration-300 hover:shadow-xl hover:bg-pink-500 group"
      >
        <svg
          className="h-7 w-7 text-gray-600 group-hover:text-white transition-colors duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 
           2.243 5 5 5h10c2.757 0 5-2.243 
           5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 
           0 3 1.346 3 3v10c0 1.654-1.346 
           3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 
           1.346-3 3-3h10zm-5 3a5 5 0 100 
           10 5 5 0 000-10zm0 2a3 3 0 110 
           6 3 3 0 010-6zm4.5-.25a1.25 1.25 0 
           11-2.5 0 1.25 1.25 0 012.5 0z" />
        </svg>
      </a>

      {/* Facebook */}
      <a
        href="https://web.facebook.com/riphahsci?_rdc=1&_rdr#"
        target="_blank"
        className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center 
                   hover:scale-110 transition-all duration-300 hover:shadow-xl hover:bg-blue-600 group"
      >
        <svg
          className="h-7 w-7 text-gray-600 group-hover:text-white transition-colors duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22 12a10 10 0 10-11.5 9.87v-6.99h-2.3V12h2.3V9.8c0-2.27 
           1.35-3.53 3.42-3.53.99 0 
           2.03.18 2.03.18v2.23h-1.14c-1.12 
           0-1.47.7-1.47 1.42V12h2.5l-.4 
           2.88h-2.1v6.99A10 10 0 0022 12z"/>
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/company/riphahsci/"
        target="_blank"
        className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center 
                   hover:scale-110 transition-all duration-300 hover:shadow-xl hover:bg-blue-500 group"
      >
        <svg
          className="h-7 w-7 text-gray-600 group-hover:text-white transition-colors duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5a2.5 2.5 0 11.02 
            5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zm7 
            0h3.8v1.71h.05c.53-1 1.82-2.06 
            3.75-2.06C21.42 8.65 22 11.26 
            22 14.77V21h-4v-5.22c0-1.25-.02-2.86-1.74-2.86-1.74 
            0-2 1.36-2 2.77V21h-4z"/>
        </svg>
      </a>

    </div>
  </div>
</section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-background-white">
  <div className="container-custom">
    {/* Two Column Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

      {/* LEFT SIDE – MAP + BUTTONS */}
      <div className="space-y-8">
        <h2 className="text-section font-semibold text-text-primary">
          Conference Venue
        </h2>

        <p className="text-body text-text-secondary leading-relaxed">
          ICCI-2025 will be held at Riphah International University, Raiwind Road, Lahore, Pakistan. 
          The venue offers state-of-the-art facilities and is easily accessible.
        </p>

        {/* Map Section */}
        <div className="h-80 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            src="https://maps.google.com/maps?q=Riphah+International+University+Raiwind+Road+Lahore+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Riphah International University Location"
          ></iframe>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <a 
            href="https://www.google.com/maps/search/Riphah+International+University+Raiwind+Road+Lahore+Pakistan"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-primary text-white rounded-xl flex items-center shadow-md hover:bg-primary-dark transition-all"
          >
            <MapPin className="h-5 w-5 mr-2" /> Open in Google Maps
          </a>

          <a 
            href="https://maps.google.com/maps?q=31.377381,74.230755&z=15"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-accent text-white rounded-xl flex items-center shadow-md hover:bg-accent-dark transition-all"
          >
            <MapPin className="h-5 w-5 mr-2" /> View Coordinates
          </a>
        </div>
      </div>

      {/* RIGHT SIDE – VENUE HIGHLIGHTS */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
        <h3 className="text-xl font-semibold text-text-primary mb-6">
          Venue Highlights
        </h3>

        <div className="space-y-8">

          {/* Address */}
          <div>
            <h4 className="font-medium text-text-primary mb-2 text-lg">Address</h4>
            <p className="text-body text-text-secondary leading-relaxed">
              Riphah International University <br />
              Raiwind Road <br />
              Lahore, Pakistan
            </p>
          </div>

          {/* Transportation */}
          <div>
            <h4 className="font-medium text-text-primary mb-2 text-lg">Transportation</h4>
            <ul className="text-body text-text-secondary space-y-1 leading-relaxed">
              <li>• 30 minutes from Lahore Airport</li>
              <li>• Accessible by public transport</li>
              <li>• On-campus parking available</li>
            </ul>
          </div>

          {/* Facilities */}
          <div>
            <h4 className="font-medium text-text-primary mb-2 text-lg">Facilities</h4>
            <ul className="text-body text-text-secondary space-y-1 leading-relaxed">
              <li>• Free Wi-Fi throughout campus</li>
              <li>• Modern auditoriums & conference halls</li>
              <li>• Dining areas & coffee shops</li>
              <li>• Nearby accommodation available</li>
            </ul>
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
                    Registration includes access to  sessions, proceedings and networking events.
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
                    Acceptance notifications will be sent by 30 September 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Social Media Section */}


    </div>
  );
}