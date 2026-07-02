import Image from "next/image";
import Link from "next/link";
import BookAppointmentButton from "@/components/BookAppointmentModal";

const Header = ({ bgClass = "" }: { bgClass?: string }) => {
  const logoWidth: number = 150;
  const logoHeight: number = 47;

  return (
    <div className={`${bgClass} text-purple p-8 items-center justify-center flex`}>
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
          <BookAppointmentButton />
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
        <BookAppointmentButton />
      </div>
    </div>
  );
};

export default Header;
