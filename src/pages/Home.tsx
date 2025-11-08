import { Atom, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 bg-gradient-to-br from-[#132647] to-[#1a3d5c]">
      <div className="max-w-4xl text-center">
        <div className="mb-6">
          <Atom className="w-16 h-16 text-[#64FFDA] mx-auto mb-4 animate-pulse" />
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#E6F1FF] to-[#64FFDA] bg-clip-text text-transparent">
          Mohamed Ahmed Said Elewa
        </h1>
        <p className="text-2xl md:text-3xl text-[#64FFDA] mb-8 font-light">
          Aspiring Physicist & STEM Innovator
        </p>
        <p className="text-lg md:text-xl text-[#A8B5D1] max-w-3xl mx-auto leading-relaxed mb-12">
          From Subatomic Particles to Sustainable Solutions
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate('/about')}
            className="flex items-center justify-center gap-2 px-8 py-3 bg-[#64FFDA] text-[#132647] font-semibold rounded-lg hover:bg-[#64FFDA]/90 transition-all duration-300 shadow-lg"
          >
            Explore Portfolio <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
