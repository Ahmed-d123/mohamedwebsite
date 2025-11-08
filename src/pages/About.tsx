import { User } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen px-6 py-24 bg-gradient-to-br from-gray-900/50 to-black">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center">
          <span className="text-white">01.</span> About Me
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <img
              src="/images/mohamed.jpg"
              alt="Mohamed Ahmed Said Elewa"
              className="rounded-lg shadow-2xl border border-white/30 w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="500"%3E%3Crect fill="%23111" width="400" height="500"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%23fff" text-anchor="middle" dominant-baseline="middle"%3EMohamed%27s Photo%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>

          <div className="bg-black/50 p-8 md:p-12 rounded-lg border border-white/20 shadow-2xl">
            <User className="w-12 h-12 text-white mb-6" />
            <p className="text-lg leading-relaxed text-gray-400">
              A student at the <span className="text-white font-semibold">Applied Technology Nuclear School in Egypt</span>,
              driven by a deep curiosity about how the world works. My academic journey focuses on an advanced STEM curriculum
              in mathematics, physics, and electricity. I am passionate about solving complex problems and believe that
              knowledge gains true value only when it improves lives. I aim to become a physicist who transforms scientific
              understanding into <span className="text-white font-semibold">sustainable progress for our world</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
