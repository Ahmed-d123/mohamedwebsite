import { Mail, Linkedin, Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-black/95 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          <a
            href="mailto:contact@example.com"
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-700 rounded-lg hover:border-gray-500 hover:bg-gray-800 transition-all duration-300 text-white"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
          <a
            href="https://linkedin.com"
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-700 rounded-lg hover:border-gray-500 hover:bg-gray-800 transition-all duration-300 text-white"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg"
          >
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          Built with passion for physics and a vision for a sustainable future
        </p>
      </div>
    </footer>
  );
}
