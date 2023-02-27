import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { useStateContext } from '../context/StateContext'


const Productartbook = ({product: {image, name, editorial, slug, price, stock}, product}) => {
    
    const { qty, onAdd, setShowCart } = useStateContext();

    const handleBuyNow = () => {
        onAdd(product, qty);
        setShowCart(true);
    }

    return(
        <div className="products-detail-div">
            <Link href={`/product/${slug.current}`}>
                <div className="product-card">
                    <img src={urlFor(image && image[0])} className="img-card-manga" />
                </div>
            </Link>
            <p className="product-name">{name}</p>
            <p className="product-name">Editorial: {editorial}</p>
            <p className="product-price">${price}</p>
            <div className="agregar-carrito">
                <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Agregar al carrito</button>
                <button type="button" className="buy-now" onClick={handleBuyNow}>Comprar Ahora</button>
            </div>
        </div>
    )
}

export default Productartbook