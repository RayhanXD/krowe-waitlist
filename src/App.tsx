import { useState } from 'react';
import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
import Features from './components/How it works';
import Benfits from './components/Benfits';

import Footer from './components/footer';
import KroweHelpdeskFAQ from './components/faq';
import { WaitlistModal } from './components/WaitlistModal';

function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const onJoinWaitlist = () => setWaitlistOpen(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden w-full">
      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
      <Navbar onJoinWaitlist={onJoinWaitlist} />
      <section id="home">
        <Hero onJoinWaitlist={onJoinWaitlist} />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="why-krowe">
        <Benfits onJoinWaitlist={onJoinWaitlist} />
      </section>
      <section id="faq">
        <KroweHelpdeskFAQ />
      </section>
      <Footer onJoinWaitlist={onJoinWaitlist} />
    </div>
  );
}

export default App;
