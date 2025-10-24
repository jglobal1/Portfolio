import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Palette, 
  Smartphone,
  Server,
  Database,
  Globe,
  ChevronDown,
  User,
  Briefcase,
  MessageCircle,
  Twitter,
  Instagram,
  Moon,
  Sun
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Web Design & Development', icon: Code, level: 99 },
    { name: 'UI/UX Implementation', icon: Palette, level: 99 },
    { name: 'Frontend Development (React, Next.js, Framer)', icon: Code, level: 99 },
    { name: 'Full Stack Development', icon: Server, level: 99 },
    { name: 'Website Redesign & Optimization', icon: Globe, level: 99 },
    { name: 'Consultation for Tech-Driven Businesses', icon: User, level: 99 }
  ];


  const projects = [
    {
      title: 'KoloTracker',
      description: 'SaaS app for saving goals and tracking contributions collaboratively. A comprehensive platform for goal management and collaborative savings.',
      image: '/kolotracker4.jpg',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'SaaS'],
      liveUrl: 'https://kolotracker.com.ng/',
      githubUrl: ''
    },
    
    {
      title: 'AI4Lassa',
      description: 'A digital platform developed to combat Lassa Fever by providing real-time awareness, geo-targeted AI solutions for early alarm, urban health awareness, preparedness, and quick response to outbreaks.',
      image: '/ai4lassa4.jpg',
      technologies: ['Next.js', 'AI/ML', 'Health Tech', 'Real-time Alerts'],
      liveUrl: 'https://ai4lasa-tst.vercel.app/',
      githubUrl: ''
    },

    {
      title: 'UAE Business Launch Pad',
      description: 'A digital solution to attract and assist UAE entrepreneurs and investors.',
      image: 'https://www.travejar.com/assets/front/images/visa-ad.png',
      technologies: ['Next.js', 'OpenWeather API', 'Chart.js', 'Geolocation'],
      liveUrl: 'https://dina-aidarkhan.netlify.app/',
      githubUrl: ''
    },

    {
      title: 'Bright Side Restaurant',
      description: 'A responsive website for a restaurant to showcase its menu, allow customers to place orders via WhatsApp, and provide information about the restaurant\'s offerings and ambiance.',
      image: 'https://afess.ng/wp-content/uploads/2024/08/A-Guide-on-How-To-Start-A-Successful-Restaurant-Business-In-Nigeria.webp',
      technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://brightsidebite.com/',
      githubUrl: ''
    },

    {
      title: 'Mercy Portfolio',
      description: 'Passionate visual designer with expertise in creating compelling designs that drive engagement and conversions.',
      image: '/mercy.jpg',
      technologies: ['Next.js', 'Vercel', 'Design'],
      liveUrl: 'https://mercy-portfolio-oi.vercel.app/',
      githubUrl: ''
    },

    {
      title: 'GracefullyAdeola',
      description: 'A beautiful and elegant wedding celebration website featuring event details, interactive maps, and RSVP functionality for a memorable wedding day.',
      image: '/gracefullyadeola.jpg',
      technologies: ['Next.js', 'Tailwind CSS', 'Interactive Map'],
      liveUrl: 'https://www.gracefullyadeola.com.ng/',
      githubUrl: ''
    },

    {
      title: 'Movie Search App',
      description: 'A full-stack movie app with React, Node.js, and MongoDB that helps you to search, view, and save favorite movies.',
      image: 'https://img.freepik.com/free-vector/home-movie-background-with-popcorn_1419-1852.jpg?t=st=1750169551~exp=1750173151~hmac=1f0395ff3f29b3ce8d70a40789ef5c100ccf8c9c53ee313a5e51e038aeb47d64&w=826',
      technologies: ['Next.js', 'Tailwind', 'MongoDB', 'APIs'],
      liveUrl: 'https://movie-site-pied-ten.vercel.app/',
      githubUrl: 'https://github.com/jglobal1/Movie-Site-'
    },

    {
      title: 'Evergreen Multimedia',
      description: 'Art is Luxury. Transform your space with bespoke artistic services. From interior decor to wearable art, we bring luxury and creativity to every project.',
      image: '/evergreen.jpg',
      technologies: ['Next.js', 'Vercel', 'Art & Design'],
      liveUrl: 'https://evergreen-multimedia.vercel.app/',
      githubUrl: ''
    },

    {
      title: 'Zion Store',
      description: 'A digital storefront combining style and functionality for fashion retail.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxDZffYK6pkP8cBPwTA30gChZ68JtftrGBew&s',
      technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'MongoDb'],
      liveUrl: 'https://zionclothingstore.vercel.app/',
      githubUrl: 'https://github.com/jglobal1/zion_clothing_store'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${isDarkMode ? 'bg-slate-900/90 border-slate-800 backdrop-blur-md' : 'bg-white/90 border-gray-100 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className={`text-2xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
              Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors ${
                    activeSection === section 
                      ? 'text-blue-600' 
                      : isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
              
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-all duration-300 ${isDarkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                title="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-md transition-colors duration-300 ${isDarkMode ? 'text-yellow-400 hover:bg-slate-800' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-blue-400 hover:bg-slate-800' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden border-t transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'}`}>
            <div className="px-4 py-2 space-y-1">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-3 py-2 rounded-md capitalize font-medium transition-colors ${
                    activeSection === section 
                      ? isDarkMode ? 'text-blue-400 bg-slate-800' : 'text-blue-600 bg-blue-50'
                      : isDarkMode ? 'text-gray-400 hover:text-blue-400 hover:bg-slate-800' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-br from-slate-900 to-slate-800' : 'bg-gradient-to-br from-slate-50 to-blue-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mt-[70px] rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold overflow-hidden">
               <img 
                  src="/j1.jpg"
                  alt="Profile Picture"
                  className="w-full h-full object-cover object-top"
                  sizes={64}
                />
            </div>
            
            <div className="space-y-4">
              <h1 className={`text-5xl md:text-7xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                Johnson Oluwafemi Adedokun
              </h1>
              <p className={`text-xl md:text-2xl transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
                Full Stack Developer
              </p>
              <p className={`text-lg transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'} max-w-3xl mx-auto`}>
                Crafting Scalable, Modern, and Responsive Web Experiences
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className={`px-8 py-3 bg-blue-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${isDarkMode ? 'hover:bg-blue-500' : 'hover:bg-blue-700'}`}
              >
                <Briefcase size={20} />
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${isDarkMode ? 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900' : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'}`}
              >
                <MessageCircle size={20} />
                Get In Touch
              </button>
            </div>
          </div>

          <div className={`absolute bottom-18 left-1/2 transform -translate-x-1/2 animate-bounce ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-12 md:py-20 transition-colors duration-300 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-2 md:mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>About Me</h2>
            <p className={`text-lg md:text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              I'm a passionate Full Stack Developer skilled in building responsive, high-performing web applications using modern tools like React, Next.js, Node.js, and Framer.
            </p>
          </div>

          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <p className={`text-base md:text-lg leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm Johnson Oluwafemi Adedokun, a results-driven web developer with a strong eye for design and functionality.
                I build full-stack applications that blend creativity with performance — from sleek, interactive interfaces to solid, scalable backends.
              </p>
              
              <p className={`text-base md:text-lg leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Over the years, I've worked with startups, teams, and growing brands to design and develop web solutions that truly make a difference.
                I enjoy translating ideas into live digital products and improving them through collaboration, feedback, and technology.
              </p>
              
              <p className={`text-base md:text-lg leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                When I'm not coding, I'm probably sharing insights online, teaching others about web development, or exploring new ways to simplify the digital experience.
              </p>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className={`p-3 md:p-4 rounded-lg transition-colors duration-300 ${isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-blue-50'}`}>
                  <h3 className={`font-semibold text-sm md:text-base mb-1 md:mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Experience</h3>
                  <p className={`text-sm md:text-base font-medium transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>3+ Years</p>
                </div>
              </div>
            </div>

            <div className={`p-4 md:p-8 rounded-xl md:rounded-2xl mb-6 md:mb-0 transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-br from-slate-800 to-slate-700' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
              <div className={`w-full h-48 md:h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg md:rounded-xl flex items-center justify-center text-white overflow-hidden`}>
                <img 
                  src="/johnson.jpg" 
                  alt="Profile Picture"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-slate-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Skills & Expertise</h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className={`p-6 rounded-xl shadow-md hover:shadow-lg transition-all animate-scale-in ${isDarkMode ? 'bg-slate-900 hover:bg-slate-850' : 'bg-white'}`} style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg mr-3 transition-colors duration-300 ${isDarkMode ? 'bg-blue-900 ' : 'bg-blue-100'}`}>
                      <Icon size={24} className={`transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    </div>
                    <h3 className={`font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{skill.name}</h3>
                  </div>
                  
                  <div className={`w-full rounded-full h-2 transition-colors duration-300 ${isDarkMode ? 'bg-slate-700' : 'bg-gray-200'}`}>
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className={`text-sm mt-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{skill.level}% Proficiency</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Featured Projects</h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              A showcase of my recent work and personal projects
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all group animate-slide-in-up ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`} style={{animationDelay: `${index * 0.15}s`}}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 transition-all duration-300 ${isDarkMode ? 'bg-black bg-opacity-0 group-hover:bg-opacity-30' : 'bg-black bg-opacity-0 group-hover:bg-opacity-20'}`}></div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{project.title}</h3>
                  <p className={`mb-4 text-sm leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1 text-xs rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a 
                      href={project.liveUrl}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isDarkMode ? 'border border-slate-600 text-gray-300 hover:bg-slate-700' : 'border border-gray-300 text-gray-600 hover:bg-gray-50'}`}
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-800'} text-white`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className={`text-xl mb-12 max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-300'}`}>
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>

          <div className="flex justify-center mb-12">
            <a 
              href="mailto:johnsonoluwafemi200@gmail.com"
              className={`p-6 rounded-xl transition-colors group ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-700 hover:bg-slate-600'}`}
            >
              <Mail size={32} className="mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-300'}`}>Let's Discuss</p>
            </a>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-6">Contact & Socials</h3>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-4">
                <div className={`flex items-center justify-center gap-3 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-300'}`}>
                  <div className={`p-2 rounded-lg transition-colors duration-300 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-700'}`}>
                    <Globe size={20} className="text-blue-400" />
                  </div>
                  <span>Based in Nigeria</span>
                </div>
                
                <div className={`flex items-center justify-center gap-3 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-300'}`}>
                  <div className={`p-2 rounded-lg transition-colors duration-300 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-700'}`}>
                    <Mail size={20} className="text-blue-400" />
                  </div>
                  <span>johnsonoluwafemi200@gmail.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-300 mb-3">Social Links</h4>
                
                <a 
                  href="https://twitter.com/Aj_oluwafemi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-3 transition-colors group ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  <div className={`p-2 rounded-lg group-hover:bg-blue-500 transition-colors ${isDarkMode ? 'bg-slate-800' : 'bg-slate-700'}`}>
                    <Twitter size={20} className={`group-hover:text-white transition-colors ${isDarkMode ? 'text-blue-400' : 'text-blue-400'}`} />
                  </div>
                  <span>X (Twitter): @Aj_oluwafemi</span>
                </a>
                
                <a 
                  href="https://www.tiktok.com/@oluwafemi_johnson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-3 transition-colors group ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  <div className={`p-2 rounded-lg group-hover:bg-black transition-colors ${isDarkMode ? 'bg-slate-800' : 'bg-slate-700'}`}>
                    <ExternalLink size={20} className={`group-hover:text-white transition-colors ${isDarkMode ? 'text-blue-400' : 'text-blue-400'}`} />
                  </div>
                  <span>TikTok: @oluwafemi_johnson</span>
                </a>
                
                <a 
                  href="https://www.instagram.com/code_with_johnson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-3 transition-colors group ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  <div className={`p-2 rounded-lg group-hover:bg-pink-500 transition-colors ${isDarkMode ? 'bg-slate-800' : 'bg-slate-700'}`}>
                    <Instagram size={20} className={`group-hover:text-white transition-colors ${isDarkMode ? 'text-blue-400' : 'text-blue-400'}`} />
                  </div>
                  <span>Instagram: @code_with_johnson</span>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className={`text-lg mb-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-300'}`}>
              Open to remote collaborations, gigs, and partnerships that challenge creativity and innovation.
            </p>
            <p className="text-xl font-semibold text-blue-400">
              Let's build something amazing together.
            </p>
          </div>

          <div className={`border-t pt-8 transition-colors duration-300 ${isDarkMode ? 'border-slate-800' : 'border-slate-700'}`}>
            <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              &copy; 2025 Johnson Oluwafemi Adedokun. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
