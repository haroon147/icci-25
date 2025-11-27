import { Mic, Award, Globe, Users } from 'lucide-react';

export default function Speakers() {
  const keynoteSpeakers = [
    {
      name: "Prof. Dr. Muhammad Shafique",
      title: "Global Network Professor at Tandon School of Engineering, New York University, USA",
      affiliation: "New York University (NYU) Abu Dhabi",
      expertise: "Brain-Inspired Computing, AI/ML Hardware, Energy-Efficient Systems, Robust Computing",
      bio:"",
      image: "/committee-members/dr-shaffique.png"
    },
    {
      name: "Dr. Usama Ijaz Bajwa",
      title: "Associate Professor ",
      affiliation: "COMSATS University Islamabad ",
      expertise: "Product and Engineering Manager, AI-enabled healthcare",
      bio:"",
      image: "/committee-members/dr-usama.png"
    },
    // {
    // //   name: "Prof. Dr. Fatima Al-Zahra",
    // //   title: "Head of Cybersecurity Lab",
    // //   affiliation: "University of Cambridge, UK",
    // //   expertise: "Cybersecurity & Privacy",
    // //   bio: "World-renowned expert in cybersecurity with extensive experience in government and industry. Advisor to multiple tech companies.",
    // //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    // // }
  ];

  const invitedSpeakers = [
    {
      name: "Prof. Dr. Ammar Ali Almomani",
      title: "Professor",
      affiliation: "School of IT, Al-Balqa Applied University, Jordan / Higher Colleges of Technology (HCT), Sharjah, UAE",
      image: "/invitedSpeaker/dr-ammar.png"
    },
    {
      name: "Prof. Dr. Arif Mahmood",
      title: "Tenured Professor and Dean, Faculty of Sciences",
      affiliation: "Information Technology University, Lahore, Pakistan",
      image: "/invitedSpeaker/dr-arif.png"
    },
    {
      name: "Prof. Dr. Shafay Shamail",
      title: "Professor",
      affiliation: "Syed Babar Ali School of Science and Engineering, LUMS, Pakistan",
      image: "/invitedSpeaker/dr-shafay.png"
    },
    {
      name: "Dr. Osama M. Dorgham",
      title: "Associate Professor, Dean",
      affiliation: "Prince Abdullah bin Ghazi Faculty of Information and Communication Technology, Al-Balqa Applied University, Jordan",
      image: "/invitedSpeaker/dr-usama.png"
    },
    {
      name: "Dr. Atta-ur-Rahman",
      title: "Associate Professor",
      affiliation: "Department of Computer Science, College of Computer Science and Information Technology, Imam Abdulrahman Bin Faisal University, Dammam, Saudi Arabia",
      image: "/invitedSpeaker/dr-atta.png"
    },
    {
      name: "Dr. Nouh Sabri Elmitwally",
      title: "Assistant Professor",
      affiliation: "School of Computing and Digital Technology, Birmingham City University, Birmingham, UK",
      image: "/invitedSpeaker/dr-nouh.png"
    },
    {
      name: "Dr. Safiullah Khan",
      title: "Lecturer (Assistant Professor)",
      affiliation: "Department of Computing & Mathematics, Manchester Metropolitan University, United Kingdom",
      image: "/invitedSpeaker/dr-safiullah.png"
    },
    {
      name: "Dr. Inam Ullah Khan",
      title: "Post-Doctoral Research Fellow",
      affiliation: "Faculty of Computing and Informatics, Multimedia University, Malaysia",
      image: "/invitedSpeaker/dr-inam.png"
    },
    {
      name: "Dr. Rizwana Naz Asif",
      title: "Computer Lecturer (Assistant Professor)",
      affiliation: "QAHE (Ulster, Solent Southampton and London Metropolitan University), UK",
      image: "/invitedSpeaker/dr-rizwana.png"
    },
    {
      name: "Dr. Muhammad Imran",
      title: "Postdoctoral Researcher",
      affiliation: "School of Information Science and Technology, Harbin Institute of Technology, Shenzhen, China",
      image: "/invitedSpeaker/dr-imran.png"
    },
    {
      name: "Dr. Atif Ali",
      title: "Postdoc AI",
      affiliation: "RMC Multimedia University, Malaysia",
      image: "/invitedSpeaker/dr-atif.png"
    },
    {
      name: "Dr. Ghulam Mujtaba",
      title: "Assistant Professor",
      affiliation: "Regis University, Denver, Colorado, USA",
      image: "/invitedSpeaker/dr-ghulam.png"
    },
    {
      name: "Dr. Azhar Imran Mudassir",
      title: "Assistant Professor",
      affiliation: "Faculty of Computing & Artificial Intelligence (FCAI), Beijing University, China",
      image: "/invitedSpeaker/dr-azhar.png"
    },
    {
      name: "Dr. Bilal Ahmad",
      title: "Assistant Professor",
      affiliation: "Middle East Technical University, Ankara, Türkiye",
      image: "/invitedSpeaker/dr-bilal.jpg"
    },
    {
      name: "Dr Nisar Ahmad",
      title:"Assistant Professor",
      affiliation:"University of Management of Technology",
      image:"/invitedSpeaker/dr-nisar.jpg",
    },

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
            <h1 className="text-hero mb-6 font-bold">Keynote Speakers</h1>
            <p className="text-body text-white/90 max-w-3xl mx-auto">
              Meet the distinguished researchers and industry leaders who will share their insights at ICCI-2025
            </p>
          </div>
        </div>
      </section>

      {/* Keynote Speakers */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Distinguished Keynote Speakers
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-body text-text-secondary max-w-3xl mx-auto">
              Our keynote speakers are internationally recognized experts who will provide 
              insights into the latest developments and future directions in computer science.
            </p>
            <br />
            <br />
      
          </div>

          <div className="space-y-12">
            {keynoteSpeakers.map((speaker, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-48 h-48 rounded-full mx-auto lg:mx-0 object-cover shadow-lg"
                    />
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <Mic className="h-6 w-6 text-accent mr-3" />
                      <h3 className="text-subheading font-medium text-text-primary">{speaker.name}</h3>
                    </div>
                    
                    <p className="text-accent font-medium mb-2">{speaker.title}</p>
                    <p className="text-primary font-medium mb-4">{speaker.affiliation}</p>
                    
                    <div className="mb-4">
                      <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-small font-medium">
                        {speaker.expertise}
                      </span>
                    </div>
                    
                    <p className="text-body text-text-secondary">{speaker.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invited Speakers */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Invited Speakers
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-body text-text-secondary max-w-3xl mx-auto">
              Join us for presentations by leading researchers and practitioners from around the world, 
              covering diverse topics in computing domain.
            </p>
            <br />
         
         
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {invitedSpeakers.map((speaker, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Users className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-text-primary leading-tight group-hover:text-primary transition-colors duration-300">
                      {speaker.name}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-accent leading-relaxed">
                      {speaker.title}
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
                      {speaker.affiliation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Highlights */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Why Our Speakers Matter
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Award-Winning Researchers</h3>
              <p className="text-body text-text-secondary">
                Our speakers include recipients of prestigious awards including the Turing Award, 
                IEEE Fellows, and ACM Distinguished Scientists.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Global Perspective</h3>
              <p className="text-body text-text-secondary">
                Speakers represent leading institutions from around the world, providing 
                diverse perspectives on computer science research and applications.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mic className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Cutting-Edge Topics</h3>
              <p className="text-body text-text-secondary">
                Presentations cover the latest developments in AI, cybersecurity, quantum computing, 
                and other emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}