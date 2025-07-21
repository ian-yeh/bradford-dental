import Header from "@/components/Header";

import HeroSection from "@/components/homepage/HeroSection";
import LocationSection from "@/components/homepage/LocationSection";
import TeamSection from "@/components/homepage/TeamSection";
import ServicesSection from "@/components/homepage/ServicesSection";

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

    </div>
  );
};

export default Home;

{/* Why Choose Us Section 
      <div className="bg-white py-30 px-8">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-josefin text-purple leading-snug">
              Why Bradford Families Chose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="General Dentistry"
              description="Comprehensive care for all ages, from routine check-ups to complex procedures."
              imageSrc="/images/general-dentistry.jpg"
            />
            <ServiceCard 
              title="Cosmetic Dentistry"
              description="Enhancing smiles with teeth whitening, veneers, and more."
              imageSrc="/images/cosmetic-dentistry.jpg"
            />
            <ServiceCard 
              title="Orthodontics"
              description="Straightening teeth with braces and clear aligners for a healthier smile."
              imageSrc="/images/orthodontics.jpg"
            />

          </div>
        </div>
      </div>

      */}