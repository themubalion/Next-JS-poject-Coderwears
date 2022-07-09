import Head from 'next/head'
import Image from 'next/image'
import MyApp from './_app'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coderwear.com</title>
        <meta name='description' content='coderwear.com - coding tshirts, hoodies and mugs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <div className='relative'>
          <section className=' mx-auto'>
            <Image src={'/banner.jpg'} alt={'Banner Image'} height={'10'} width={'20'} layout={'responsive'} />
          </section>
        </div>
      </div>
    </div>
  )
}
