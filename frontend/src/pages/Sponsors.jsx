import { Award, Building2, Globe, Star } from 'lucide-react';

// Sponsor data
const sponsors = {
  platinum: [
    {
      name: "TechCorp Solutions",
      logo: "/sponsors/techcorp.png",
      website: "https://techcorp.com",
      description: "Leading technology solutions provider"
    },
    {
      name: "InnovateLab",
      logo: "/sponsors/innovatelab.png", 
      website: "https://innovatelab.com",
      description: "Innovation and research laboratory"
    }
  ],
  gold: [
    {
      name: "DataFlow Systems",
      logo: "/sponsors/dataflow.png",
      website: "https://dataflow.com",
      description: "Data management and analytics"
    },
    {
      name: "CloudTech Inc",
      logo: "/sponsors/cloudtech.png",
      website: "https://cloudtech.com", 
      description: "Cloud computing solutions"
    },
    {
      name: "AI Dynamics",
      logo: "/sponsors/aidynamics.png",
      website: "https://aidynamics.com",
      description: "Artificial intelligence solutions"
    }
  ],
  silver: [
    {
      name: "SecureNet",
      logo: "/sponsors/securenet.png",
      website: "https://securenet.com",
      description: "Cybersecurity solutions"
    },
    {
      name: "DevTools Pro",
      logo: "/sponsors/devtools.png",
      website: "https://devtools.com",
      description: "Development tools and platforms"
    },
    {
      name: "CodeMaster",
      logo: "/sponsors/codemaster.png",
      website: "https://codemaster.com",
      description: "Software development services"
    },
    {
      name: "TechStart",
      logo: "/sponsors/techstart.png",
      website: "https://techstart.com",
      description: "Startup accelerator"
    }
  ],
  bronze: [
    {
      name: "LocalTech",
      logo: "/sponsors/localtech.png",
      website: "https://localtech.com",
      description: "Local technology services"
    },
    {
      name: "StartupHub",
      logo: "/sponsors/startuphub.png",
      website: "https://startuphub.com",
      description: "Startup community platform"
    },
    {
      name: "InnovateNow",
      logo: "/sponsors/innovatenow.png",
      website: "https://innovatenow.com",
      description: "Innovation consulting"
    },
    {
      name: "TechBridge",
      logo: "/sponsors/techbridge.png",
      website: "https://techbridge.com",
      description: "Technology consulting"
    },
    {
      name: "FutureTech",
      logo: "/sponsors/futuretech.png",
      website: "https://futuretech.com",
      description: "Emerging technology solutions"
    },
    {
      name: "DigitalFirst",
      logo: "/sponsors/digitalfirst.png",
      website: "https://digitalfirst.com",
      description: "Digital transformation services"
    }
  ]
};

const SponsorCard = ({ sponsor, tier }) => {
  const tierStyles = {
    platinum: "border-yellow-300 bg-gradient-to-br from-yellow-50 to-yellow-100",
    gold: "border-yellow-400 bg-gradient-to-br from-yellow-50 to-yellow-200", 
    silver: "border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100",
    bronze: "border-amber-300 bg-gradient-to-br from-amber-50 to-amber-100"
  };

  return (
    <div className={`p-6 rounded-lg border-2 ${tierStyles[tier]} hover:shadow-lg transition-all duration-300 hover:scale-105`}>
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-lg shadow-md flex items-center justify-center">
          <Building2 className="h-12 w-12 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{sponsor.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{sponsor.description}</p>
        <a 
          href={sponsor.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          <Globe className="h-4 w-4 mr-1" />
          Visit Website
        </a>
      </div>
    </div>
  );
};

const SponsorTier = ({ title, sponsors, tier, icon: Icon, color }) => (
  <div className="mb-16">
    <div className="text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        <Icon className={`h-8 w-8 ${color} mr-3`} />
        <h2 className="text-3xl font-bold text-gray-800">{title} Sponsors</h2>
      </div>
      <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {sponsors.map((sponsor, index) => (
        <SponsorCard key={index} sponsor={sponsor} tier={tier} />
      ))}
    </div>
  </div>
);

export default function Sponsors() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Sponsors</h1>
          <p className="text-xl text-yellow-100 max-w-3xl">
            Our valued sponsors and partners who make this conference possible
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Sponsors</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are grateful to our sponsors for their generous support. Their contributions help us 
              deliver an exceptional conference experience and advance the field of technology.
            </p>
          </div>

          {sponsors.platinum.length > 0 && (
            <SponsorTier 
              title="Platinum" 
              sponsors={sponsors.platinum} 
              tier="platinum"
              icon={Star}
              color="text-yellow-500"
            />
          )}

          {sponsors.gold.length > 0 && (
            <SponsorTier 
              title="Gold" 
              sponsors={sponsors.gold} 
              tier="gold"
              icon={Award}
              color="text-yellow-600"
            />
          )}

          {sponsors.silver.length > 0 && (
            <SponsorTier 
              title="Silver" 
              sponsors={sponsors.silver} 
              tier="silver"
              icon={Building2}
              color="text-gray-500"
            />
          )}

          {sponsors.bronze.length > 0 && (
            <SponsorTier 
              title="Bronze" 
              sponsors={sponsors.bronze} 
              tier="bronze"
              icon={Building2}
              color="text-amber-600"
            />
          )}

          <div className="text-center mt-16 p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Interested in Sponsoring?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our community of sponsors and showcase your brand to industry leaders, 
              researchers, and technology professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="/registration" 
                className="border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 hover:text-white transition-colors"
              >
                View Packages
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
