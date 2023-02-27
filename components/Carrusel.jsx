import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Carrusel = ({product: {image, name, editorial, slug, price, stock}}) => {
    return(
        <div>
            <Link href={`/product/${slug.current}`}>
                <div className="product-card">
                    <img className="img-card-carrusel" src={urlFor(image && image[0])}/>
                </div>
            </Link>
            <p className="marquee-text">{name}</p>
        </div>
    )
}

export default Carrusel