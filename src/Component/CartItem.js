import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

function CartItem({ id, name, ava, price, amount, itemCart }) {
    const { handleDecrement, handleRemove, handleIncrement } = useContext(CartContext)

    return (

        <section className="cart">
            <div>
                <article className="cart-item">
                    <img src={ava} alt='' />
                    <div>
                        <h4>{name}</h4>
                        <h4 className="item-price">$ {price}</h4>
                        <button onClick={() => { handleRemove(id) }} className="remove-btn">
                            <i className="text-warning fa-solid fa-trash-can"></i>REMOVE
                        </button>
                    </div>
                    <div>
                        {/* {/* increase amount * /} */}
                        <button onClick={() => { handleIncrement(itemCart) }} className="amount-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
                            </svg>
                        </button>
                        <p className="amount">{amount}</p>
                        {/* {/* decrease amount * /} */}
                        <button onClick={() => { handleDecrement(itemCart) }} className="amount-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </button>
                    </div>
                </article>
            </div>

        </section>

    )
}

export default CartItem
