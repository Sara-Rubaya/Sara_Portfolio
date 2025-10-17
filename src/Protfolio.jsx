import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Download, Database, Phone, Linkedin, Send, GitBranch, GraduationCap, BookOpen, Layout, Monitor, Github, Twitter, Code, Palette, Zap, Sparkles, Sun, Moon, ExternalLink, Award, Star, Users, Clock, Calendar, Heart, Target, Lightbulb, Briefcase, TrendingUp, Coffee, Music, Camera, Globe, Rocket, Brain, ChevronRight, Play, Pause, Volume2, VolumeX, Eye, ArrowRight, Quote, ImageIcon, Laptop, Server, Smile, Flower, Leaf, Trees, LifeBuoy, LifeBuoyIcon } from 'lucide-react';
import myimg from './Images/Me.jpeg';
import resumePDF from './Resume/Sara Rubaya_resume.pdf';
import emailjs from '@emailjs/browser';
import ProjectDetails from './components/ProjectDetails';

import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,

  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiWordpress,
  SiPandas,
  SiNumpy,
  SiPython,
  SiC,
  SiCplusplus,
} from 'react-icons/si';
import { Gi3dGlasses, Gi3dHammer, Gi3dMeeple, GiAbacus, GiAbbotMeeple, GiLiar, GiOak, GiOwl, GiPrayer, GiRose, GiSnail, GiSnailEyes } from 'react-icons/gi';
import { GrUserWorker } from 'react-icons/gr';
import { MdAccessTime, MdAutorenew, MdEmojiEvents, MdForum, MdGroups, MdLightbulb, MdPsychology } from 'react-icons/md';

// ProjectImage component with fallback
const ProjectImage = ({ src, alt, className }) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  if (imageError) {
    return (
      <div className={`${className} flex items-center justify-center bg-gradient-to-br from-gray-400/20 to-gray-600/20`}>
        <div className="text-center p-4">
          <ImageIcon className="w-12 md:w-16 h-12 md:h-16 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-500 text-xs md:text-sm">Image not available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className={`${className} flex items-center justify-center bg-gradient-to-br from-gray-300/20 to-gray-500/20 animate-pulse`}>
          <div className="text-center p-4">
            <div className="w-12 md:w-16 h-12 md:h-16 bg-gray-300 rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-gray-500 text-xs md:text-sm">Loading...</p>
          </div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0 absolute' : 'opacity-100'} transition-opacity duration-300`}
        onError={handleImageError}
        onLoad={handleImageLoad}
        loading="lazy"
      />
    </div>
  );
};

