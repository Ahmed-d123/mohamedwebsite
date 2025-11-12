import { Atom, Award, Users, BookOpen, Lightbulb, User, Mail, Linkedin, Download } from 'lucide-react';

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-black/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-black font-bold text-xl hover:text-gray-700 transition-colors"
          >
            MSE
          </button>
          <div className="flex gap-6 text-sm">
            <button
              onClick={() => scrollToSection('about')}
              className="transition-colors hover:text-black text-gray-600"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('achievements')}
              className="transition-colors hover:text-black text-gray-600"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection('leadership')}
              className="transition-colors hover:text-black text-gray-600"
            >
              Leadership
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="transition-colors hover:text-black text-gray-600"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('research')}
              className="transition-colors hover:text-black text-gray-600"
            >
              Research
            </button>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl text-center">
          <div className="mb-6">
            <Atom className="w-16 h-16 text-black mx-auto mb-4 animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-black">
            Mohamed Ahmed Said Elewa
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
            Physicist Researcher & STEM Innovator
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            From Subatomic Particles to Sustainable Solutions
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg"
          >
            Scroll for more
          </button>
        </div>
      </section>

      <section id="about" className="min-h-screen px-6 py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center text-black">
            <span className="text-black">01.</span> About Me
          </h2>

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

            <div className="bg-gray-50 p-8 md:p-12 rounded-lg border border-gray-200 shadow-2xl">
              <User className="w-12 h-12 text-black mb-6" />
              <p className="text-lg leading-relaxed text-gray-700">
                A student at the <span className="text-black font-semibold">Applied Technology Nuclear School in Egypt</span>,
                driven by a deep curiosity about how the world works. My academic journey focuses on an advanced STEM curriculum
                in mathematics, physics, and electricity. I am passionate about solving complex problems and believe that
                knowledge gains true value only when it improves lives. I aim to become a physicist who transforms scientific
                understanding into <span className="text-black font-semibold">sustainable progress for our world</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="min-h-screen px-6 py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center text-black">
            Achievements
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl">
              <Award className="w-12 h-12 text-black mb-4" />
              <h3 className="text-xl font-bold mb-3 text-black">Bronze Medal</h3>
              <p className="text-gray-700">STEMCO Mathematical Olympiad</p>
              <p className="text-sm text-black mt-3 font-semibold">Recognition in competitive mathematics</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl">
              <Award className="w-12 h-12 text-black mb-4" />
              <h3 className="text-xl font-bold mb-3 text-black">Top 1‰ Globally</h3>
              <p className="text-gray-700">Online Physics Olympiad (OPHO)</p>
              <p className="text-sm text-black mt-3 font-semibold">Highest African score in history</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl">
              <Award className="w-12 h-12 text-black mb-4" />
              <h3 className="text-xl font-bold mb-3 text-black">Top 3% Ranking</h3>
              <p className="text-gray-700">54th out of 1,986 teams</p>
              <p className="text-sm text-black mt-3 font-semibold">International Physics Brawl</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-4">Recognition</h3>
            <p className="text-gray-700 leading-relaxed">
              These achievements represent years of dedication to mastering physics and mathematics at the highest levels.
              Through rigorous competition and continuous learning, I've developed problem-solving skills that translate
              directly to real-world scientific challenges.
            </p>
          </div>
        </div>
      </section>

      <section id="activities" className="min-h-screen px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center text-black">
            Activities
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-xl hover:border-black transition-all duration-300">
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

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-xl hover:border-black transition-all duration-300">
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

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-4">Impact & Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              My leadership journey reflects a commitment to elevating scientific discourse and empowering the next generation
              of thinkers. By fostering communities of learning and innovation, I believe we can accelerate progress toward
              solving humanity's greatest challenges through science and technology.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center text-black">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 shadow-xl">
              <Lightbulb className="w-12 h-12 text-black mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-black">Solar Energy System</h3>
              <p className="text-gray-700 leading-relaxed">
                Designed a comprehensive solar power system for school buildings, demonstrating practical
                application of renewable energy principles to reduce carbon footprint and energy costs.
              </p>
              <div className="mt-4 text-sm text-black font-semibold">
                Renewable energy • Sustainability • Engineering design
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 shadow-xl">
              <Atom className="w-12 h-12 text-black mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-black">Nuclear Waste Rover</h3>
              <p className="text-gray-700 leading-relaxed">
                Developed a research rover designed for nuclear waste removal, combining robotics and nuclear
                safety protocols to address critical environmental challenges.
              </p>
              <div className="mt-4 text-sm text-black font-semibold">
                Robotics • Nuclear science • Environmental solutions
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-4">Project Philosophy</h3>
            <p className="text-gray-700 leading-relaxed">
              My projects are grounded in the belief that theoretical physics must be paired with practical engineering.
              Each project tackles real-world problems—from climate change to nuclear safety—demonstrating how scientific
              knowledge translates into tangible solutions that improve lives and protect our planet.
            </p>
          </div>
        </div>
      </section>

      <section id="research" className="min-h-screen px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center text-black">
            Research
          </h2>

          <div className="space-y-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 transition-all duration-300 shadow-xl">
              <BookOpen className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-3 text-black">
                Higgs Boson and Its Effect on Life Formation
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Exploring the fundamental role of the Higgs mechanism in mass generation and its implications
                for the emergence of complex structures in the universe.
              </p>
              <div className="text-sm text-black font-semibold">
                Particle physics • Cosmology • Fundamental forces
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 transition-all duration-300 shadow-xl">
              <BookOpen className="w-10 h-10 text-black mb-3" />
              <h3 className="text-2xl font-bold mb-3 text-black">
                Motion with Zero Final Velocity in One Dimension
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A mathematical and physical analysis of kinematic scenarios where objects reach a state of
                rest, with applications in optimization and energy systems.
              </p>
              <div className="text-sm text-black font-semibold">
                Classical mechanics • Kinematics • Applied mathematics
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-4">Research Approach</h3>
            <p className="text-gray-700 leading-relaxed">
              My research bridges theoretical frameworks with practical applications. Whether investigating the quantum realm
              or classical mechanics, I seek to understand the fundamental principles that govern our universe. This scholarly
              approach ensures that my work contributes meaningfully to the broader scientific community and addresses questions
              that matter for humanity's future.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-black">Let's Connect</h3>
          <div className="flex justify-center gap-6 mb-8 flex-wrap">
            <a
              href="mailto:contact@example.com"
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 border border-gray-300 rounded-lg hover:border-black hover:bg-gray-200 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com"
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 border border-gray-300 rounded-lg hover:border-black hover:bg-gray-200 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </a>
          </div>
          <p className="text-gray-600 text-sm">
            Driven by physics, building a sustainable future
          </p>
        </div>
      </footer>
    </div>
  );
}
