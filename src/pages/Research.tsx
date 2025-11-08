import { BookOpen } from 'lucide-react';

export default function Research() {
  return (
    <div className="min-h-screen px-6 py-24 bg-gradient-to-br from-gray-900/50 to-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center">
          <span className="text-white">05.</span> Research
        </h1>

        <div className="space-y-8">
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] group">
            <BookOpen className="w-10 h-10 text-gray-300 mb-3 group-hover:scale-125 group-hover:text-white group-hover:rotate-6 transition-all duration-500" />
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gray-100 transition-colors duration-300">
              Higgs Boson and Its Effect on Life Formation
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
              Exploring the fundamental role of the Higgs mechanism in mass generation and its implications
              for the emergence of complex structures in the universe.
            </p>
            <div className="text-sm text-gray-400 font-semibold group-hover:text-gray-200 transition-all duration-300">
              Particle physics • Cosmology • Fundamental forces
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] group">
            <BookOpen className="w-10 h-10 text-gray-300 mb-3 group-hover:scale-125 group-hover:text-white group-hover:-rotate-6 transition-all duration-500" />
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gray-100 transition-colors duration-300">
              Motion with Zero Final Velocity in One Dimension
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
              A mathematical and physical analysis of kinematic scenarios where objects reach a state of
              rest, with applications in optimization and energy systems.
            </p>
            <div className="text-sm text-gray-400 font-semibold group-hover:text-gray-200 transition-all duration-300">
              Classical mechanics • Kinematics • Applied mathematics
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-500 hover:shadow-xl hover:scale-[1.02] group">
          <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">Research Approach</h2>
          <p className="text-gray-400 leading-relaxed">
            My research bridges theoretical frameworks with practical applications. Whether investigating the quantum realm
            or classical mechanics, I seek to understand the fundamental principles that govern our universe. This scholarly
            approach ensures that my work contributes meaningfully to the broader scientific community and addresses questions
            that matter for humanity's future.
          </p>
        </div>
      </div>
    </div>
  );
}