const ContactMe = ({ isDark = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = React.useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_vtnicpr', 'template_jtifiw2', form.current, {
        publicKey: 'wwYcYtuL53R90hzKM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          showToast('Message sent successfully!', 'success');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.log('FAILED...', error.text);
          showToast('Failed to send message. Please try again.', 'error');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const showToast = (message, type) => {
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 px-6 py-4 rounded-lg shadow-lg z-50 text-white font-medium transform transition-all duration-300 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'
      }`;
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.transform = 'translateX(0)';
      toast.style.opacity = '1';
    }, 100);

    setTimeout(() => {
      toast.style.transform = 'translateX(100%)';
      toast.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 5000);
  };

  return (
    <div id="contact" className={`max-w-7xl mx-auto px-8 py-16 ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <h2 className={`text-4xl md:text-5xl font-bold mb-15 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
        <span className="bg-gradient-to-r from-cyan-400 to-cyan-800 bg-clip-text text-transparent">Contact Me</span>
      </h2>

      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold mb-12">Get In Touch</h2>

          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 ${isDark ? 'bg-gray-700/50' : 'bg-gray-200/50'} rounded-full flex items-center justify-center backdrop-blur-sm border ${isDark ? 'border-gray-600/30' : 'border-gray-300/30'}`}>
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Email</p>
                <p className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>sararubaya4800@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 ${isDark ? 'bg-gray-700/50' : 'bg-gray-200/50'} rounded-full flex items-center justify-center backdrop-blur-sm border ${isDark ? 'border-gray-600/30' : 'border-gray-300/30'}`}>
                <Phone className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Phone</p>
                <p className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>+8801846831753</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 ${isDark ? 'bg-gray-700/50' : 'bg-gray-200/50'} rounded-full flex items-center justify-center backdrop-blur-sm border ${isDark ? 'border-gray-600/30' : 'border-gray-300/30'}`}>
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.206"/>
                  </svg>
                </div>
              </div>
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>WhatsApp</p>
                <p className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>+8801846831753</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 ${isDark ? 'bg-gray-700/50' : 'bg-gray-200/50'} rounded-full flex items-center justify-center backdrop-blur-sm border ${isDark ? 'border-gray-600/30' : 'border-gray-300/30'}`}>
                <MapPin className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Location</p>
                <p className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 ${isDark ? 'bg-gray-700/50' : 'bg-gray-200/50'} rounded-full flex items-center justify-center backdrop-blur-sm border ${isDark ? 'border-gray-600/30' : 'border-gray-300/30'}`}>
                <Linkedin className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>LinkedIn</p>
                <p className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>linkedin.com/in/sara-rubaya-86a411305/</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-12">Send Me a Message</h2>

          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className={`w-full px-4 py-3 ${isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white border-gray-300'} border rounded-lg ${isDark ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'} focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-200`}
                />
              </div>
              <div>
                <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className={`w-full px-4 py-3 ${isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white border-gray-300'} border rounded-lg ${isDark ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'} focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-200`}
                />
              </div>
            </div>

            <div>
              <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Message</label>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows="6"
                  required
                  className={`w-full px-4 py-3 ${isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white border-gray-300'} border rounded-lg ${isDark ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'} focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-200 resize-none`}
                />
                
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black py-4 px-6 rounded-lg font-medium hover:bg-teal-100 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                 
                  <span>Submit Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <div className={`mt-20 pt-8 border-t ${isDark ? 'border-gray-700/50' : 'border-gray-300/50'}`}>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400  to-cyan-800 bg-clip-text text-transparent">
              Sara Rubaya
            </div>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
              Frontend Developer passionate about creating innovative digital solutions
              that bridge the gap between creativity and functionality.
            </p>
            <div className="flex space-x-3">
              {[
                {
                  icon: <Github className="w-4 h-4" />,
                  link: "https://github.com/Sara-Rubaya",
                  color: "hover:text-gray-400"
                },
                {
                  icon: <Linkedin className="w-4 h-4" />,
                  link: "https://www.linkedin.com/in/sara-rubaya-86a411305/",
                  color: "hover:text-blue-400"
                },
                
                {
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.206"/>
                    </svg>
                  ),
                  link: "https://wa.me/8801846831753",
                  color: "hover:text-green-400"
                },
                {
                  icon: <Mail className="w-4 h-4" />,
                  link: "mailto:sararubaya4800@gmail.com",
                  color: "hover:text-red-400"
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 ${isDark ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-gray-100 hover:bg-gray-200'} rounded-lg transition-all duration-300 ${social.color} transform hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: 'About Me', section: 'about' },
                { label: 'Projects', section: 'projects' },
                { label: 'Skills', section: 'skills' },
                { label: 'Education', section: 'educations' },
                { label: 'Contact', section: 'contact' }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.section)}
                  className={`block text-sm ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>sararubaya4800@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-400" />
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>+8801846831753</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-red-400" />
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`pt-6 border-t ${isDark ? 'border-gray-800/50' : 'border-gray-200/50'} text-center`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 Sara Rubaya. All rights reserved. Built with ❤️ using React & Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

const Education = ({ isDark = false }) => {
  const educationData = [
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
      university: "Daffodil International University",
      degree: "B.Sc in Software Engineering",
      duration: "Jan 2024 - Dec 2027",
      cgpa: "CGPA: 3.21/4.00"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-red-500" />,
      university: "Kishoregonj Govt Mohila College",
      degree: "Higher Secondary",
      duration: "Jan 2020 - Nov 2022",
      cgpa: "GPA: 4.50/5.00"
    }
  ];

  return (
    <div id="educations" className={`max-w-4xl mx-auto my-[100px] px-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <h2 className={`text-4xl md:text-5xl font-bold mb-15 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
        <span className="bg-gradient-to-r from-cyan-400  to-cyan-800 bg-clip-text text-transparent">Educations</span>
      </h2>

      <div className="space-y-8">
        {educationData.map((item, index) => (
          <div key={index} className="flex items-start space-x-4 group">
            <div className={`flex-shrink-0 w-12 h-12 ${isDark ? 'bg-gray-700/50 border-gray-600/30' : 'bg-gray-200/50 border-gray-300/30'} rounded-full flex items-center justify-center backdrop-blur-sm border group-hover:border-gray-500/50 transition-all duration-300`}>
              {item.icon}
            </div>

            <div className="flex-1 space-y-2">
              <h3 className={`text-xl font-semibold ${isDark ? 'text-white group-hover:text-teal-300' : 'text-gray-900 group-hover:text-teal-600'} transition-colors duration-300`}>
                {item.university}
              </h3>
              <p className={isDark ? 'text-gray-300 text-lg' : 'text-gray-600 text-lg'}>
                {item.degree}
              </p>
              <div className={`flex items-center space-x-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <span>{item.duration}</span>
                <span>•</span>
                <span className="font-medium">{item.cgpa}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const skills = [
  {
    name: 'React.js',
    icon: <SiReact className='text-blue-400' />,
    delay: 0,
    animationType: 'float'
  },
  {
    name: 'Tailwind',
    icon: <SiTailwindcss className='text-teal-500' />,
    delay: 1.5,
    animationType: 'pulse-move'
  },
    {
    name: 'JavaScript',
    icon: <SiJavascript className='text-yellow-500' />,
    delay: 2.5,
    animationType: 'float'
  },
  
  {
    name: 'Express.js',
    icon: <SiExpress className='text-white' />,
    delay: 0.5,
    animationType: 'bounce'
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className='text-green-600' />,
    delay: 1.0,
    animationType: 'swing'
  },
  
 

   {
    name: 'My SQL',
    icon: <SiMysql className='text-blue-700' />,
    delay: 2.0,
    animationType: 'wave'
  },
];

const SkillsSection = ({ isDark = false }) => {
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillIcons = {
    'JavaScript': { icon: <SiJavascript />, color: 'text-yellow-500', bgColor: 'bg-yellow-500/20' },
    'React.js': { icon: <SiReact />, color: 'text-blue-500', bgColor: 'bg-blue-500/20' },
    'HTML': { icon: <SiHtml5 />, color: 'text-orange-500', bgColor: 'bg-orange-500/20' },
    'CSS': { icon: <SiCss3 />, color: 'text-blue-600', bgColor: 'bg-blue-600/20' },
    'Tailwind CSS': { icon: <SiTailwindcss />, color: 'text-teal-500', bgColor: 'bg-teal-500/20' },
    'DaisyUI': { icon: <div className="w-5 h-5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">D</div>, color: 'text-teal-400', bgColor: 'bg-teal-400/20' },
    'MongoDB': { icon: <SiMongodb />, color: 'text-green-600', bgColor: 'bg-green-600/20' },
    'MySQL': { icon: <SiMysql />, color: 'text-blue-700', bgColor: 'bg-blue-700/20' },
    'Git': { icon: <SiGit />, color: 'text-orange-600', bgColor: 'bg-orange-600/20' },
    'GitHub': { icon: <SiGithub />, color: 'text-gray-800 dark:text-white', bgColor: 'bg-gray-800/20' },
    'VS Code': { icon: <div className="w-4 h-4 bg-blue-500 rounded"></div>, color: 'text-blue-500', bgColor: 'bg-blue-500/20' },
    'Figma': { icon: <SiFigma />, color: 'text-pink-500', bgColor: 'bg-pink-500/20' },
    'Vercel': { icon: <SiVercel />, color: 'text-gray-800 dark:text-white', bgColor: 'bg-gray-800/20' },
    'Node.js': { icon: <SiNodedotjs />, color: 'text-green-500', bgColor: 'bg-green-500/20' },
    'Express.js': { icon: <SiExpress />, color: 'text-gray-800 dark:text-gray-300', bgColor: 'bg-gray-800/20' },
    'Machine Learning': { icon: <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>, color: 'text-purple-500', bgColor: 'bg-purple-500/20' },
    'C': { icon: <SiC />, color: 'text-blue-600', bgColor: 'bg-blue-600/20' },
    'Java': { icon: <div className="w-5 h-5 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">J</div>, color: 'text-red-600', bgColor: 'bg-red-600/20' },

    // Soft Skills with icons
    'Teamwork': { icon: <MdGroups />, color: 'text-green-500', bgColor: 'bg-green-500/20' },
    'Problem Solving': { icon: <MdPsychology />, color: 'text-blue-500', bgColor: 'bg-blue-500/20' },
    'Communication': { icon: <MdForum />, color: 'text-purple-500', bgColor: 'bg-purple-500/20' },
    'Adaptability': { icon: <MdAutorenew />, color: 'text-yellow-500', bgColor: 'bg-yellow-500/20' },
    'Leadership': { icon: <MdEmojiEvents />, color: 'text-pink-500', bgColor: 'bg-pink-500/20' },
    'Time Management': { icon: <MdAccessTime />, color: 'text-indigo-500', bgColor: 'bg-indigo-500/20' },
    'Creativity': { icon: <MdLightbulb />, color: 'text-teal-500', bgColor: 'bg-teal-500/20' },
  };

  const skillCategories = {
    'Programming Languages': ['C', 'JavaScript', 'Java'],
    'Front End': ['JavaScript', 'React.js', 'HTML', 'CSS', 'Tailwind CSS', 'DaisyUI'],
    'Backend': ['Node.js', 'Express.js'],
    'Databases': ['MongoDB', 'MySQL'],
    'Tools & Platforms': ['Git', 'GitHub', 'VS Code', 'Figma', 'Vercel'],
    'Soft Skills': ['Communication', 'Teamwork', 'Problem Solving', 'Adaptability', 'Creativity', 'Leadership', 'Time Management'],
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const allSkills = Object.values(skillCategories).flat();
      allSkills.forEach((skill, index) => {
        setTimeout(() => {
          setVisibleSkills(prev => new Set([...prev, skill]));
        }, index * 100);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const SkillCard = ({ skill, index, categoryIndex }) => {
    const skillData = skillIcons[skill];
    const isVisible = visibleSkills.has(skill);
    const isHovered = hoveredSkill === skill;

    return (
      <div
        className={`
          relative group transform transition-all duration-500 ease-out
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
          hover:scale-110 hover:-translate-y-2 cursor-pointer
        `}
        style={{ transitionDelay: `${(categoryIndex * 300) + (index * 100)}ms` }}
        onMouseEnter={() => setHoveredSkill(skill)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        <div className={`
          flex items-center gap-3 px-5 py-3 rounded-2xl
          backdrop-blur-sm border transition-all duration-300
          ${isDark
            ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-700/60 hover:border-gray-600'
            : 'bg-white/80 border-gray-200 hover:bg-white hover:border-gray-300'
          }
          ${isHovered ? 'shadow-xl shadow-blue-500/20' : 'shadow-lg'}
        `}>
          <div className={`
            relative text-2xl transition-all duration-300
            ${skillData.color}
            ${isHovered ? 'scale-125 rotate-12' : ''}
          `}>
            {skillData.icon}
          </div>
          <span className={`
            font-medium transition-all duration-300
            ${isDark ? 'text-gray-200' : 'text-gray-800'}
            ${isHovered ? 'text-cyan-400 dark:text-cyan-800' : ''}
          `}>
            {skill}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="relative py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-800 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 animate-scale-x" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <div key={category} className="relative">
              <div className="flex items-center gap-4 mb-8">
                <h3
                  className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} animate-slide-in-right`}
                  style={{ animationDelay: `${categoryIndex * 200}ms` }}
                >
                  {category}
                </h3>
                <div
                  className={`flex-1 h-px bg-gradient-to-r ${
                    isDark ? 'from-gray-600 to-transparent' : 'from-gray-300 to-transparent'
                  } animate-expand-width`}
                  style={{ animationDelay: `${categoryIndex * 200 + 300}ms` }}
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <SkillCard
                    key={skill}
                    skill={skill}
                    index={index}
                    categoryIndex={categoryIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




const InteractiveBackground = ({ isDark }) => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const particles = [];
    

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);



    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Mouse attraction
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.vx += (dx / distance) * force * 0.01;
          particle.vy += (dy / distance) * force * 0.01;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -0.8;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -0.8;

        // Apply friction
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Pulse effect
        particle.pulsePhase += 0.05;
        const pulse = Math.sin(particle.pulsePhase) * 0.3 + 0.7;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * pulse, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Draw connections
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (120 - distance) / 120;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color + Math.floor(opacity * 50).toString(16).padStart(2, '0');
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDark, mousePosition.x, mousePosition.y]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

const AnimatedCounter = ({ target, suffix = '', prefix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <span ref={ref} className="font-bold text-2xl">
      {prefix}{count}{suffix}
    </span>
  );
};

const StatCard = ({ icon, value, label, suffix = '', prefix = '', isDark }) => (
  <div className={`
    relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300
    ${isDark
      ? 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/60 hover:border-gray-600/60'
      : 'bg-white/70 border-gray-200/50 hover:bg-white/80 hover:border-gray-300/60'
    }
    hover:scale-105 hover:-translate-y-1 group cursor-pointer
  `}>
    <div className="flex items-center space-x-4">
      <div className={`
        p-3 rounded-xl transition-all duration-300
        ${isDark ? 'bg-blue-500/20 group-hover:bg-blue-500/30' : 'bg-blue-500/20 group-hover:bg-blue-500/30'}
      `}>
        {React.cloneElement(icon, { className: "w-6 h-6 text-blue-400" })}
      </div>
      <div>
        <div className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
          <AnimatedCounter target={value} suffix={suffix} prefix={prefix} />
        </div>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{label}</p>
      </div>
    </div>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

const StatsSection = ({ isDark }) => {
  const stats = [
    { icon: <Code />, value: 30, suffix: '+', label: 'Projects Built' },
    { icon: <Coffee />, value: 12000, suffix: '+', label: 'Hours of Coding' },
  ];

  return (
 <section className="relative py-16 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2
        className={`text-4xl md:text-5xl font-bold mb-4 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}
      >
        Achievement{' '}
        <span className="bg-gradient-to-r from-cyan-400 to-cyan-800 bg-clip-text text-transparent">
          Highlights
        </span>
      </h2>
    </div>

   <div className="mx-auto w-full max-w-3xl">
  <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center ">
    {stats.map((stat, index) => (
      <StatCard key={index} {...stat} isDark={isDark} />
    ))}
  </div>
</div>
  </div>
</section>


  );
};

const TimelineItem = ({ item, index, isDark }) => (
  <div
    className={`relative flex items-start space-x-4 group ${
      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
    }`}
  >
    {/* Removed icon and its border */}
    <div className="hidden" />

    <div
      className={`
      flex-1 p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300
      ${
        isDark
          ? "bg-gray-800/50 border-gray-700/50"
          : "bg-white/80 border-gray-200/50"
      }
      relative
    `}
    >
      <div className="flex items-center justify-between mb-3">
        <h3
          className={`text-xl font-bold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {item.title}
        </h3>
        <span
          className={`text-sm ${
            isDark ? "text-gray-400" : "text-gray-600"
          } font-medium`}
        >
          {item.year}
        </span>
      </div>
      <p className={`${isDark ? "text-gray-300" : "text-gray-600"} mb-2`}>
        {item.company}
      </p>
      <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
        {item.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {item.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className={`
            px-3 py-1 rounded-full text-xs font-medium transition-all duration-300
            ${
              isDark
                ? "bg-cyan-500/20 text-green-300"
                : "bg-blue-500/20 text-green-600"
            }
          `}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ExperienceSection = ({ isDark }) => {
  const experiences = [
    {
      title: "🌐 Web Development Journey",
      company: "Frontend Specialization",
      year: "2025 - Present",
      description:
        "Transitioned into front-end web development with modern technologies. Built and deployed several professional websites including Hobby Website, Book Website, Bangladesh 2.0, and Tour Package Booking Management Platform.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "DaisyUI",
      ],
    },
    {
      title: "📊 Technical Skills Expansion",
      company: "MERN-Stack Development",
      year: "2025 - Present",
      description:
        "Built full-stack web applications using MongoDB, Express.js, React, and Node.js. Developed RESTful APIs, integrated user authentication, and deployed scalable web apps. Gained experience in front-end UI design with React and state management.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JWT",
        "REST API",
        "Tailwind CSS",
        "Firebase",
      ],
    },
    {
      title: "🎓 Academic Journey",
      company: "BSc in Software Engineering",
      year: "2024 - Present",
      description:
        "Currently pursuing a Bachelor’s degree in Software Engineering. Focusing on building a strong foundation in programming, data structures, algorithms, and web development, while gaining practical skills through coursework and projects.",
      technologies: [
        "Programming",
        "Data Structures",
        "Algorithms",
        "Web Development",
        "Database Management",
      ],
    },
    {
      title: "🏁 Current Focus & Goals",
      company: "Continuous Learning",
      year: "2025 - Future",
      description:
        "Aiming to become a more versatile web developer by mastering modern web frameworks, building immersive 3D web experiences, exploring AI/ML-powered tools, improving cloud and serverless skills, and contributing to open-source projects.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Three.js",
        "AI/ML",
        "Cloud Platforms",
        "Open Source",
      ],
    },
  ];

  return (
    <section id="journey" className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Professional{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-800 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p
            className={`text-xl ${
              isDark ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
            My career progression and key milestones in software development.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              item={experience}
              index={index}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


const IslamicQuoteCard = ({ isDark }) => {
  const quote = "Indeed, Allah is with those who fear Him and those who are doers of good. (Quran 16:128)";

  return (
    <div className={`
      p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300
      ${isDark
        ? 'bg-gray-800/50 border-gray-700/50'
        : 'bg-white/80 border-gray-200/50'
      }
      text-center
    `}>
      <div className="flex items-center justify-center mb-4 space-x-3">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-6 h-6 text-teal-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4" />
        </svg>
        <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Daily Reminder</span>
      </div>

      <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        "{quote}"
      </div>
    </div>
  );
};


const FunFactsSection = ({ isDark }) => {
  const funFacts = [
    {
      icon: <Code />,
      title: "Aspiring Full-Stack Developer",
    description: "Currently learning the MERN stack: MongoDB, Express.js, React.js, and Node.js, building real-world projects."
    },
    {
    icon: <Laptop />,
    title: "Web Development Enthusiast",
    description: "Exploring modern frontend frameworks, responsive design, and creating smooth user experiences with React and Tailwind CSS."
  },
   {
    icon: <Server />,
    title: "Backend Explorer",
    description: "Practicing RESTful APIs, authentication, and database management with Node.js and MongoDB."
  },
  {
    icon: <BookOpen />,
    title: "Continuous Learner",
    description: "Focused on improving coding skills, learning new technologies, and staying up-to-date with software engineering trends."
  }
  ];

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Fun <span className="bg-gradient-to-r from-cyan-400 to-cyan-800 bg-clip-text text-transparent">Facts</span>
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Some interesting things about me beyond coding.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {funFacts.map((fact, index) => (
              <div key={index} className={`
                p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300
                ${isDark
                  ? 'bg-gray-800/50 border-gray-700/50 hover:border-gray-600/60'
                  : 'bg-white/80 border-gray-200/50 hover:border-gray-300/60'
                }
                hover:scale-105 group
              `}>
                <div className={`
                  w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-all duration-300
                  ${isDark ? 'bg-blue-500/20 group-hover:bg-blue-500/30' : 'bg-blue-500/20 group-hover:bg-blue-500/30'}
                `}>
                  {React.cloneElement(fact.icon, { className: "w-6 h-6 text-blue-400" })}
                </div>
                <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {fact.title}
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {fact.description}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
           <IslamicQuoteCard isDark={isDark} />
            <div className={`
              p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300
              ${isDark
                ? 'bg-gray-800/50 border-gray-700/50 hover:border-gray-600/60'
                : 'bg-white/80 border-gray-200/50 hover:border-gray-300/60'
              }
              group hover:scale-105
            `}>
              <div className="flex items-center space-x-3 mb-4">
                <Rocket className="w-6 h-6 text-cyan-400" />
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Current Goals</span>
              </div>
              <ul className="space-y-2">
                <li className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} flex items-center space-x-2`}>
                  <Target className="w-4 h-4 text-rose-700" />
                  <span>Learn TypeScript and modern JavaScript frameworks</span>
                </li>
                <li className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} flex items-center space-x-2`}>
                  <Target className="w-4 h-4 text-rose-700" />
                  <span>Contribute to open-source projects on GitHub</span>
                </li>
                <li className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} flex items-center space-x-2`}>
                  <Target className="w-4 h-4 text-rose-700" />
                  <span>Strengthen database design & optimization skills</span>
                </li>
                <li className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} flex items-center space-x-2`}>
                  <Target className="w-4 h-4 text-rose-700" />
                  <span>Stay updated with latest web development trends</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



const MorphingSkillCard = ({ skill, icon, delay = 0, index, animationType, isDark }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return; // Disable mouse tracking on mobile
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const getAnimationClass = () => {
    // Reduced animations for mobile
    if (isMobile) {
      return 'animate-float-gentle';
    }

    switch (animationType) {
      case 'float': return 'animate-float-gentle';
      case 'bounce': return 'animate-bounce-soft';
      case 'swing': return 'animate-swing';
      case 'pulse-move': return 'animate-pulse-float';
      case 'rotate-float': return 'animate-rotate-float';
      case 'wave': return 'animate-wave-motion';
      default: return 'animate-float-gentle';
    }
  };

  const getHoverTransform = () => {
    // Reduced hover effects for mobile
    if (isMobile) {
      return 'group-hover:scale-105';
    }

    switch (animationType) {
      case 'bounce': return 'group-hover:scale-110 group-hover:-translate-y-2';
      case 'swing': return 'group-hover:scale-105 group-hover:rotate-3';
      case 'pulse-move': return 'group-hover:scale-125 group-hover:rotate-6';
      case 'rotate-float': return 'group-hover:scale-110 group-hover:rotate-12';
      case 'wave': return 'group-hover:scale-115 group-hover:-translate-y-3';
      default: return 'group-hover:scale-110';
    }
  };

  return (
    <div
      className={`relative group cursor-pointer ${getAnimationClass()}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        animationDelay: `${delay}s`,
        '--swing-amplitude': `${5 + index * 2}deg`,
        '--wave-offset': `${index * 60}deg`
      }}
    >
      <div className={`relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 transform transition-all duration-700 ${getHoverTransform()}`}>
        <div
          className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' : 'bg-gradient-to-br from-blue-600/30 to-purple-600/30'} rounded-2xl lg:rounded-3xl blur-xl transition-all duration-300`}
          style={{
            transform: (isHovered && !isMobile) ? `translate(${(mousePosition.x - 32) * 0.1}px, ${(mousePosition.y - 32) * 0.1}px)` : 'translate(0, 0)'
          }}
        />

        <div className={`relative w-full h-full ${isDark ? 'bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 border-gray-700/50 group-hover:border-blue-400/50' : 'bg-gradient-to-br from-white/90 via-gray-50/90 to-white/90 border-gray-300/50 group-hover:border-blue-500/50'} backdrop-blur-lg rounded-2xl lg:rounded-3xl border transition-all duration-500 overflow-hidden`}>
          <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10' : 'bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

          <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${isDark ? 'via-white/5' : 'via-white/20'} to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000`} />

          <div className="relative z-10 flex flex-col items-center justify-center h-full p-2 sm:p-3 lg:p-4">
            <div className={`text-xl sm:text-2xl lg:text-3xl mb-2 lg:mb-3 transform transition-all duration-500 ${
              isMobile ? 'group-hover:scale-110' : // Simple scale for mobile
              animationType === 'rotate-float' ? 'group-hover:scale-125 group-hover:rotate-180' :
              animationType === 'bounce' ? 'group-hover:scale-150 group-hover:-rotate-12' :
                animationType === 'swing' ? 'group-hover:scale-125 group-hover:rotate-45' :
                  animationType === 'pulse-move' ? 'group-hover:scale-150 animate-pulse' :
                    animationType === 'wave' ? 'group-hover:scale-125 group-hover:rotate-12' :
                      'group-hover:scale-125 group-hover:rotate-12'
              }`}>
              {icon}
            </div>
            <div className={`text-xs sm:text-sm font-semibold ${isDark ? 'text-gray-200 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'} transition-colors duration-300 text-center leading-tight`}>
              {skill}
            </div>
          </div>

          <div className={`absolute top-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-l-2 ${isDark ? 'border-blue-400/0 group-hover:border-blue-400/60' : 'border-blue-500/0 group-hover:border-blue-500/70'} transition-colors duration-500`} />
          <div className={`absolute bottom-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-r-2 ${isDark ? 'border-purple-400/0 group-hover:border-purple-400/60' : 'border-purple-500/0 group-hover:border-purple-500/70'} transition-colors duration-500`} />
        </div>
      </div>
    </div>
  );
};

const GlowingButton = ({ children, variant = 'primary', isDark, className = '', ...props }) => {
  const baseClass = "relative px-8 py-4 rounded-2xl font-semibold transition-all duration-500 overflow-hidden group transform hover:scale-105 active:scale-95";

  const variants = {
    
   primary: {
    background: isDark
      ? "bg-gradient-to-r from-teal-600 via-teal-500 to-teal-700"
      : "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600",
    text: "text-white",
    shadow: isDark
      ? "shadow-2xl shadow-teal-500/40 hover:shadow-teal-400/60 hover:shadow-2xl"
      : "shadow-2xl shadow-teal-400/50 hover:shadow-teal-300/70 hover:shadow-2xl",
    glow: isDark
      ? "before:bg-gradient-to-r before:from-teal-400/30 before:via-teal-500/40 before:to-teal-600/30"
      : "before:bg-gradient-to-r before:from-teal-300/40 before:via-teal-400/50 before:to-teal-500/40"
  },
  secondary: {
    background: isDark
      ? "bg-gray-800/90 hover:bg-gray-700/90 border border-teal-600/50 hover:border-teal-500/70"
      : "bg-white/90 hover:bg-gray-50/90 border border-teal-300/50 hover:border-teal-400/70",
    text: isDark ? "text-gray-200 hover:text-white" : "text-gray-700 hover:text-gray-900",
    shadow: isDark
      ? "shadow-lg shadow-teal-900/50 hover:shadow-teal-800/60"
      : "shadow-lg shadow-teal-300/50 hover:shadow-teal-400/60",
    glow: isDark
      ? "before:bg-gradient-to-r before:from-teal-600/20 before:via-teal-500/30 before:to-teal-600/20"
      : "before:bg-gradient-to-r before:from-teal-300/30 before:via-teal-200/40 before:to-teal-300/30"
  }
  };

  const currentVariant = variants[variant];

  return (
    <button
      className={`
        ${baseClass}
        ${currentVariant.background}
        ${currentVariant.text}
        ${currentVariant.shadow}
        ${className}
        before:absolute before:inset-0 before:rounded-2xl before:blur-xl before:opacity-0
        before:group-hover:opacity-100 before:transition-all before:duration-500 before:-z-10
        ${currentVariant.glow}
        after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-r
        after:from-transparent after:via-white/10 after:to-transparent
        after:opacity-0 after:group-hover:opacity-100 after:transition-all after:duration-300
        backdrop-blur-sm border-0
      `}
      {...props}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/30 to-pink-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />

      {/* Shimmer effect */}
      <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 transform" />

      {/* Outer glow ring */}
      <div className={`absolute inset-0 rounded-2xl ${
        variant === 'primary'
          ? 'bg-gradient-to-r from-teal-500 via-green-500 to-teal-900'
          : 'bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400'
      } opacity-0 group-hover:opacity-30 blur-sm group-hover:blur-lg transition-all duration-500 -z-10 scale-110`} />

      {/* Content wrapper */}
      <span className="relative z-20 flex items-center justify-center space-x-3 group-hover:scale-105 transition-transform duration-300">
        {children}
      </span>

      
      
    </button>
  );
};

const FloatingElement = ({ children, delay = 0, amplitude = 20 }) => (
  <div
    className="animate-float"
    style={{
      animationDelay: `${delay}s`,
      '--float-amplitude': `${amplitude}px`
    }}
  >
    {children}
  </div>
);



export default function CreativePortfolio() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'sara_resume';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const handleViewProjectDetails = (project) => {
    setSelectedProject(project);
    setShowProjectDetails(true);
  };

  const handleBackToProjects = () => {
    setShowProjectDetails(false);
    setSelectedProject(null);
  };


  const sampleProjects = [
    {
      id: 3,
      title: "AtlasWay",
      description: " AtlasWay is a responsive web application designed to streamline the travel booking experience. It allows users to explore available travel packages, securely book their preferred tours, and manage their reservations. Admins or providers can view and manage bookings, while users can confirm or cancel them.",
      category: "Web Development",
      status: "featured",
      imageUrl: "https://i.ibb.co.com/dJ2HzQxg/Screenshot-2025-10-16-at-4-48-22-PM.png",
      techStack: ["React", "Node.js", "MongoDB", "Express.js", "Firebase"],
      features: [
        "✈️ Explore and book exclusive travel packages worldwide",
  "🏝️ Discover destinations with detailed itineraries and highlights",
  "🧭 User-friendly interface for easy trip planning",
  "🔍 Search and filter packages by destination, budget, or duration",
  "🌏 Build unforgettable travel experiences with friends and family"
      ],
      highlights: ["✈️  30K+ users", "⭐ 4.5 rating", "🏆 App of the Day"],
      liveUrl: "https://atlasway-client.web.app/",
      githubUrl: "https://github.com/Sara-Rubaya/AtlasWay-client",
      
    },
    {
      id: 2,
      title: "HobbyHub",
      description: "HobbyHub is a web application where users can discover, create, and join hobby-based groups in their local area. Whether it's painting, hiking, cooking, coding, or any other interest — HobbyHub connects people who share the same passion.",
      category: "Web Development",
      status: "featured",
      imageUrl: "https://i.ibb.co.com/070GGG9/Screenshot-2025-10-16-at-6-01-11-PM.png",
      techStack: ["React.js", "Node.js", "MongoDB", "Express.js"],
      features: [
        "👥 Create and Manage Hobby Groups (Admin, Member, User)",
  "💬 Group Discussions and Comment System",
  "📝 Membership Requests and Approvals",
  "🎨 Personalized User Profiles",
  "🔒 Secure Login with JWT Authentication",
      ],
      highlights: ["🔐 Role-Based Access", "Group Joining System", "🎯 85% success rate"],
      liveUrl: "https://chic-bunny-357f50.netlify.app/",
      githubUrl: "https://github.com/Sara-Rubaya/HobbyHub-Client",
     
    },
    {
      id: 4,
      title: "Insuroo",
      description: "This project is a modern Life Insurance Management Platform built using the MERN stack (MongoDB, Express.js, React, Node.js) designed to streamline the process of purchasing and managing life insurance policies. The platform supports multiple user roles with distinct privileges, offers personalized quote estimations, integrates secure payments, and provides a user-friendly interface for all stakeholders.",
      category: "Web Development",
      status: "active",
      imageUrl: "https://i.ibb.co.com/0Ryth5x3/Screenshot-2025-10-16-at-6-23-28-PM.png",
      techStack: ["React","Firebase", "Tailwind CSS", "Node.js"],
      features: [
        "🔐 Role-Based Access Control (Admin, Agent, Customer)",
  "🧾 Policy Management System (Add, View, Update, Delete Policies)",
  "📝 Insurance Application & Approval Workflow",
  "👥 User & Agent Management Dashboard (Admin Panel)",
  "💳 Secure Stripe Payment Integration for Premiums",
  "📊 Transaction & Income Tracking Dashboard",
  "🔑 JWT Authentication & Protected Routes",
  "📱 Fully Responsive and User-Friendly Interface"
      ],
      highlights: ["💼 100+ Insurance Policies Managed",
  "🧾 Smart Life Insurance Management System",
  "🔒 Secure & User-Friendly Platform"],
      liveUrl: "https://insuroo-client.web.app/",
      githubUrl: "https://github.com/Sara-Rubaya/Insuroo-client",

    },
    {
      id: 5,
      title: "English-Janala",
      description: "A modern and interactive English-to-Bangla vocabulary learning website designed to help users expand their language skills. It allows learners to explore new words with meanings, examples, and pronunciation — making vocabulary building easy, engaging, and effective.",
      category: "web Development",
      status: "Completed",
      imageUrl: "https://i.ibb.co.com/fdSBY7h0/Screenshot-2025-10-16-at-6-31-45-PM.png",
      techStack: [ "javascript"],
  features: [
   "📚 Vocabulary Lessons – Organized lessons from Lesson-1 to Lesson-7 and beyond.",
  "🔤 Word Meanings & Pronunciations – Learn English words with Bangla meanings and phonetics.",
  "📝 Practice & Revision – Review and practice words to strengthen memory.",
  ],
      highlights: ["💰 $2M+ tracked", "⚡ Real-time data", "🔐 Bank-level security"],
      liveUrl: "https://fluffy-pegasus-82ddeb.netlify.app/",
      githubUrl: "https://github.com/Sara-Rubaya/English-janala",
      
    },
    {
      id: 1,
      title: "Readly",
      description: "It is a Subscription Box Service Platform designed for book lovers. Users can browse, subscribe to, and manage monthly book subscription boxes tailored to their reading preferences. Each box is curated with selected books, providing a personalized experience that encourages discovery and excitement each month.",
      category: "Web Development",
      status: "featured",
      imageUrl: "https://i.ibb.co.com/Y7LSzxgk/Screenshot-2025-10-16-at-6-44-20-PM.png",
      techStack: ["React.js", "Tailwind CSS","DaisyUI" ],
    features : [
  " 📦 Browse and subscribe to curated book boxes with details like price, category, and frequency.",
  "🔐 Secure authentication with Email/Password, Google login, forgot password, and profile management.",
  "Real-time updates and smooth animations with Framer Motion.",
  "🎞️ Home page slider and subscription services section with responsive card layout.",
  "📝 Add reviews and ratings for subscriptions on protected detail pages.",
  "🌐 Fully responsive, dynamic page titles, smooth UI, and 404/error page handling."
],
      highlights: [ "📚 Curated Book Subscription Boxes",
  "👥 Active Reader Community",
  "📝 Reviews & Ratings for Each Box"],
      liveUrl: "https://gorgeous-baklava-298b07.netlify.app/ ",
      githubUrl: "https://github.com/Sara-Rubaya/Readly",
      
    },

  ];

  const themeClasses = {
    bg: isDark ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-cyan-50',
    text: isDark ? 'text-white' : 'text-gray-900',
    nav: isDark ? 'bg-black/10 border-white/10' : 'bg-white/20 border-gray-200/30',
    navText: isDark ? 'text-gray-300 hover:text-white hover:bg-white/5' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50',
    contactText: isDark ? 'text-gray-300 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900',
    socialBg: isDark ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 hover:border-gray-600' : 'bg-white/50 border-gray-300 hover:bg-white/70 hover:border-gray-400'
  };

  // Show project details if a project is selected
  if (showProjectDetails && selectedProject) {
    return (
      <ProjectDetails
        project={selectedProject}
        onBack={handleBackToProjects}
        isDark={isDark}
      />
    );
  }

  return (
    <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text} relative overflow-hidden transition-all duration-500`}>
      <InteractiveBackground isDark={isDark} />

      <div className="absolute inset-0" style={{ zIndex: -2 }}>
        <div className={`absolute top-1/4 left-1/6 w-96 h-96 ${isDark ? 'bg-gradient-to-r from-blue-600/10 to-cyan-600/10' : 'bg-gradient-to-r from-blue-400/20 to-cyan-400/20'} rounded-full blur-3xl animate-pulse`} />
        <div className={`absolute bottom-1/3 right-1/6 w-80 h-80 ${isDark ? 'bg-gradient-to-r from-cyan-600/10 to-cyan-600/10' : 'bg-gradient-to-r from-cyan-400 to-cyan-800'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '2s' }} />
        <div className={`absolute top-1/2 left-1/2 w-64 h-64 ${isDark ? 'bg-gradient-to-r from-green-600/5 to-blue-600/5' : 'bg-gradient-to-r from-green-400/15 to-blue-400/15'} rounded-full blur-2xl animate-pulse`} style={{ animationDelay: '4s' }} />
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-50 ${themeClasses.nav} backdrop-blur-2xl border-b transition-all duration-500`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-sky-900 bg-clip-text text-transparent">
              SaraRubaya
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { label: 'About', section: 'about' },
                { label: 'Journey', section: 'journey' },
                { label: 'Projects', section: 'projects' },
                { label: 'Skills', section: 'skills' },
                { label: 'Education', section: 'educations' },
                { label: 'Contact', section: 'contact' }
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.section)}
                  className={`relative ${themeClasses.navText} transition-all duration-300 py-2 px-4 rounded-lg group`}
                >
                  {item.label}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-cyan-800 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {/* Resume Download Button */}
              <button
                onClick={downloadResume}
                className={`
                  hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300
                  ${isDark
                    ? 'bg-gradient-to-r from-cyan-600 to-cyan-800 text-white hover:from-cyan-400 hover:to-cyan-800'
                    : 'bg-gradient-to-r from-cyan-800 to-cyan-400 text-white hover:from-cyan-400 hover:to-cyan-800'
                  }
                  hover:scale-105 hover:shadow-lg transform group
                `}
              >
                <Download className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">Resume</span>
              </button>

              

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-3 rounded-xl transition-all duration-300 ${isDark
                  ? 'bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600'
                  : 'bg-white/20 hover:bg-white/30 border border-white/30 hover:border-white/50'
                } backdrop-blur-sm`}
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 relative">
                  <div className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <div className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                  <div className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className={`m-4 p-6 rounded-2xl ${isDark ? 'bg-gray-900/95 border-gray-700/50' : 'bg-white/95 border-gray-200/50'} backdrop-blur-xl border shadow-xl`}>
              <div className="space-y-4">
                {[
                  { label: 'About', section: 'about' },
                  { label: 'Journey', section: 'journey' },
                  { label: 'Projects', section: 'projects' },
                  { label: 'Skills', section: 'skills' },
                  { label: 'Education', section: 'educations' },
                  { label: 'Contact', section: 'contact' }
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.section)}
                    className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'}`}
                  >
                    {item.label}
                  </button>
                ))}

                {/* Mobile Resume Download Button */}
                <div className="pt-4 border-t border-gray-700/50">
                  <button
                    onClick={() => {
                      downloadResume();
                      setIsMobileMenuOpen(false);
                    }}
                    className={`
                      w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all duration-300
                      ${isDark
                        ? 'bg-gradient-to-r from-cyan-400 to-cyan-800 text-white hover:from-cyan-400 hover:to-cyan-800'
                        : 'bg-gradient-to-r from-cyan-800 to-cyan-400 text-white hover:from-cyan-400 hover:to-cyan-800'
                      }
                      hover:scale-105 hover:shadow-lg transform group
                    `}
                  >
                    <Download className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>Download Resume</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div id="about" className="relative min-h-screen mt-[100px] lg:mt-[10px] flex items-center justify-center px-4 sm:px-6" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4 lg:mb-6">
                  <div className="w-8 lg:w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-800" />
                  <span className="text-blue-400 font-medium tracking-wider uppercase text-xs sm:text-sm">Frontend Developer</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                  <span className={`${isDark ? 'bg-gradient-to-r from-white via-blue-100 to-purple-100' : 'bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900'} bg-clip-text text-transparent`}>
                    Sara
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 to-cyan-800 bg-clip-text text-transparent">
                    Rubaya
                  </span>
                </h1>

                <div className="space-y-2 lg:space-y-3">
                  <h2 className={`text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    Frontend Developer & Web Developer
                  </h2>
                  <p className={`text-base sm:text-lg lg:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed max-w-lg mx-auto lg:mx-0`}>
                    Coding the bridge between creativity and technology, one project at a time.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 group">
                  <div className={`p-3 ${isDark ? 'bg-blue-500/10 group-hover:bg-blue-500/20' : 'bg-blue-500/20 group-hover:bg-blue-500/30'} rounded-xl transition-colors`}>
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className={`${themeClasses.contactText} transition-colors text-sm sm:text-base`}>sararubaya4800@gmail.com</span>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 group">
                  <div className={`p-3 ${isDark ? 'bg-purple-500/10 group-hover:bg-purple-500/20' : 'bg-purple-500/20 group-hover:bg-purple-500/30'} rounded-xl transition-colors`}>
                    <MapPin className="w-5 h-5 text-rose-400" />
                  </div>
                  <span className={`${themeClasses.contactText} transition-colors text-sm sm:text-base`}>Dhaka, Bangladesh</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <GlowingButton variant="primary" isDark={isDark} onClick={downloadResume} className="w-full sm:w-auto">
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </GlowingButton>

                <div className="flex items-center justify-center sm:justify-start space-x-3 w-full sm:w-auto">
                  {[
                    {
                      Icon: Github,
                      color: isDark ? 'hover:text-gray-300' : 'hover:text-gray-700',
                      link: "https://github.com/Sara-Rubaya",
                      bgHover: isDark ? 'hover:bg-gray-800/30' : 'hover:bg-gray-100/50'
                    },
                    {
                      Icon: Linkedin,
                      color: 'hover:text-blue-400',
                      link: "https://www.linkedin.com/in/sara-rubaya-86a411305/",
                      bgHover: 'hover:bg-blue-500/10'
                    },
                   
                    {
                      Icon: () => (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.206"/>
                        </svg>
                      ),
                      color: 'hover:text-green-400',
                      link: "https://wa.me/8801846831753",
                      bgHover: 'hover:bg-green-500/30'
                    },
                    {
                      Icon: Mail,
                      color: 'hover:text-orange-400',
                      link: "mailto:sararubaya4800@gmail.com",
                      bgHover: 'hover:bg-orange-500/10'
                    }
                  ].map(({ Icon, color, link, bgHover }, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
        p-4
        ${themeClasses.socialBg}
        backdrop-blur-sm
        border
        rounded-xl
        transition-all
        duration-300
        group
        ${bgHover}
        hover:shadow-lg
        hover:-translate-y-1
      `}
                    >
                      <Icon className={`w-5 h-5 transition-colors duration-300 ${color}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

           <div className="relative order-first lg:order-last">
  <div className="relative mb-8 lg:mb-16">
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto">
      {/* Image Container */}
      <div className="relative w-full h-full mx-auto mt-4 sm:mt-8 lg:mt-[100px]">
        <img
          src={myimg}
          alt="Profile"
          className="w-full h-full object-cover rounded-4xl" // square with rounded corners
        />
      </div>
    </div>
  </div>

  <div className="relative mt-8 lg:mt-0">
    <div className="text-center mb-6 lg:mb-8 px-4">
      <h3
        className={`text-xl sm:text-3xl font-bold ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        } mb-2`}
      >
        Tech Stack
      </h3>
      <div className="" />
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 max-w-sm sm:max-w-md mx-auto px-4 ml-[100px] lg:px-0">
  {skills.map((skill) => (
    <MorphingSkillCard
      key={skill.name}
      skill={skill.name}
      icon={skill.icon}
      isDark={isDark}
    />
  ))}
</div>

  </div>
</div>

          </div>
        </div>
      </div>

      {/* ============== ABOUT ME SECTION ============== */}
      <section id="about-me" className="relative py-20 px-6" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <GiSnailEyes className="w-6 h-6 text-cyan-400 animate-pulse" />
              <span className="text-rose-500 font-bold tracking-widest uppercase text-sm">My Story</span>
              <GiSnailEyes className="w-6 h-6 text-rose-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-rose-400"></div>
            </div>

            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              About <span className="bg-gradient-to-r from-cyan-400  to-cyan-800 bg-clip-text text-transparent">Me</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Personal Story */}
            <div className="space-y-6">
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/80 border-gray-200/50'} backdrop-blur-sm border`}>
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>My Programming Journey</h3>
                </div>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                 My adventure in web development started in 2024, crafting static websites with HTML and CSS. Over time, learning JavaScript, React, and Node.js enabled me to build interactive, MERN-stack web applications and solve real-world problems creatively.
                </p>
              </div>

              <div className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/80 border-gray-200/50'} backdrop-blur-sm border`}>
                <div className="flex items-center space-x-3 mb-4">
                  <GrUserWorker className="w-6 h-6 text-rose-400" />
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>The Type of Work I Enjoy</h3>
                </div>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  Passionate about crafting web solutions that work as beautifully as they look. From responsive React interfaces to powerful Node.js backends, I build applications that solve real problems while offering smooth, user-friendly experiences.
                </p>
              </div>

              <div className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/80 border-gray-200/50'} backdrop-blur-sm border`}>
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="w-6 h-6 text-red-700" />
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Life Outside Code</h3>
                </div>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-4`}>
                      When I'm away from the keyboard, I enjoy activities that spark creativity and curiosity:
                </p>
                <div className="space-y-2">
                  {[
                    { icon: <BookOpen className="w-4 h-4" />, text: "Reading - Exploring tech blogs, fiction, and self-development books" },
                    { icon: <Globe className="w-4 h-4" />, text: "Travel & Culture - Discovering new places and cultures" },
                    { icon: <Coffee className="w-4 h-4" />, text: "Coffee Rituals - Enjoying different brews while brainstorming ideas" },
                    { icon: <Trees className="w-4 h-4" />, text: "Planting Trees - Participating in local tree-planting drives" },
                    { icon: <GiPrayer className="w-4 h-4" />, text: "Prayer & Meditation - Maintaining focus and inner peace" }
                  ].map((hobby, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="text-blue-400">{hobby.icon}</div>
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{hobby.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Personality Showcase */}
            <div className="space-y-6">
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30' : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-400/30'} backdrop-blur-sm border`}>
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>My Personality</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-cyan-800 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { trait: "Problem Solver", icon: <Brain className="w-5 h-5" />, color: "text-blue-400" },
                    { trait: "Creative Thinker", icon: <Lightbulb className="w-5 h-5" />, color: "text-purple-400" },
                    { trait: "Team Player", icon: <Users className="w-5 h-5" />, color: "text-green-400" },
                    { trait: "Continuous Learner", icon: <BookOpen className="w-5 h-5" />, color: "text-orange-400" },
                    { trait: "Detail Oriented", icon: <Eye className="w-5 h-5" />, color: "text-pink-400" },
                    { trait: "Goal Driven", icon: <Target className="w-5 h-5" />, color: "text-cyan-400" }
                  ].map((trait, index) => (
                    <div key={index} className={`flex items-center space-x-2 p-3 rounded-lg ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm`}>
                      <div className={trait.color}>{trait.icon}</div>
                      <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{trait.trait}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/80 border-gray-200/50'} backdrop-blur-sm border`}>
                <div className="flex items-center space-x-3 mb-4">
                  <Quote className="w-6 h-6 text-cyan-600" />
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Code, Coffee & Curiosity</h3>
                </div>
                <blockquote className={`${isDark ? 'text-gray-300' : 'text-gray-600'} italic text-lg leading-relaxed border-l-4 border-cyan-400 pl-4`}>
                  "I live where logic meets creativity. Fueled by coffee and curiosity, I turn wild ideas into web experiences that are both useful and fun. Expect a few experiments, a sprinkle of innovation, and always a solution that makes life a little smoother."
                </blockquote>
                <div className="text-right mt-4">
                  <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}> </span>
                </div>
              </div>

              <div className={`p-6 rounded-2xl ${isDark ? 'bg-gradient-to-br from-gray-600/20 to-gray-600/20 border-gray-500/30' : 'bg-gradient-to-br from-gray-500/20 to-gray-500/20 border-gray-400/30'} backdrop-blur-sm border`}>
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}> Goals</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "🎨 Master modern frontend tools like React.js, Tailwind CSS & Next.js",
                    "🖌️ Explore UI/UX design to make digital experiences seamless",
                    "📖 Learn continuously while keeping knowledge and ethics aligned with Islamic values",
                    "🤝 Share skills and mentor others in the developer community"
                  ].map((goal, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="mt-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExperienceSection isDark={isDark} />

      {/* ============== PROJECTS SECTION ============== */}
      <section id="projects" className="relative py-20 px-6" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header with Creative Design */}
          <div className="text-center mb-20">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-rose-400/20 rounded-full blur-2xl"></div>
              <div className="relative flex items-center justify-center space-x-4 mb-6">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
                <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
                <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm">Portfolio Showcase</span>
                <Sparkles className="w-6 h-6 text-rose-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-rose-400"></div>
              </div>
            </div>

            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'} leading-tight`}>
              Creative{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-cyan-400  to-cyan-800 bg-clip-text text-transparent">
                  Projects
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400  to-cyan-800 rounded-full"></div>
              </span>
            </h2>

            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed mb-8`}>
              Explore my collection of innovative projects that blend cutting-edge technology with creative design solutions.
              Each project represents a unique challenge solved with passion and precision.
            </p>

            {/* Project Stats */}
            <div className="flex justify-center space-x-8 mb-12">
              {[
                { number: sampleProjects.length, label: "Projects", icon: <Code className="w-5 h-5" /> },
                { number: sampleProjects.filter(p => p.status === 'featured').length, label: "Featured", icon: <Star className="w-5 h-5" /> },
                { number: sampleProjects.reduce((acc, p) => acc + p.techStack.length, 0), label: "Technologies", icon: <Zap className="w-5 h-5" /> }
              ].map((stat, index) => (
                <div key={index} className={`text-center p-4 rounded-xl ${isDark ? 'bg-gray-800/30' : 'bg-white/30'} backdrop-blur-sm border ${isDark ? 'border-gray-700/30' : 'border-gray-300/30'}`}>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div className="text-cyan-400">{stat.icon}</div>
                    <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{stat.number}</span>
                  </div>
                  <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects Hero Section */}
          <div className="mb-18 px-4 md:px-0">
  <div className="grid gap-6">
    {sampleProjects.filter(project => project.status === 'featured').map((project, index) => (
      <div key={project.id} className={`group relative overflow-hidden rounded-2xl project-card-mobile ${isDark ? 'bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-gray-900/90' : 'bg-gradient-to-br from-white/90 via-gray-50/50 to-white/90'} backdrop-blur-sm border ${isDark ? 'border-gray-700/50' : 'border-gray-300/50'} shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.01] mx-2 md:mx-0`}>
        
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Floating Elements */}
        <div className="absolute top-3 right-3 flex space-x-2 z-10">
          <div className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full flex items-center space-x-1">
            <Star className="w-3 h-3 fill-current" />
            <span>FEATURED</span>
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${isDark ? 'bg-gray-800/80 text-gray-300' : 'bg-white/80 text-gray-700'} backdrop-blur-sm`}>
            {project.category}
          </div>
        </div>

        <div className={`grid lg:grid-cols-2 gap-0 min-h-[400px] md:h-96`}>
          {/* Project Image */}
          <div className={`relative h-48 md:h-full overflow-hidden featured-project-image order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-1'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-500"></div>
            <ProjectImage
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Floating Tech Stack */}
            <div className="absolute bottom-3 left-3 right-3">
              <div className="flex flex-wrap gap-1">
                {project.techStack.slice(0, 3).map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-black/70 backdrop-blur-md text-white text-xs font-medium rounded-full">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="px-2 py-1 bg-black/70 backdrop-blur-md text-white text-xs font-medium rounded-full">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Hover Play Button for Demo Video */}
            {project.demoVideo && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div
                  className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer pointer-events-auto"
                  onClick={() => window.open(project.demoVideo, '_blank')}
                >
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className={`p-4 md:p-6 flex flex-col justify-center order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-2'}`}>
            <div className="space-y-3 md:space-y-4">
              <div>
                <h3 className={`text-lg md:text-2xl font-bold mb-2 md:mb-3 ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-cyan-800 group-hover:bg-clip-text transition-all duration-500`}>
                  {project.title}
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {project.description}
                </p>
              </div>

              {/* Project Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {project.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className={`text-center p-2 rounded-lg ${isDark ? 'bg-gray-800/50' : 'bg-gray-100/50'} backdrop-blur-sm`}>
                    <span className={`text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 relative z-20">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.liveUrl, '_blank');
                  }}
                  className="flex-1 py-2 bg-gradient-to-r from-cyan-500 to-cyan-800 text-white rounded-lg font-medium hover:from-cyan-800 hover:to-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2 group/btn text-sm"
                >
                  <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                  <span>Live Demo</span>
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.githubUrl, '_blank');
                  }}
                  className={`px-4 py-2 ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 group/btn text-sm`}
                >
                  <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                </button>
                {project.demoVideo && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(project.demoVideo, '_blank');
                    }}
                    className={`px-3 py-2 ${isDark ? 'bg-red-600 hover:bg-red-700' : 'bg-red-500 hover:bg-red-600'} text-white rounded-lg font-medium transition-all duration-300 flex items-center space-x-1 group/btn text-sm`}
                  >
                    <Play className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* View Project Details Button */}
              <div className="mt-3">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleViewProjectDetails(project);
                  }}
                  className={`w-full py-2 ${isDark ? 'bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white border border-gray-600/50 hover:border-gray-500/50' : 'bg-white/50 hover:bg-white/70 text-gray-700 hover:text-gray-900 border border-gray-300/50 hover:border-gray-400/50'} rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 group/details backdrop-blur-sm`}
                >
                  <Eye className="w-4 h-4 group-hover/details:scale-110 transition-transform duration-300" />
                  <span>View Project Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/details:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


          {/* Other Projects - Card Grid */}
          <div className="mb-26">
            <div className="text-center mb-12">
              <h3 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                More <span className="bg-gradient-to-r from-cyan-400 to-cyan-800 bg-clip-text text-transparent">Projects</span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-cyan-800 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sampleProjects.filter(project => project.status !== 'featured').map((project) => (
                <div key={project.id} className={`group relative overflow-hidden rounded-xl ${isDark ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border ${isDark ? 'border-gray-700/50' : 'border-gray-300/50'} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  {/* Status Badge */}
                  <div className="absolute top-2 right-2 z-10">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      project.status === 'active'
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-500 text-white'
                    }`}>
                      {project.status.toUpperCase()}
                    </span>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-40 overflow-hidden">
                    <ProjectImage
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute bottom-2 left-2">
                      <span className="px-2 py-1 bg-black/70 backdrop-blur-md text-white text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4">
                    <h4 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-cyan-800 group-hover:bg-clip-text transition-all duration-300`}>
                      {project.title}
                    </h4>

                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-xs mb-3 leading-relaxed line-clamp-3`}>
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.highlights.slice(0, 2).map((highlight, index) => (
                        <span key={index} className={`px-2 py-1 rounded-md text-xs font-medium ${isDark ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.techStack.slice(0, 2).map((tech, index) => (
                        <span key={index} className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${isDark ? 'bg-gray-700 text-gray-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-800 hover:text-white' : 'bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-800 hover:text-white'} cursor-default transform hover:scale-105`}>
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 2 && (
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${isDark ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
                          +{project.techStack.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <button
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="flex-1 py-2 bg-gradient-to-r from-cyan-400 to-cyan-800 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-cyan-800 transition-all duration-300 flex items-center justify-center space-x-1 group/btn text-xs"
                      >
                        <ExternalLink className="w-3 h-3 group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span>View</span>
                      </button>
                      <button
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className={`px-3 py-2 ${isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} rounded-lg transition-all duration-300 group/btn`}
                      >
                        <Github className="w-3 h-3 group-hover/btn:scale-110 transition-transform duration-300" />
                      </button>
                      {project.demoVideo && (
                        <button
                          onClick={() => window.open(project.demoVideo, '_blank')}
                          className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300 group/btn"
                        >
                          <Play className="w-3 h-3" />
                        </button>
                      )}
                    </div>

                    {/* View Project Details Button */}
                    <div className="mt-3">
                      <button
                        onClick={() => handleViewProjectDetails(project)}
                        className={`w-full py-2 ${isDark ? 'bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white border border-gray-600/50 hover:border-gray-500/50' : 'bg-white/50 hover:bg-white/70 text-gray-700 hover:text-gray-900 border border-gray-300/50 hover:border-gray-400/50'} rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 group/details backdrop-blur-sm text-xs`}
                      >
                        <Eye className="w-3 h-3 group-hover/details:scale-110 transition-transform duration-300" />
                        <span>View Details</span>
                        <ArrowRight className="w-3 h-3 group-hover/details:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="text-center">
            <div className={`inline-block p-8 rounded-3xl ${isDark ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80' : 'bg-gradient-to-br from-white/80 to-gray-50/80'} backdrop-blur-sm border ${isDark ? 'border-gray-700/50' : 'border-gray-300/50'} shadow-xl relative overflow-hidden`}>
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-rose-500/10 to-pink-500/10 animate-pulse"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Rocket className="w-8 h-8 text-blu-400" />
                  <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Let's Build Something{' '}
                    <span className="bg-gradient-to-r from-cyan-400 to-cyan-800 bg-clip-text text-transparent">
                      New
                    </span>
                  </h3>
                  <Rocket className="w-8 h-8 text-rose-400" />
                </div>

                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-8 text-lg max-w-2xl mx-auto`}>
                  Have an exciting project in mind? I'm always open to discussing new opportunities and bringing innovative ideas to life.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-800 text-white rounded-xl font-semibold hover:from-cyan-700 hover:to-cyan-400 transition-all duration-300 flex items-center space-x-2 group transform hover:scale-105 hover:shadow-lg"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Get In Touch</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  <button
                    onClick={downloadResume}
                    className={`px-8 py-4 ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 group transform hover:scale-105`}
                  >
                    <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Download Resume</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection isDark={isDark} />
      <SkillsSection isDark={isDark} />
      <FunFactsSection isDark={isDark} />
      <Education isDark={isDark} />
      <ContactMe isDark={isDark} />

      
    </div>
  );
}