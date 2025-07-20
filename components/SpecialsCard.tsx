"use client";
import { useState } from 'react';
import Image from 'next/image';

interface SpecialsCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const SpecialsCard = ({ title, description, imageSrc }: SpecialsCardProps) => {
  const [dropDown, setDropDown] = useState(false);
  
  return (
    <div className='border-2 border-purple rounded-lg overflow-hidden mb-8'> 
      {/* Main card content */}
      <div className='p-4 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Image 
            src={imageSrc}
            alt={title}
            width={72}
            height={72}
            className="rounded-lg flex-shrink-0 w-10 h-10 object-cover md:w-20 md:h-20"
          />
          <h3 className='font-medium text-xl md:text-3xl text-purple font-josefin'>{title}</h3>
        </div>
        
        <button 
          onClick={() => setDropDown(!dropDown)}
          className={`w-6 h-6 md:w-8 md:h-8 rounded-full md:border-2 border-purple bg-white text-purple font-bold text-xl flex items-center justify-center hover:bg-purple hover:text-white transition-colors ${
            dropDown ? 'rotate-45' : ''
          } transition-transform`}
        >
          +
        </button>
      </div>
      
      {/* Dropdown content */}
      {dropDown && (
        <div className='px-4 pb-4 border-t border-gray-200 pt-4'>
          <p className='text-black font-poppins mb-3'>{description}</p>
          <button className='bg-purple border text-white px-4 py-2 rounded-3xl font-josefin hover:bg-white hover:text-purple transition-colors'>
            Book Now
          </button>
        </div>
      )}
    </div>
  )
}

export default SpecialsCard;