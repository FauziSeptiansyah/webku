// app/page.tsx
import  Navbar from '@/components/navigation/Navbar';
import  HeroSection  from '@/components/section/Hero';
import StatsSection from '@/components/section/Stats';
import AboutSection from '@/components/section/About';
import ServicesSection from '@/components/section/Services';
import PricingSection from '@/components/section/Price';
import PortfolioSection from '@/components/section/Portfolio';
import ContactSection from '@/components/section/Contact';
import Footer from '@/components/navigation/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <HeroSection/>
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <PortfolioSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}