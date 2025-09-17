import Hero from "@/components/Hero";
import AboutYamile from "@/components/AboutYamile";
import Catalog from "@/components/Catalog";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutYamile />
      <Catalog />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
