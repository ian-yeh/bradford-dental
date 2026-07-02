import React from 'react'
import Reveal from '@/components/Reveal'

const MAPS_URL =
  'https://maps.google.com/?q=Bradford+Dental+Care,+140+Holland+St+West,+Bradford,+ON'

const cardClass =
  'group bg-white border border-purple/20 rounded-lg p-4 flex items-center gap-4 hover:border-purple transition-colors'

const iconClass =
  'flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 text-purple transition-colors group-hover:bg-purple group-hover:text-white'

const LocationSection = () => {
  return (
    <div className="bg-yellow-100 py-8 px-6">
      <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-[90%] md:w-[85%] max-w-[1200px] mx-auto">
        {/* Phone */}
        <a href="tel:905-775-5553" className={cardClass}>
          <span className={iconClass}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </span>
          <div className="font-josefin text-sm">
            <p className="font-bold text-purple leading-snug">905-775-5553</p>
            <p className="text-purple/60">Call Us!</p>
          </div>
        </a>

        {/* Email */}
        <a href="mailto:info@bradforddental.com" className={cardClass}>
          <span className={iconClass}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </span>
          <div className="font-josefin text-sm">
            <p className="font-bold text-purple leading-snug break-all">
              info@bradforddental.com
            </p>
            <p className="text-purple/60">Email Us!</p>
          </div>
        </a>

        {/* Hours */}
        <div className={cardClass}>
          <span className={iconClass}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <dl className="font-josefin text-xs w-full space-y-0.5">
            <div className="flex justify-between gap-2">
              <dt className="font-bold text-purple uppercase">Mon-Tues</dt>
              <dd className="text-purple/80">9:00AM - 7:00PM</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="font-bold text-purple uppercase">Wed-Thurs</dt>
              <dd className="text-purple/80">9:00AM - 5:00PM</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="font-bold text-purple uppercase">Fri-Sat</dt>
              <dd className="text-purple/80">9:00AM - 2:00PM</dd>
            </div>
          </dl>
        </div>

        {/* Address */}
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClass}
          aria-label="View 140 Holland St W, Bradford, Ontario on Google Maps"
        >
          <span className={iconClass}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <div className="font-josefin text-sm">
            <p className="font-bold text-purple leading-snug">140 Holland St W</p>
            <p className="text-purple/60">Bradford, ON</p>
          </div>
        </a>
      </Reveal>
    </div>
  )
}

export default LocationSection
