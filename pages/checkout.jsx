import React from 'react'
import { useState } from 'react';
import {
  AiFillPlusCircle,
  AiFillMinusCircle
} from 'react-icons/ai';

const Checkout = ({ Cart, subTotal,addToCart,removeFromCart }) => {
  
  let buttonClass = 'lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-500 border-0 py-2 px-3 focus:outline-none hover:bg-red-600 rounded'

  const [pay, setpay] = useState(buttonClass+' opacity-50')
  if (pay != buttonClass+' opacity-100') {
    setpay(buttonClass+' opacity-100')
  }

  return (
    <div className='container px-4'>
      <h1 className='font-bold text-3xl text-center my-8'>Checkout</h1>
      <h2 className='font-semibold text-xl  my-2'>1-Delivery Details</h2>
      <div className='mx-auto grid grid-cols-2 grid-flow-row  gap-x-4 gap-y-2'>
        <div className=' w-full'>
          <div className="mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className=' w-full'>
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="text" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className=" w-full col-span-2">
          <div className="relative mb-4">
            <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
            <textarea id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className=' w-full'>
          <div className="mb-4">
            <label htmlFor="number" className="leading-7 text-sm text-gray-600">Phone Number</label>
            <input type="text" id="number" name="number" placeholder='Enter Your Phone Number' className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className=' w-full'>
          <div className="mb-4">
            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
            <input type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className=' w-full'>
          <div className="mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
            <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className=' w-full'>
          <div className="mb-4">
            <label htmlFor="district" className="leading-7 text-sm text-gray-600">District</label>
            <input type="text" id="district" name="district" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <h2 className='font-semibold text-xl  my-2'>2-Review Cart items and Pay</h2>
      <div className="container bg-red-200 p-8 rounded-md my-2 mb-4">
        {Object.keys(Cart).length != 0 && <ol className='list-decimal font-semibold'>
          {Object.keys(Cart).map((k) => {
            let cartArray = Cart[k]
            return <li className='text-black my-2' key={k}>
              <div className='flex'>
                <span className='w-2/3 font-semibold'>{cartArray.name}[{cartArray.size}]</span>
                <span className='w-1/3 flex items-center justify-center font-semibold'><AiFillMinusCircle onClick={() => { removeFromCart(k, cartArray.qty, cartArray.price, cartArray.name, cartArray.size, cartArray.variant) }} className='mx-1 text-red-500 text-lg cursor-pointer' /> {cartArray.qty} <AiFillPlusCircle onClick={() => { addToCart(k, cartArray.qty, cartArray.price, cartArray.name, cartArray.size, cartArray.variant) }} className='mx-1 text-red-500 text-lg cursor-pointer' /></span>
              </div>
            </li>
          })}
        </ol>}
        {Cart = {} && <div className='font-semibold text-black my-2'>
          Your cart is empty
        </div>}
        <div className='font-bold text-black my-2'>Subtotal: ₹{subTotal}</div>
      </div>
      <button className={pay}>Pay(₹{subTotal})</button>
    </div>
  )
}

export default Checkout