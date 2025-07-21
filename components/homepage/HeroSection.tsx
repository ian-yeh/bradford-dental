import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div>
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
      
    </div>
  )
}

export default HeroSection

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