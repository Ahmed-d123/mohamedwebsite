import { Mail, Linkedin, Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-[#132647] border-t border-[#64FFDA]/20">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6 text-[#E6F1FF]">Let's Connect</h3>
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          <a
            href="mailto:contact@example.com"
            className="flex items-center gap-2 px-6 py-3 bg-[#1a3d5c] border border-[#64FFDA]/30 rounded-lg hover:border-[#64FFDA] hover:bg-[#64FFDA]/10 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
          <a
            href="https://linkedin.com"
            className="flex items-center gap-2 px-6 py-3 bg-[#1a3d5c] border border-[#64FFDA]/30 rounded-lg hover:border-[#64FFDA] hover:bg-[#64FFDA]/10 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 bg-[#64FFDA] text-[#132647] font-semibold rounded-lg hover:bg-[#64FFDA]/90 transition-all duration-300 shadow-lg"
          >
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </a>
        </div>
        <p className="text-[#A8B5D1] text-sm">
          Built with passion for physics and a vision for a sustainable future
        </p>
      </div>
    </footer>
  );
}
