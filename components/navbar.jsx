// The navbar is copied from tailblocks cus I am not going to design this page this is the process of learning the development using next js so to save time I am using templates here, and I already know css and tailwind css.
// Fixed the logo file format
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
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle
} from 'react-icons/ai';
import {
  IoBagCheckOutline
} from 'react-icons/io5'


const Navbar = ({ Cart, addToCart, removeFromCart, clearCart, saveCart, subTotal,slug }) => {
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  }
  const closeCart = () => {
    document.getElementById("myCart").style.width = "0";
    document.getElementById("myCart").style.padding = "0";
    document.getElementById("main").style.marginRight = "0";
  }

  const openCart = () => {
    document.getElementById("myCart").style.padding = "2rem";
    if (screen.width < 720) {
      document.getElementById("myCart").style.width = "75vw";
    } else {
      document.getElementById("myCart").style.width = "22vw";
    }
  }
  return (
    <div>
      <header className="text-gray-600 bg-white body-font shadow-md notSmall:h-14 items-center notSmall:pt-2 sticky z-10 w-full">
        <div id='main' className=' transition-all delay-300'>
          <div className="mx-auto w-full flex  justify-between items-center ">
            <Link href={'/'} className={'h-full border'}><a className="flex items-center h-full text-red-500 ml-2">
              <Image src={'/logo.png'} width={'180px'} height={'25px'} alt={'Logo Image'} className="mt-2" />
            </a></Link>
            <nav className=" flex ml-auto items-center text-base justify-end">
              <Link href={'/'}><a className="mr-5 hover:text-red-500 mediumScreen:hidden ">Home</a></Link>
              <Link href={'/about'}><a className="mr-5 hover:text-red-500 mediumScreen:hidden">About</a></Link>
              <Link href={'/contact'}><a className="mr-5 hover:text-red-500 mediumScreen:hidden">Contact</a></Link>
              {/* Here we will add the product dropdown menu */}
              <div className="dropdown relative inline-block z-10 mediumScreen:hidden">
                <button className="dropbtn pr-4"><div className='flex items-center hover:text-red-500'>product <FaAngleDown /></div></button>
                <div className="hidden absolute min-w-[10rem] dropdown-content">
                  <Link href={'/tshirts'}><a href="#" className='no-underline block py-3 px-4 hover:text-red-500'>Tshirts</a></Link>
                  <Link href={'/hoodies'}><a href="#" className='no-underline block py-3 px-4 hover:text-red-500'>Hoodies</a></Link>
                  <Link href={'/mugs'}><a href="#" className='no-underline block py-3 px-4 hover:text-red-500'>Mugs</a></Link>
                  <Link href={'/stickers'}><a href="#" className='no-underline block py-3 px-4 hover:text-red-500'>Stickers</a></Link>
                </div>
              </div>
              <Link href={'/register'}><a className="mr-5 hover:text-red-500"><button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded mediumScreen:hidden">Login</button></a></Link>
              <div onClick={openCart}><a>
                <button className="inline-flex items-center bg-gray-100 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mediumScreen:mt-0"><MdShoppingCart className='text-xl' />
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </a></div>
              <div className='notMedium:hidden flex justify-end '>
                <FaBars className="text-4xl p-2 h-full" onClick={openNav} />
              </div>
            </nav></div>
          <div className='notMedium:hidden relative'>
            <div id="mySidenav" className="sidenav h-full w-0 fixed right-0 top-0 z-10 bg-red-500 overflow-x-hidden transition-all delay-[200ms]">
              <div href="" className='my-2 block text-white ml-8 transition delay-300 font-medium absolute top-1 right-3' onClick={closeNav} ><span className='text-2xl'><AiFillCloseCircle /></span></div>

              <div className='absolute top-8'>
                <Link href={'/'}>
                  <a className='my-2 block text-white ml-8 transition delay-300 text-xl font-medium ' onClick={closeNav}>Home</a></Link>
                <Link href={'about'}>
                  <a className='my-2 block text-white ml-8 transition delay-300 text-xl font-medium ' onClick={closeNav}>About</a></Link>
                <Link href={'contact'}>
                  <a className='my-2 block text-white ml-8 transition delay-300 text-xl font-medium ' onClick={closeNav}>Contact</a></Link>
                <Link href={'register'}>
                  <a className='my-2 block text-white ml-8 transition delay-300 text-xl font-bold ' onClick={closeNav}><button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Register/Login</button></a>
                </Link>
              </div>
            </div>
          </div>
          <div className=''>
            <div id="myCart" className="cart h-full w-0 fixed right-0 top-0 z-10 overflow-x-hidden transition-all delay-[200ms] bg-red-100">

              <div href="" className='my-2 block cursor-pointer ml-8 transition delay-300 font-medium absolute top-1 right-3' tabIndex={0} id={'close-cart'} onClick={closeCart} >
                <AiFillCloseCircle className='text-2xl text-red-500' />
              </div>

              <h2 className='font-bold text-black text-center text-xl my-2 mb-4'>Shopping Cart</h2>
              {Object.keys(Cart).length != 0 && <ol className='list-decimal font-semibold'>
                {Object.keys(Cart).map((k) => {
                  let cartArray = Cart[k]
                  return <li className='text-black my-2' key={k}>
                      <div className='flex'>
                        <span className='w-2/3 font-semibold'>{cartArray.name}[{cartArray.size}]</span>
                        <span className='w-1/3 flex items-center justify-center font-semibold'><AiFillMinusCircle onClick={() => {removeFromCart(k,cartArray.qty,cartArray.price,cartArray.name,cartArray.size,cartArray.variant)}} className='mx-1 text-red-500 text-lg cursor-pointer' /> {cartArray.qty} <AiFillPlusCircle onClick={() => {addToCart(k,cartArray.qty,cartArray.price,cartArray.name,cartArray.size,cartArray.variant)}} className='mx-1 text-red-500 text-lg cursor-pointer' /></span>
                      </div>
                    </li>
                })
                }
              </ol>}
              {Cart = {} && <div className='font-semibold text-black my-2'>
                Your cart is empty
                </div>}
              <div className='font-bold text-black my-2'>
                Subtotal: ₹{subTotal}
              </div>
              <div className="flex w-full justify-start space-x-2">
                <button onClick={closeCart} className="lg:mt-2 xl:mt-0 flex text-white bg-red-500 border-0 py-2 px-3 focus:outline-none hover:bg-red-600 rounded"><Link href={'/checkout'}><a className='flex '><IoBagCheckOutline className='my-auto' /><div> Checkout</div></a></Link></button>
                <button onClick={clearCart} className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-500 border-0 py-2 px-3 focus:outline-none hover:bg-red-600 rounded">Clear Cart</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar