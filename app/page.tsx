import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import CaseStudies from '@/components/case-studies';
import Testimonials from '@/components/testimonials';
import WhyUs from '@/components/why-us';
import AgencyPartners from '@/components/agency-partners';
import Team from '@/components/team';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <CaseStudies />
      <Testimonials />
      <AgencyPartners />
      <WhyUs />
      {/* <Team /> */}
      <Contact />
      <Footer />
    </main>
  );
}
