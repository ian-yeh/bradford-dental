import Image from "next/image";
import Link from "next/link";
import BookAppointmentButton from "@/components/BookAppointmentModal";

const Header = ({ bgClass = "" }: { bgClass?: string }) => {
  const logoWidth: number = 150;
  const logoHeight: number = 47;

  return (
    <div className={`${bgClass} text-purple px-4 py-5 sm:p-8 items-center justify-center flex`}>
      <div className="flex justify-between items-center gap-4 w-full lg:w-[80%]">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/theme/logo.png"
            alt="Bradford Dental Care"
            width={logoWidth}
            height={logoHeight}
            className="w-[100px] h-auto lg:w-[150px]"
          />
        </Link>
        <BookAppointmentButton className="btn bg-purple text-white hover:bg-purple-dark px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base whitespace-nowrap">
          <span className="sm:hidden">Book Now</span>
          <span className="hidden sm:inline">Book an Appointment</span>
        </BookAppointmentButton>
      </div>
    </div>
  );
};

export default Header;
