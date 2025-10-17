import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Play,
  Calendar,
  Users,
  Star,
  Lightbulb,
  AlertTriangle,
  TrendingUp,
  Code,
  Eye,
  Heart,
  Target,
  Zap,
  Award,
  Coffee,
  BookOpen
} from 'lucide-react';

const ProjectDetails = ({ project, onBack, isDark }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!project) return null;

  // Extended project data with details
  const getProjectDetails = (projectId) => {
    const projectDetailsMap = {
      3: { // AtlasWay
        briefDescription: " AtlasWay is a responsive web application designed to streamline the travel booking experience. It allows users to explore available travel packages, securely book their preferred tours, and manage their reservations. Admins or providers can view and manage bookings, while users can confirm or cancel them.",
        challenges: [
         "🔍 Implementing real-time search and filtering for thousands of travel packages",
  "💳 Integrating secure payment gateways for bookings and cancellations",
  "👥 Building a robust user authentication system with traveler and admin roles",
  "📱 Designing a fully responsive interface for seamless use on all devices",
  "🌐 Managing large media uploads for destinations, hotels, and tour galleries",
  "⚡ Optimizing database queries for fast loading of popular and seasonal travel packages"
        ],
        improvements: [
          "🤖 AI-powered travel recommendations based on user preferences",
  "🌍 Geolocation-based discovery of nearby attractions and tour packages",
  "📧 Automated notifications for booking confirmations and travel reminders",
  "💬 Real-time chat system between travelers and support agents",
  "📊 Analytics dashboard for admins to track bookings and popular destinations",
  "🌱 Community forum for sharing travel experiences and tips",
  "📱 Mobile app development for iOS and Android to manage trips on-the-go",
  "🔔 Push notifications for new packages, deals, and seasonal promotions"
        ],
        developmentTime: "15 Days",
        teamSize: "Solo Project",
        userBase: "50K+ users",
        techHighlights: [
          "React 18 with Hooks and Context API",
          "Node.js with Express.js backend",
          "MongoDB",
          "Firebase Authentication",
          
        ]
      },
      2: { // HobbyHub
        briefDescription: "HobbyHub is a web application where users can discover, create, and join hobby-based groups in their local area. Whether it's painting, hiking, cooking, coding, or any other interest — HobbyHub connects people who share the same passion.",
        challenges: [
          "🎨 Designing an intuitive platform for hobby group creation and management",
  "👥 Implementing role-based access control (Group Admin, Member, Guest)",
  "💳 Integrating secure payment options for group memberships or event fees",
  "🗺️ Adding interactive maps for discovering local hobby groups and events",
  "⚡ Real-time updates for group activities, event registrations, and notifications",
  "🔐 Ensuring secure authentication and user data protection across the platform"
        ],
        improvements: [
           "📱 Mobile-friendly interface for easy access to groups and events",
  "🤖 AI-driven recommendations for hobby groups and activities",
  "📊 Dashboard for tracking group participation and member engagement",
  "🏆 Event and challenge management within hobby communities",
  "👥 Social features for networking, discussions, and collaboration",
  "💬 In-app messaging to connect with group members",
  "🔔 Notifications and reminders for upcoming events and group activities",
  "🌐 Multi-language support to welcome a diverse user base"
        ],
        developmentTime: "1 months",
        teamSize: "Solo Project",
        userBase: "1K+ active members",
        techHighlights: [
          "React.js with modern hooks",
          "Express.js RESTful API",
          "MongoDB",
          
        ]
      },
      4: { // Insuroo
        briefDescription: "This project is a modern Life Insurance Management Platform built using the MERN stack (MongoDB, Express.js, React, Node.js) designed to streamline the process of purchasing and managing life insurance policies. The platform supports multiple user roles with distinct privileges, offers personalized quote estimations, integrates secure payments, and provides a user-friendly interface for all stakeholders.",
        challenges: [
        "📊 Designing intuitive dashboards for policy tracking and analytics",
  "🔔 Implementing automated reminders for premium payments and policy renewals",
  "💾 Efficiently managing large-scale policyholder and application data",
  "📱 Ensuring responsive and user-friendly design across devices",
  "🔒 Securing sensitive personal and financial information with best practices",
  "⚡ Optimizing system performance for real-time policy and claim calculations"

        ],
        improvements: [
         "🤖 AI-powered risk assessment and premium prediction",
  "📊 Advanced analytics for claim trends and policy performance",
  "🔔 Smart notifications for premium due dates and policy updates",
  "💳 Seamless integration with secure online payment gateways",
  "📱 Progressive Web App (PWA) support for mobile accessibility",
  "📈 Investment-linked policy tracking and financial goal insights",
  "🌐 Multi-currency and region support for global policyholders",
  "👥 Family coverage management and dependent linking features"
        ],
        developmentTime: "2 months",
        teamSize: "Solo Project",
        userBase: "1K+ users",
        techHighlights: [
          "Full MERN stack implementation",
          "Tailwind CSS for modern styling",
          "MongoDB",
          "Stripe Payment method"
        ]
      },
      1: { // Readly
        briefDescription: "It is a Subscription Box Service Platform designed for book lovers. Users can browse, subscribe to, and manage monthly book subscription boxes tailored to their reading preferences. Each box is curated with selected books, providing a personalized experience that encourages discovery and excitement each month.",
        challenges: [
         "📦 Building a dynamic subscription system with customizable box options",
  "💳 Integrating secure online payment and subscription renewal systems",
  "🎁 Managing product inventory and availability across multiple categories",
  "📱 Designing a seamless mobile-first shopping experience",
  "⚡ Implementing real-time order tracking and status updates",
  "🔐 Ensuring user data privacy and secure authentication"
        ],
        improvements: [
         "🤖 AI-powered product recommendation based on user preferences",
  "📦 Dynamic box customization with seasonal and themed options",
  "📊 Advanced analytics dashboard for tracking orders and preferences",
  "💬 In-app chat support and community discussions for subscribers",
  "🏷️ Loyalty rewards system for long-term subscribers",
        ],
        developmentTime: "1 months",
        teamSize: "Solo Project",
        userBase: "3K+ users",
        techHighlights: [
          "React with Firebase integration",
          "Firebase for real-time updates",
          "MongoDB"
        ]
      }
    };

    return projectDetailsMap[projectId] || {
      briefDescription: "An innovative project built with modern technologies and best practices.",
      challenges: [
        "Building a scalable and maintainable architecture",
        "Implementing responsive design across all devices",
        "Optimizing performance for the best user experience"
      ],
      improvements: [
        "Adding new features based on user feedback",
        "Improving performance and loading times",
        "Expanding to mobile platforms"
      ],
      developmentTime: "2-3 months",
      teamSize: "Solo Project",
      userBase: "Growing",
      techHighlights: project.techStack
    };
  };

  const details = getProjectDetails(project.id);

  const sections = [
    { id: 'overview', label: 'Overview', icon: <Eye className="w-4 h-4" /> },
    { id: 'challenges', label: 'Challenges', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'improvements', label: 'Future Plans', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'tech', label: 'Tech Stack', icon: <Code className="w-4 h-4" /> }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'} transition-all duration-500`}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/6 w-96 h-96 ${isDark ? 'bg-gradient-to-r from-cyan-600/10 to-cyan-600/10' : 'bg-gradient-to-r from-blue-400/20 to-cyan-400/20'} rounded-full blur-3xl animate-pulse`} />
        <div className={`absolute bottom-1/3 right-1/6 w-80 h-80 ${isDark ? 'bg-gradient-to-r from-rose-600/10 to-pink-600/10' : 'bg-gradient-to-r from-cyan-400/20 to-pink-400/20'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="sticky top-0 z-20 backdrop-blur-xl border-b border-gray-700/50 bg-black/10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={onBack}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-800/50 hover:bg-gray-700/50 text-white border border-gray-700 hover:border-gray-600'
                    : 'bg-white/20 hover:bg-white/30 text-gray-900 border border-white/30 hover:border-white/50'
                } backdrop-blur-sm group`}
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                <span>Back to Projects</span>
              </button>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-cyan-800 text-white rounded-lg font-medium hover:from-cyan-800 hover:to-cyan-400 transition-all duration-300 group"
                >
                  <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Live Demo</span>
                </button>
                <button
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  className={`px-4 py-2 ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} rounded-lg font-medium transition-all duration-300 group`}
                >
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </button>
                
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Project Hero */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Project Image */}
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                {!imageError ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-200 to-gray-300'}`}>
                    <div className="text-center">
                      <Code className={`w-16 h-16 ${isDark ? 'text-gray-600' : 'text-gray-400'} mx-auto mb-4`} />
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Project Preview</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className={`text-center p-4 rounded-xl ${isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/80 border-gray-200/50'} backdrop-blur-sm border`}>
                  <Calendar className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Duration</div>
                  <div className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{details.developmentTime}</div>
                </div>
                <div className={`text-center p-4 rounded-xl ${isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/80 border-gray-200/50'} backdrop-blur-sm border`}>
                  <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Team</div>
                  <div className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{details.teamSize}</div>
                </div>
                <div className={`text-center p-4 rounded-xl ${isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/80 border-gray-200/50'} backdrop-blur-sm border`}>
                  <Heart className="w-6 h-6 text-rose-500 mx-auto mb-2" />
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Users</div>
                  <div className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{details.userBase}</div>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-sm font-bold rounded-full">
                    {project.status === 'featured' ? 'FEATURED' : project.status.toUpperCase()}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${isDark ? 'bg-gray-800/80 text-gray-300' : 'bg-white/80 text-gray-700'} backdrop-blur-sm`}>
                    {project.category}
                  </span>
                </div>

                <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h1>

                <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-6`}>
                  {project.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'} flex items-center space-x-2`}>
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>Key Features</span>
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {project.features.slice(0, 5).map((feature, index) => (
                    <div key={index} className={`flex items-start space-x-3 p-3 rounded-lg ${isDark ? 'bg-gray-800/30' : 'bg-white/30'} backdrop-blur-sm`}>
                      <Zap className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Highlights */}
              <div>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'} flex items-center space-x-2`}>
                  <Award className="w-5 h-5 text-purple-400" />
                  <span>Achievements</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className={`px-4 py-2 rounded-lg ${isDark ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300' : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700'} backdrop-blur-sm border ${isDark ? 'border-blue-500/30' : 'border-blue-400/30'}`}>
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section Navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-cyan-500 to-cyan-800 text-white shadow-lg'
                    : isDark
                    ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                    : 'bg-white/50 text-gray-700 hover:bg-white/70 border border-gray-300/50'
                } backdrop-blur-sm`}
              >
                {section.icon}
                <span>{section.label}</span>
              </button>
            ))}
          </div>

          {/* Section Content */}
          <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/80 border-gray-200/50'} backdrop-blur-sm border shadow-xl`}>
            {activeSection === 'overview' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                  <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Project Overview</h2>
                </div>
                <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {details.briefDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Project Goals</h3>
                    <ul className="space-y-2">
                      <li className={`flex items-start space-x-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        <Target className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Create an intuitive and user-friendly interface</span>
                      </li>
                      <li className={`flex items-start space-x-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        <Target className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Implement modern development practices</span>
                      </li>
                      <li className={`flex items-start space-x-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        <Target className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>Ensure scalability and maintainability</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Key Metrics</h3>
                    <div className="space-y-3">
                      <div className={`flex justify-between items-center py-2 px-3 rounded-lg ${isDark ? 'bg-gray-700/30' : 'bg-gray-100/50'}`}>
                        <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Development Time</span>
                        <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{details.developmentTime}</span>
                      </div>
                      <div className={`flex justify-between items-center py-2 px-3 rounded-lg ${isDark ? 'bg-gray-700/30' : 'bg-gray-100/50'}`}>
                        <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Team Size</span>
                        <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{details.teamSize}</span>
                      </div>
                      <div className={`flex justify-between items-center py-2 px-3 rounded-lg ${isDark ? 'bg-gray-700/30' : 'bg-gray-100/50'}`}>
                        <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>User Base</span>
                        <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{details.userBase}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'challenges' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <AlertTriangle className="w-6 h-6 text-orange-400" />
                  <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Development Challenges</h2>
                </div>
                <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                  Every great project comes with its unique set of challenges. Here are the key obstacles I encountered and overcame during development:
                </p>
                <div className="grid gap-4">
                  {details.challenges.map((challenge, index) => (
                    <div key={index} className={`p-4 rounded-lg ${isDark ? 'bg-orange-500/10 border-orange-500/30' : 'bg-orange-100/50 border-orange-300/50'} border-l-4 border-l-orange-500`}>
                      <div className="flex items-start space-x-3">
                        <Coffee className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>{challenge}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'improvements' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                  <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Future Enhancements</h2>
                </div>
                <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                  Innovation never stops! Here are the exciting features and improvements planned for the future:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {details.improvements.map((improvement, index) => (
                    <div key={index} className={`p-4 rounded-lg ${isDark ? 'bg-green-500/10 border-green-500/30' : 'bg-green-100/50 border-green-300/50'} border hover:shadow-lg transition-all duration-300 group`}>
                      <div className="flex items-start space-x-3">
                        <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed group-hover:text-green-600 transition-colors duration-300`}>{improvement}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'tech' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Code className="w-6 h-6 text-purple-400" />
                  <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Technology Stack</h2>
                </div>
                <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                  Built with modern technologies and best practices to ensure performance, scalability, and maintainability:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.techStack.map((tech, index) => (
                    <div key={index} className={`p-4 rounded-lg ${isDark ? 'bg-purple-500/10 border-purple-500/30' : 'bg-purple-100/50 border-purple-300/50'} border hover:shadow-lg transition-all duration-300 group hover:scale-105`}>
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg ${isDark ? 'bg-purple-600/20' : 'bg-purple-500/20'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Code className="w-4 h-4 text-cyan-400" />
                        </div>
                        <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-cyan-600 transition-colors duration-300`}>{tech}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30">
                  <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Development Highlights</h3>
                  <div className="space-y-2">
                    {details.techHighlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
