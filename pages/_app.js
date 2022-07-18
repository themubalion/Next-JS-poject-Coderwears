import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useEffect, useState } from 'react';

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const [Cart, setCart] = useState({})
  const [subTotal, setsubTotal] = useState(0)

  useEffect(() => {
    try {
      if(localStorage.getItem('cart')){
        setCart(JSON.parse(localStorage.getItem('cart')))
      }
    } catch (err) {
      console.error(err)
      localStorage.clear()
    }
  }, [])
  

  const saveCart = (newCart) =>{
    localStorage.setItem("cart",newCart)
    let subt = 0;
    let keys = Object.keys(Cart)
    for (let i = 0; i < keys.length; i++) {
      subt += Cart[keys[i]].price *  Cart[keys[i]].qty
    }
    setsubTotal(subt)
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
    alert('Cart has been cleared')
  }
  
  const addToCart = (productId,qty,price,name,size,variant) => {
    let myCart = Cart
    if (productId in Cart){
      myCart[productId].qty = Cart[productId].qty + qty;
    }
    else {
      myCart[productId] = {qty:1,price,name,size,variant}
    }
    setCart(myCart)
    saveCart(Cart)
  }

  const removeFromCart = (productId,qty,price,name,size,variant) => {
    let myCart = Cart
    if (productId in Cart){
      myCart[productId].qty = Cart[productId].qty - qty;
    }
    if(myCart[productId].qty <= 0) {
      delete myCart[productId]
    }
    setCart(myCart)
    saveCart(Cart)
  }
  return (<>
    {/* <HeadComp/> */}
    <Navbar Cart={Cart} addToCart={addToCart} removeFromCart={removeFromCart} saveCart={saveCart} setCart={setCart} clearCart={clearCart} subTotal={subTotal} />
    <div>
      <div className='min-h-screen'>
      <Component Cart={Cart} addToCart={addToCart} removeFromCart={removeFromCart} saveCart={saveCart} setCart={setCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
      </div>
      <Footer />
    </div>
  </>
  )
}

export default MyApp
