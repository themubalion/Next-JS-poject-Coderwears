import React, { useState,useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  MdFavoriteBorder,
  MdFavorite
} from 'react-icons/md'
import Link from 'next/link'

const Slug = ({addToCart}) => {

  const [size, setsize] = useState('M')
  const [Pin, setpin] = useState()
  const router = useRouter()
  const { slug } = router.query
  const [Color, setColor] = useState('')
  const [service, setservice] = useState()

  const changeSize = async(e) => {
    setsize(e.target.value)
  }

  useEffect(() => {
    if(size!=''){
      console.log(size)
    }else{return}
  }, [size])
  

  const favColour = () => {
    if (Color === '') {
      setColor('text-red-500')
    } else {
      setColor('')
    }
  }

  const checkServiceabiliy = async () => {
    // if (=6){
      let pin = await fetch('/api/pincode')
      let pinArray = await pin.text();
      if (pinArray.includes(Pin)) {
        setservice(true)
      } else {
        setservice(false)
      }
    }
  // }

  const onChangePin=(e)=>{
    setpin(e.target.value)
  }
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {      // eslint-disable-next-line @next/next/no-img-element
            }      <img alt="ecommerce" className="lg:w-1/2 lg:h-auto h-64 w-auto mx-auto rounded" src="/dummyHoodie.png" />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{slug}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">This is the product page that uses dynamic Routing. I access the product information through the backened and show it to the dynamic pages. This helps in stopping hard code which can be easy but time taking to make, as well as very frustating to modify.The below is the Add to Cart button that I finished on 18/07/2022 it works like a charm. You can also see the pincode verification box that helps in finding out whether its in the service or not, to see available pincodes to test <Link href={'/api/pincode'}><a className='text-blue-500 underline hover:text-blue-700 visited:text-blue-800'>click here.</a></Link> </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select value={size} onChange={changeSize} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="inline-flex notSmall:space-x-4 small:flex-col small:space-y-4">
                <span className="title-font font-medium text-2xl text-gray-900">₹599</span>
                <div className='flex space-x-4'>
                  <button onClick={()=>{addToCart(slug+size,1,599,'Black Hoodie',size,'Black')}} className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add to Cart</button>
                  <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Buy Now</button>
                  <button id='favourite' onClick={favColour} className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <div className={Color}><MdFavorite /></div>
                  </button>
                </div>
              </div>
              <div className='flex space-x-2 w-full mt-4'>
                <input onChange={onChangePin} value={Pin} className='px-2 border-2 border-gray-400 rounded-md' type="number" placeholder='Enter Pincode' minLength={6} maxLength={6} />
                <button onClick={checkServiceabiliy} className="inline-flex text-white bg-red-500 border-0 py-2 px-3 focus:outline-none hover:bg-red-600 rounded">Check</button>
              </div>
              {service && service!=null &&<div className='text-green-700 mt-3'>Yay! Our service is available to your pincode</div>}
              {!service && service!=null &&<div className='text-red-700 mt-3'>Sorry! Our service currently is not available to your pincode</div>}
            </div>
          </div>
        </div>
      </section></div>
  )
}

export default Slug