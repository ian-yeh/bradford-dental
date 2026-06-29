import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Team photo */}
      <Image
        src="/images/Banner-Background.jpg"
        alt="The Bradford Dental Care team"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Brand-indigo scrim: opaque on the left for legibility, clearing to the
          right so the team stays visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple/95 via-purple/75 to-purple/25" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-[90%] max-w-[1200px]">
          <div className="max-w-xl text-center md:text-left">
            <p className="mb-4 font-josefin text-xs sm:text-sm uppercase tracking-[0.3em] text-blue-100">
              Welcome to Bradford Dental Care
            </p>
            <h1 className="font-josefin text-4xl md:text-6xl font-bold leading-tight">
              Your Family's Smile is Our Priority
            </h1>
            <p className="mt-6 font-poppins text-lg md:text-xl font-extralight leading-relaxed text-blue-100">
              Comprehensive dental care from a team that treats every patient
              like family.
            </p>
            <button className="btn mt-8 bg-white text-purple hover:bg-blue-100">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
