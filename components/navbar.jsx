// The navbar is copied from tailblocks cus I am not going to design this page this is the process of learning the development using next js so to save time I am using templates here, and I already know css and tailwind css.
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import {
  FaAngleDown,
  FaBars,
} from 'react-icons/fa'
import {
  MdShoppingCart
} from 'react-icons/md';


const Navbar = () => {
  const closeNav = (e) => {
    e.preventDefault()
    document.getElementById("mySidenav").style.width = "0";
  }

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  }
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="mx-auto w-full flex  justify-between items-center">
          <Link href={'/'} className={'h-full'}><a className="flex items-center h-full hover:text-white text-red-500 mb-4 mediumScreen:mb-0">
            {            // eslint-disable-next-line @next/next/no-img-element
            }            <Image src={'/logo.png'} width={'150px'} height={'40px'} alt={'Logo Image'} className="mt-2" />
          </a></Link>
          <nav className=" flex ml-auto items-center text-base justify-end">
            <Link href={'/'}><a className="mr-5 hover:text-gray-900 mediumScreen:hidden ">Home</a></Link>
            <Link href={'about'}><a className="mr-5 hover:text-gray-900 mediumScreen:hidden">About</a></Link>
            <Link href={'contact'}><a className="mr-5 hover:text-gray-900 mediumScreen:hidden">Contact</a></Link>
            {/* Here we will add the products dropdown menu */}
            <div className="dropdown relative inline-block z-10 mediumScreen:hidden">
              <button className="dropbtn pr-4"><div className='flex items-center'>Products <FaAngleDown/></div></button>
              <div className="hidden absolute min-w-[10rem] dropdown-content">
                <Link href={'tshirts'}><a href="#" className='no-underline block py-3 px-4'>Tshirts</a></Link>
                <Link href={'hoodies'}><a href="#" className='no-underline block py-3 px-4'>Hoodies</a></Link>
                <Link href={'mugs'}><a href="#" className='no-underline block py-3 px-4'>Mugs</a></Link>
                <Link href={'stickers'}><a href="#" className='no-underline block py-3 px-4'>Stickers</a></Link>
              </div>
            </div>
            <Link href={'register'}><a className="mr-5 hover:text-gray-900"><button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded mediumScreen:hidden">Register/Login</button></a></Link>
            <Link href={'cart'}><a>
              <button className="inline-flex items-center bg-gray-100 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mediumScreen:mt-0"><MdShoppingCart className='text-xl'/>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </a></Link>
            <div className='notMedium:hidden flex justify-end '>
              <FaBars className="text-4xl p-2 h-full" onClick={openNav} />
            </div>
          </nav>
          <div className='notMedium:hidden relative'>
            <div id="mySidenav" className="sidenav h-full w-0 fixed right-0 top-0 z-10 bg-red-500 overflow-x-hidden transition-all delay-[200ms]">
              <a href="" className='my-2 block text-white ml-8 transition delay-300 font-bold absolute top-1 right-3' onClick={closeNav}><span className='text-3xl'>&times;</span></a>

              <div className='absolute top-8'>
                <Link href={'/'}>
                  <a className='my-2 block text-white ml-8 transition delay-300 text-xl font-bold ' onClick={closeNav}>Home</a></Link>
                <Link href={'about'}>
                  <a className='my-2 block text-white ml-8 transition delay-300 text-xl font-bold ' onClick={closeNav}>About</a></Link>
                <Link href={'contact'}>
                  <a className='my-2 block text-white ml-8 transition delay-300 text-xl font-bold ' onClick={closeNav}>Contact</a></Link>
                <Link href={'register'}>
                  <a className='my-2 block text-white ml-8 transition delay-300 text-xl font-bold ' onClick={closeNav}><button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Register/Login</button></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar