import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  return (<div>
    <Head><link rel="icon" href="/favicon.ico" sizes="any" />
    </Head><Component {...pageProps} />
  </div>)
}

export default MyApp
