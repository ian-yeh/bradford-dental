import React from 'react'
import Image from 'next/image'
import bannerBackground from '@/public/images/Banner-Background.jpg'

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden text-white">
      {/* Team photo */}
      <Image
        src={bannerBackground}
        alt="The Bradford Dental Care team"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Brand-indigo scrim: opaque on the left for legibility, clearing fast to
          the right so the team's faces stay bright and present */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple/95 via-purple/60 to-purple/5" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[70vh] items-center">
        <div className="mx-auto w-[90%] max-w-[1200px]">
          <div className="max-w-xl text-center md:text-left">
            <p className="animate-fade-up mb-4 font-josefin text-xs sm:text-sm uppercase tracking-[0.3em] text-blue-100">
              Welcome to Bradford Dental Care
            </p>
            <h1
              className="animate-fade-up font-josefin text-4xl md:text-6xl font-bold leading-tight"
              style={{ animationDelay: '0.1s' }}
            >
              Your Family's Smile is Our Priority
            </h1>
            <p
              className="animate-fade-up mt-6 font-poppins text-lg md:text-xl font-extralight leading-relaxed text-blue-100"
              style={{ animationDelay: '0.2s' }}
            >
              Comprehensive dental care from a team that treats every patient
              like family.
            </p>
            <a
              href="#team"
              className="btn animate-fade-up mt-8 border-2 border-white bg-transparent text-white hover:bg-white hover:text-purple"
              style={{ animationDelay: '0.3s' }}
            >
              Meet the Team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
