import { Brain, MessageSquare, Eye, Database, Shield, Code, Cloud, Cpu, Heart, Leaf, Lightbulb, Zap } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';

export default function Scope() {
  const topics = [
    {
      icon: Brain,
      title: "Artificial Intelligence and Intelligent Computing",
      description:
        "Machine Learning and Deep Learning, Generative AI and Agentic AI, Explainable and Responsible AI, Reinforcement Learning, Intelligent Decision Support Systems, Knowledge Representation and Reasoning, AI Applications."
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing and Human-Centered AI",
      description:
        "Large Language Models (LLMs), Natural Language Processing, Conversational AI and Chatbots, Human-AI Interaction, AI Ethics, Fairness, and Transparency, Affective Computing."
    },
    {
      icon: Eye,
      title: "Computer Vision and Pattern Recognition",
      description:
        "Image and Video Processing, Object Detection and Tracking, Medical Image Analysis, Biometrics, Augmented, Virtual, and Mixed Reality, Autonomous Vision Systems."
    },
    {
      icon: Database,
      title: "Data Science, Big Data and Analytics",
      description:
        "Data Mining, Big Data Analytics, Data Engineering, Predictive Analytics, Business Intelligence, Data Visualization."
    },
    {
      icon: Shield,
      title: "Cybersecurity, Privacy and Digital Trust",
      description:
        "Network Security, Blockchain Technologies, Digital Forensics, Privacy-Preserving Computing, Cryptography, Secure AI, Digital Identity."
    },
    {
      icon: Code,
      title: "Software Engineering, Systems and DevOps",
      description:
        "Software Architecture, DevOps and CI/CD, Software Testing and Quality Assurance, Requirements Engineering, Human-Computer Interaction, Operating Systems, High-Performance Computing, Programming Languages."
    },
    {
      icon: Cloud,
      title: "Cloud, Edge, Distributed Computing and ICT Infrastructure",
      description:
        "Cloud Computing, Edge and Fog Computing, Distributed Systems, Blockchain Technologies, Software-Defined Networking, Network Function Virtualization, Cloud Security, Smart Infrastructure."
    },
    {
      icon: Cpu,
      title: "Internet of Things, Robotics and Smart Systems",
      description:
        "Internet of Things, Industrial IoT, Smart Cities, Robotics, Autonomous Systems, Embedded Systems, Smart Manufacturing."
    },
    {
      icon: Heart,
      title: "Biomedical Engineering and Digital Health",
      description:
        "AI in Healthcare, Medical Imaging and Image Analysis, Biomedical Signal Processing, Clinical Decision Support Systems, Health Informatics and Electronic Health Records, Wearable and Remote Healthcare Technologies, Telemedicine and e-Health, Precision and Personalized Medicine, Digital Therapeutics, Healthcare Data Analytics."
    },
    {
      icon: Leaf,
      title: "Sustainable and Green Computing",
      description:
        "Green Computing, Energy-Efficient Computing, Sustainable Software Engineering, Green Data Centers, Carbon-Aware Computing, Circular Digital Economy, AI for Social Good, Educational Technologies, Humanitarian Technologies, Disaster Management Systems."
    },
    {
      icon: Lightbulb,
      title: "Innovation and Entrepreneurship",
      description:
        "Digital Transformation, Technology Innovation, Entrepreneurship, Startups, Technology Commercialization, FinTech, Digital Business Models, Assistive Technologies."
    },
    {
      icon: Zap,
      title: "Emerging Computing Technologies",
      description:
        "Quantum Computing, Neuromorphic Computing, Digital Twins, Web3, Metaverse, Bio-inspired Computing, Future Internet, Next-Generation Computing Paradigms."
    }
  ];

  return (
    <div className="bg-background-white">
      {/* Hero Section */}
      <PageHero
        eyebrow="Scope & Topics"
        title="Scope & Topics"
        subtitle="Explore the comprehensive range of computing and innovation topics covered at ICCI-2026"
      />

      {/* Conference Theme */}
      <section className="section-padding bg-background-white">
        <div className="container-custom max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Theme"
            title="Conference Theme"
            className="mb-10 text-center"
          />
          <div className="bg-gradient-to-r from-primary to-primary-dark px-10 py-10 rounded-2xl text-white text-center mb-10 shadow-soft">
            <p className="text-xl md:text-2xl font-semibold italic leading-relaxed">
              "Beyond Intelligence: AI for Sustainable Innovation, Human Empowerment, and Global Impact"
            </p>
          </div>
          <div className="text-center">
            <p className="text-body text-text-secondary leading-relaxed mb-4">
              The rapid evolution of Artificial Intelligence is reshaping every aspect of society—from healthcare and education to manufacturing, cybersecurity, finance, agriculture, and public services. ICCI-2026 aims to provide an international platform for discussing how AI and intelligent computing can drive sustainable innovation, foster economic growth, enhance human well-being, and address global challenges responsibly.
            </p>
            <p className="text-body text-text-secondary leading-relaxed">
              The conference encourages interdisciplinary research that bridges theoretical advances with practical applications while promoting ethical, transparent, secure, and human-centered AI technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Overview */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Topics"
            title="Research Topics"
            subtitle="The ICCI-2026 will cover (but not be limited to) the following research and innovation areas:"
            className="text-center mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col h-full"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary p-3 rounded-xl flex-shrink-0">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary leading-snug">
                      {topic.title}
                    </h3>
                  </div>
                  <div className="w-full h-px bg-gray-100 mb-4" />
                  <p className="text-base text-text-secondary leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
