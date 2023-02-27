import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../public/img/logo.png"
import styles from '../styles/header.module.css'
import { useRouter } from 'next/router'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'
import Cart from './Cart'


const Header = () => {
  
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const router = useRouter()
  console.log(router)

  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
          <a href="/"><Image src={logo.src} width={150} height={150} alt='imagen logotipo'/></a>
          <form action="/search" id='search-form' method='get'>
            <input type="text" className='buscador'placeholder='Ingrese su producto' id='search-text' required/>
            <button className='search' id='search-button'><span>Busca!!</span></button>
          </form>
          <nav className={styles.navegacion}> 
              <Link href="/">Inicio</Link>
              <Link href="/mangas">Mangas</Link>
              <Link href="/artbooks">Artbooks</Link>
              <Link href="/boxset">BoxSet</Link>
              <Link href="/novelas">Novelas</Link>
              <button type="button" className='cart-icon' onClick={() => setShowCart(true)}>
                <AiOutlineShoppingCart/>
                <span className="cart-item-qty">{ totalQuantities }</span>
              </button>

              {showCart && <Cart/>} 

          </nav>
        </div>
    </header>
  )
}

export default Header