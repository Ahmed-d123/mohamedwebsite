import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-[#132647]/95 backdrop-blur-sm z-50 border-b border-[#64FFDA]/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-[#64FFDA] font-bold text-xl hover:text-[#64FFDA]/80 transition-colors">
          MSE
        </Link>
        <div className="flex gap-6 text-sm">
          <Link
            to="/about"
            className={`transition-colors ${isActive('/about') ? 'text-[#64FFDA]' : 'hover:text-[#64FFDA] text-[#A8B5D1]'}`}
          >
            About
          </Link>
          <Link
            to="/achievements"
            className={`transition-colors ${isActive('/achievements') ? 'text-[#64FFDA]' : 'hover:text-[#64FFDA] text-[#A8B5D1]'}`}
          >
            Achievements
          </Link>
          <Link
            to="/leadership"
            className={`transition-colors ${isActive('/leadership') ? 'text-[#64FFDA]' : 'hover:text-[#64FFDA] text-[#A8B5D1]'}`}
          >
            Leadership
          </Link>
          <Link
            to="/projects"
            className={`transition-colors ${isActive('/projects') ? 'text-[#64FFDA]' : 'hover:text-[#64FFDA] text-[#A8B5D1]'}`}
          >
            Projects
          </Link>
          <Link
            to="/research"
            className={`transition-colors ${isActive('/research') ? 'text-[#64FFDA]' : 'hover:text-[#64FFDA] text-[#A8B5D1]'}`}
          >
            Research
          </Link>
        </div>
      </div>
    </nav>
  );
}
