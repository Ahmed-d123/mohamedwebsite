import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const isActive = (sectionId: string) => activeSection === sectionId;

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-white font-bold text-xl hover:text-gray-300 transition-colors"
        >
          M.E
        </button>
        <div className="flex gap-6 text-sm">
          <button
            onClick={() => scrollToSection('about')}
            className={`relative transition-colors ${isActive('about') ? 'text-white' : 'hover:text-white text-gray-400'} group`}
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection('achievements')}
            className={`relative transition-colors ${isActive('achievements') ? 'text-white' : 'hover:text-white text-gray-400'} group`}
          >
            Achievements
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection('paid-work')}
            className={`relative transition-colors ${isActive('paid-work') ? 'text-white' : 'hover:text-white text-gray-400'} group`}
          >
            Paid Work
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection('activities')}
            className={`relative transition-colors ${isActive('activities') ? 'text-white' : 'hover:text-white text-gray-400'} group`}
          >
            Activities
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className={`relative transition-colors ${isActive('projects') ? 'text-white' : 'hover:text-white text-gray-400'} group`}
          >
            Projects
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection('research')}
            className={`relative transition-colors ${isActive('research') ? 'text-white' : 'hover:text-white text-gray-400'} group`}
          >
            Research
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
