import React from 'react'
import CartItem from './CartItem'
import './CartList.css'

function CartList() {
    const storage = JSON.parse(localStorage.getItem('cartStorage')) ?? []
    console.log(storage)
    return (
        <div >
            {storage.map((prod) => {
                return <div key={prod.id} >
                    <CartItem
                        ava={prod.avatar}
                        name={prod.name}
                        price={prod.price} />
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
