import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhyAccredian from "@/components/WhyAccredian";
import HowItWorks from "@/components/HowItWorks";
import Programs from "@/components/Programs";
import Outcomes from "@/components/Outcomes";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <WhyAccredian />
      <HowItWorks />
      <Programs />
      <Outcomes />
      <Testimonials />
      <Partners />
      <LeadForm />
      <Footer />
    </main>
  );
}
