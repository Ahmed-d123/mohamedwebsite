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
    <nav className="fixed top-0 w-full bg-[#132647]/95 backdrop-blur-sm z-50 border-b border-[#64FFDA]/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-[#64FFDA] font-bold text-xl hover:text-[#64FFDA]/80 transition-colors"
        >
          M.E
        </button>
        <div className="flex gap-6 text-sm">
          <button
            onClick={() => scrollToSection('about')}
            className={`transition-colors ${isActive('about') ? 'text-[#64FFDA]' : 'hover:text-[#64FFDA] text-[#A8B5D1]'}`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('achievements')}
            className={`transition-colors ${isActive('achievements') ? 'text-[#64FFDA]' : 'hover:text-[#64FFDA] text-[#A8B5D1]'}`}
          >
            Achievements
          </button>
          <button
            onClick={() => scrollToSection('paid-work')}
            className={`transition-colors ${isActive('paid-work') ? 'text-[#64FFDA]' : 'hover:text-[#64FFDA] text-[#A8B5D1]'}`}
          >
            Paid Work
          </button>
          <button
            onClick={() => scrollToSection('activities')}
            className={`transition-colors ${isActive('activities') ? 'text-[#64FFDA]' : 'hover:text-[#64FFDA] text-[#A8B5D1]'}`}
          >
            Activities
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className={`transition-colors ${isActive('projects') ? 'text-[#64FFDA]' : 'hover:text-[#64FFDA] text-[#A8B5D1]'}`}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('research')}
            className={`transition-colors ${isActive('research') ? 'text-[#64FFDA]' : 'hover:text-[#64FFDA] text-[#A8B5D1]'}`}
          >
            Research
          </button>
        </div>
      </div>
    </nav>
  );
}
