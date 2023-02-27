import React, {useState, useEffect} from "react";
import Link from "next/link";
import { BsBagCheckFill } from 'react-icons/bs'


import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils"
import Layout from "../components/Layout";
import llorando from "../public/img/757-removebg-preview.png"

const Success = () => {
    const { setCartItems,setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
    }, [])

    return(
        <Layout>
            <div className="success-wrapper">
                <div className="success">
                    <img className="icon" src={llorando.src}/>
                    <h2> Tu Orden fue Cancelada </h2>
                    <p className="email-msg">Selecciona los productos nuevamente</p>
                    <Link href="/"><button type="button" width="500" className="btn">Continuar Comprando!</button></Link>
                </div>
            </div>
        </Layout>
    )
}

export default Success