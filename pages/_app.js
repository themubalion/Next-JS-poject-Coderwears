import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useState } from 'react';

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const [Cart, setCart] = useState('')
  return (<>
    {/* <HeadComp/> */}
    <Navbar />
    <div>
      <div className='min-h-screen'>
      <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  </>
  )
}

export default MyApp
