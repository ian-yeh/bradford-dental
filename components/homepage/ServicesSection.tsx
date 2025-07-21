import React from 'react'
import ServiceListItem from '@/components/ServiceListItem'
import SpecialsCard from '@/components/SpecialsCard'

const ServicesSection = () => {
  return (
    <div>
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
  )
}

export default ServicesSection

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