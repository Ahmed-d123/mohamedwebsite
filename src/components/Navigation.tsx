import { Link, useLocation } from 'react-router-dom';
import { Mail, Linkedin, Download } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-white font-bold text-xl hover:text-gray-300 transition-colors">
            MSE
          </Link>
          <div className="flex gap-6 text-sm">
            <Link
              to="/about"
              className={`transition-colors ${isActive('/about') ? 'text-white' : 'hover:text-white text-gray-400'}`}
            >
              About
            </Link>
            <Link
              to="/achievements"
              className={`transition-colors ${isActive('/achievements') ? 'text-white' : 'hover:text-white text-gray-400'}`}
            >
              Achievements
            </Link>
            <Link
              to="/leadership"
              className={`transition-colors ${isActive('/leadership') ? 'text-white' : 'hover:text-white text-gray-400'}`}
            >
              Leadership
            </Link>
            <Link
              to="/projects"
              className={`transition-colors ${isActive('/projects') ? 'text-white' : 'hover:text-white text-gray-400'}`}
            >
              Projects
            </Link>
            <Link
              to="/research"
              className={`transition-colors ${isActive('/research') ? 'text-white' : 'hover:text-white text-gray-400'}`}
            >
              Research
            </Link>
          </div>
        </div>
      </nav>

      <footer className="py-16 px-6 bg-black border-t border-white/20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
          <div className="flex justify-center gap-6 mb-8 flex-wrap">
            <a
              href="mailto:contact@example.com"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 border border-white/30 rounded-lg hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 border border-white/30 rounded-lg hover:border-white hover:bg-white/10 transition-all duration-300"
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
          <p className="text-gray-400 text-sm">
            Built with passion for physics and a vision for a sustainable future
          </p>
        </div>
      </footer>
    </>
  );
}
