import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
import Features from './components/How it works';
import Benfits from './components/Benfits';

import Footer from './components/footer';
import KroweHelpdeskFAQ from './components/faq';
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="why-krowe">
        <Benfits />
      </section>
      <section id="faq">
        <KroweHelpdeskFAQ/>
      </section>
      <Footer />
    </div>
  );
}

export default App;
