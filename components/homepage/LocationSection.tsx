import React from 'react'

const LocationSection = () => {
  const MAPS_URL =
    'https://maps.google.com/?q=Bradford+Dental+Care,+140+Holland+St+West,+Bradford,+ON'

  return (
    <div className="bg-yellow-100 py-12 md:py-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 w-[90%] md:w-[85%] max-w-[1200px] mx-auto items-center">
        {/* Left Column - Headline */}
        <div>
          <p className="mb-3 font-josefin text-xs sm:text-sm uppercase tracking-[0.25em] text-purple/60 text-center md:text-start">
            Visit Our Clinic
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center md:text-start font-bold font-josefin text-purple leading-tight">
            A dental clinic worth smiling for. Give us a visit!
          </h2>
        </div>

        {/* Right Column - Contact card */}
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 flex flex-col gap-5">
          {/* Location */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4"
            aria-label="View 140 Holland St. West, Bradford, Ontario on Google Maps"
          >
            <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-purple transition-colors group-hover:bg-purple group-hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <div className="font-josefin">
              <p className="font-bold text-xl sm:text-2xl text-purple leading-tight">
                Bradford, Ontario
              </p>
              <p className="text-sm text-purple/60 tracking-wide">140 Holland St. West</p>
            </div>
          </a>

          <hr className="border-purple/10" />

          {/* Phone */}
          <div className="flex items-center gap-4">
            <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-purple">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </span>
            <div className="font-josefin">
              <p className="text-[11px] uppercase tracking-[0.2em] text-purple/60">Call Us</p>
              <p className="font-bold text-xl sm:text-2xl text-purple leading-tight">
                905-775-5553
              </p>
            </div>
          </div>

          {/* Action */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn w-full sm:w-auto sm:self-start bg-purple text-white border-2 border-purple hover:bg-purple-dark"
          >
            See Map
          </a>
        </div>
      </div>
    </div>
  )
}

export default LocationSection
