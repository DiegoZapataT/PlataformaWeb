import React, {useState, useEffect} from "react";
import Link from "next/link";
import { BsBagCheckFill } from 'react-icons/bs'

import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils"
import Layout from "../components/Layout";
import jotaro from "../public/img/jotaro.jpg"

const Success = () => {
    const { setCartItems,setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, [])

    return(
        <Layout>
            <div className="success-wrapper">
                <div className="success">
                    <img src={jotaro.src} className="icon"/>
                    <h2> Gracias por tu orden </h2>
                    <p className="email-msg">Revise su email para obtener el comprobante</p>
                    <p className="description"> Si tienes alguna duda, porfavor hablanos a traves de nuestra pagina de instagram, o a nuestro email <a className="email" href="murasakimangas@gmail.com">murasakimangas@gmail.com</a></p>
                    <Link href="/"><button type="button" width="500" className="btn">Continuar Comprando!</button></Link>
                </div>
            </div>
        </Layout>
    )
}

export default Success