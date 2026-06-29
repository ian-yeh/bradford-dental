"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
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
        <nav>
          <ul className="flex space-x-6 font-josefin">
            <li>
              <a
                href="/about"
                className="hover:text-purple-dark transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-purple-dark transition-colors duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-purple-dark transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
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
        <div className="relative">
          <button onClick={() => setDropDown(!dropDown)}>
            <Image
              src="/icons/menu.svg"
              alt="Menu Icon"
              width={24}
              height={24}
              className="inline-block mr-2 hover:opacity-80"
              unoptimized={true}
            />
          </button>
          {dropDown && (
            <div className="absolute top-full right-0 bg-white shadow-lg rounded-lg mt-2 w-48 z-10">
              <ul className="p-4 space-y-2 font-josefin">
                <li>
                  <a
                    href="/about"
                    className="block hover:bg-gray-100 px-2 py-1"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="block hover:bg-gray-100 px-2 py-1"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="block hover:bg-gray-100 px-2 py-1"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
