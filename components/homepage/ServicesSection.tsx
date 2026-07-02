import React from 'react'
import ServiceListItem from '@/components/ServiceListItem'
import SpecialsCard from '@/components/SpecialsCard'

const ServicesSection = () => {
  return (
    <div>
      {/* Services Section */}
      <div className="bg-white py-16 px-8">
        <div className="w-[90%] md:w-[80%] max-w-[1200px] mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-4xl md:text-5xl mb-4 font-bold font-josefin text-purple leading-snug">
              Complete Care for Every Age
            </h2>
            <p className="text-lg md:text-xl leading-relaxed font-poppins">
              At our dental office, we want to make sure that every one of our
              patients gets the most from every smile. We offer a wide range of
              dental treatments and services, and whether it&apos;s a regular
              check-up appointment or a cosmetic dental treatment, we
              understand and appreciate the importance of a healthy, attractive
              smile on a personal level.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ServiceListItem
              title="Bridges and Dentures"
              imageSrc="/icons/bridge-dentures-icon.svg"
              href="https://www.cda-adc.ca/en/oral_health/talk/procedures/bridges_dentures/"
            />
            <ServiceListItem
              title="Cosmetic Dentistry"
              imageSrc="/icons/cosmetic-icon.svg"
              href="https://www.oda.on.ca/cosmetic-dentistry"
            />
            <ServiceListItem
              title="Orthodontics"
              imageSrc="/icons/ortho-icon.svg"
              href="https://www.cda-adc.ca/en/oral_health/talk/procedures/orthodontics/"
            />
            <ServiceListItem
              title="Crowns"
              imageSrc="/icons/crowns-icon.svg"
              href="https://www.cda-adc.ca/en/oral_health/talk/procedures/crowns/"
            />
            <ServiceListItem
              title="Dental Implants"
              imageSrc="/icons/dental-implants.svg"
              href="https://www.cda-adc.ca/en/oral_health/talk/procedures/dental_implants/"
            />
            <ServiceListItem
              title="Root Canal Treatment"
              imageSrc="/icons/root-canal-icon.svg"
              href="https://www.cda-adc.ca/en/oral_health/talk/procedures/root_canal/"
            />
            <ServiceListItem
              title="Post Operative Care"
              imageSrc="/icons/post-operative-icon.svg"
              href="https://www.cda-adc.ca/en/oral_health/talk/procedures/oral_surgery/"
            />
            <ServiceListItem
              title="Nutrition"
              imageSrc="/icons/nutrition-icon.svg"
              href="https://www.cda-adc.ca/en/oral_health/cfyt/dental_care/nutrition.asp"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-[90%] md:w-[80%] max-w-[1200px] mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl mb-2 font-bold font-josefin text-purple leading-snug text-center md:text-left">
              In-Office Specials
            </h2>
            <p className="text-lg md:text-xl leading-relaxed font-poppins text-center md:text-left">
              We&apos;re in the smile business. We understand that your smile
              is one of the most memorable parts of any first impression.
              Maintaining a healthy, attractive smile is important for more
              than just aesthetics; it&apos;s about good overall health.
            </p>
          </div>
          <div>
            <SpecialsCard
              title="Take Home Whitening"
              description={
                "We have some great courtesy gifts for all of our new patients! A choice of a free Take-Home Whitening Kit or an Electric Toothbrush with every new patient exam.\n\nWe like to show we really care about everyone who walks through our door. Please feel free to call the office for more details!"
              }
              imageSrc="/images/specials/take-home-whitening.jpg"
            />
            <SpecialsCard
              title="Zoom Whitening"
              description={
                "Zoom! is a bleaching process that lightens discoloration of enamel and dentin.\n\nThe speed and convenience of Zoom! in comparison to days of wearing trays and gradual whitening makes it the perfect choice for the busy individual."
              }
              imageSrc="/images/specials/zoom-whitening.jpg"
            />
            <SpecialsCard
              title="Sportsguards"
              description={
                "Pro-Form mouthguards are prescribed for athletic patients because they provide the highest level of protection, retention, comfort, and fit without hindering speech or breathing and maintaining athletic performance.\n\nThese custom made athletic mouthguards are proven to reduce the incidence of tooth breakage by properly distributing the stress of a hard impact to the entire length of the tooth."
              }
              imageSrc="/images/specials/sportsguard.jpg"
            />
          </div>

        </div>
      </div>

    </div>
  )
}

export default ServicesSection

      {/* Services Section */}
      <div className="bg-surface py-16 px-8">
        <div className="text-center mb-12 md:mb-20 w-[90%] md:w-[80%] max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-josefin text-purple leading-snug">
            Complete Care for Every Age
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start w-[90%] md:w-[80%] max-w-[1200px] mx-auto">
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
                  imageSrc="/icons/bridge-dentures-icon.svg"
                />
                <ServiceListItem
                  title="Cosmetic Dentistry"
                  imageSrc="/icons/cosmetic-icon.svg"
                />
                <ServiceListItem
                  title="Orthodontics"
                  imageSrc="/icons/ortho-icon.svg"
                />
                <ServiceListItem
                  title="Crowns"
                  imageSrc="/icons/crowns-icon.svg"
                />
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <ServiceListItem
                  title="Dental Implants"
                  imageSrc="/icons/dental-implants.svg"
                />
                <ServiceListItem
                  title="Root Canal Treatment"
                  imageSrc="/icons/root-canal-icon.svg"
                />
                <ServiceListItem
                  title="Post Operative Care"
                  imageSrc="/icons/post-operative-icon.svg"
                />
                <ServiceListItem
                  title="Nutrition"
                  imageSrc="/icons/nutrition-icon.svg"
                />
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-[90%] md:w-[80%] max-w-[1200px] mx-auto">
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
              imageSrc="/images/specials/take-home-whitening.jpg"
            />
            <SpecialsCard 
              title="Zoom Whitening"
              description="New patients can enjoy a free consultation to discuss their dental needs."
              imageSrc="/images/specials/zoom-whitening.jpg"
            />  
            <SpecialsCard 
              title="Sportsguards"
              description="Protect your smile with our custom sportsguards."
              imageSrc="/images/specials/sportsguard.jpg"
            />
          </div>

        </div>
      </div>