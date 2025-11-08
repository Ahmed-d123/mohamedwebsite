import { Lightbulb, Atom } from 'lucide-react';

export default function Projects() {
  return (
    <div className="min-h-screen px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center text-black">
          <span className="text-black">04.</span> Applied Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl group">
            <Lightbulb className="w-12 h-12 text-black mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
            <h3 className="text-2xl font-bold mb-3 text-black transition-colors duration-300">Solar Energy System</h3>
            <p className="text-gray-700 leading-relaxed transition-colors duration-300">
              Designed a comprehensive solar power system for school buildings, demonstrating practical
              application of renewable energy principles to reduce carbon footprint and energy costs.
            </p>
            <div className="mt-4 text-sm text-black font-semibold transition-all duration-300">
              Renewable energy • Sustainability • Engineering design
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:border-black group">
            <Atom className="w-12 h-12 text-black mb-4 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-500 group-hover:animate-pulse" />
            <h3 className="text-2xl font-bold mb-3 text-black transition-colors duration-300">Nuclear Waste Rover</h3>
            <p className="text-gray-700 leading-relaxed transition-colors duration-300">
              Developed a research rover designed for nuclear waste removal, combining robotics and nuclear
              safety protocols to address critical environmental challenges.
            </p>
            <div className="mt-4 text-sm text-black font-semibold transition-all duration-300">
              Robotics • Nuclear science • Environmental solutions
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 transition-all duration-500 hover:shadow-xl hover:scale-[1.02] hover:border-black group">
          <h2 className="text-2xl font-bold text-black mb-4 transition-colors duration-300">Project Philosophy</h2>
          <p className="text-gray-700 leading-relaxed">
            My projects are grounded in the belief that theoretical physics must be paired with practical engineering.
            Each project tackles real-world problems—from climate change to nuclear safety—demonstrating how scientific
            knowledge translates into tangible solutions that improve lives and protect our planet.
          </p>
        </div>
      </div>
    </div>
  );
}
