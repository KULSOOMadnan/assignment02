"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);


  return (
    <div>

      <nav className={`bg-emerald-900 flex items-center p-2 justify-between md:p-5 sticky z-10  backdrop-blur-md  shadow-lg font-satisfy`}>
        {/* Logo centered on small screens */}
        <div className='flex text-white text-3xl ' >
        
        <Image src ='/images/nav.png' className="text-white md:text-3xl text-2xl cursor-pointer mx-2 md:mx-0 h-10 w-10" width={32} height={32} alt='logo' />
          <span><a href="/">card</a></span>
        </div>
         
         {/* Show/Hide menu based on isOpen state */}
        <ul
          className={`text-white md:text-2xl space-x-7 cursor-pointer text-xl hidden md:flex`}
        >
        <li className=' hover:text-gray-400'><Link href="/" >Home</Link></li>
        <li className=' hover:text-gray-400'><Link href="/about">About</Link></li>
        <li className=' hover:text-gray-400'><Link href="/services">Services</Link></li>
        <li className=' hover:text-gray-400'><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Hamburger button to toggle menu */}
        <button
          className="text-white text-5xl md:hidden flex place-items-center"
          onClick={() => setOpen(!isOpen)}
        >
          {!isOpen ? (
            <p className="text-5xl " >&#119064; </p>
          ) : (
            <p className="text-4xl">&#10005;</p>
          )}
        </button>
      </nav>
      
      {isOpen ? (
        <div className='bg-emerald-900 p-8 font-satisfy'>
            <ul
          className={`text-white md:text-2xl  cursor-pointer text-xl md:hidden flex flex-col items-center justify-center space-y-6  `}
        >
        
          <li className=' text-center pb-3 text-2xl hover:text-emerald-600'><Link href='/'>Home</Link></li>
          <li className=' text-center pb-3 text-2xl hover:text-emerald-600 '><Link href='/contact'>Contact</Link></li>
          <li className=' text-center pb-3 text-2xl hover:text-emerald-600'><Link href='/services'>Services</Link></li>
          <li className=' text-center pb-3 text-2xl hover:text-emerald-600'><Link href='/about'>About</Link></li>

        </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
