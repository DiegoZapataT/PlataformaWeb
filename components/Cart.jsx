import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti'
import { toast, Toast } from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client'
import getStripe from '../lib/getStripe';

const Cart = () => {

    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();

    const handleCheckout = async () => {
        const stripe = await getStripe();

        const response = await fetch('/api/stripe',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItems),
        });

        console.log(response)
        
        if(response.statusCode === 500) return;
        
        const data = await response.json();

        toast.loading('Redireccionando...');

        stripe.redirectToCheckout({ sessionId: data.id });
    }

    return (
        <div className='cart-wrapper' ref={cartRef}>
            <div className="cart-container">
                <button type='button' className='cart-heading' onClick={() => setShowCart(false)}>
                    <AiOutlineLeft/>
                    <span className='heading'> Tu Carrito: </span>
                    <span className='cart-num-items'>({totalQuantities} items)</span>
                </button>

                {cartItems.length < 1 && (
                    <div className="empty-cart">
                        <AiOutlineShopping size={150}/>
                        <h3>Tu Carrito esta Vacio!!</h3>
                        <Link href="/">
                            <button type='button' onClick={()=> setShowCart(false)} className="btn">Continua Comprando !</button>
                        </Link>
                    </div>
                )}

                <div className="product-container">
                    {cartItems.length >= 1 && cartItems.map((item, index) => (
                        <div className="product" key={item._id}>
                            <img src={urlFor(item?.image[0])} className="cart-product-image"/>
                            <div className="item-desc">
                                <div className="flex top">
                                    <h5>Nombre: {item.name}</h5>
                                    <h4>${item.price}</h4>
                                </div>
                                <div className="quantity-desc">
                                    <span className='minus' onClick={() => toggleCartItemQuantity(item._id,'dec')}><AiOutlineMinus/></span>
                                    <span className='num'>{item.quantity}</span>
                                    <span className='plus' onClick={() => toggleCartItemQuantity(item._id,'inc')}><AiOutlinePlus/></span>
                                </div>
                                <button type="button" className='remove-item' onClick={() => onRemove(item)}><TiDeleteOutline/></button>
                            </div>
                        </div>
                    ))}
                </div>
                {cartItems.length >= 1 && (
                    <div className="cart-bottom">
                        <div className="total">
                            <h3>Subtotal: </h3>
                            <h3>${ totalPrice }</h3>
                        </div>
                        <div className="btn-container">
                            <button type='button' className='btn' onClick={handleCheckout}> Pagar!!!!</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart