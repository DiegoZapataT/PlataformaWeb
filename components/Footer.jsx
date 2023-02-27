import React from 'react'
import { AiFillInstagram } from "react-icons/ai"
import logo from "../public/img/logo.png"
import Image from 'next/image'


const Footer = () => {
  return (
    <footer className="footer">
      <a href="/"><Image src={logo.src} width={200} height={200} alt='imagen logotipo'className="logo"/></a>
      <div className="social-icons-container">
        <a href="https://www.instagram.com/murasaki_mangas/?hl=es"><AiFillInstagram className="ig-icon"/></a>
      </div>
      <span className="copyright">Derechos Reservados Mencion 1 ~ Diego Zapata Tirapegui ~ 2022</span>
    </footer>

  )
}

export default Footer