import { useState } from 'react';


export default function Hero() {
  const [loading] = useState(false);
  const waitlistFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScDZyg4ZXbwFoyQ62WcXL6RonKNlVsjdCbesFV4BkjcIUMWSQ/viewform?usp=dialog';

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
        Launch your idea
        <br />
        without the confusion.
      </h1> 

      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
        Imagine your startup building itself. With Krowe, simplify every step, cut the confusion, 
        and focus on launching your idea faster.
      </p>

   {/*   <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <button className="px-6 py-3 text-gray-600 hover:text-gray-900 font-medium transition-colors">
          Learn how
        </button>
        <button className="px-8 py-3 bg-[#f27d33] text-white rounded-lg hover:bg-[#e06d23] transition-all shadow-lg hover:shadow-xl font-medium flex items-center gap-2 group">
          Experience Effortless Efficiency
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div> */}

      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 border-2 border-[#f27d33]/20">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Join the Waitlist</h3>
        <p className="text-gray-600 mb-6">Be the first to experience the simplest way to launch a startup.</p>

        <form className="space-y-4">
          <button
            type="button"
            onClick={() => window.open(waitlistFormUrl, '_blank', 'noopener,noreferrer')}
            disabled={loading}
            className="w-full px-6 py-3 bg-[#f27d33] text-white rounded-lg hover:bg-[#e06d23] transition-all shadow-lg hover:shadow-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Joining...' : 'Join Waitlist'}
          </button>
        </form>
      </div>
    </section>
  );
}
