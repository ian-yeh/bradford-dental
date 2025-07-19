import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ServiceCard = ({ title, description, imageSrc }: ServiceCardProps) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <div className="relative h-48">
      <Image 
        src={imageSrc} 
        alt={title} 
        width={400} 
        height={300}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold font-josefin text-purple mb-3">
        {title}
      </h3>
      <p className="text-gray-600 font-poppins leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default ServiceCard;