import React from "react";
import Image from "next/image";

interface StaffCardProps {
  name: string;
  role: string | string[];
  imageSrc?: string;
}

const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

const StaffCard = ({ name, role, imageSrc }: StaffCardProps) => {
  const roleLines = Array.isArray(role) ? role : [role];

  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-4 flex flex-col">
      <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
        {imageSrc ? (
          <Image src={imageSrc} alt={name} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
            <span className="text-5xl font-bold font-josefin text-purple">
              {initialsOf(name)}
            </span>
          </div>
        )}
      </div>
      <h3 className="text-lg font-bold font-josefin text-gray-800 text-center mb-2">
        {name}
      </h3>
      <div className="text-center">
        {roleLines.map((line, i) => (
          <p
            key={i}
            className="font-josefin text-xs font-bold tracking-widest text-purple uppercase"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default StaffCard;
