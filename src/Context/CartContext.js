import { createContext, useState, useContext, useEffect } from "react";
import { AmountContext } from "../Component/Header";
import { PetsContext } from "../Context/PetsContext";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const { pets } = useContext(PetsContext)
    const { setAmount } = useContext(AmountContext)
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cartStorage")) ?? []);

    const grossMoney = cart.reduce((total, item) => {
        total += item.quantity * item.price
        return total
    }, 0)
    //console.log(grossMoney)
    const calTotal = () => {
        const amountTotal = cart.reduce((total, item) => {
            const sum = total + item.quantity
            return sum
        }, 0)
        localStorage.setItem("amountItem", JSON.stringify(amountTotal))
        return amountTotal
    }
    const number = calTotal()

    useEffect(() => {
        setAmount(number)
    })



    const clearAll = () => {
        setCart([])
        localStorage.setItem('cartStorage', JSON.stringify([]))
    }




    const handleIncrement = (item) => {
        const cloneCart = [...cart]
        const cloneItem = { ...item }
        const index = cart.findIndex(x => x.id === item.id)
        const changeQtyItem = { ...cloneItem, quantity: item.quantity + 1 }
        cloneCart[index] = changeQtyItem
        setCart([...cloneCart])
        localStorage.setItem("cartStorage", JSON.stringify([...cloneCart]));
        //console.log('item', cart)
    }

    const handleDecrement = (item) => {
        const cloneCart = [...cart]
        const cloneItem = { ...item }
        const index = cart.findIndex(x => x.id === item.id)
        const changeQtyItem = { ...cloneItem, quantity: item.quantity - 1 }
        if (changeQtyItem.quantity > 0) {
            cloneCart[index] = changeQtyItem
            setCart([...cloneCart])
            localStorage.setItem("cartStorage", JSON.stringify([...cloneCart]));
        } else {
            alert(`You should click Remove button for ${cloneItem.name} if no choice`)
        }
    }



    const handleAddCart = (id, item) => {
        const cartItem = cart.find((item) => item.id === id)
        if (cartItem === undefined) {
            const addPet = pets.find((pet) => pet.id === id);
            setCart([...cart, addPet]);
            localStorage.setItem("cartStorage", JSON.stringify([...cart, addPet]));
        } else {
            const cloneCart = [...cart]
            const index = cloneCart.findIndex(x => x.id === item.id)
            const cloneItem = { ...cloneCart[index] }
            const changeQtyItem = { ...cloneItem, quantity: cloneItem.quantity + 1 }
            cloneCart[index] = changeQtyItem
            setCart([...cloneCart])
            localStorage.setItem("cartStorage", JSON.stringify([...cloneCart]));
        }
    };


    const handleRemove = (id) => {
        const remainItem = cart.filter(item => item.id !== id)
        setCart([...remainItem])
        localStorage.setItem('cartStorage', JSON.stringify([...remainItem]))
    }


    return (
        <CartContext.Provider value={{ grossMoney, handleDecrement, cart, handleRemove, handleAddCart, setCart, handleIncrement, clearAll }}>
            {children}
        </CartContext.Provider>)
};

export { CartContext, CartProvider }