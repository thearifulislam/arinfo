
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Skills from '../components/home/Skills';
import Portfolio from '../components/home/Portfolio';
import Process from '../components/home/Process';
import Pricing from '../components/home/Pricing';
import Testimonials from '../components/home/Testimonials';
import Faq from '../components/home/Faq';
import Contact from '../components/home/Contact';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Index = () => {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Skills />
      <Portfolio />
      <Process />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
