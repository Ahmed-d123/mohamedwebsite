import { BookOpen } from 'lucide-react';

export default function Research() {
  return (
    <div className="min-h-screen px-6 py-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center text-black">
          Research
        </h1>

        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] group">
            <BookOpen className="w-10 h-10 text-black mb-3 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500" />
            <h3 className="text-2xl font-bold mb-3 text-black transition-colors duration-300">
              Higgs Boson and Its Effect on Life Formation
            </h3>
            <p className="text-gray-600 mb-3 font-semibold">Nuclear Physics Research</p>
            <p className="text-gray-700 leading-relaxed">
              Comprehensive research exploring the fundamental role of the Higgs boson mechanism in mass generation and its profound implications for the emergence of complex life structures across the universe.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] group">
            <BookOpen className="w-10 h-10 text-black mb-3 group-hover:scale-125 group-hover:-rotate-6 transition-all duration-500" />
            <h3 className="text-2xl font-bold mb-3 text-black transition-colors duration-300">
              Motion with Zero Final Velocity in One Dimension
            </h3>
            <p className="text-gray-600 mb-3 font-semibold">Physics & Aerospace Research</p>
            <p className="text-gray-700 leading-relaxed">
              Advanced mathematical and physical analysis of kinematic scenarios where objects reach a state of rest. Explores theoretical frameworks and practical applications in aerospace engineering and energy optimization systems.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] group">
            <BookOpen className="w-10 h-10 text-black mb-3 group-hover:scale-125 transition-all duration-500" />
            <h3 className="text-2xl font-bold mb-3 text-black transition-colors duration-300">
              TEDx Worldwide Study
            </h3>
            <p className="text-gray-600 mb-3 font-semibold">Review Paper</p>
            <p className="text-gray-700 leading-relaxed">
              Comprehensive review and analysis of the TEDx movement, its global impact, and the patterns of innovation and thought leadership shared across the worldwide TEDx network.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
