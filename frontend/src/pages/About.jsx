import { Target, Eye, Users, Award, BookOpen, Globe } from 'lucide-react';
import { IconConferenceLogo } from '../components/ConferenceLogo';

export default function About() {
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
            <h1 className="text-hero mb-6 font-bold">About ICCI-2025</h1>
            <p className="text-body text-white/90 content-container-md text-content-center text-break">
               International Conference on Computing & Innovation
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-section mb-6 font-semibold text-text-primary">
                About the Conference
              </h2>
              <div className="w-24 h-1 bg-accent mb-8"></div>
              <p className="text-body text-text-secondary mb-6 text-beautiful">
              The International Conference on Computing & Innovation (ICCI-2025) aims to bring together researchers, academicians, practitioners, and industry experts from around the world to exchange knowledge and discuss cutting-edge developments shaping the future of computing and digital innovation. The conference will serve as a platform for interdisciplinary collaboration, knowledge dissemination, and capacity building.
              </p>
              <p className="text-body text-text-secondary mb-6 text-beautiful">
              It will include keynote addresses, technical sessions, panel discussions, Three-Minutes Thesis (3MT) Competition, and hands-on workshops focused on the latest technologies transforming industries, education, and society. The conference will explore how recent advancements are not only redefining computing but also enhancing our daily lives, driving economic growth, and addressing global challenges.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-subheading font-medium mb-6 text-text-primary">
                Conference Highlights
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">Keynote Presentations</h4>
                    <p className="text-body text-text-secondary text-beautiful">Renowned international experts will share visionary insights on emerging trends and future directions in computing and innovation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">Global Participation</h4>
                    <p className="text-body text-text-secondary text-beautiful">Engage with 500+ researchers, practitioners, and industry leaders from around the world for collaboration and knowledge exchange.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">Multiple Thematic Tracks</h4>
                    <p className="text-body text-text-secondary text-beautiful">Comprehensive coverage of diverse computing domains, including AI, Data Science, Cybersecurity, IoT, Software Engineering, and more.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Eye className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">Hands-on Workshops</h4>
                    <p className="text-body text-text-secondary text-beautiful">Interactive sessions offering practical exposure to cutting-edge tools, frameworks, and technologies.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">Panel Discussions &amp; Expert Dialogues</h4>
                    <p className="text-body text-text-secondary text-beautiful">Thought-provoking discussions featuring academic and industry leaders addressing current and future challenges in computing.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Award className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">PhD Symposium &amp; Student Presentations</h4>
                    <p className="text-body text-text-secondary text-beautiful">A dedicated forum for doctoral and early-career researchers to present their work, receive feedback, and network with experts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Our Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-accent mr-3" />
                <h3 className="text-subheading font-medium text-text-primary">Our Mission</h3>
              </div>
              <p className="text-body text-text-secondary text-beautiful">
              To become a global platform that fosters innovation, collaboration, and knowledge exchange in
computing and emerging technologies, empowering communities to build a smarter, inclusive, and
sustainable digital future.              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-accent mr-3" />
                <h3 className="text-subheading font-medium text-text-primary">Our Vision</h3>
              </div>
              <p className="text-body text-text-secondary text-beautiful">
              To bridge academia and industry through interdisciplinary collaboration, fostering innovation,
entrepreneurship, and responsible technological advancement that empowers researchers and
practitioners to drive sustainable digital transformation.              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Objectives */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Conference Objectives
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Interdisciplinary Research</h3>
              <p className="text-body text-text-secondary text-beautiful">
                Promote research across computing domains such as AI, Data Science, IoT, Cybersecurity, and Software Engineering.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Academia-Industry Bridge</h3>
              <p className="text-body text-text-secondary text-beautiful">
                Bridge the gap between academia and industry by facilitating meaningful exchange of ideas and innovative practices.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Knowledge Dissemination</h3>
              <p className="text-body text-text-secondary text-beautiful">
                Disseminate cutting-edge knowledge through keynote sessions, technical papers, and demonstrations of emerging technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Innovation & Entrepreneurship</h3>
              <p className="text-body text-text-secondary text-beautiful">
                Encourage innovation and entrepreneurship by inspiring participants to translate research outcomes into viable products and startups.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Competency Development</h3>
              <p className="text-body text-text-secondary text-beautiful">
                Develop technical and research competencies through workshops, tutorials, and hands-on training on emerging technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Global Collaboration</h3>
              <p className="text-body text-text-secondary text-beautiful">
                Foster global collaboration and networking among researchers, professionals, and institutions across diverse disciplines and regions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Sustainable Growth</h3>
              <p className="text-body text-text-secondary text-beautiful">
                Support sustainable and inclusive technological growth by promoting ethical, green, and socially responsible computing practices.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-subheading font-medium text-text-primary mb-4">Policy Dialogue</h3>
              <p className="text-body text-text-secondary">
                Encourage dialogue between academia, industry, and policymakers to align research and innovation with societal and economic priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organizer & Collaborators */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Organizer & Collaborators
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Organizer */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-center mb-8">
                <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Organizer</h3>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-text-primary mb-2">
                  Riphah School of Computing & Innovation (RSCI)
                </h4>
                <p className="text-text-secondary mb-4">
                  Riphah International University-Lahore Campus, Pakistan
                </p>
                <p className="text-body text-text-secondary">
                  Leading institution in computing education and research, fostering innovation and technological advancement in Pakistan.
                </p>
              </div>
            </div>

            {/* Collaborators */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-center mb-8">
                <div className="bg-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Collaborators</h3>
              </div>
              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-text-primary mb-2">IEEE</h4>
                  <p className="text-text-secondary">Institute of Electrical and Electronics Engineers</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-text-primary mb-2">Software Industry</h4>
                  <p className="text-text-secondary">Industry partners and technology companies</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-text-primary mb-2">AWS Cloud Computing Club</h4>
                  <p className="text-text-secondary">Amazon Web Services community and resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
  <br></br>
    </div>
  );
}
