import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const logoWidth: number = 205;
  const logoHeight: number = 64;

  return (
    <div className="text-purple px-4 py-5 sm:p-8 items-center justify-center flex">
      <div className="flex justify-between items-center gap-4 w-full lg:w-[80%]">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/theme/logo.png"
            alt="Bradford Dental Care"
            width={logoWidth}
            height={logoHeight}
            className="w-[140px] h-auto lg:w-[205px]"
          />
        </Link>
        <button className="btn bg-purple text-white hover:bg-purple-dark px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base whitespace-nowrap">
          <span className="sm:hidden">Book Now</span>
          <span className="hidden sm:inline">Book an Appointment</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
