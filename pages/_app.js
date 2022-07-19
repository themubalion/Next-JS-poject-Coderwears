import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  const { slug } = router.query
  const [Cart, setCart] = useState({})
  const [subTotal, setsubTotal] = useState(0)

  useEffect(() => {
    try {
      if (localStorage.getItem('cart')) {
        let myCart = JSON.parse(localStorage.getItem('cart'))
        let subt = 0;
        let keys = Object.keys(myCart)
        for (let i = 0; i < keys.length; i++) {
          subt += myCart[keys[i]].price * myCart[keys[i]].qty
        }
        setsubTotal(subt)
        setCart(myCart)
      }
    } catch (err) {
      console.error(err)
      localStorage.clear()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const saveCart = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart))
    let subt = 0;
    let keys = Object.keys(Cart)
    for (let i = 0; i < keys.length; i++) {
      subt += Cart[keys[i]].price * Cart[keys[i]].qty
    }
    setsubTotal(subt)
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
    alert('Cart has been cleared')
  }

  const addToCart = (productId, qty, price, name, size, variant) => {
    let myCart = Cart
    if (productId in Cart) {
      myCart[productId].qty = Cart[productId].qty + 1;
    }
    else {
      myCart[productId] = { qty: 1, price, name, size, variant }
    }
    setCart(myCart)
    saveCart(Cart)
  }

  const removeFromCart = (productId, qty, price, name, size, variant) => {
    let myCart = Cart
    if (productId in Cart) {
      myCart[productId].qty = Cart[productId].qty - 1;
    }
    if (myCart[productId].qty <= 0) {
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
        <Component Cart={Cart} addToCart={addToCart} removeFromCart={removeFromCart} saveCart={saveCart} setCart={setCart} clearCart={clearCart} subTotal={subTotal} slug={slug}  {...pageProps} />
      </div>
      <Footer />
    </div>
  </>
  )
}

export default MyApp
