import React from 'react'

const LocationSection = () => {
  return (
    <div>
      <div className="bg-yellow-100 py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] md:w-[80%] max-w-[1200px] mx-auto items-center">
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
              <a
                href="https://www.google.com/maps/search/?api=1&query=140+Holland+St.+West,+Bradford,+Ontario"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View 140 Holland St. West, Bradford, Ontario on Google Maps"
              >
                <svg
                  className="w-12 h-12 text-purple mt-1 flex-shrink-0 transition-colors hover:text-purple-dark"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <div className="text-purple font-josefin">
                <p className="font-semibold text-2xl md:text-3xl lg:text-4xl">Bradford, Ontario</p>
                <p>140 Holland St. West</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn bg-purple text-white border-2 border-purple hover:bg-purple-dark">
                Call Now
              </button>
              <button className="btn border-2 border-purple text-purple hover:bg-purple hover:text-white">
                See Map
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default LocationSection
