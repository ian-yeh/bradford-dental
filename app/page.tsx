import ServiceCard from "@/components/ServiceCard";
import Header from "@/components/Header";
import Image from "next/image";

const Home = () => {
  return (
    <div className="">
      <div>
        <Header />
      </div>
      <div className="bg-purple text-white h-screen flex items-center justify-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[80%] w-full items-center">
          {/* Left Column - Content */}
          <div className="">
            <h1 className="text-4xl md:text-7xl font-bold font-josefin leading-snug">
              Your Family's Smile is Our Priority
            </h1>
            <h2 className="mb-16 text-2xl font-extralight md:text-2xl text-gray-200 font-poppins leading-relaxed">
              Bradford Dental Care provides comprehensive dental care tailored to help your smile shine its brightest
            </h2>
            <button className="font-josefin bg-white text-purple px-6 py-3 rounded-3xl font-semibold hover:bg-gray-100 transition-colors">
              Book an Appointment
            </button>
          </div>
          
          {/* Right Column - Image */}
          <div className="flex justify-end">
            <div className="relative">
              <Image 
                src="/images/family-photo.jpg" 
                alt="Hero Image" 
                width={400} 
                height={400}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="bg-yellow-100 py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[80%] mx-auto items-center">
          {/* Left Column - Text */}
          <div className="">
            <h2 className="text-4xl md:text-5xl font-bold font-josefin text-purple leading-snug">
              A dental clinic worth smiling for. Give us a visit!
            </h2>
          </div>
          
          {/* Right Column - Location & Buttons */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            {/* Location with Icon */}
            <div className="flex items-start space-x-3">
              <svg className="w-12 h-12 text-purple mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <div className="text-purple font-josefin">
                <p className="font-semibold text-4xl">Bradford, Ontario</p>
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

     {/* Services Section */}
      <div className="bg-white py-30 px-8">
        <div className="max-w-[80%] mx-auto">
          {/* Section Heading */}
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

      {/* Team Section */}
      <div className="bg-white py-30 px-8">
        <div className="max-w-[80%] mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-josefin text-purple leading-snug">
              Meet Our Dental Team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member Card */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Image 
                src="/images/team-member-1.jpg" 
                alt="Team Member 1" 
                width={400} 
                height={400}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold font-josefin text-purple mb-2">Dr. John Smith</h3>
              <p className="text-gray-600 font-poppins">General Dentist</p>
            </div>
            {/* Team Member Card */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Image 
                src="/images/team-member-2.jpg" 
                alt="Team Member 2" 
                width={400} 
                height={400}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold font-josefin text-purple mb-2">Dr. Jane Doe</h3>
              <p className="text-gray-600 font-poppins">Orthodontist</p>
            </div>
            {/* Team Member Card */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Image 
                src="/images/team-member-3.jpg" 
                alt="Team Member 3" 
                width={400} 
                height={400}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold font-josefin text-purple mb-2">Dr. Emily Johnson</h3>
              <p className="text-gray-600 font-poppins">Pediatric Dentist</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;