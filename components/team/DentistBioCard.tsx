import React from "react";
import Image from "next/image";

interface DentistBioCardProps {
  name: string;
  role: string;
  imageSrc: string;
  bio: string[];
}

const DentistBioCard = ({ name, role, imageSrc, bio }: DentistBioCardProps) => (
  <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 flex flex-col">
    <div className="relative w-full aspect-square mb-6 rounded-lg overflow-hidden">
      <Image src={imageSrc} alt={name} fill className="object-cover" />
    </div>
    <h3 className="text-xl font-bold font-josefin text-gray-800 mb-1">
      {name}
    </h3>
    <p className="font-josefin text-xs font-bold tracking-widest text-purple uppercase mb-5">
      {role}
    </p>
    <div className="space-y-3 font-poppins text-sm text-gray-600 leading-relaxed">
      {bio.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </div>
  </div>
);

export default DentistBioCard;
