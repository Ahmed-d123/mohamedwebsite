import { Users, BookOpen, Award, Zap, Trophy } from 'lucide-react';

export default function Leadership() {
  return (
    <div className="min-h-screen px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center text-black">
          Activities
        </h1>

        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 shadow-xl">
            <Users className="w-12 h-12 text-black mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-black">ATSNEE Physics Club</h3>
            <p className="text-gray-600 mb-3 font-semibold">Co-Founder</p>
            <p className="text-gray-700">Mentored 85+ students across 7 countries, building a vibrant community dedicated to scientific discovery and collaborative learning.</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 shadow-xl">
            <Award className="w-12 h-12 text-black mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-black">TEDxMillennium</h3>
            <p className="text-gray-600 mb-3 font-semibold">Head of Research & Speaker</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Led research team and mentored 45 students on 15 research papers</li>
              <li>• Delivered keynote speech to 600+ youth attendees</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 shadow-xl">
            <Zap className="w-12 h-12 text-black mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-black">Tech Genius Tech (TGI)</h3>
            <p className="text-gray-600 mb-3 font-semibold">Research Mentor</p>
            <p className="text-gray-700">Mentored 60 students in conducting rigorous research projects and scientific investigations.</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 shadow-xl">
            <BookOpen className="w-12 h-12 text-black mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-black">Teaching Assistance</h3>
            <p className="text-gray-600 mb-3 font-semibold">Physics & Math Mentor</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Taught 31 physics sessions</li>
              <li>• Taught 28 math sessions</li>
              <li>• Provided personalized guidance to students</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 shadow-xl">
            <Award className="w-12 h-12 text-black mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-black">Dartmouth Pre-college Finance Program</h3>
            <p className="text-gray-600 mb-3 font-semibold">Participant</p>
            <p className="text-gray-700">Completed intensive program and developed a capstone project analyzing Apple's financial strategies and performance.</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 shadow-xl">
            <Trophy className="w-12 h-12 text-black mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-black">Build in a Box (BIAB)</h3>
            <p className="text-gray-600 mb-3 font-semibold">Winner - Best Created Idea</p>
            <p className="text-gray-700">Selected as 1 of 40 accepted ideas from 500 applicants. Developed and presented innovative concept.</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 shadow-xl">
            <Users className="w-12 h-12 text-black mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-black">Fanni Mobtaker Internship</h3>
            <p className="text-gray-600 mb-3 font-semibold">EJUST Research Experience</p>
            <p className="text-gray-700">Completed 7-day intensive internship program at the Egyptian-Japanese University of Science and Technology (EJUST).</p>
          </div>
        </div>
      </div>
    </div>
  );
}
