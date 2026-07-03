import React from 'react'
import Link from 'next/link'
import TeamCard from '@/components/TeamCard'

const TeamSection = () => {
  return (
    <div>
      {/* Team Section */}
      <div className="bg-surface py-16 px-4 sm:px-8">
        <div className="w-[90%] md:w-[80%] max-w-[1200px] mx-auto">
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
              imageSrc="/images/team/matthias-yeh.jpg"
            />
            <TeamCard
              title="Dr. Justin Chow"
              description="Dentist"
              imageSrc="/images/team/justin-chow.jpg"
            />
            <TeamCard
              title="Dr. Julia Lai-Tong"
              description="Dentist"
              imageSrc="/images/team/julia-lai-tong.jpg"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              href="/team"
              className="btn bg-purple text-white border-2 border-purple hover:bg-white hover:text-purple"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TeamSection
