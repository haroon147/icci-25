import { Users, CreditCard, Calendar, CheckCircle } from 'lucide-react';

export default function Registration() {
  const registrationTypes = [
    {
      type: "Student",
      price: "$150",
      originalPrice: "$200",
      description: "For full-time students with valid student ID",
      features: [
        "Access to all conference sessions",
        "Conference proceedings (digital)",
        "Networking events and coffee breaks",
        "Welcome reception",
        "Certificate of participation"
      ],
      deadline: "Early Bird: Until Nov 30, 2025"
    },
    {
      type: "Academic",
      price: "$250",
      originalPrice: "$300",
      description: "For faculty members and researchers from academic institutions",
      features: [
        "Access to all conference sessions",
        "Conference proceedings (digital)",
        "Networking events and coffee breaks",
        "Welcome reception and gala dinner",
        "Certificate of participation",
        "Author presentation slots (if paper accepted)"
      ],
      deadline: "Early Bird: Until Nov 30, 2025",
      popular: true
    },
    {
      type: "Industry",
      price: "$350",
      originalPrice: "$400",
      description: "For professionals from industry and corporate organizations",
      features: [
        "Access to all conference sessions",
        "Conference proceedings (digital)",
        "Networking events and coffee breaks",
        "Welcome reception and gala dinner",
        "Certificate of participation",
        "Industry networking sessions",
        "Exhibition area access"
      ],
      deadline: "Early Bird: Until Nov 30, 2025"
    }
  ];

  const paymentMethods = [
    {
      name: "Credit Card",
      description: "Visa, MasterCard, American Express",
      icon: "💳"
    },
    {
      name: "Bank Transfer",
      description: "Wire transfer for international participants",
      icon: "🏦"
    },
    {
      name: "PayPal",
      description: "Secure online payment processing",
      icon: "💻"
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
            <h1 className="text-hero mb-6 font-bold">Registration</h1>
            <p className="text-body text-white/90 max-w-3xl mx-auto">
              Register for ICCI-2025 and join the premier computing and innovation conference. 
              Early bird discounts available until November 30, 2025.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Types */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Registration Packages
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-body text-text-secondary max-w-3xl mx-auto">
              Choose the registration package that best suits your needs. All packages include 
              access to conference sessions and networking opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {registrationTypes.map((pkg, index) => (
              <div key={index} className={`bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 relative ${
                pkg.popular ? 'ring-2 ring-accent' : ''
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-primary px-4 py-2 rounded-full text-small font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-subheading font-medium text-text-primary">{pkg.type}</h3>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-xl text-text-muted line-through ml-2">{pkg.originalPrice}</span>
                    </div>
                    <p className="text-small text-accent font-medium">{pkg.deadline}</p>
                  </div>
                  
                  <p className="text-body text-text-secondary mb-6">{pkg.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-small text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 rounded-lg font-medium transition-colors duration-300 ${
                    pkg.popular 
                      ? 'bg-accent text-primary hover:bg-accent-dark' 
                      : 'bg-primary text-white hover:bg-primary-dark'
                  }`}>
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Registration Process
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Choose Package</h3>
              <p className="text-body text-text-secondary">
                Select the registration package that best fits your profile and needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Fill Details</h3>
              <p className="text-body text-text-secondary">
                Provide your personal information and professional details.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Payment</h3>
              <p className="text-body text-text-secondary">
                Complete payment using our secure payment gateway.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Confirmation</h3>
              <p className="text-body text-text-secondary">
                Receive confirmation email with conference details and materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Payment Methods
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paymentMethods.map((method, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-subheading font-medium text-text-primary mb-2">{method.name}</h3>
                <p className="text-body text-text-secondary">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-section mb-4 font-semibold text-text-primary">
                Important Registration Information
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-subheading font-medium text-text-primary mb-4">Registration Includes</h3>
                <ul className="space-y-3 text-body text-text-secondary">
                  <li>• Access to all technical sessions and keynote presentations</li>
                  <li>• Digital conference proceedings</li>
                  <li>• Coffee breaks and networking sessions</li>
                  <li>• Welcome reception and social events</li>
                  <li>• Conference materials and certificate</li>
                  <li>• Wi-Fi access throughout the venue</li>
                </ul>
              </div>

              <div>
                <h3 className="text-subheading font-medium text-text-primary mb-4">Cancellation Policy</h3>
                <ul className="space-y-3 text-body text-text-secondary">
                  <li>• Cancellation before Nov 30, 2025: 80% refund</li>
                  <li>• Cancellation after Nov 30, 2025: No refund</li>
                  <li>• All cancellations subject to processing fees</li>
                  <li>• Refunds processed within 14 business days</li>
                  <li>• Contact icc@riphah.edu.pk for assistance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary to-primary-dark p-8 rounded-lg text-white text-center">
            <div className="max-w-4xl mx-auto">
              <Calendar className="h-16 w-16 mx-auto mb-6 text-accent" />
              <h2 className="text-section font-semibold mb-4">Ready to Register?</h2>
              <p className="text-body text-white/90 mb-8">
              Don't miss this opportunity to be part of ICCI-2025. Early bird registration 
              is open now with significant discounts available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary bg-accent hover:bg-accent-dark text-primary">
                  Register Now
                </button>
                <button className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
                  Download Registration Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}