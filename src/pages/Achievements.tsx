import { Award } from 'lucide-react';

export default function Achievements() {
  return (
    <div className="min-h-screen px-6 py-24 bg-gradient-to-br from-black to-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center">
          <span className="text-white">02.</span> Key Achievements & Competitions
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg border border-white/30 hover:border-white transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl">
            <Award className="w-12 h-12 text-[#FFD700] mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">Bronze Medal</h3>
            <p className="text-gray-400">STEMCO Mathematical Olympiad</p>
            <p className="text-sm text-white mt-3 font-semibold">Recognition in competitive mathematics</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg border border-white/30 hover:border-white transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl">
            <Award className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">Top 1‰ Globally</h3>
            <p className="text-gray-400">Online Physics Olympiad (OPHO)</p>
            <p className="text-sm text-white mt-3 font-semibold">Highest African score in history</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg border border-white/30 hover:border-white transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl">
            <Award className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">Top 3% Ranking</h3>
            <p className="text-gray-400">54th out of 1,986 teams</p>
            <p className="text-sm text-white mt-3 font-semibold">International Physics Brawl</p>
          </div>
        </div>

        <div className="mt-16 bg-black/50 p-8 rounded-lg border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">Recognition</h2>
          <p className="text-gray-400 leading-relaxed">
            These achievements represent years of dedication to mastering physics and mathematics at the highest levels.
            Through rigorous competition and continuous learning, I've developed problem-solving skills that translate
            directly to real-world scientific challenges.
          </p>
        </div>
      </div>
    </div>
  );
}
