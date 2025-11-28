import { Mic, Award, Globe, Users, Star, Sparkles } from 'lucide-react';

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
      affiliation: "COMSATS University Islamabad, Lahore Campus ",
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
      name:"Dr. Khaoula Taji",
      title: "Assistant Professor",
      affiliation:" Chouaib Doukkali University, El Jadida, Morocco.",
      image:"/invitedSpeaker/dr-khola.png"
    },
    {
      name: "Dr. Nouh Sabri Elmitwally",
      title: "Assistant Professor",
      affiliation: "School of Computing and Digital Technology, Birmingham City University, Birmingham, UK",
      image: "/invitedSpeaker/dr-nouh.png"
    },
    {
      name:"Dr Sadaf Hina",
      title:"Lecturer in Cybersecurity",
      affiliation:" University of Salford, Manchester, UK.",
      image:"https://www.salford.ac.uk/sites/default/files/staff-profiles/1178861.jpeg",
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
      name:"Dr. Muhammad Aamir",
      title:"Senior Research Scientist ",
      affiliation:"Department of Computer Science University of Oxford ",
      image:"/invitedSpeaker/dr-amir.jpg"
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
    {
      name:"Dr Allah Ditta",
      title:"Associate Professor",
      affiliation:"University of Education, Lahore",
      image:"https://i1.rgstatic.net/ii/profile.image/11431281185149765-1693560557532_Q512/Allah-Ditta-9.jpg",
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
      <section className="section-padding bg-gradient-to-br from-background-light via-background-white to-background-light relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 mb-6">
              <Sparkles className="h-6 w-6 text-accent" />
              <span className="text-sm font-bold text-accent uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
                Featured
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 font-bold text-text-primary">
              Distinguished Keynote Speakers
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our keynote speakers are internationally recognized experts who will provide 
              insights into the latest developments and future directions in computer science.
            </p>
            <br />
          </div>

          <div className="space-y-16">
            {keynoteSpeakers.map((speaker, index) => (
              <div 
                key={index} 
                className="relative bg-gradient-to-br from-white to-primary/5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border-2 border-primary/20 hover:border-primary/40 group"
              >
                {/* Premium Badge */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <Star className="h-4 w-4 fill-white" />
                    <span className="text-sm font-bold uppercase tracking-wide">Keynote</span>
                  </div>
                </div>

                {/* Decorative Corner Accent */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-br-3xl"></div>

                <div className="relative p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-center">
                    {/* Enhanced Image Section */}
                    <div className="lg:col-span-1 text-center lg:text-left relative">
                      <div className="relative inline-block">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
                        
                        {/* Image Frame */}
                        <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 p-2 rounded-full">
                          <img 
                            src={speaker.image} 
                            alt={speaker.name}
                            className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover shadow-2xl ring-4 ring-white relative z-10 group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        {/* Decorative Rings */}
                        <div className="absolute -inset-4 border-2 border-primary/30 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Enhanced Content Section */}
                    <div className="lg:col-span-3">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg shadow-lg">
                          <Mic className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                          {speaker.name}
                        </h3>
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-2">
                          <Award className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                          <p className="text-lg font-semibold text-accent leading-relaxed">{speaker.title}</p>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <p className="text-lg font-medium text-primary leading-relaxed">{speaker.affiliation}</p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <span className="bg-gradient-to-r from-accent/20 to-primary/20 text-accent px-6 py-3 rounded-full text-base font-semibold border border-accent/30 inline-block shadow-md">
                          {speaker.expertise}
                        </span>
                      </div>
                      
                      {speaker.bio && (
                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                          <p className="text-base text-text-secondary leading-relaxed">{speaker.bio}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invited Speakers */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl mb-4 font-semibold text-text-primary">
              Invited Speakers
            </h2>
            <div className="w-20 h-1 bg-gray-300 mx-auto mb-6"></div>
            <p className="text-base text-text-secondary max-w-3xl mx-auto">
              Join us for presentations by leading researchers and practitioners from around the world, 
              covering diverse topics in computing domain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {invitedSpeakers.map((speaker, index) => (
    <div
      key={index}
      className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 p-4"
    >
      {/* Circular Avatar */}
      <div className="flex justify-center -mt-2">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-60 h-60 rounded-full object-cover border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";
          }}
        />
      </div>

      {/* Content Section */}
      <div className="text-center mt-3">
        <h3 className="text-base font-semibold text-gray-800">
          {speaker.name}
        </h3>
        <p className="text-xs text-accent font-medium text-indigo-600 mt-1">
          {speaker.title}
        </p>
        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
          {speaker.affiliation}
        </p>
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