
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
    </div>
  );
};

export default Index;
