import { Award } from 'lucide-react';

export default function Achievements() {
  return (
    <div className="min-h-screen px-6 py-24 bg-gradient-to-br from-[#132647] to-[#1a3d5c]/50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center">
          <span className="text-[#64FFDA]">02.</span> Key Achievements & Competitions
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#1a3d5c] p-8 rounded-lg border border-[#64FFDA]/30 hover:border-[#64FFDA] transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl">
            <Award className="w-12 h-12 text-[#FFD700] mb-4" />
            <h3 className="text-xl font-bold mb-3 text-[#E6F1FF]">Bronze Medal</h3>
            <p className="text-[#A8B5D1]">STEMCO Mathematical Olympiad</p>
            <p className="text-sm text-[#64FFDA] mt-3 font-semibold">Recognition in competitive mathematics</p>
          </div>

          <div className="bg-[#1a3d5c] p-8 rounded-lg border border-[#64FFDA]/30 hover:border-[#64FFDA] transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl">
            <Award className="w-12 h-12 text-[#64FFDA] mb-4" />
            <h3 className="text-xl font-bold mb-3 text-[#E6F1FF]">Top 1‰ Globally</h3>
            <p className="text-[#A8B5D1]">Online Physics Olympiad (OPHO)</p>
            <p className="text-sm text-[#64FFDA] mt-3 font-semibold">Highest African score in history</p>
          </div>

          <div className="bg-[#1a3d5c] p-8 rounded-lg border border-[#64FFDA]/30 hover:border-[#64FFDA] transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl">
            <Award className="w-12 h-12 text-[#64FFDA] mb-4" />
            <h3 className="text-xl font-bold mb-3 text-[#E6F1FF]">Top 3% Ranking</h3>
            <p className="text-[#A8B5D1]">54th out of 1,986 teams</p>
            <p className="text-sm text-[#64FFDA] mt-3 font-semibold">International Physics Brawl</p>
          </div>
        </div>

        <div className="mt-16 bg-[#132647]/50 p-8 rounded-lg border border-[#64FFDA]/20">
          <h2 className="text-2xl font-bold text-[#E6F1FF] mb-4">Recognition</h2>
          <p className="text-[#A8B5D1] leading-relaxed">
            These achievements represent years of dedication to mastering physics and mathematics at the highest levels.
            Through rigorous competition and continuous learning, I've developed problem-solving skills that translate
            directly to real-world scientific challenges.
          </p>
        </div>
      </div>
    </div>
  );
}
