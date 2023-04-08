import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useContext, Fragment} from 'react';
import "../styles/globals.css"
import GlobalStyled from "@/styles/GlobalStyled";

export default function App({ Component, pageProps }: AppProps) {
  return <Fragment>
    <GlobalStyled/>
    <Component {...pageProps} />
  </Fragment>
}
