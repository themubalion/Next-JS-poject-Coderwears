// The navbar is copied from tailblocks cus I am not going to design this page this is the process of learning the development using next js so to save time I am using templates here, and I already know css and tailwind css.
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  
}from "@fortawesome/fontawesome-svg-core";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap justify-between md:flex-row items-center">
      <Link href={'/'}><a className="flex title-font items-center font-bold px-3 py-2  hover:text-white text-red-500 mb-4 md:mb-0">
        <Image src={'/logo.png'} width={'150px'} height={'40px'} alt={'Logo Image'}></Image>
      </a></Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-end">
        <Link href={'/'}><a className="mr-5 hover:text-gray-900">Home</a></Link>
        <Link href={'about'}><a className="mr-5 hover:text-gray-900">About</a></Link>
        <Link href={'contact'}><a className="mr-5 hover:text-gray-900">Contact</a></Link>
        {/* Here we will add the products dropdown menu */}
        <Link href={'register'}><a className="mr-5 hover:text-gray-900"><button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Register</button></a></Link>
        <Link href={'cart'}><a>
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">View Cart
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
          </a></Link>
      </nav>
    </div>
  </header>
  </div>
  )
}

export default Navbar