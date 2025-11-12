import { Briefcase } from 'lucide-react';

export default function PaidWork() {
  return (
    <div className="min-h-screen px-6 py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center text-black">
          Paid Work
        </h1>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl">
            <Briefcase className="w-12 h-12 text-black mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-black">DSAT Math Prep Academy</h3>
            <p className="text-gray-600 mb-3">Founder & Coach</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-black font-bold mt-1">•</span>
                <span>Coached students to 680-740 score range</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-bold mt-1">•</span>
                <span>Designed and developed all study materials</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl">
            <Briefcase className="w-12 h-12 text-black mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-black">Educational Books Writer</h3>
            <p className="text-gray-600 mb-3">Content Creator & Formatter</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-black font-bold mt-1">•</span>
                <span>Authored and formatted 23 educational books</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-bold mt-1">•</span>
                <span>Each book ranging from 170 to 500 pages</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl">
            <Briefcase className="w-12 h-12 text-black mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-black">Al-Hamd Office</h3>
            <p className="text-gray-600 mb-3">Accountant Assistant</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-black font-bold mt-1">•</span>
                <span>Managed office expenses and income tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-bold mt-1">•</span>
                <span>Assisted with financial statements preparation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
