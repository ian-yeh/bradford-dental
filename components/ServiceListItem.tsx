import React from 'react'
import Image from 'next/image'

const ServiceListItem = ({
  title,
  imageSrc,
  href,
}: {
  title: string;
  imageSrc: string;
  href?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block p-4 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
  >
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 text-center sm:text-left">
      <div className="sm:mr-4 bg-purple p-2 rounded-full w-[72px] h-[72px] shrink-0 flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={title}
          width={40}
          height={40}
          unoptimized={true}
        />
      </div>
      <h3 className="text-base font-medium text-purple font-josefin">
        {title}
      </h3>
    </div>
  </a>
);

export default ServiceListItem;
