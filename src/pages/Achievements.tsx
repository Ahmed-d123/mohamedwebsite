import { Award } from 'lucide-react';

export default function Achievements() {
  return (
    <div className="min-h-screen px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center text-black">
          Achievements
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] shadow-xl">
            <Award className="w-12 h-12 text-black mb-4" />
            <h3 className="text-xl font-bold mb-3 text-black">OPHO 2025</h3>
            <p className="text-gray-700 font-semibold mb-2">3rd Place Globally</p>
            <p className="text-gray-600">Ranked 3rd out of 1,000 teams globally (Top 1%)</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] shadow-xl">
            <Award className="w-12 h-12 text-black mb-4" />
            <h3 className="text-xl font-bold mb-3 text-black">IPHB</h3>
            <p className="text-gray-700 font-semibold mb-2">Africa's Highest Score in History</p>
            <p className="text-gray-600">Top 3% globally (54th out of 1,986 teams)</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] shadow-xl">
            <Award className="w-12 h-12 text-black mb-4" />
            <h3 className="text-xl font-bold mb-3 text-black">STEMCO</h3>
            <p className="text-gray-700 font-semibold mb-2">Bronze Medal</p>
            <p className="text-gray-600">Top 150 out of 1,667 competitors</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] shadow-xl">
            <Award className="w-12 h-12 text-black mb-4" />
            <h3 className="text-xl font-bold mb-3 text-black">Fanni Mobtaker</h3>
            <p className="text-gray-700 font-semibold mb-2">1st Place in Matrouh</p>
            <p className="text-gray-600">Top 20 Semifinalist out of 4,251 competitors</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] shadow-xl">
            <Award className="w-12 h-12 text-black mb-4" />
            <h3 className="text-xl font-bold mb-3 text-black">IMB</h3>
            <p className="text-gray-700 font-semibold mb-2">Top 13% Globally</p>
            <p className="text-gray-600">International Math Battle ranking</p>
          </div>
        </div>
      </div>
    </div>
  );
}
