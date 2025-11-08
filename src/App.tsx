import { Award, Users, Lightbulb, BookOpen, Mail, Linkedin, Download, Atom } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A192F] to-[#112240] text-[#E6F1FF]">
      <nav className="fixed top-0 w-full bg-[#0A192F]/95 backdrop-blur-sm z-50 border-b border-[#64FFDA]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-[#64FFDA] font-bold text-xl">MSE</div>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-[#64FFDA] transition-colors">About</a>
            <a href="#achievements" className="hover:text-[#64FFDA] transition-colors">Achievements</a>
            <a href="#leadership" className="hover:text-[#64FFDA] transition-colors">Leadership</a>
            <a href="#projects" className="hover:text-[#64FFDA] transition-colors">Projects</a>
            <a href="#research" className="hover:text-[#64FFDA] transition-colors">Research</a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <div className="mb-6">
            <Atom className="w-16 h-16 text-[#64FFDA] mx-auto mb-4 animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#E6F1FF] to-[#64FFDA] bg-clip-text text-transparent">
            Mohamed Ahmed Said Elewa
          </h1>
          <p className="text-2xl md:text-3xl text-[#64FFDA] mb-8 font-light">
            Aspiring Physicist & STEM Innovator
          </p>
          <p className="text-lg md:text-xl text-[#8892B0] max-w-3xl mx-auto leading-relaxed">
            From Subatomic Particles to Sustainable Solutions
          </p>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-[#112240]/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-[#64FFDA]">01.</span> About Me
          </h2>
          <div className="bg-[#0A192F]/50 p-8 md:p-12 rounded-lg border border-[#64FFDA]/20 shadow-2xl">
            <p className="text-lg leading-relaxed text-[#8892B0]">
              A student at the <span className="text-[#E6F1FF] font-semibold">Applied Technology Nuclear School in Egypt</span>,
              driven by a deep curiosity about how the world works. My academic journey focuses on an advanced STEM curriculum
              in mathematics, physics, and electricity. I am passionate about solving complex problems and believe that
              knowledge gains true value only when it improves lives. I aim to become a physicist who transforms scientific
              understanding into <span className="text-[#64FFDA] font-semibold">sustainable progress for our world</span>.
            </p>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-[#64FFDA]">02.</span> Key Achievements & Competitions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#112240] p-8 rounded-lg border border-[#64FFDA]/30 hover:border-[#64FFDA] transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl">
              <Award className="w-12 h-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-[#E6F1FF]">Bronze Medal</h3>
              <p className="text-[#8892B0]">STEMCO Mathematical Olympiad</p>
            </div>

            <div className="bg-[#112240] p-8 rounded-lg border border-[#64FFDA]/30 hover:border-[#64FFDA] transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl">
              <Award className="w-12 h-12 text-[#64FFDA] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-[#E6F1FF]">Top 1‰ Globally</h3>
              <p className="text-[#8892B0]">Online Physics Olympiad (OPHO)</p>
              <p className="text-sm text-[#64FFDA] mt-2 font-semibold">Highest African score in history</p>
            </div>

            <div className="bg-[#112240] p-8 rounded-lg border border-[#64FFDA]/30 hover:border-[#64FFDA] transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl">
              <Award className="w-12 h-12 text-[#64FFDA] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-[#E6F1FF]">Top 3% Ranking</h3>
              <p className="text-[#8892B0]">54th out of 1,986 teams</p>
              <p className="text-sm text-[#64FFDA] mt-2 font-semibold">International Physics Brawl</p>
            </div>
          </div>
        </div>
      </section>

      <section id="leadership" className="py-24 px-6 bg-[#112240]/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-[#64FFDA]">03.</span> Leadership & Mentorship
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0A192F] p-8 rounded-lg border border-[#64FFDA]/20 shadow-xl">
              <Users className="w-12 h-12 text-[#64FFDA] mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-[#E6F1FF]">Co-founder, ATSNEE Physics Club</h3>
              <p className="text-[#8892B0] leading-relaxed">
                Mentored <span className="text-[#64FFDA] font-semibold">85+ students across 7 countries</span>,
                building a vibrant community dedicated to scientific discovery and collaborative learning.
              </p>
            </div>

            <div className="bg-[#0A192F] p-8 rounded-lg border border-[#64FFDA]/20 shadow-xl">
              <BookOpen className="w-12 h-12 text-[#64FFDA] mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-[#E6F1FF]">Head of Research, TEDxMillennium</h3>
              <p className="text-[#8892B0] leading-relaxed">
                Guided students in writing research papers and presenting scientific ideas to
                <span className="text-[#64FFDA] font-semibold"> hundreds of youth</span>, fostering a culture of
                intellectual curiosity and public engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-[#64FFDA]">04.</span> Applied Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#112240] p-8 rounded-lg border border-[#64FFDA]/20 hover:border-[#64FFDA] transition-all duration-300 shadow-xl">
              <Lightbulb className="w-12 h-12 text-[#FFD700] mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-[#E6F1FF]">Solar Energy System</h3>
              <p className="text-[#8892B0] leading-relaxed">
                Designed a comprehensive solar power system for school buildings, demonstrating practical
                application of renewable energy principles to reduce carbon footprint and energy costs.
              </p>
            </div>

            <div className="bg-[#112240] p-8 rounded-lg border border-[#64FFDA]/20 hover:border-[#64FFDA] transition-all duration-300 shadow-xl">
              <Atom className="w-12 h-12 text-[#64FFDA] mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-[#E6F1FF]">Nuclear Waste Rover</h3>
              <p className="text-[#8892B0] leading-relaxed">
                Developed a research rover designed for nuclear waste removal, combining robotics and nuclear
                safety protocols to address critical environmental challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="py-24 px-6 bg-[#112240]/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-[#64FFDA]">05.</span> Research
          </h2>
          <div className="space-y-6">
            <div className="bg-[#0A192F] p-8 rounded-lg border border-[#64FFDA]/20 hover:border-[#64FFDA] transition-all duration-300 shadow-xl">
              <BookOpen className="w-10 h-10 text-[#64FFDA] mb-3" />
              <h3 className="text-xl font-bold mb-2 text-[#E6F1FF]">
                Higgs Boson and Its Effect on Life Formation
              </h3>
              <p className="text-[#8892B0]">
                Exploring the fundamental role of the Higgs mechanism in mass generation and its implications
                for the emergence of complex structures in the universe.
              </p>
            </div>

            <div className="bg-[#0A192F] p-8 rounded-lg border border-[#64FFDA]/20 hover:border-[#64FFDA] transition-all duration-300 shadow-xl">
              <BookOpen className="w-10 h-10 text-[#64FFDA] mb-3" />
              <h3 className="text-xl font-bold mb-2 text-[#E6F1FF]">
                Motion with Zero Final Velocity in One Dimension
              </h3>
              <p className="text-[#8892B0]">
                A mathematical and physical analysis of kinematic scenarios where objects reach a state of
                rest, with applications in optimization and energy systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 bg-[#0A192F] border-t border-[#64FFDA]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-[#E6F1FF]">Let's Connect</h3>
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="mailto:contact@example.com"
              className="flex items-center gap-2 px-6 py-3 bg-[#112240] border border-[#64FFDA]/30 rounded-lg hover:border-[#64FFDA] hover:bg-[#64FFDA]/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com"
              className="flex items-center gap-2 px-6 py-3 bg-[#112240] border border-[#64FFDA]/30 rounded-lg hover:border-[#64FFDA] hover:bg-[#64FFDA]/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 bg-[#64FFDA] text-[#0A192F] font-semibold rounded-lg hover:bg-[#64FFDA]/90 transition-all duration-300 shadow-lg"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </a>
          </div>
          <p className="text-[#8892B0] text-sm">
            Built with passion for physics and a vision for a sustainable future
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
