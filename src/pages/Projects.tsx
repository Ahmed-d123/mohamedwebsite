import { Lightbulb, Zap, Cpu } from 'lucide-react';

export default function Projects() {
  return (
    <div className="min-h-screen px-6 py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center text-black">
          Projects
        </h1>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] shadow-xl group">
            <Lightbulb className="w-12 h-12 text-black mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
            <h3 className="text-2xl font-bold mb-3 text-black">Solar Panel Electricity Generation</h3>
            <p className="text-gray-600 mb-3 font-semibold">Graduation Project</p>
            <div className="space-y-2 text-gray-700">
              <p>• Designed and implemented a solar power plant producing 1,400 watts</p>
              <p>• Installed system for school building electricity generation</p>
              <p>• Demonstrates practical renewable energy application</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] shadow-xl group">
            <Zap className="w-12 h-12 text-black mb-4 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-500" />
            <h3 className="text-2xl font-bold mb-3 text-black">Research Rover</h3>
            <p className="text-gray-600 mb-3 font-semibold">Nuclear Safety Innovation</p>
            <div className="space-y-2 text-gray-700">
              <p>• Created autonomous rover for nuclear facility operations</p>
              <p>• Designed for safe nuclear waste removal and management</p>
              <p>• Combines robotics with nuclear safety protocols</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] shadow-xl group">
            <Cpu className="w-12 h-12 text-black mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
            <h3 className="text-2xl font-bold mb-3 text-black">Smart House Prototype</h3>
            <p className="text-gray-600 mb-3 font-semibold">IoT Application</p>
            <div className="space-y-2 text-gray-700">
              <p>• Built fully functional smart house prototype</p>
              <p>• Implemented mobile phone control system</p>
              <p>• Demonstrates IoT integration and automation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
