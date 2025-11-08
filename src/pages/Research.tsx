import { BookOpen } from 'lucide-react';

export default function Research() {
  return (
    <div className="min-h-screen px-6 py-24 bg-gradient-to-br from-[#1a3d5c]/50 to-[#132647]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center">
          <span className="text-[#64FFDA]">05.</span> Research
        </h1>

        <div className="space-y-8">
          <div className="bg-[#132647] p-8 rounded-lg border border-[#64FFDA]/20 hover:border-[#64FFDA] transition-all duration-300 shadow-xl">
            <BookOpen className="w-10 h-10 text-[#64FFDA] mb-3" />
            <h3 className="text-2xl font-bold mb-3 text-[#E6F1FF]">
              Higgs Boson and Its Effect on Life Formation
            </h3>
            <p className="text-[#A8B5D1] leading-relaxed mb-4">
              Exploring the fundamental role of the Higgs mechanism in mass generation and its implications
              for the emergence of complex structures in the universe.
            </p>
            <div className="text-sm text-[#64FFDA] font-semibold">
              Particle physics • Cosmology • Fundamental forces
            </div>
          </div>

          <div className="bg-[#132647] p-8 rounded-lg border border-[#64FFDA]/20 hover:border-[#64FFDA] transition-all duration-300 shadow-xl">
            <BookOpen className="w-10 h-10 text-[#64FFDA] mb-3" />
            <h3 className="text-2xl font-bold mb-3 text-[#E6F1FF]">
              Motion with Zero Final Velocity in One Dimension
            </h3>
            <p className="text-[#A8B5D1] leading-relaxed mb-4">
              A mathematical and physical analysis of kinematic scenarios where objects reach a state of
              rest, with applications in optimization and energy systems.
            </p>
            <div className="text-sm text-[#64FFDA] font-semibold">
              Classical mechanics • Kinematics • Applied mathematics
            </div>
          </div>
        </div>

        <div className="mt-12 bg-[#1a3d5c] p-8 rounded-lg border border-[#64FFDA]/20">
          <h2 className="text-2xl font-bold text-[#E6F1FF] mb-4">Research Approach</h2>
          <p className="text-[#A8B5D1] leading-relaxed">
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
