import { User } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen px-6 py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center text-black">
          About
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <img
              src="/images/mohamed.jpg"
              alt="Mohamed Ahmed Said Elewa"
              className="rounded-lg shadow-2xl border border-black/20 w-full h-auto object-cover transition-all duration-300 hover:scale-[1.03]"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="500"%3E%3Crect fill="%23111" width="400" height="500"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%23fff" text-anchor="middle" dominant-baseline="middle"%3EMohamed%27s Photo%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>

          <div className="bg-white p-8 md:p-12 rounded-lg border border-gray-200 shadow-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]">
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
    </div>
  );
}
