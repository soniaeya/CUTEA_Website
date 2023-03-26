import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useContext } from 'react';


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
