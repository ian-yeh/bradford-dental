import ServiceCard from "@/components/ServiceCard";
import SpecialsCard from "@/components/SpecialsCard";
import Header from "@/components/Header";
import Image from "next/image";
import TeamCard from "@/components/TeamCard";

const ServiceListItem = ({
  title,
  imageSrc,
}: {
  title: string;
  imageSrc: string;
}) => (
  <div className="p-4 hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
    <div className="flex items-center">
      <div className="mr-4 bg-purple p-2 rounded-full w-[72px] h-[72px] flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={title}
          width={40}
          height={40}
          unoptimized={true}
        />
      </div>
      <h3 className="text-base font-medium text-purple font-josefin">
        {title}
      </h3>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="">
      <div>
        <Header />
      </div>

      {/* Hero Section */}
      <div className="bg-purple text-white min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[80%] w-full items-center">
          {/* Left Column - Content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-josefin leading-tight md:leading-snug mb-4 md:mb-6">
              Your Family's Smile is Our Priority
            </h1>
            <h2 className="mb-8 md:mb-16 text-lg sm:text-xl md:text-xl lg:text-2xl font-extralight text-gray-200 font-poppins leading-relaxed">
              Bradford Dental Care provides comprehensive dental care tailored
              to help your smile shine its brightest
            </h2>
            <button className="font-josefin bg-white text-purple px-6 py-3 rounded-3xl font-semibold hover:bg-gray-100 transition-colors">
              Book an Appointment
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center md:justify-end mt-8 md:mt-0 order-first md:order-last">
            <div className="relative">
              <Image
                src="/images/family-photo.jpg"
                alt="Happy family showing their bright smiles"
                width={400}
                height={400}
                className="rounded-xl object-cover w-64 h-64 sm:w-80 sm:h-80 md:w-110 md:h-110"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-100 py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[80%] mx-auto items-center">
          {/* Left Column - Text */}
          <div className="">
            <h2 className="text-3xl md:text-4xl lg:text-5xl md:text-start text-center font-bold font-josefin text-purple leading-snug">
              A dental clinic worth smiling for. Give us a visit!
            </h2>
          </div>

          {/* Right Column - Location & Buttons */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            {/* Location with Icon */}
            <div className="flex items-start space-x-3">
              <svg
                className="w-12 h-12 text-purple mt-1 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="text-purple font-josefin">
                <p className="font-semibold text-2xl md:text-3xl lg:text-4xl">Bradford, Ontario</p>
                <p>140 Holland St. West</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="font-josefin bg-purple text-yellow-100 px-6 py-3 rounded-3xl font-semibold hover:bg-yellow-100 transition-colors hover:text-purple border-2 border-purple">
                Call Now
              </button>
              <button className="font-josefin border-2 border-purple text-purple px-6 py-3 rounded-3xl font-semibold hover:bg-purple hover:text-white transition-colors">
                See Map
              </button>
            </div>
          </div>
        </div>
      </div>

      

      {/* Team Section */}
      <div className="bg-white py-16 px-8">
        <div className="max-w-[80%] mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-josefin text-purple leading-snug">
              Meet Our Dental Team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamCard
              title="Dr. Matthias Yeh"
              description="Dentist"
              imageSrc="/images/matthias-yeh.jpg"
            />
            <TeamCard
              title="Dr. Justin Chow"
              description="Dentist"
              imageSrc="/images/justin-chow.jpg"
            />
            <TeamCard
              title="Dr. Julia Lai-Tong"
              description="Dentist"
              imageSrc="/images/julia-lai-tong.jpg"
            />
          </div>

          <div className="text-center mt-12">
            <button className="font-josefin bg-purple text-white px-6 py-3 rounded-3xl font-semibold hover:bg-whitetransition-colors hover:text-purple border-2 border-purple">
              Meet the Team
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16 px-8">
        <div className="text-center mb-12 md:mb-20 max-w-[80%] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-josefin text-purple leading-snug">
            Complete Care for Every Age
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start max-w-[80%] mx-auto">
          <div>
            <h2 className="text-3xl text-center md:text-left md:text-4xl mb-2 font-bold font-josefin text-purple leading-snug">
              Comprehensive Dental Care
            </h2>
            <p className="text-lg md:text-xl leading-relaxed font-poppins text-center md:text-left">
              From routine maintenance to complex restorations, we provide
              complete dental solutions for the whole family.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <ServiceListItem
                  title="Bridges and Dentures"
                  imageSrc="./icons/bridge-dentures-icon.svg"
                />
                <ServiceListItem
                  title="Cosmetic Dentistry"
                  imageSrc="./icons/cosmetic-icon.svg"
                />
                <ServiceListItem
                  title="Orthodontics"
                  imageSrc="./icons/ortho-icon.svg"
                />
                <ServiceListItem
                  title="Crowns"
                  imageSrc="./icons/crowns-icon.svg"
                />
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <ServiceListItem
                  title="Dental Implants"
                  imageSrc="./icons/dental-implants.svg"
                />
                <ServiceListItem
                  title="Root Canal Treatment"
                  imageSrc="./icons/root-canal-icon.svg"
                />
                <ServiceListItem
                  title="Post Operative Care"
                  imageSrc="./icons/post-operative-icon.svg"
                />
                <ServiceListItem
                  title="Nutrition"
                  imageSrc="./icons/nutrition-icon.svg"
                />
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-[80%] mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl mb-2 font-bold font-josefin text-purple leading-snug text-center md:text-left">
              In-Office Specials
            </h2>
            <p className="text-lg md:text-xl leading-relaxed font-poppins text-center md:text-left">
              We understand that your smile is one of the most memorable parts
              of any first impression.
            </p>
          </div>
          <div>
            <SpecialsCard 
              title="Take Home Whitening"
              description="Get a comprehensive exam and cleaning for just $99."
              imageSrc="/images/take-home-whitening.jpg"
            />
            <SpecialsCard 
              title="Zoom Whitening"
              description="New patients can enjoy a free consultation to discuss their dental needs."
              imageSrc="/images/zoom-whitening.jpg"
            />  
            <SpecialsCard 
              title="Sportsguards"
              description="Protect your smile with our custom sportsguards."
              imageSrc="/images/sportsguard.jpg"
            />
          </div>

        </div>
      </div>


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