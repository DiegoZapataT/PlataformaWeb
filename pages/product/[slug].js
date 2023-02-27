import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer"
import {client, urlFor} from "../../lib/client"
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from "react-icons/ai";
import Carrusel from "../../components/Carrusel";
import { useStateContext } from '../../context/StateContext'
import { toast } from "react-hot-toast";


const ProductDetails = ({product, products}) => {
    
    const { image, name, details, price, stock, editorial } = product;
    const[index, setIndex] = useState(0)
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

    const handleBuyNow = () => {
        onAdd(product, qty);
        setShowCart(true);
    }

    return(
        <>
            <Header/>
                <div>
                    <div className="product-detail-container">
                        <div>
                            <div className="product-detail-image">
                                <img src={urlFor(image && image[index])}/>
                            </div>
                        </div>
                        <div className="product-detail-desc">
                            <h1>{name}</h1>
                            <div className="reviews">
                                <div>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                </div>
                                <p>
                                    (20)
                                </p>
                            </div>
                            <h4>Descripcion</h4>
                            <p>{details}</p>
                            <p className="editorial">Editorial: {editorial}</p>
                            <p className="price">Precio: ${price}</p>
                            <p className="stock">Stock: {stock}</p>
                            <div className="quantity">
                                <p className="quantity-desc">
                                    <span className="minus" onClick={decQty}><AiOutlineMinus/></span>
                                    <span className="num" onClick="">{qty}</span>
                                    <span className="plus" onClick={incQty}><AiOutlinePlus/></span>
                                </p>
                            </div>
                            <div className="buttons">
                                <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Agregar al carrito</button>
                                <button type="button" className="buy-now" onClick={handleBuyNow}>Comprar Ahora</button>
                            </div>
                        </div>
                    </div>

                    <div className="maylike-products-wrapper">
                        <h2>Quizas tambien te interese</h2>
                        <div className="marquee">
                            <div className="maylike-products-container track">
                                {products.map((item)=><Carrusel key={item._id} product={item}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export const getStaticPaths = async() => {
    const query = `*[_type in ["mangas","novelas","artbooks","boxsets"]]{
        slug {
            current
        }
    }`;

    const products = await client.fetch(query)
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async({ params: { slug } }) => {
    const query = `*[_type in ["mangas","novelas","artbooks","boxsets"] && slug.current == '${slug}'][0]`;
    const productsQuery = `*[_type in ["mangas","novelas","artbooks","boxsets"]]`;

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
    
    // console.log(product)
    
    return {
      props: { product, products }
    }
  }
   
export default ProductDetails

  