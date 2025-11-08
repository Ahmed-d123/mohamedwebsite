import { Users, BookOpen } from 'lucide-react';

export default function Leadership() {
  return (
    <div className="min-h-screen px-6 py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center text-black">
          <span className="text-black">03.</span> Leadership & Mentorship
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-xl hover:border-black transition-all duration-300">
            <Users className="w-12 h-12 text-black mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-black">Co-founder, ATSNEE Physics Club</h3>
            <p className="text-gray-700 leading-relaxed">
              Mentored <span className="text-black font-semibold">85+ students across 7 countries</span>,
              building a vibrant community dedicated to scientific discovery and collaborative learning.
            </p>
            <div className="mt-4 text-sm text-black font-semibold">
              Global impact • Community building • Scientific excellence
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-xl hover:border-black transition-all duration-300">
            <BookOpen className="w-12 h-12 text-black mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-black">Head of Research, TEDxMillennium</h3>
            <p className="text-gray-700 leading-relaxed">
              Guided students in writing research papers and presenting scientific ideas to
              <span className="text-black font-semibold"> hundreds of youth</span>, fostering a culture of
              intellectual curiosity and public engagement.
            </p>
            <div className="mt-4 text-sm text-black font-semibold">
              Research guidance • Science communication • Youth engagement
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-black mb-4">Impact & Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            My leadership journey reflects a commitment to elevating scientific discourse and empowering the next generation
            of thinkers. By fostering communities of learning and innovation, I believe we can accelerate progress toward
            solving humanity's greatest challenges through science and technology.
          </p>
        </div>
      </div>
    </div>
  );
}
