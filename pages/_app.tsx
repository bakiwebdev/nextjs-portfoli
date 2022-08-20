import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='relative w-screen h-screen overflow-hidden'>
      <div className='max-w-7xl w-full  mx-auto px-10'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
