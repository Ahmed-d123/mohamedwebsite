import { Mail, Linkedin, Download } from 'lucide-react';

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-black/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-black font-bold text-lg hover:text-gray-600 transition-colors"
          >
            M.E
          </button>
          <div className="flex gap-8 text-sm font-medium">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-black transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('achievements')}
              className="text-gray-700 hover:text-black transition-colors"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection('paid-work')}
              className="text-gray-700 hover:text-black transition-colors"
            >
              Paid Work
            </button>
            <button
              onClick={() => scrollToSection('activities')}
              className="text-gray-700 hover:text-black transition-colors"
            >
              Activities
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-black transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('research')}
              className="text-gray-700 hover:text-black transition-colors"
            >
              Research
            </button>
          </div>
        </div>
      </nav>

      <footer className="py-16 px-6 bg-black border-t border-white/20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
          <div className="flex justify-center gap-6 mb-8 flex-wrap">
            <a
              href="mailto:muhamed.ahmed.elewa@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black border border-white rounded-lg hover:bg-gray-200 transition-all duration-300 font-semibold"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black border border-white rounded-lg hover:bg-gray-200 transition-all duration-300 font-semibold"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </a>
          </div>
          <p className="text-gray-200 text-sm mb-4">
            Built with passion for physics and a vision for a sustainable future
          </p>
          <p className="text-gray-400 text-sm">
            muhamed.ahmed.elewa@gmail.com | +20 102 885 8775
          </p>
        </div>
      </footer>
    </>
  );
}
