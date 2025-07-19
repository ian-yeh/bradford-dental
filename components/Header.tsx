import React from 'react'
import Image from "next/image";

const Header = () => {
	const logoDimensions: number = 120;

  return (
    <div className='text-purple p-8 items-center justify-center flex'>
			<div className='flex justify-between items-center w-[80%]'>
				<div className='flex-1 items-center'>
					<Image src="/images/logo.jpg" alt="Logo" width={logoDimensions} height={logoDimensions}/>
				</div>
				<nav>
					<ul className="flex space-x-4 font-josefin">
						<li><a href="/about">About</a></li>
						<li><a href="/services">Services</a></li>
						<li><a href="/contact">Contact</a></li>
					</ul>
				</nav>
				<div className='flex flex-1 justify-end'>
					<button className='bg-purple text-white px-8 py-3 rounded-3xl font-josefin'>Book an Appointment</button>
				</div>
			</div>
    </div>
  )
}

export default Header