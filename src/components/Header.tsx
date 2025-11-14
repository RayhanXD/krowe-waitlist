import { Zap, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-[#f27d33]" />
          <span className="text-xl font-semibold text-gray-800">Flowline</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How it works</a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
          <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Mail className="w-5 h-5 text-gray-600" />
          </button>
          <button className="px-5 py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Launch with Flowline
          </button>
        </div>
      </nav>
    </header>
  );
}
