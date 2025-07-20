"use client";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const logoDimensions: number = 120;

  return (
    <div className="text-purple p-8 items-center justify-center flex">
      <div className="lg:flex justify-between items-center w-[80%] hidden">
        <div className="flex-1 items-center">
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={logoDimensions}
            height={logoDimensions}
          />
        </div>
        <nav>
          <ul className="flex space-x-4 font-josefin">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="flex flex-1 justify-end">
          <button className="bg-purple text-white px-8 py-3 rounded-3xl font-josefin">
            Book an Appointment
          </button>
        </div>
      </div>
      <div className="flex lg:hidden justify-between items-center w-[80%]">
        <div className="flex-1 items-center">
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={logoDimensions - 30}
            height={logoDimensions - 30}
          />
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
