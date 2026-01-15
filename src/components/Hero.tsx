
export default function Hero() {
  return (
    <main className="relative pt-16 pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full grid-pattern opacity-40 pointer-events-none -z-10"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-50 text-primary border border-orange-100 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
            <span className="material-symbols-outlined text-sm">stars</span>
            <span>#1 AI Incubator</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-navy leading-[1.1] mb-8">
            Plan and research your idea <span className="italic text-primary relative">before<svg className="absolute -bottom-2 left-0 w-full" height="10" preserveAspectRatio="none" viewBox="0 0 100 10"><path className="text-primary/30" d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4"></path></svg></span> you build.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
            Krowe gives young founders the data-driven insights needed to convert chaos into clarity. Validate product-market fit faster than ever.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center justify-center">
              Join the Waitlist
            </button>
            <button className="bg-white text-navy border border-slate-200 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center space-x-2">
              <span>Learn More</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          {/*} <div className="flex items-center space-x-4">
            <div className="flex -space-x-3">
              <img alt="User avatar" className="w-12 h-12 rounded-full border-4 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1i6Pv3n6lW8Z7_sJ7PtcgTxtTZ0h1cEk0I48oQZEsiTNVFOtxXHSmHNQ5MNQZgXJ1GqmrKNlL-nFpOO2Y_Phc6GVMPYWA_eJF7Oo2iAIqYYaQPcTE80eLrHckulx9Rv2Q568fimgGZJb0VTyMkuBE6aEAR-BIG2dF7JA5cu8ZnPk4M5VTcPLcs8KnV99SsPgRKlUNgGbGvTjjoAZITS9GmfGZbHMAg9I9BBFSMiHeIxoKj-VUwS6fAxSEa8dK_wWSYNcILR4PGJDp" />
              <img alt="User avatar" className="w-12 h-12 rounded-full border-4 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcDM0X6PnO8JUlrYrdoQktWI4t2s6maQcOqcopjgXFAscqCO5HNzS3f88fQFueYu6WNm0Rlpd9tH8HVUjX-QPCbXHwTkDN4fZ1b0BYo4OM8IndYQuHn094-iw-RfJ2YrpCDKYeQRkb-dHh0FU2qgdJIyiuIRHQJuZ5Z6yE52lvBfQcUnmnDfP2t4g1WSrNdqre0EgpqijzycyDG0lsraTQK4TBQA9U9EsAkdJcCBD9NteHBPAkfcGYnN4yzj9580kRevHxtzsjfTY9" />
              <img alt="User avatar" className="w-12 h-12 rounded-full border-4 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5LfBPx1Gk6u-Rle7S5vMIFPqnnpXHhO7SKXES55hxxvosn8H__o9d9sEidizv7uc1ythpLzE-EJOtDjL3PCapa13v0mUxa9fIpSrbR0F7PIhcH5At9if5b4_iYU6KjuH5kCIy4ocnYwVDgbZix7Jz2_1TBj7AnG3Sq0nB3M504mKyOtdKxIbqZdJgGi-NVQBKvE8qjNYFVNen2IsK1IQxY95LhzHOZ512e0kzVui5Cyf30E6EwT0JpkjVQNOruroVJ7hxThMGv8xk" />
            </div>
            <div>
              <div className="flex items-center text-primary mb-1">
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="font-bold ml-1 text-navy">4.8</span>
                <span className="text-slate-400 font-medium ml-1">(150K+)</span>
              </div> 
              <p className="text-sm text-slate-500 font-medium italic">"Transformed our roadmap."</p>
            </div>
          </div> */}
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-start lg:block lg:h-[700px] lg:w-full lg:pl-10">
          <div className="glass p-8 rounded-[32px] shadow-xl card-shadow flex flex-col h-full lg:h-auto border-white/20 lg:absolute lg:w-[45%] lg:top-20 lg:left-0 lg:z-20 lg:-rotate-3 hover:lg:rotate-0 transition-transform duration-300">
            <div className="flex justify-between items-start mb-6">
              <span className="bg-orange-100 text-primary text-[60%] font-bold px-2.5 py-1 rounded-full uppercase tracking-tighter">Current Idea</span>
              <span className="material-symbols-outlined text-slate-300">more_horiz</span>
            </div>
            <h3 className="text-3xl font-display font-bold mb-3">Krowe</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              An AI incubator made for young founders to know where to start with their idea.
            </p>
            <div className="mt-auto">
              <div className="inline-flex items-center bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-xs font-semibold">
                <span className="material-symbols-outlined text-sm mr-1.5">school</span>
                EdTech
              </div>
            </div>
          </div>
          <div className="glass p-8 rounded-[32px] shadow-xl card-shadow border-white/20 lg:absolute lg:w-[48%] lg:top-12 lg:right-0 lg:z-10 lg:rotate-2 hover:lg:rotate-0 transition-transform duration-300">
            <div className="flex justify-between items-center mb-10">
              <h4 className="font-bold text-slate-500 text-sm uppercase tracking-wide">Time Till Launch</h4>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div>
                <span className="text-3xl font-outfit font-bold">04</span>
                <p className="text-[9px] uppercase text-slate-400 mt-1 font-bold">Months</p>
              </div>
              <div>
                <span className="text-3xl font-outfit font-bold">08</span>
                <p className="text-[9px] uppercase text-slate-400 mt-1 font-bold">Days</p>
              </div>
              <div>
                <span className="text-3xl font-outfit font-bold">14</span>
                <p className="text-[9px] uppercase text-slate-400 mt-1 font-bold">Hours</p>
              </div>
              <div>
                <span className="text-3xl font-outfit font-bold text-primary">12</span>
                <p className="text-[9px] uppercase text-slate-400 mt-1 font-bold">Mins</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100">
              <p className="text-xs text-slate-500 font-medium text-center">Ready to launch Krowe!</p>
            </div>
          </div>
          <div className="glass p-8 rounded-[32px] shadow-xl card-shadow border-white/20 lg:absolute lg:w-[42%] lg:bottom-10 lg:left-12 lg:z-30 lg:rotate-2 hover:lg:rotate-0 transition-transform duration-300">
            <div className="flex justify-between mb-4">
              <span className="text-sm font-bold">Streak</span>
              <span className="material-symbols-outlined text-primary fill-current">local_fire_department</span>
            </div>
            <div className="mb-6">
              <span className="text-5xl font-outfit font-extrabold text-navy">7</span>
              <span className="text-slate-400 text-sm font-medium ml-2">day streak</span>
            </div>
            <div className="flex space-x-1.5 mb-6">
              <div className="w-6 h-6 rounded-full bg-primary"></div>
              <div className="w-6 h-6 rounded-full bg-primary"></div>
              <div className="w-6 h-6 rounded-full bg-primary"></div>
              <div className="w-6 h-6 rounded-full bg-primary"></div>
              <div className="w-6 h-6 rounded-full bg-primary"></div>
              <div className="w-6 h-6 rounded-full bg-primary"></div>
              <div className="w-6 h-6 rounded-full bg-primary"></div>
            </div>
            <p className="text-[11px] text-slate-400 font-medium">1 more day to hit your next badge!</p>
          </div>
          <div className="glass p-8 rounded-[32px] shadow-xl card-shadow border-white/20 lg:absolute lg:w-[40%] lg:bottom-20 lg:right-8 lg:z-10 lg:-rotate-3 hover:lg:rotate-0 transition-transform duration-300">
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 flex items-center justify-center mb-6">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-slate-100" cx="64" cy="64" fill="transparent" r="54" stroke="currentColor" strokeWidth="12"></circle>
                  <circle className="text-primary rounded-full" cx="64" cy="64" fill="transparent" r="54" stroke="currentColor" strokeDasharray="339" strokeDashoffset="85" strokeLinecap="round" strokeWidth="12"></circle>
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-2xl font-bold">75%</span>
                  <span className="text-[8px] uppercase tracking-widest text-slate-400 font-bold">Progress</span>
                </div>
              </div>
              <div className="text-center">
                <span className="text-[10px] uppercase font-bold text-slate-400">Current Section</span>
                <h5 className="text-sm font-bold text-primary">MARKET FIT</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Company Promo Section */}
      <div className="container mx-auto px-6 mt-6">
        <p className="text-center text-slate-400 font-semibold text-sm uppercase tracking-[0.2em] mb-6">As Seen in</p>
        <div className="flex flex-wrap justify-center items-center gap-18 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center space-x-1">
            <img src="YC Logo Gray.png" alt="loom" width={35} height={35} />
            <span className="text-2xl font-bold font-display tracking-tighter">Hacker News</span>
          </div>
          <div className="flex items-center space-x-1">
            <img src="product hunt gray.webp" alt="loom" width={35} height={35} />
            <span className="text-2xl font-bold font-display tracking-tighter">Product Hunt</span>
          </div>
          <div className="flex items-center space-x-1">
            <img src="Real-SHIP.png" alt="SHIP" width={35} height={35}></img>
            <span className="text-2xl font-bold font-display tracking-tighter">SHIP</span>
          </div>
          <div className="flex items-center space-x-1">
            <img src="founderULogoGrey.webp" alt="Founder University" width={35} height={35}></img>
            <span className="text-2xl font-bold font-display tracking-tighter">Founder University</span>
          </div>
        </div>
      </div>
    </main>
  );
}
