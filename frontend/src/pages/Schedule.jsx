import { Calendar, Clock, MapPin, Users, Download } from 'lucide-react';

export default function Schedule() {
  // Function to download schedule as PDF file
  const downloadSchedule = async () => {
    try {
      // Fetch the PDF file from the public folder (encode spaces in filename)
      const pdfPath = encodeURI('/ICCI 2025 Schedule 0.3.pdf');
      const response = await fetch(pdfPath);
      if (!response.ok) {
        throw new Error('Failed to fetch PDF file');
      }
      
      // Convert response to blob
      const blob = await response.blob();
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'ICCI-2025-Conference-Schedule.pdf';
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Failed to download schedule. Please try again later.');
    }
  };
    const day1Sessions = [
      {
        id: 'session1',
        title: 'Opening Session (Physical)',
        venue: 'Auditorium',
        time: '9:00 AM – 12:15 PM',
        events: [
          { time: '9:00-9:30', details: 'Guests to be seated', person: '', affiliation: '' },
          { time: '9:30-9:40', details: 'Recitation from the Holy Quran', person: 'Mr. Abdul Mohsin Nawaz', affiliation: 'RSCI, Riphah International University, Lahore, Pakistan' },
          { time: '9:40-9:45', details: 'National Anthem', person: '', affiliation: '' },
          { time: '9:45-9:50', details: 'RSCI Documentary', person: 'Ms. Saadia Aziz', affiliation: 'RSCI, Riphah International University, Lahore, Pakistan' },
          { time: '9:50-10:00', details: 'Opening Remarks of Conference Chair', person: 'Prof. Dr. Muhammad Asif', affiliation: 'RSCI, Riphah International University, Lahore, Pakistan' },
          { time: '10:00-10:15', details: 'Welcome Note by Director Host Institute RSCI, (Patron-in-Chief)', person: 'Prof. Dr. Sheheryar Malik', affiliation: 'RSCI, Riphah International University, Lahore, Pakistan' },
          { time: '10:15-11:00', details: 'Keynote Speech - Title: The AI Wave', person: 'Dr. Usama Ijaz Bajwa', affiliation: 'COMSATS University Islamabad, Lahore Campus, Pakistan' },
          { time: '11:00-11:30', details: 'Keynote Speech - Title: Entrepreneurial Landscape in Pakistan: Challenges, Opportunities and Future', person: 'Mr. Waqar Azeem', affiliation: 'FC College University, Lahore, Pakistan' },
          { time: '11:30-11:40', details: 'Remarks by Chief Guest', person: 'Mr. Muhammad Umer Farooq', affiliation: 'Regional Director, Riphah International University Lahore, Pakistan' },
          { time: '11:40-12:00', details: 'Souvenir Distribution (Keynote, Chief Guest)', person: '', affiliation: '' },
          { time: '12:00-12:15', details: 'Tea Break and Networking', person: '', affiliation: '' }
        ]
      },
      {
        id: 'session2',
        title: 'Panel Discussion',
        venue: 'Auditorium',
        time: '12:15 PM – 1:30 PM',
        events: [
          { 
            time: '12:15-1:15', 
            details: 'Title: AI and the Future: Opportunities, Challenges, and Threats in Industry & Employment', 
            person: 'Panelists: Prof. Dr. Sheheryar Malik (RSCI), Dr. Kashif Shahzad (PITC, Pakistan), Mr. Kashif Talib (Symtera Technologies, Pakistan), Mr. Waqar Azeem (FC College University, Lahore, Pakistan), Dr. Hamid Turab (COMSATS University Islamabad, Lahore Campus, Pakistan)', 
            affiliation: '' 
          },
          { time: '1:15-1:30', details: 'Souvenir Distribution (Panelist, Workshop Presenters)', person: 'Dr. Muhammad Jasim Saeed, Prof. Dr. Muhammad Asif', affiliation: 'RSCI, Riphah International University, Lahore, Pakistan' },
          { time: '1:30-2:30', details: 'Break', person: '', affiliation: '' }
        ]
      },
      {
        id: 'session3',
        title: 'Invited Talks',
        venue: 'Auditorium',
        time: '2:30 PM – 4:45 PM',
        sessionChair: 'Dr. Muhammad Jasim Saeed',
        events: [
          { time: '2:30-2:55', details: 'Diffusion-Guided Graph Data Augmentation', person: 'Prof. Dr. Arif Mahmood', affiliation: 'Information Technology University (ITU), Lahore, Pakistan' },
          { time: '2:55-3:20', details: 'The Future of Smart Cities: AI, AGI, Cyber Defense, and Drones in Action', person: 'Dr. Innam ullah', affiliation: 'Multimedia University, Malaysia' },
          { time: '3:20-3:45', details: 'Privacy-Driven Applications of Weighted Federated Machine Learning in Energy and Healthcare Systems', person: 'Dr. Adnan Ahmad Khan', affiliation: 'Gachon University, South Korea' },
          { time: '3:45-4:10', details: 'Do LLMs Know They Are Being Tested? Exposing the Safety Illusion in AI Evaluation', person: 'Dr. Nisar Ahmad', affiliation: 'University of Management and Technology, Lahore, Pakistan' },
          { time: '4:10-4:35', details: 'Optimized Energy Load Forecasting Utilizing IoT-Enabled Smart Energy Meters through Transfer Learning', person: 'Dr. Allah Ditta', affiliation: 'The University of Education, Lahore, Pakistan' },
          { time: '4:35-4:45', details: 'Day Closing Remarks', person: 'Dr. Jasim Saeed', affiliation: 'RSCI, Riphah International University, Lahore, Pakistan' }
        ]
      },
      {
        id: 'session4',
        title: 'Workshops',
        venue: 'Various Rooms',
        time: '10:00 AM – 4:00 PM',
        note: 'Each workshop is of 4 hours duration',
        events: [
          { time: '10:00-11:00', details: 'Registration', person: '', affiliation: '' },
          { time: '11:00-1:30', details: 'Workshop 1 (PART-I) – Session 1: Database Modeling, Design, Optimization & Administration (Venue: Room 303-A)', person: 'Mr. Abdul Basit Iqbal, Mr. Asjad Jawad', affiliation: 'I3RL Private Limited, Lahore, Pakistan' },
          { time: '11:00-1:30', details: 'Workshop 2 – Session 1: Digital Forensics Lab: Tracing Evidence in the Age of Cybercrime (Venue: Room 304-A)', person: 'Mr. Sajid Hussain Raza', affiliation: 'RSCI, Riphah International University, Lahore, Pakistan' },
          { time: '11:00-1:30', details: 'Workshop 3 – Session 1: Devops Essentials: Building Block For Modern Engineering (Venue: Room 307-A)', person: 'Mr. Zia ul Murtaza', affiliation: 'RSCI, Riphah International University, Lahore, Pakistan' },
          { time: '11:00-1:30', details: 'Workshop 4 – Session 1: Intelligent Vision Systems: Practical Training in Computer Vision & Pattern Recognition (Venue: Room 308-A)', person: 'Mr. Umair Bin Ahmad, Mr. Omer Aftab', affiliation: 'Lahore Garrison University, Lahore, Pakistan' },
          { time: '11:00-1:30', details: 'Workshop 5 – Session 1: Building AI Agents with AWS & N8N (Venue: Room 305-A)', person: 'Mr. Sumama Zaeem', affiliation: 'Tkxel, Lahore, Pakistan' },
          { time: '1:30-2:30', details: 'Prayer Break', person: '', affiliation: '' },
          { time: '2:30-4:00', details: 'Workshop 1 (PART I) – Session 2: Database Modeling, Design, Optimization & Administration (Venue: Room 303-A)', person: 'Mr. Abdul Basit Iqbal, Mr. Asjad Jawad', affiliation: 'I3RL Private Limited, Lahore, Pakistan' },
          { time: '2:30-4:00', details: 'Workshop 2 – Session 2: Digital Forensics Lab: Tracing Evidence in the Age of Cybercrime (Venue: Room 304-A)', person: 'Mr. Sajid Hussain Raza', affiliation: 'RSCI, Riphah International University, Lahore, Pakistan' },
          { time: '2:30-4:00', details: 'Workshop 3 – Session 2: Devops Essentials: Building Block For Modern Engineering (Venue: Room 307-A)', person: 'Mr. Zia ul murtaza', affiliation: 'RSCI, Riphah International University, Lahore, Pakistan' },
          { time: '2:30-4:00', details: 'Workshop 4 – Session 2: Intelligent Vision Systems: Practical Training in Computer Vision & Pattern Recognition (Venue: Room 308-A)', person: 'Mr. Umair Bin Ahmad, Mr. Omer Aftab', affiliation: 'Lahore Garrison University, Lahore, Pakistan' }
        ]
      }
    ];
  
    const day2Sessions = [
      {
        id: 'session1-day2',
        title: 'Opening Session (Hybrid)',
        venue: 'Conference Room',
        time: '9:00 AM – 10:45 AM',
        events: [
          { time: '9:00-9:45', details: 'Guests to be seated', person: '', affiliation: '' },
          { time: '9:45-9:55', details: 'Recitation from the Holy Quran', person: 'Hafiz Muhammad Rizwan', affiliation: 'RSCI, Riphah International University, Lahore, Pakistan' },
          { time: '9:55-10:00', details: 'National Anthem', person: '', affiliation: '' },
          { time: '10:00-10:00', details: 'Opening Remarks', person: 'Dr. Prof. Muhammad Asif', affiliation: 'RSCI, Riphah International University, Lahore, Pakistan' },
          { time: '10:00-10:45', details: 'Keynote Speech - Title: Energy Efficiency and Security for EdgeAI: Methods and Applications', person: 'Prof. Dr. Muhammad Shafique', affiliation: 'New York University (NYU), Abu Dhabi' }
        ]
      },
      {
        id: 'session2-day2',
        title: 'Invited Talks (Hybrid)',
        venue: 'Conference Room',
        time: '10:45 AM – 1:40 PM',
        sessionChair: 'Prof. Dr. Muhammad Asif',
        events: [
          { time: '10:45-11:10', details: 'Computational Intelligence in Healthcare: Navigating Hope and Hype in Pakistan', person: 'Dr. Azhar Imran', affiliation: 'Beijing University, China' },
          { time: '11:10-11:35', details: 'Energy Efficiency and Security for EdgeAI: Methods and Applications', person: 'Dr. Ayesha Ubaid', affiliation: 'University of Technology Sydney, Australia' },
          { time: '11:35-12:00', details: 'Delivering Private Personalized Content on Edge AI', person: 'Dr. Ghulam Mujtaba', affiliation: 'Regis University in Denver, Colorado, USA' },
          { time: '12:00-12:25', details: 'Beyond Terrestrial: Unveiling 6G Non-Terrestrial Networks', person: 'Dr. Bilal Ahmad', affiliation: 'Middle East Technical University, Ankara, Türkiye' },
          { time: '12:25-12:50', details: 'Medical Image Watermarking in Deep Learning Era: Challenges and Opportunities', person: 'Dr. Atta-ur-Rahman', affiliation: 'Imam Abdulrahman Bin Faisal University (IAU), Dammam, Saudi Arabia' },
          { time: '12:50-1:15', details: 'Post-Quantum Cryptography: Current Status and Emerging Research Directions', person: 'Dr. Safiullah Khan', affiliation: 'Manchester Metropolitan University, United Kingdom' },
          { time: '1:15-1:40', details: 'How Artificial Intelligence Can Transform the Future of Blockchain Systems', person: 'Dr. Khaoula Taji', affiliation: 'Chouaib Doukkali University, EI Jadida, Morocco' },
          { time: '1:40-2:30', details: 'Break', person: '', affiliation: '' }
        ]
      },
      {
        id: 'session3-day2',
        title: 'Invited Talks (Hybrid)',
        venue: 'Conference Room',
        time: '2:30 PM – 4:35 PM',
        sessionChair: 'Dr. Madeeha Fatima',
        events: [
          { time: '2:30-2:55', details: 'From Detection to Containment: Advancing Autonomous, Intelligence-Driven Incident Response in a Hyper-Distributed Threat Landscape', person: 'Dr. Sadaf Hina', affiliation: 'The University of Salford, United Kingdom' },
          { time: '2:55-3:20', details: 'Sepsis Prediction System Empowered with Machine Learning', person: 'Dr. Rizwana Naz Asif', affiliation: 'Ulster University, United Kingdom' },
          { time: '3:20-3:45', details: 'From Language to Lived Experience: Architecting Intelligent Systems with MLLMs and Agentic AI', person: 'Dr. Nouh Sabri Elmitwally', affiliation: 'Birmingham City University, United Kingdom' },
          { time: '3:45-4:10', details: 'Next-Generation Computer Vision: The Promise of Vision Transformers', person: 'Dr. Osama M. Dorgham', affiliation: 'Al-Balqa Applied University, Jordan' },
          { time: '4:10-4:35', details: 'Cybersecurity in the Age of Generative AI – Defender and Attacker Perspectives', person: 'Prof. Dr. Ammar Ali Almomani', affiliation: 'Al-Balqa Applied University, Jordan' }
        ]
      },
      {
        id: 'session4-day2',
        title: 'Invited Talks (Hybrid)',
        venue: 'Board Room',
        time: '2:30 PM – 4:30 PM',
        sessionChair: 'Prof. Dr. Waqar Mehmood',
        events: [
          { time: '2:30-2:50', details: 'Future Networks: Leveraging Information-Centric Architectures for Efficient In-Network Computing', person: 'Dr. Muhammad Imran', affiliation: 'Harbin Institute of Technology, China' },
          { time: '2:50-3:10', details: 'Emotion Recognition through Multi-Modal Fusion and Deep Learning Models: Leveraging Visible, Infrared, and Multispectral Imaging', person: 'Dr. Muhammad Tahir Naseem', affiliation: 'Yeungnam University, South Korea' },
          { time: '3:10-3:30', details: 'Contactless Ultrasound Sensing for Plant Water Status and Early Pest Detection', person: 'Dr. Awais Sattar', affiliation: 'Luleå University of Technology, Sweden' },
          { time: '3:30-3:50', details: 'Role of AI in Aerospace Engineering', person: 'Dr. Muhammad Aamir', affiliation: 'University of Oxford, United Kingdom' },
          { time: '3:50-4:10', details: 'Screening with Sound: An AI Framework for Congenital Heart Disease Diagnosis in Rural Areas of Pakistan', person: 'Dr. Khalil Khan', affiliation: 'Nazarbayev University, Kazakhstan' },
          { time: '4:10-4:30', details: 'Innovations in High-Performance Knowledge Graph Processing', person: 'Dr. Usman Akhtar', affiliation: 'Arden University, Germany' }
        ]
      },
      {
        id: 'session5-day2',
        title: '3MT Competition',
        venue: 'Parallel Session',
        time: '10:00 AM – 4:00 PM',
        note: 'Each presentation is of 3 minutes',
        events: [
          { time: '10:00-1:15', details: '3 Minute Thesis Competition (Session 1)', person: '', affiliation: '' },
          { time: '1:15-1:30', details: 'Souvenir Distribution (Workshop Presenters)', person: '', affiliation: '' },
          { time: '1:30-2:30', details: 'Break', person: '', affiliation: '' },
          { time: '2:30-4:00', details: '3 Minute Thesis Competition (Session 2)', person: '', affiliation: '' }
        ]
      },
      {
        id: 'session6-day2',
        title: 'Workshops',
        venue: 'Various Rooms',
        time: '10:00 AM – 4:00 PM',
        note: 'Each workshop is of 4 hours duration',
        events: [
          { time: '10:00-11:00', details: 'Registration', person: '', affiliation: '' },
          { time: '11:00-1:30', details: 'Workshop 6 – Session 1 (PART-II): Database Modeling, Design, Optimization & Administration (Venue: Room 303-A)', person: 'Mr. Abdul Basit Iqbal, Mr. Asjad Jawad', affiliation: 'I3RL Private Limited, Lahore, Pakistan' },
          { time: '11:00-1:30', details: 'Workshop 7 – Session 1: Internet of Things (IoT) from Architecture to Hands-On Implementation (Venue: Room 308-A)', person: 'Dr. Waqar Azeem, Hassan Sultan', affiliation: 'University of Management & Technology (UMT), Lahore, Pakistan / Lahore Garrison University, Lahore, Pakistan' },
          { time: '11:00-1:30', details: 'Workshop 8 – Session 1: Enterprise Networking & Security Workshop: Layer 2/3, ACLs & VPN Deployment (Venue: Room 304-A)', person: 'Muhammad Shujat Ali, Mumtaz Ahmad', affiliation: 'Cyber Orange Networks (CON) (Pvt) Ltd, Lahore, Pakistan / Lahore Garrison University, Lahore, Pakistan' },
          { time: '11:00-1:30', details: 'Workshop 9 – Session 1: Cloud Solutions Architecting using AWS (Venue: 307-A)', person: 'Dr. Sheheryar Malik', affiliation: 'RSCI, Riphah International University, Lahore, Pakistan' },
          { time: '1:30-2:30', details: 'Prayer Break', person: '', affiliation: '' },
          { time: '2:30-4:00', details: 'Workshop 6 – Session 2 (PART-II): Database Modeling, Design, Optimization & Administration (Venue: Room 303-A)', person: 'Mr. Abdul Basit Iqbal, Mr. Asjad Jawad', affiliation: 'I3RL Private Limited, Lahore, Pakistan' },
          { time: '2:30-4:00', details: 'Workshop 7 – Session 2: Internet of Things (IoT) from Architecture to Hands-On Implementation (Venue: Room 308-A)', person: 'Dr. Waqar Azeem, Hassan Sultan', affiliation: 'University of Management & Technology (UMT), Lahore, Pakistan / Lahore Garrison University, Lahore, Pakistan' },
          { time: '2:30-4:00', details: 'Workshop 8 – Session 2: Enterprise Networking & Security Workshop: Layer 2/3, ACLs & VPN Deployment (Venue: Room 304-A)', person: 'Muhammad Shujat Ali, Mumtaz Ahmad', affiliation: 'Cyber Orange Networks (CON) (Pvt) Ltd, Lahore, Pakistan / Lahore Garrison University, Lahore, Pakistan' },
          { time: '2:30-4:00', details: 'Workshop 9 – Session 2: Cloud Solutions Architecting using AWS (Venue: 307-A)', person: 'Dr. Sheheryar Malik', affiliation: 'RSCI, Riphah International University, Lahore, Pakistan' }
        ]
      },
      {
        id: 'session7-day2',
        title: 'Closing Ceremony',
        venue: 'Auditorium',
        time: '4:00 PM – 5:00 PM',
        events: [
          { time: '4:00-4:10', details: 'Closing Remarks', person: '', affiliation: '' },
          { time: '4:10-4:30', details: 'Certificate Distribution (3MT Winners, Conference Organizers)', person: 'Prof. Dr. Sheheryar Malik', affiliation: '' },
          { time: '4:30-5:00', details: 'Tea and Networking', person: '', affiliation: '' }
        ]
      }
    ];
  
    const ScheduleSection = ({ session }) => (
      <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white">
          <div className="flex flex-wrap items-center gap-4">
            <h3 className="text-2xl font-bold">{session.title}</h3>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{session.venue}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{session.time}</span>
              </div>
              {session.sessionChair && (
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Chair: {session.sessionChair}</span>
                </div>
              )}
            </div>
          </div>
          {session.note && (
            <div className="mt-2 text-sm bg-white/20 px-3 py-1 rounded-full inline-block">
              ⚠️ {session.note}
            </div>
          )}
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 w-32">Time</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Details</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Resource Person</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Affiliation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {session.events.map((event, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-primary whitespace-nowrap">
                    {event.time}
                  </td>
                  <td className="px-6 py-4 text-sm text-text-primary">
                    {event.details}
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">
                    {event.person || '-'}
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">
                    {event.affiliation || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );

  return (
    <div className="bg-background-white">
      {/* Hero Section */}
      <section className="relative text-white section-padding-lg overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://moellim.com/wp-content/uploads/2025/02/Riphah-International-University-Lahore-900x580-1.webp)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-dark/90"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-hero mb-6 font-bold">ICCI 2025 Conference Schedule</h1>
              <div className="flex flex-wrap justify-center items-center gap-6 text-lg mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>Riphah International University, Lahore</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>8-9 December 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>9:00 AM – 5:00 PM</span>
                </div>
              </div>
              <button
                onClick={downloadSchedule}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Download className="h-5 w-5" />
                Download Complete Schedule
              </button>
          </div>
        </div>
      </section>

        {/* Day 1 Schedule */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <div className="bg-primary text-white px-6 py-3 rounded-full text-xl font-bold">
                  DAY 1
          </div>
                <div className="text-2xl font-bold text-text-primary">
                  December 8, 2025
                  </div>
                </div>
              <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto"></div>
            </div>
  
            {day1Sessions.map((session) => (
              <ScheduleSection key={session.id} session={session} />
            ))}
        </div>
      </section>

        {/* Day 2 Schedule */}
        <section className="section-padding bg-background-white">
        <div className="container-custom">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <div className="bg-primary text-white px-6 py-3 rounded-full text-xl font-bold">
                  DAY 2
          </div>
                <div className="text-2xl font-bold text-text-primary">
                  December 9, 2025
                  </div>
                </div>
              <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto"></div>
                </div>
                
            {day2Sessions.map((session) => (
              <ScheduleSection key={session.id} session={session} />
            ))}
          </div>
        </section>
      </div>
    );
}
