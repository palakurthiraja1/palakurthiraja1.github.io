// src/pages/index.js

import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Sparkles,
  Bot,
  Cpu,
  Brain,
  Code,
  ChevronDown,
  ChevronUp,
  Mail,
  Linkedin,
  Phone,
  MapPin,
} from 'lucide-react';

const AnimatedPortfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);

  const loadingSteps = [
    'Initializing AI systems...',
    'Loading language models...',
    'Generating neural patterns...',
    'Establishing connection...',
    'Welcome!',
  ];

  const contactInfo = {
    email: 'rajakarthik.clg@gmail.com',
    phone: '+91 6300-197-193',
    linkedin: 'linkedin.com/in/palakurthirajakarthik',
    location: 'Hno:1-5-321, Rd no:10, New Maruthi Nagar Kothapet, Hyderabad-60',
  };

  const cards = [
    {
      title: 'Research @ IISc',
      icon: Brain,
      description: 'Project Associate @AirexLab under Prof. Sashikumaar Ganesan',
      details: [
        '• DRDO Radar Project: Advanced signal processing using ML algorithms',
        '• Developing Autonomous Agents with Natural Language and Frozen LLMs',
        '• Teaching Assistant for CCE Courses: NLP course material and tutorials',
        '• Focus on memory-based causal abstractions and goal-oriented learning',
      ],
    },
    {
      title: 'LLM Development',
      icon: Bot,
      description: 'Experience at DRDO and Ulster University',
      details: [
        '• Extensive research on Large Language Models and RAG applications',
        '• Fine-tuning strategies and optimization methods for NLP tasks',
        '• Led team of 4 interns at DRDO for LLM development',
        '• Academic Language Contributor for Telugu at Sanskriti Bench',
      ],
    },
    {
      title: 'Technical Expertise',
      icon: Cpu,
      description: 'Comprehensive tech stack and frameworks',
      details: [
        '• Languages: Python, C, C++, SQL, HTML, CSS, R, JavaScript',
        '• Tools: VS Code, COLAB, AWS, Git, FastAPI, Streamlit, MongoDB',
        '• Frameworks: Huggingface, Transformers, TensorFlow, PyTorch, FAISS',
        '• Skills: Prompt Engineering, NLP, Machine Learning, Deep Learning',
      ],
    },
  ];

  const projects = [
    {
      title: 'RAG Application Development',
      description: 'Full-stack development with FastAPI & Streamlit',
      details: [
        '• Comprehensive system for document upload and chatbot interaction',
        '• Backend: FastAPI, MongoDB for robust data storage',
        '• Frontend: Streamlit for user-friendly interface',
        '• Features: User authentication, session management, error handling',
        '• Optimized conversation management without external dependencies',
        '• Publication in preparation for peer-reviewed journal',
      ],
    },
    {
      title: 'Online Forums Analysis',
      description: 'Advanced NLP analysis of Reddit data',
      details: [
        '• Retrieved and analyzed 200 posts using Reddit API',
        '• Applied NLP techniques: Tokenization, Stemming, Lemmatization',
        '• Conducted sentiment analysis using VADER',
        '• Created visualizations with matplotlib and seaborn',
        '• Implemented post classification based on sentiment scores',
      ],
    },
    {
      title: 'Autism Detection System',
      description: 'Computer Vision and CNN application',
      details: [
        '• Analyzed eye movement data from 250 subjects',
        '• Implemented Computer Vision techniques and CNN',
        '• Achieved 92% accuracy in autism detection',
        '• Developed model for distinguishing autistic patterns',
        '• Focus on practical medical applications',
      ],
    },
  ];

  const education = [
    {
      institution: 'Malla Reddy University',
      degree: 'B.Tech in Computer Science (AI/ML)',
      year: '2024',
      gpa: 'GPA: 8.17',
    },
    {
      institution: 'Sri Chaitanya Jr College',
      degree: 'Intermediate in MPC',
      year: '2020',
      gpa: 'GPA: 9.1',
    },
  ];

  useEffect(() => {
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setLoadingText(loadingSteps[currentStep]);
        currentStep++;
      } else {
        clearInterval(interval);
        setIsLoading(false);
        setTimeout(() => setShowContent(true), 500);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const GradientBackground = () => (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 opacity-20" />
      <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-transparent via-white to-transparent opacity-10" />
    </div>
  );

  const FloatingIcons = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[Bot, Cpu, Brain, Code].map((Icon, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${10 + Math.random() * 5}s infinite`,
            opacity: 0.1,
          }}
        >
          <Icon size={48} />
        </div>
      ))}
    </div>
  );

  const MainContent = () => (
    <div
      className={`transition-opacity duration-1000 ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Contact Bar */}
      <div className="bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto py-2 px-4 flex flex-wrap justify-center gap-4 text-sm">
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-2 text-gray-600 hover:text-purple-600"
          >
            <Mail size={16} />
            {contactInfo.email}
          </a>
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center gap-2 text-gray-600 hover:text-purple-600"
          >
            <Phone size={16} />
            {contactInfo.phone}
          </a>
          <a
            href={`https://${contactInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-purple-600"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <span className="flex items-center gap-2 text-gray-600">
            <MapPin size={16} />
            {contactInfo.location}
          </span>
        </div>
      </div>

      {/* Header Section */}
      <header className="pt-16 pb-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mb-4">
            Raja Karthik
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="text-purple-600" />
            <p className="text-xl text-gray-700">
              AI Researcher & Language Model Specialist
            </p>
            <Sparkles className="text-purple-600" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aspiring researcher specializing in Large Language Models, Machine
            Learning, and Natural Language Processing. Currently contributing to
            cutting-edge projects at India's #1 research institute (IISc).
          </p>
        </div>
      </header>

      {/* Education Section */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Education
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md"
            >
              <h3 className="text-lg font-bold text-purple-600">
                {edu.institution}
              </h3>
              <p className="text-gray-700">{edu.degree}</p>
              <div className="flex justify-between mt-2 text-gray-600">
                <span>{edu.year}</span>
                <span>{edu.gpa}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Cards */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Experience
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() =>
                setExpandedCard(expandedCard === index ? null : index)
              }
            >
              <div className="flex justify-between items-start">
                <card.icon className="w-12 h-12 text-purple-600 mb-4" />
                {expandedCard === index ? (
                  <ChevronUp className="text-purple-600" />
                ) : (
                  <ChevronDown className="text-purple-600" />
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
              {expandedCard === index && (
                <div className="mt-4 space-y-2 text-gray-700">
                  {card.details.map((detail, idx) => (
                    <p key={idx} className="text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Featured Projects
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-md transition-all duration-300 cursor-pointer"
                onClick={() =>
                  setExpandedProject(expandedProject === index ? null : index)
                }
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-purple-600">
                    {project.title}
                  </h3>
                  {expandedProject === index ? (
                    <ChevronUp className="text-purple-600" />
                  ) : (
                    <ChevronDown className="text-purple-600" />
                  )}
                </div>
                <p className="text-gray-600 mt-2">{project.description}</p>
                {expandedProject === index && (
                  <div className="mt-4 space-y-2 text-gray-700">
                    {project.details.map((detail, idx) => (
                      <p key={idx} className="text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Let's Connect
          </h2>
          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300"
          >
            <Terminal className="mr-2" />
            Initialize Connection
          </a>
        </div>
      </footer>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <GradientBackground />
      <FloatingIcons />

      {isLoading ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <Terminal className="w-16 h-16 text-purple-600 animate-pulse mb-4" />
          <div className="text-2xl font-mono text-purple-600">{loadingText}</div>
        </div>
      ) : (
        <MainContent />
      )}
    </div>
  );
};

export default AnimatedPortfolio;
