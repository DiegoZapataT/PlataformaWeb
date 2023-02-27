import React from 'react';
import Head from 'next/Head';
import Header from './Header';
import Footer from './Footer';
import Link from 'next/link';
import estanteria from '../public/img/estanteria.png'


const Layout = ({children, title, description}) => {
  return(
    <>
      <Head>
        <title>{`Murasaki Mangas - ${title}`}</title>
        <meta name="description" content={description}/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,400;1,300;1,400&display=swap" rel="stylesheet"></link>
      </Head>

      <Header/>
      {children}
      <img src={estanteria.src} width={1920} height={1800}/>
      <Footer/>
    </>
  )
}

export default Layout