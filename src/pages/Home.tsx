import { ChevronDown, Award, Briefcase, Users, Code, BookOpen, User } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [animatedSections, setAnimatedSections] = useState<Set<string>>(new Set());

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animatedSections.has(entry.target.id)) {
          entry.target.classList.add('animate-fade-in-up');
          setAnimatedSections(prev => new Set(prev).add(entry.target.id));
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [animatedSections]);

  return (
    <div className="min-h-screen bg-white text-black">
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-4xl text-center flex flex-col items-center justify-center">
          <h1 className="hero-title text-6xl md:text-7xl font-bold mb-4 text-black">
            Mohamed Ahmed Said Elewa
          </h1>
          <p className="hero-tagline text-2xl md:text-3xl text-gray-700 mb-8 font-light">
            Physicist Researcher & STEM Innovator
          </p>
          <p className="hero-description text-lg text-gray-600 max-w-3xl leading-relaxed mb-12">
            Physics researcher with proven excellence in competitions and education
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="hero-button flex items-center justify-center gap-2 px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
          >
            Scroll for more
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </section>

      <section id="about" data-animate className="min-h-screen px-6 py-24 flex items-center bg-gray-50 opacity-0">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-center text-black">About</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/mohamed.jpg"
                alt="Mohamed Ahmed Said Elewa"
                className="rounded-lg shadow-2xl border border-black/20 w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="500"%3E%3Crect fill="%23111" width="400" height="500"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%23fff" text-anchor="middle" dominant-baseline="middle"%3EMohamed%27s Photo%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>

            <div className="bg-white p-8 md:p-12 rounded-lg border border-gray-200 shadow-2xl">
              <User className="w-12 h-12 text-black mb-6" />
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  <span className="text-black font-semibold">Student</span> at the Applied Technology Nuclear School (Electricity Department) with a <span className="text-black font-semibold">Cumulative Grade of 93.25%</span>.
                </p>
                <p className="text-lg leading-relaxed">
                  Physics researcher, <span className="text-black font-semibold">TEDxMillennium speaker</span>, and passionate mentor committed to advancing STEM education across Africa.
                </p>
                <p className="text-lg leading-relaxed">
                  Recognized for achieving <span className="text-black font-semibold">Africa's highest historical scores in OPHO & IPHB</span> competitions.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="text-black font-semibold">Co-Founder of ATSNEE Physics Club</span> and <span className="text-black font-semibold">Founder of DSAT Math Prep Academy</span>, building communities dedicated to scientific excellence and mentorship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" data-animate className="min-h-screen px-6 py-24 flex items-center bg-white opacity-0">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-black">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Award className="w-10 h-10 text-black mb-4" />
              <h3 className="text-xl font-bold mb-2 text-black">OPHO 2025</h3>
              <p className="text-gray-700">Ranked 3rd place out of 1,000 teams globally (Top 1%)</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Award className="w-10 h-10 text-black mb-4" />
              <h3 className="text-xl font-bold mb-2 text-black">IPHB</h3>
              <p className="text-gray-700">Highest African Score in History. Ranked in top 3% globally (54th/1,986 teams)</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Award className="w-10 h-10 text-black mb-4" />
              <h3 className="text-xl font-bold mb-2 text-black">STEMCO</h3>
              <p className="text-gray-700">Bronze Medal (Top 150/1,667 competitors)</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Award className="w-10 h-10 text-black mb-4" />
              <h3 className="text-xl font-bold mb-2 text-black">Fanni Mobtaker</h3>
              <p className="text-gray-700">1st Place in Matrouh Governorate & Top 20 Semifinalist (out of 4,251)</p>
            </div>
          </div>
        </div>
      </section>

      <section id="paid-work" data-animate className="min-h-screen px-6 py-24 flex items-center bg-gray-50 opacity-0">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-black">Paid Work</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Briefcase className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">DSAT Math Prep Academy (Founder)</h3>
              <p className="text-gray-700 leading-relaxed">
                Coached students to 680-740 scores on standardized tests. Designed and developed all comprehensive study materials from scratch.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <BookOpen className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">Learning Books Writer</h3>
              <p className="text-gray-700 leading-relaxed">
                Wrote and formatted 23 educational books, each ranging from 170 to 500 pages. Contributed to multiple educational platforms.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Briefcase className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">Accountant Assistance (Al-Hamd Office)</h3>
              <p className="text-gray-700 leading-relaxed">
                Managed office expenses and income tracking. Assisted with preparing financial statements and maintaining accurate records.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="activities" data-animate className="min-h-screen px-6 py-24 flex items-center bg-white opacity-0">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-black">Activities</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Users className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">ATSNEE Physics Club (Co-Founder)</h3>
              <p className="text-gray-700 leading-relaxed">
                Mentored 85+ students across 7 countries, building a vibrant global community dedicated to scientific discovery and collaborative learning.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <BookOpen className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">TEDxMillennium (Head of Research & Speaker)</h3>
              <p className="text-gray-700 leading-relaxed">
                Led research team and mentored 45 students on 15 research papers. Served as speaker engaging 600+ youth on scientific topics.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Users className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">Tech Genius Tech (TGI) (Research Mentor)</h3>
              <p className="text-gray-700 leading-relaxed">
                Mentored 60 students in conducting rigorous research projects across various scientific disciplines.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <BookOpen className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">Teacher Assistance (Physics & Math Mentor)</h3>
              <p className="text-gray-700 leading-relaxed">
                Taught 31 physics sessions and 28 math sessions, helping students master fundamental concepts in both disciplines.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Award className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">Dartmouth Pre-college Finance Program</h3>
              <p className="text-gray-700 leading-relaxed">
                Completed comprehensive program with a capstone project analyzing Apple Inc.'s financial performance and strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" data-animate className="min-h-screen px-6 py-24 flex items-center bg-gray-50 opacity-0">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-black">Projects</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Code className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">Solar Panel (Graduation Project)</h3>
              <p className="text-gray-700 leading-relaxed">
                Designed and implemented a 1,400-watt solar power plant for a school building, demonstrating practical application of renewable energy principles.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Code className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">Research Rover</h3>
              <p className="text-gray-700 leading-relaxed">
                Created an advanced rover designed to enter nuclear facilities and safely remove nuclear waste using robotics and safety protocols.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Code className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">Smart House Prototype</h3>
              <p className="text-gray-700 leading-relaxed">
                Built a fully functional smart house prototype controlled via mobile phone application, integrating IoT and automation technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="research" data-animate className="min-h-screen px-6 py-24 flex items-center bg-white opacity-0">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-black">Research</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <BookOpen className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">Higgs Boson and Its Effect on Life Formation</h3>
              <p className="text-gray-700 leading-relaxed">
                Research paper exploring the fundamental role of the Higgs mechanism in mass generation and its implications for the emergence of complex structures in the universe. (Nuclear Physics)
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <BookOpen className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-2 text-black">Motion with Zero Final Velocity in One Dimension</h3>
              <p className="text-gray-700 leading-relaxed">
                Research paper on kinematic scenarios where objects reach a state of rest, with applications in optimization and energy systems. (Physics & Aerospace)
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
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
