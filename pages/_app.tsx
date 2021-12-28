import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    
    <Component {...pageProps} />
    <Head>
    <link rel="shortcut icon" href="/favicon.png" />
    </Head>
  
  </>
}

export default MyApp
