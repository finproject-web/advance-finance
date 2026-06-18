import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrustBar from '@/components/TrustBar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Statistics from './sections/Statistics';
import HowItWorks from './sections/HowItWorks';
import CTASection from './sections/CTASection';
import Reviews from './sections/Reviews';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <HowItWorks />
        <Statistics />
        <Reviews />
        <FAQ />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
