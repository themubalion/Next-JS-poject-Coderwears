import Head from 'next/head'
import Image from 'next/image'
import MyApp from './_app'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coderwear.com</title>
        <meta name='description' content='coderwear.com - coding tshirts, hoodies and mugs' />
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <div>
        Hello
      </div>
    </div>
  )
}
