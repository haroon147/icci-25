import { Users } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';

const committees = [
  {
    title: "Patron-in-Chief",
    members: [
      { name: "Prof. Dr. Anis Ahmad", role: "Rector, Riphah International University, Pakistan" }
    ]
  },
  {
    title: "General Chair",
    members: [
      { name: "Prof. Dr. Shahid Zikria", role: "Principal, Riphah School of Computing & Innovation (RSCI), Riphah International University, Lahore, Pakistan" }
    ]
  },
  {
    title: "Conference Chair",
    members: [
      { name: "Dr. Adnan Ahmad Khan", role: "Riphah School of Computing & Innovation (RSCI), Riphah International University, Lahore, Pakistan" }
    ]
  },
  {
    title: "Organizing Committee",
    members: [
      { name: "Dr. Waqas Anwar", role: "Riphah International University, Lahore, Pakistan" },
      { name: "Dr. Muhammad Abuzar Fahiem", role: "Riphah International University, Lahore, Pakistan" },
      { name: "Dr. Muhammad Asim Khan", role: "Riphah International University, Lahore, Pakistan" },
      { name: "Dr. Muhammad Usman", role: "Riphah International University, Lahore, Pakistan" },
      { name: "Dr. Muhammad Shoaib", role: "Riphah International University, Lahore, Pakistan" },
      { name: "Dr. Mushtaq Ahmad", role: "Riphah International University, Lahore, Pakistan" },
      { name: "Ms. Hira Sikander", role: "Riphah International University, Lahore, Pakistan" },
      { name: "Mr. Muhammad Irtiza Khan", role: "Riphah International University, Lahore, Pakistan" },
    ]
  },
  {
    title: "Technical Program Committee",
    members: [
      { name: "Prof. Dr. Ammar Ali Almomani", role: "Al-Balqa Applied University, UAE" },
      { name: "Prof. Dr. Arif Mahmood", role: "Information Technology University, Lahore, Pakistan" },
      { name: "Dr. Osama M. Dorgham", role: "Al-Balqa Applied University, Jordan" },
      { name: "Dr. Atta-ur-Rahman", role: "Imam Abdulrahman Bin Faisal University, Saudi Arabia" },
      { name: "Dr. Khaoula Taji", role: "Chouaib Doukkali University, Morocco" },
      { name: "Dr. Nouh Sabri Elmitwally", role: "Birmingham City University, UK" },
      { name: "Dr. Sadaf Hina", role: "University of Salford, Manchester, UK" },
      { name: "Dr. Safiullah Khan", role: "Manchester Metropolitan University, UK" },
      { name: "Dr. Inam Ullah Khan", role: "Multimedia University, Malaysia" },
      { name: "Dr. Muhammad Aamir", role: "University of Oxford, UK" },
      { name: "Dr. Rizwana Naz Asif", role: "QAHE, UK" },
      { name: "Dr. Muhammad Imran", role: "Harbin Institute of Technology, Shenzhen, China" },
      { name: "Dr. Atif Ali", role: "RMC Multimedia University, Malaysia" },
      { name: "Dr. Ghulam Mujtaba", role: "Regis University, Denver, Colorado, USA" },
      { name: "Dr. Azhar Imran Mudassir", role: "Beijing University, China" },
      { name: "Dr. Bilal Ahmad", role: "Middle East Technical University, Ankara, Türkiye" },
      { name: "Dr. Saad", role: "EMOTIV, Sydney" },
      { name: "Dr. Nisar Ahmad", role: "University of Management of Technology, Pakistan" },
      { name: "Dr. Allah Ditta", role: "University of Education, Lahore, Pakistan" },
      { name: "Dr. Ayesha Ubaid", role: "University of Technology Sydney, Australia" },
      { name: "Dr. Muhammad Tahir Naseem", role: "Yeungnam University, South Korea" },
      { name: "Dr. Awais Sattar", role: "Lulea University of Technology, Sweden" },
      { name: "Dr. Khalil Khan", role: "Nazarbayev University, Kazakhstan" },
      { name: "Dr. Usman Akhtar", role: "Arden University, Germany" },
    ]
  },
  {
    title: "Publicity & Social Media Committee",
    members: [
      { name: "Ms. Hira Sikander", role: "Riphah International University, Lahore, Pakistan" },
      { name: "Mr. Muhammad Irtiza Khan", role: "Riphah International University, Lahore, Pakistan" },
    ]
  },
  {
    title: "Workshop Committee",
    members: [
      { name: "Dr. Muhammad Shoaib", role: "Riphah International University, Lahore, Pakistan" },
      { name: "Dr. Muhammad Asim Khan", role: "Riphah International University, Lahore, Pakistan" },
    ]
  },
  {
    title: "Finance Committee",
    members: [
      { name: "Dr. Mushtaq Ahmad", role: "Riphah International University, Lahore, Pakistan" },
    ]
  },
  {
    title: "Logistics & Venue Committee",
    members: [
      { name: "Dr. Waqas Anwar", role: "Riphah International University, Lahore, Pakistan" },
      { name: "Dr. Muhammad Abuzar Fahiem", role: "Riphah International University, Lahore, Pakistan" },
    ]
  }
];

export default function Committees() {
  return (
    <div className="bg-background-white">
      <PageHero
        eyebrow="ICCI-2026"
        title="Committees"
        subtitle="Meet the dedicated team of academics and professionals organizing ICCI-2026"
      />

      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="space-y-16">
            {committees.map((committee, idx) => (
              <div key={idx}>
                <SectionHeading
                  title={committee.title}
                  className="mb-8"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {committee.members.map((member, mIdx) => (
                    <div key={mIdx} className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="bg-primary p-3 rounded-full flex-shrink-0 mr-4">
                          <Users className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-text-primary mb-1 text-break">{member.name}</h4>
                          <p className="text-small text-text-secondary text-break">{member.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
