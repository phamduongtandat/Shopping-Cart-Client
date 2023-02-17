import React, { useState } from 'react'
import CartItem from './CartItem'
import './CartList.css'

function CartList() {
    const [carts, setCarts] = useState(JSON.parse(localStorage.getItem('cartStorage')) ?? []);
    console.log('aa', carts)
    const handleRemove = (id) => {
        const cart = carts.filter(item => item.id !== id)
        localStorage.setItem('cartStorage', JSON.stringify([...cart]))
        setCarts([...cart])
    }
    return (
        <div >
            <h1 style={{ color: '#1b4465', textAlign: 'center' }}>Your Cart</h1>
            {carts.map((prod, index) => {
                return <div key={index} >
                    <CartItem
                        id={prod.id}
                        ava={prod.avatar}
                        name={prod.name}
                        price={prod.price}
                        amount={prod.quantity}
                        onRemove={handleRemove} />
                </div>
            })}
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                        total <span>122</span>
                    </h4>
                </div>
                <button className="btnn clear-btn">
                    clear cart
                </button>
            </footer>
        </div>

    )
}

export default CartList
