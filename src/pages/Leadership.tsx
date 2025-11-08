import { Users, BookOpen } from 'lucide-react';

export default function Leadership() {
  return (
    <div className="min-h-screen px-6 py-24 bg-gradient-to-br from-[#1a3d5c]/50 to-[#132647]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center">
          <span className="text-[#64FFDA]">03.</span> Leadership & Mentorship
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#132647] p-8 rounded-lg border border-[#64FFDA]/20 shadow-xl hover:border-[#64FFDA] transition-all duration-300">
            <Users className="w-12 h-12 text-[#64FFDA] mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-[#E6F1FF]">Co-founder, ATSNEE Physics Club</h3>
            <p className="text-[#A8B5D1] leading-relaxed">
              Mentored <span className="text-[#64FFDA] font-semibold">85+ students across 7 countries</span>,
              building a vibrant community dedicated to scientific discovery and collaborative learning.
            </p>
            <div className="mt-4 text-sm text-[#64FFDA] font-semibold">
              Global impact • Community building • Scientific excellence
            </div>
          </div>

          <div className="bg-[#132647] p-8 rounded-lg border border-[#64FFDA]/20 shadow-xl hover:border-[#64FFDA] transition-all duration-300">
            <BookOpen className="w-12 h-12 text-[#64FFDA] mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-[#E6F1FF]">Head of Research, TEDxMillennium</h3>
            <p className="text-[#A8B5D1] leading-relaxed">
              Guided students in writing research papers and presenting scientific ideas to
              <span className="text-[#64FFDA] font-semibold"> hundreds of youth</span>, fostering a culture of
              intellectual curiosity and public engagement.
            </p>
            <div className="mt-4 text-sm text-[#64FFDA] font-semibold">
              Research guidance • Science communication • Youth engagement
            </div>
          </div>
        </div>

        <div className="bg-[#1a3d5c] p-8 rounded-lg border border-[#64FFDA]/20">
          <h2 className="text-2xl font-bold text-[#E6F1FF] mb-4">Impact & Vision</h2>
          <p className="text-[#A8B5D1] leading-relaxed">
            My leadership journey reflects a commitment to elevating scientific discourse and empowering the next generation
            of thinkers. By fostering communities of learning and innovation, I believe we can accelerate progress toward
            solving humanity's greatest challenges through science and technology.
          </p>
        </div>
      </div>
    </div>
  );
}
