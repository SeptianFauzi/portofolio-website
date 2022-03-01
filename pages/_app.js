import '../styles/custom.scss'
import '../styles/globals.css'
// import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  // <Head>
  // <link rel="icon" type="image/png" href="/code.png" />
  {/* </Head> */ }
  return <Component {...pageProps} />
}

export default MyApp
