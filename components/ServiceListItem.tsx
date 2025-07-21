import React from 'react'
import Image from 'next/image'

const ServiceListItem = ({
  title,
  imageSrc,
}: {
  title: string;
  imageSrc: string;
}) => (
  <div className="p-4 hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
    <div className="flex items-center">
      <div className="mr-4 bg-purple p-2 rounded-full w-[72px] h-[72px] flex items-center justify-center">
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
  </div>
);

export default ServiceListItem;
