import React from 'react'
import TeamCard from '@/components/TeamCard'

const TeamSection = () => {
  return (
    <div>
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
      
    </div>
  )
}

export default TeamSection

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