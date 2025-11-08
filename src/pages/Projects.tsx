import { Lightbulb, Atom } from 'lucide-react';

export default function Projects() {
  return (
    <div className="min-h-screen px-6 py-24 bg-gradient-to-br from-black to-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center">
          <span className="text-white">04.</span> Applied Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-900 p-8 rounded-lg border border-white/20 hover:border-white transition-all duration-300 shadow-xl">
            <Lightbulb className="w-12 h-12 text-white mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-white">Solar Energy System</h3>
            <p className="text-gray-400 leading-relaxed">
              Designed a comprehensive solar power system for school buildings, demonstrating practical
              application of renewable energy principles to reduce carbon footprint and energy costs.
            </p>
            <div className="mt-4 text-sm text-white font-semibold">
              Renewable energy • Sustainability • Engineering design
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg border border-white/20 hover:border-white transition-all duration-300 shadow-xl">
            <Atom className="w-12 h-12 text-white mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-white">Nuclear Waste Rover</h3>
            <p className="text-gray-400 leading-relaxed">
              Developed a research rover designed for nuclear waste removal, combining robotics and nuclear
              safety protocols to address critical environmental challenges.
            </p>
            <div className="mt-4 text-sm text-white font-semibold">
              Robotics • Nuclear science • Environmental solutions
            </div>
          </div>
        </div>

        <div className="bg-black/50 p-8 rounded-lg border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">Project Philosophy</h2>
          <p className="text-[#A8B5D1] leading-relaxed">
            My projects are grounded in the belief that theoretical physics must be paired with practical engineering.
            Each project tackles real-world problems—from climate change to nuclear safety—demonstrating how scientific
            knowledge translates into tangible solutions that improve lives and protect our planet.
          </p>
        </div>
      </div>
    </div>
  );
}
