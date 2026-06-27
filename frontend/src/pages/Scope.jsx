import { Brain, Shield, Database, Cpu, Network, Code, Eye, Users, Lightbulb, Globe, Heart, Zap } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';

export default function Scope() {
  const topics = [
    {
      icon: Brain,
      title: "Artificial Intelligence, Foundation Models and Intelligent Agents",
      description:
        "Foundation Models and Large Language Models (LLMs), Generative AI and Multimodal AI, Agentic AI and Multi-Agent Systems, Explainable and Interpretable AI, Trustworthy and Responsible AI, Reinforcement Learning, Federated Learning, Neuro-Symbolic AI, Prompt Engineering, AI Alignment and Safety, AI Governance and Ethics."
    },
    {
      icon: Database,
      title: "Data Science, Knowledge Engineering and Intelligent Analytics",
      description:
        "Big Data Analytics, Predictive Analytics, Knowledge Graphs, Business Intelligence, Data Engineering, Data Mining, MLOps, AI-driven Decision Support, Real-Time Data Processing, Data Visualization."
    },
    {
      icon: Shield,
      title: "AI for Cybersecurity, Privacy and Digital Trust",
      description:
        "AI-powered Cyber Defense, Digital Forensics, Blockchain Technologies, Smart Contracts, Digital Identity, Zero Trust Security, Privacy-Preserving Machine Learning, Adversarial AI, Threat Intelligence, Secure Cloud Computing."
    },
    {
      icon: Network,
      title: "Intelligent IoT, Robotics and Autonomous Systems",
      description:
        "AIoT, Smart Cities, Industry 5.0, Digital Twins, Edge AI, TinyML, Autonomous Robots, UAV Systems, Predictive Maintenance, Smart Agriculture, Smart Healthcare, Sustainable IoT."
    },
    {
      icon: Code,
      title: "Intelligent Software Engineering, DevOps and Cloud Computing",
      description:
        "AI-assisted Software Engineering, AI-powered Software Testing, DevSecOps, Cloud-native Applications, Microservices, Kubernetes, Multi-cloud Computing, Software Quality, AI for DevOps, Sustainable Software Engineering."
    },
    {
      icon: Eye,
      title: "Computer Vision, Multimedia Intelligence and Extended Reality",
      description:
        "Vision-Language Models, Image and Video Analytics, Medical Image Analysis, Object Detection and Tracking, Autonomous Driving, Remote Sensing, SLAM, AR/VR/MR, Human Activity Recognition, Generative Vision Models."
    },
    {
      icon: Heart,
      title: "Computing for Digital Health, Bioinformatics and Biomedical Innovation",
      description:
        "Biomedical Informatics, Clinical AI, Precision Medicine, Bioinformatics, Genomics, Medical Imaging, Wearable Healthcare, Digital Health, Telemedicine, AI-assisted Diagnosis, Computational Biology, Drug Discovery, Public Health Informatics."
    },
    {
      icon: Users,
      title: "Human-Centered Computing, Digital Society and Intelligent Interaction",
      description:
        "Human-Computer Interaction, Human-AI Collaboration, User Experience (UX), Explainable Interfaces, AI in Education, Intelligent Tutoring Systems, Smart Learning Systems, Smart Governance, Disaster Management, Accessibility Technologies, Human-Centered AI, AI for Social Good, Assistive Technologies, Wearable Computing."
    },
    {
      icon: Lightbulb,
      title: "Digital Innovation, Entrepreneurship and Future Workforce",
      description:
        "AI Startups, Technology Commercialization, Digital Economy, FinTech, GovTech, Innovation Ecosystems, Human-AI Collaboration, Future of Work, AI Business Models, Digital Transformation."
    },
    {
      icon: Globe,
      title: "Sustainable Computing, Green AI and Future Digital Infrastructure",
      description:
        "Green AI, Sustainable Computing, Cloud Computing, High Performance Computing, Quantum Computing, 6G Networks, SDN and NFV, Smart Infrastructure, Energy-efficient Data Centers, Carbon-aware Computing."
    },
    {
      icon: Cpu,
      title: "Emerging Computing Paradigms and Future Technologies",
      description:
        "Quantum Computing and Quantum Machine Learning, Neuromorphic Computing, High Performance Computing (HPC), Distributed and Parallel Computing, Bio-inspired Computing, Evolutionary Computation, Swarm Intelligence, Digital Twins, Ambient Intelligence, Ubiquitous and Pervasive Computing, Space Computing, Next-Generation Internet Architectures, 6G and Beyond Networks."
    },
    {
      icon: Zap,
      title: "Intelligent Information Systems and Knowledge Technologies",
      description:
        "Information Retrieval, Knowledge Representation, Knowledge Graphs, Semantic Web, Digital Libraries, Natural Language Processing, Multilingual AI, Information Extraction, Search Technologies, Question Answering, Recommender Systems, Intelligent Decision Support, Enterprise Knowledge Management."
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
