import { ChevronDown, Award, Briefcase, Users, Code, BookOpen } from 'lucide-react';

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-4xl text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-black">
            Mohamed Ahmed Said Elewa
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
            Physicist Researcher & STEM Innovator
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Physics researcher with proven excellence in competitions and education
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="flex items-center justify-center gap-2 px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 mx-auto"
          >
            Scroll for more
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </section>

      <section id="about" className="min-h-screen px-6 py-24 flex items-center bg-white">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-black">About</h2>
          <div className="bg-gray-50 p-12 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-lg leading-relaxed text-gray-700">
              Student at <span className="font-semibold">Applied Technology Nuclear School</span> with a 93.25% grade average.
              Physics researcher and TEDx speaker dedicated to advancing scientific knowledge. Achieved Africa's highest historical scores in
              the <span className="font-semibold">Online Physics Olympiad (OPHO)</span> and <span className="font-semibold">International Physics Brawl (IPHB)</span>.
              Co-Founder of <span className="font-semibold">ATSNEE Physics Club</span> and Founder of <span className="font-semibold">DSAT Math Prep Academy</span>.
            </p>
          </div>
        </div>
      </section>

      <section id="achievements" className="min-h-screen px-6 py-24 flex items-center bg-gray-50">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-black">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <Award className="w-10 h-10 text-black mb-4" />
              <h3 className="text-xl font-bold mb-2 text-black">OPHO 2025</h3>
              <p className="text-gray-700">Ranked 3rd place out of 1,000 teams globally (Top 1%)</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <Award className="w-10 h-10 text-black mb-4" />
              <h3 className="text-xl font-bold mb-2 text-black">IPHB</h3>
              <p className="text-gray-700">Highest African Score in History. Ranked in top 3% globally (54th/1,986 teams)</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <Award className="w-10 h-10 text-black mb-4" />
              <h3 className="text-xl font-bold mb-2 text-black">STEMCO</h3>
              <p className="text-gray-700">Bronze Medal (Top 150/1,667 competitors)</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <Award className="w-10 h-10 text-black mb-4" />
              <h3 className="text-xl font-bold mb-2 text-black">Fanni Mobtaker</h3>
              <p className="text-gray-700">1st Place in Matrouh Governorate & Top 20 Semifinalist (out of 4,251)</p>
            </div>
          </div>
        </div>
      </section>

      <section id="paid-work" className="min-h-screen px-6 py-24 flex items-center bg-white">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-black">Paid Work</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm">
              <Briefcase className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">DSAT Math Prep Academy (Founder)</h3>
              <p className="text-gray-700 leading-relaxed">
                Coached students to 680-740 scores on standardized tests. Designed and developed all comprehensive study materials from scratch.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm">
              <BookOpen className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">Learning Books Writer</h3>
              <p className="text-gray-700 leading-relaxed">
                Wrote and formatted 23 educational books, each ranging from 170 to 500 pages. Contributed to multiple educational platforms.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm">
              <Briefcase className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">Accountant Assistance (Al-Hamd Office)</h3>
              <p className="text-gray-700 leading-relaxed">
                Managed office expenses and income tracking. Assisted with preparing financial statements and maintaining accurate records.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="activities" className="min-h-screen px-6 py-24 flex items-center bg-gray-50">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-black">Activities</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <Users className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">ATSNEE Physics Club (Co-Founder)</h3>
              <p className="text-gray-700 leading-relaxed">
                Mentored 85+ students across 7 countries, building a vibrant global community dedicated to scientific discovery and collaborative learning.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <BookOpen className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">TEDxMillennium (Head of Research & Speaker)</h3>
              <p className="text-gray-700 leading-relaxed">
                Led research team and mentored 45 students on 15 research papers. Served as speaker engaging 600+ youth on scientific topics.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <Users className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">Tech Genius Tech (TGI) (Research Mentor)</h3>
              <p className="text-gray-700 leading-relaxed">
                Mentored 60 students in conducting rigorous research projects across various scientific disciplines.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <BookOpen className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">Teacher Assistance (Physics & Math Mentor)</h3>
              <p className="text-gray-700 leading-relaxed">
                Taught 31 physics sessions and 28 math sessions, helping students master fundamental concepts in both disciplines.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <Award className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">Dartmouth Pre-college Finance Program</h3>
              <p className="text-gray-700 leading-relaxed">
                Completed comprehensive program with a capstone project analyzing Apple Inc.'s financial performance and strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen px-6 py-24 flex items-center bg-white">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-black">Projects</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm">
              <Code className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">Solar Panel (Graduation Project)</h3>
              <p className="text-gray-700 leading-relaxed">
                Designed and implemented a 1,400-watt solar power plant for a school building, demonstrating practical application of renewable energy principles.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm">
              <Code className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">Research Rover</h3>
              <p className="text-gray-700 leading-relaxed">
                Created an advanced rover designed to enter nuclear facilities and safely remove nuclear waste using robotics and safety protocols.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm">
              <Code className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">Smart House Prototype</h3>
              <p className="text-gray-700 leading-relaxed">
                Built a fully functional smart house prototype controlled via mobile phone application, integrating IoT and automation technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="min-h-screen px-6 py-24 flex items-center bg-gray-50">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-black">Research</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <BookOpen className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">Higgs Boson and Its Effect on Life Formation</h3>
              <p className="text-gray-700 leading-relaxed">
                Research paper exploring the fundamental role of the Higgs mechanism in mass generation and its implications for the emergence of complex structures in the universe. (Nuclear Physics)
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <BookOpen className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">Motion with Zero Final Velocity in One Dimension</h3>
              <p className="text-gray-700 leading-relaxed">
                Research paper on kinematic scenarios where objects reach a state of rest, with applications in optimization and energy systems. (Physics & Aerospace)
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <BookOpen className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">TEDx Worldwide Study</h3>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive review paper analyzing global trends and impacts of TEDx programs on scientific discourse and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
