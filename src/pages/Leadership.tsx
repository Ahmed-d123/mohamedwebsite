import { Users, BookOpen } from 'lucide-react';

export default function Leadership() {
  return (
    <div className="min-h-screen px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center text-black">
          <span className="text-black">03.</span> Leadership & Mentorship
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-black p-8 rounded-lg border border-white/30 shadow-xl hover:border-white transition-all duration-300">
            <Users className="w-12 h-12 text-white mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-white">Co-founder, ATSNEE Physics Club</h3>
            <p className="text-gray-300 leading-relaxed">
              Mentored <span className="text-white font-semibold">85+ students across 7 countries</span>,
              building a vibrant community dedicated to scientific discovery and collaborative learning.
            </p>
            <div className="mt-4 text-sm text-white font-semibold">
              Global impact • Community building • Scientific excellence
            </div>
          </div>

          <div className="bg-black p-8 rounded-lg border border-white/30 shadow-xl hover:border-white transition-all duration-300">
            <BookOpen className="w-12 h-12 text-white mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-white">Head of Research, TEDxMillennium</h3>
            <p className="text-gray-300 leading-relaxed">
              Guided students in writing research papers and presenting scientific ideas to
              <span className="text-white font-semibold"> hundreds of youth</span>, fostering a culture of
              intellectual curiosity and public engagement.
            </p>
            <div className="mt-4 text-sm text-white font-semibold">
              Research guidance • Science communication • Youth engagement
            </div>
          </div>
        </div>

        <div className="bg-black p-8 rounded-lg border border-white/30">
          <h2 className="text-2xl font-bold text-white mb-4">Impact & Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            My leadership journey reflects a commitment to elevating scientific discourse and empowering the next generation
            of thinkers. By fostering communities of learning and innovation, I believe we can accelerate progress toward
            solving humanity's greatest challenges through science and technology.
          </p>
        </div>
      </div>
    </div>
  );
}
