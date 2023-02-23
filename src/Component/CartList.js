import React from 'react'
import CartItem from './CartItem'
import './CartList.css'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

function CartList() {

    const { grossMoney, cart, clearAll } = useContext(CartContext)


    return (
        <div >

            <h1 style={{ color: '#1b4465', textAlign: 'center' }}>Your Cart</h1>
            {cart.length === 0 ? <div className=' text-danger fst-italic text-center fs-3'>EMPTY CART</div> :
                cart.map((prod, index) => {
                    return <div key={index} >
                        <CartItem
                            itemCart={prod}
                            id={prod.id}
                            ava={prod.avatar}
                            name={prod.name}
                            price={prod.price}
                            amount={prod.quantity}
                        />
                    </div>
                })
            }

            <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                        total <span>$ {grossMoney.toFixed(2)}</span>
                    </h4>
                </div>
                <button onClick={clearAll} className="btnn clear-btn">
                    clear cart
                </button>
            </footer>
        </div>

    )
}

export default CartList
