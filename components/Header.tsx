import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const logoWidth: number = 205;
  const logoHeight: number = 64;

  return (
    <div className="text-purple p-8 items-center justify-center flex">
      <div className="lg:flex justify-between items-center w-[80%] hidden">
        <div className="flex-1 items-center">
          <Link href="/">
            <Image
              src="/images/theme/logo.png"
              alt="Bradford Dental Care"
              width={logoWidth}
              height={logoHeight}
            />
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          <button className="btn bg-purple text-white hover:bg-purple-dark">
            Book an Appointment
          </button>
        </div>
      </div>
      <div className="flex lg:hidden justify-between items-center w-[80%]">
        <div className="flex-1 items-center">
          <Link href="/">
            <Image
              src="/images/theme/logo.png"
              alt="Bradford Dental Care"
              width={logoWidth - 50}
              height={logoHeight - 16}
            />
          </Link>
        </div>
        <button className="btn bg-purple text-white hover:bg-purple-dark">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default Header;
