import { Hero } from "@/components/Hero";
import { ServiceArea } from "@/components/ServiceArea";
import { Fleet } from "@/components/Fleet";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServiceArea />
      <Fleet />
      <Contact />
    </div>
  );
};

export default Index;