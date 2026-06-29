import React from "react";
import Image from "next/image";

interface TeamCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const TeamCard = ({ title, description, imageSrc }: TeamCardProps) => {
  return (
    <div className="bg-white border border-purple/25 p-10 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="mx-auto">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={400}
          className="rounded-lg mb-4"
        />
        <h3 className="text-xl font-bold font-josefin text-purple mb-2">
          {title}
        </h3>
        <p className="text-gray-600 font-poppins">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
