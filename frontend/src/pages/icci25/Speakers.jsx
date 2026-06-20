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
    {
      name:"Mr. Waqar Azeem",
      title:"Lead Bussiness Incubation Centre",
      affiliation:"Forman Cristian Univeristy ",
      expertise:"Project Manager, Management Consultant and Business Incubation & Tech Parks ",
      bio:"",
      image:"data:image/jpeg;base64,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",

      
    }
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
      affiliation: "School of IT, Al-Balqa Applied University, Sharjah, UAE",
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
      name:"Dr. Saad",
      title:"Machine learning Engineer",
      affiliation:"EMOTIV, Sydney",
      image:"/invitedSpeaker/dr-saad.jpg"
    }
    ,
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
    {
      name: "Dr. Adnan Ahmad Khan",
      title: "Associate Professor",
      affiliation: "Riphah International University, Lahore",
      image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=Pw_eGvsAAAAJ&citpid=1"
    },
    {
      name: "Dr. Ayesha Ubaid",
      title: "Lecturer Data Analytics and AI",
      affiliation: "University of Technology Sydney, Australia",
      image: "https://profiles.uts.edu.au/Ayesha.Ubaid/thumbnail"
    },
    {
      name: "Dr. Muhammad Tahir Naseem",
      title: "Researcher",
      affiliation: "Yeungnam University, South Korea",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQEBAJEBAJEBYbCwkKDRsIFQ4WIB0iIiAdHx8kKDQsJCYxJx8fLTstMSw3MDBDIys9QD81QTQ5LisBCgoKDg0NFQ4OFTclFxkrKzcrNyszLTctKzcrLTcrKys3LS03KysrLSstNysrKys3KysrLS0rKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYHAgj/xAA9EAABAwIEAwUFBgQGAwAAAAABAAIDBBEFEiExIkFRBhNhcYEyQpGhsQcUI1LB0RVi4fAzQ2NygvEkU1T/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIEAwX/xAAjEQACAgICAgMAAwAAAAAAAAAAAQIRAyESMRNRBCJBMkJx/9oADAMBAAIRAxEAPwDr6EIQAhCEAIQlQCJUKNiNfHTxullcGMiF3OP0HigJBUZ9fEDYyQ5rXyZxdca7bfaCaomOHvmRNPDZ+Qv8SP0WI+9PvfM/X+YqAdx7WduI6UyRR8U7Y/w8g7xrHHquVt7X1135ppHCdwMmwJ9eQ8FSPrXki5fpzJuo9TIeV7/G4Qk21DjQ0mOXizip11/lNvX5KhxPFTNLnda1792NB/ZVRCS1pu42d7QvugOB5/qgLCfEC4kuaG5zrk4RbkAFNwTtC+F9+8mjDf8AD7o5QD4qiLuR1HXdRZHWOyA+hexvbNtZlilb3c+S982kniFr18t4ViMkLw+Nz2lltjZdt7FdvIKsMhmd3dQdAXaNm8j18EINuhCFIBCEIAQhCAEIQgBCEIAQhCAEqEIAJ/7Oi4R9p3a11VO+CN5+707rMDdnke8uj/afjhpaMsYbSV5LQ4aFrfeI+nqvn6eQlxPN3XVQDyCPPwTjPE7bLwwC/mn5G9NuYvdSSI4ab6/G6YDiDbS/XwTx106cxomHtUEnuo1AF7C3mornW2OyeDDzD/RK2mPR2vQXUWTXocgkzW3+qSUBzdhdp4k62FwsdrbJp/O+xPEpshpjcbsu+x9FMimLSCC4EahzdCPFMPy2toT0IskO1wdjoEIPpLsPixq6GGV2rwMsrvzEaXV8sJ9jT74d73DM/Q9fBbtSQCEIQAhCEAIQhACEIQAhCEAqLoR8EBwr7VcbNRWuiabx0AyNaNQTu4/30WClt425FWWLS5qmYk3zyvs7a/EdU9QYV3oOw6XFwqt1stGLk6RTRA301U2OFx3BA8VrMLwNkYBIBcedr2VtHgkbtTG3Xms8vkJM1R+M2tsw9PQlx0HmQNFNhwJziC1unN211tYcFiHu6DlsFMFO1ugy2HJcpfIb6O0cCXZmKLAGe80fHMpbsHjAsGq+bAP71RJT3XF5JM7KEUYquwkC+mngqSowwi4PX5LpE1L1CqquiFjpfxXWGZopPCmc5lgI0PLYrxC3VzSeW61OJ4WLZgLLMTXBI5k77HRbITUkYMmPizq32HYqf/IpTtYSR67ciPousrg/2Pz5cSa3/wCiKQWHlf8ARd4C6HEEIQgBCEIAQhCAEIQgBCEqAEzWzBkUjztFG8nyAJTygY/GHUlU0i4dTycPXhKA+ZpOOS43kde3S61WCwkWuLLLwmzr8zbULX4Tc2/ZcMzpGj462XtOwbK1p4uVwFVROIPmp9ODy587rAz0CwbCPMrx3Lb7DyGq8Q3buXa9V7J10QJA5oGmv0SxkXtYeZSOPU/omJItbgn6qCRyojAvt6BVdWwcrKXLn5lQKgnqpCKuvYMv6FY/Eaa7ja11sa92iyOKu10K14GY/kovPsnaf4rBbk2XMfDKu+riX2NMBr3E7sp35fE3A+i7aFrMQIQhACEIQAhCEAIQhACVIhAKma1maKRv543j5FPJHi4I6goD5mo6YvksB7B2WvoocrdeXTRQ8Gw4xVdVG8cVO8tPxKMfrzHZjLXf7RGpCy5Lk+JrxVGPIt4pW31O3iryllZpe2nM6LmMEk3LMdd23C9zVszbZxP6gtVfCi/mfo6jLPH1bc7JI3NvuLrnuF4n7uZxvydyKuIcRfa/snfXiJXN46OkclmwLB539V4vbW/zWQd2hlDTzsNA7SypJ8fn147fOyLFYllo6FNUC24KoayuZr4FZP8Ais77WdI6/MNtdI6Cc3zB1ydBdXWFfpz8z/DROkDxcbOWWxumLSDbQnVSYKiWFwFnEPOrXDZW2J04fC8gagX62Vorg9ESfOJL+x+EmvDhtFTyd562AXawuT/YlB+JWScgxjR8bn6LrAWoxAhCFIBCEIAQhCAEIQgBCEIBVk+3sr7Qsa9zQ/MXZTk8lrFku2Mf4sbje3dkDzuueX+OjtgSc1Zg8FaXSVTyXOd3gBc45y6wXmuw+xMjhccsuiXAH6zaWJmdceq0EkIkaARo1ZJyaZrjFUZKmfLK/JHG5xvpGDkaP9xUOeslEvdPFG1wc4GndTufqPZF/wCbbw5rVNp5IX5maW6C6n/fXOc2Qw05lZtMIgXfFXjNfpEsb/GUFd2ZkhLS6NozAEOjdnH7gqThuG5iWOzZgOHNorasMsgzSFx6Nc4usmsOjOa5vdx5m+i5ylvR0UdUyOMBMbXOcAQTpms4t6qojwltzlYC5x4XFuf4LXYhFZuhcOove6poWFrhcu09h1yAFClslRRTdo8PmomMc7uGd8wlhMRqi51xwk8tLn0XiliqZInTNbHJHHIQyeFho3vH5gCtdNWSuYI5GskYNmzNE4UaurpXNEbQxjQLBkbMgAXbnGjl45Xdmcp3GbR4N+Tzwk+YU9tEGsLbHi3U+morDbUblLVHT6hceW9HRxVFP2TrpooZI4HCICU98+MWe88rnpZdT7K1r5qcOkJL2OLS87uttdck7NH8SrA6g+Ruuo9izaKVvJkuh8wtMJPnRmnFeK0jRIQELQZAQhCAEIQgBCEIAQhCAVZ3tq38OJ35ZbfELRKr7S0plppAPajGZluoVZq4svjdSTOP4DP+LO3TWRx+a2NEdlkaXDXRVD3ggslF7HQ3WkpJSLDr6rFk7N+O6ote5bvp6r0I2jYW8dk1A6/LVTGxk78uS5/4XK/EDp+yi0ztb8m+im4kQGuta+wUaip9gSPVGiy6HamS7banTdQYtSOoOyuquiIb7th4qndGWOa8bX4rqKCfonQsP9F6MQPRTKctcL8+iJoOe2m4TiyLIBZlHIqnrzurad1vGypMRdwuIFzb2eqmPZEuih7KXMtUfdLNT66Lr3ZGnyUzXc5zmN+mwXK+zWHSN4NpKx9g1vFbzXaaWERsYwbRNAHoFtxq5NmPLKoKI8hCF2MwIQhACEIQAhCEAIQhAC8TszMc0G3eNIv0uF7QjCOY4jhssWr2SCxsXFvDflqmqU39Oi6LjlJ31PIy1zluzzGoXNGG3MhY8sK6N2HJy7Lmjft5q2Y/Tp1VFTSDTw9F6qqk6MB39q2i4RO7Ha54dfLvdVND3mdwLpS7cXdmb5eClAW3I8fFOU7dbi+vNdOPspz9DstVK4BlsvV98yq6fvGue0ySyNvvLbhPgp0Z4jfmfkvHdgG99TyU8UOVFlQzgGxsCeqsKl3DpYrOSa+Z28FJoqwuaWk6je6pJUSnZ4qnenyKqqkqwrel1GoKYzzxxj/NcAT0G5+SjGrZOR1Es+x9K41LHAAtiF3vttougpGsA2AA8BZKt8I8UedOfJ2KEJEquUBCEIAQhCAEIQgBCEIAKEiEAoXO+0+HdxOco4JiXR9Ndx6FdDVJ2xiaaV7jbNCQYidDe9voueSNxOmKVSMbSu21XqpjJNxsFWRT6/psp7Jr/wB3WKqZu7RHndKb5Q2w/O62ZLT1FQNWxtNh/uU17riyjsLmm2tuoKsthUg+8z8oo2k7k3cvDjPt3bQT73she+9fpxONuhUjviRrf/lqpZbkn+EPJLpqx3g3RSaJtiSRa/Ve4ja5PomKmp0vsqvZXVhXyj15LQ9g8O0dUu967Yb9OZ/RYeee56ldF7D1bXUrYweOmJEjdtzcFdcEaZxzydaNEhIlC1mMEoSJQgBCEIAQhCAEIQgBIlSIAQUJuaVrGlz3Ma1m73nIAgHFzj7ScctLDTtPDFI3vbc3H9h9VY4527DSI6Noke51vvEgu1viBzXL+1ckpIqHm96hpcTvvdRJaO2OH9maCVp3G4+aSGsN7EWPQp6nbdoI2Iumqylvrz6hYU10zY16LOlqgd1L7nPsSPLRZVlSWaO9HBWVLiIt7WvI3yqaK2Wv8OG95PO6UxZdze35tVXy4uLEEjUdbpp+LN04m/HMgLCeUbdFS1dTc2C8T19/Z1J9V4giO53TrsdnuJnM81P7IY+IawhxtHI7I8/v6qNMQxrnHZjSSs/2eYJGd4695HuN725rrg22yuRKqZ9CApVy2HtBVUb25CZIJmgiGXjF+YHRbTBO1dNU2bm7qQ/5Ezst/I81qoxuNF+hJdKFBUUIQEIAQhCAEIQUAJCqiu7RwRnI0mV//ri4gPMqlr8Qll0e7Kw7QRaA+Z5pVluNbZZY12mjhu2Md7IOTTZjfM/ssRVV8tYSZnl2Q6RM4GN8gpWLMuy/CAzrwhZabF8htFs08cp5qyR0jG1ou2Ma0PDQLtbqd9ToqPtTRF1FI6x/Cew39VMGdkcjze8725b721KURmWnka4kh4sbqJdHSMPqHZWo7yBvN0Ys5XEkGl1kOy8hhkLTs7QhbqOxGnwXm5NSNUeiinpA7RQZcNeNRYjor6eKxvb0TkLh4IpBxsy/3OT8g+C9x4c872A8AtZ3bd9fJMvYFPMjgU0VEG9SeqlwQcgFIEdz1UlrA0Enly3VJSsuo0ZjthP3cBYNDNp6JnB2sipIrh1zfMdgouPONROGjUNO26v6fDb0wu7Rh0bbVbMCqNnCdctj9NO2SHTeA3s7oqqdjZDpwlh4XN0VjR0ALZGtdq5p4VQYbO7MGvBIb7XIhaaONbuJrcAx6qprd458kXJruNbzC+0EE4uHBp5tcVg6aRr28BBb+UrzNTBvHEcjnbMSjk6k66OqNN9vlqlXL8N7QTwuyuc9p8eJp9FtKDtAHAd6ACffj4gqtNESg0XiF4ila8XaWkdWm6EKGdk7XMLSYo5Cf9ThVTiGKTzAtcXNDx/hs4BZFAwAODWMB92wuirp3udmAvdti1xyrqkjrcU6RS0wMd2kssPfG48/3Ur+Jxhpscz2e6FDxhlszMwL5wAQw5sovqlwqFt3cLeEaXF0dfhZ07bIVZO+QkuvlA2A0AVDT5c1mxuOY+1JxfJbKsfZrjw+z0Wfw8ku5c7aKNkxmqJ9OLwBzgTeU2zcgFcUNjE4WGt9CN1n8WxVlPBG599SdAM5VbSdvYbBhjnAv7ZaHfQqjIv69hLTZJLjnr81psNmzNHUc1WVAD2d43Ubt8WnVLQvLTzt0WDNHZrxu0X0jM3pzTJpr/0UmmNx4HknbWOo36LOdSAIXDmfol7k+inuI+CbuDt/RLIGWR2UDFqgMYddTyU+qqAwdPksziEveOtc26KYrYbPGC01zLIRc5SGnxK0mG2+7AEt9k76KrpRlja1gu6QnbVZrtDj09OGwQ5WkAh8x4z5DkF6eNVGjFN7tmwoqiPvBZ7NfRZjFXuiqZGe6X6Ai+h13VHgmI1DpQXSykkG2Y5he3RaavfmMTza80TSdPeG66r2VU4t6HKeR0ZBB/qpf8WY88XBkGl9QU5OGlsZLW6EfyqBXU7SXkNtsRY2Omqnt7CcXaLvCCyQmSQ6AkMa4XAVzFTM3ZYB2tonaH0VXS0jgxgblcA38Mng0O108yikY0WBuNSWuzKWkVaTdWTJp5Ij+G5wI53yFCzsmKyg2drY++LIUeNF/G1oWfF6iKxsBn91pyp2nq5JW5yXDXbNmSIV6LNfWz1M4Mjc7K0ucRxO4kYTWA57t5btQhVomNOHR5xOt/DdZo297VZ3D64h3ss0CEKKKxrj0NdrPxKZh5s1NuWqxNPES4eaRCq+zk0dD7OzEwmJ97NbwuOuiX7w5hAvtztulQuPyIrRowtlzheIHmeeo2WiiLXAePXRCFgkjRZEqXEEhoBA9Lph85AJLbWHum6EKtE2Z/EMSdI4jLZp0bcqPTxE2FtHkC9rlCFoxpWUk9EjGK3uWmOLQ7SSbnyBWMxeEmSJmvspUL0K0Y+2PYPTltQ0Wv5+SusRnDHsFrhrTbW2l0IVkiYLZdOna5jL5gbDh3Tcs8YfY59hdCFBfHBWy/FS1gAa4gACzHtzgLzVY2yO7Te7ho5hzBCFBWONciOypjcWlxjs4+0/hSIQpYba0mf/2Q=="
    },
    {
      name: "Dr. Awais Sattar",
      title: "Post-Doc Researcher",
      affiliation: "Lulea University of Technology, Sweden",
      image: "data:image/jpeg;base64,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"
    },
    {
      name: "Dr. Khalil Khan",
      title: "Assistant Professor",
      affiliation: "Nazarbayev University, Kazakhstan",
      image: "data:image/jpeg;base64,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"
    },
    {
      name: "Dr. Usman Akhtar",
      title: "Lecturer at Arden University",
      affiliation: "Arden University, Germany",
      image: "data:image/jpeg;base64,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"
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
                className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 p-4 group"
              >
                {/* Circular Avatar */}
                <div className="flex justify-center -mt-2">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";
                    }}
                  />
                </div>

                {/* Content Section */}
                <div className="text-center mt-3">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-accent font-medium mt-2">
                    {speaker.title}
                  </p>
                  <p className="text-sm text-text-secondary mt-1 line-clamp-2">
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