import Header from "@/components/Header";

import HeroSection from "@/components/homepage/HeroSection";
import LocationSection from "@/components/homepage/LocationSection";
import TeamSection from "@/components/homepage/TeamSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import Testimonials from "@/components/homepage/Testimonials";

const Home = () => {
  return (
    <div className="">
      <div>
        <Header />
      </div>

      <HeroSection />
      <LocationSection />
      <TeamSection />
      <ServicesSection />
      <Testimonials />

    </div>
  );
};

export default Home;

