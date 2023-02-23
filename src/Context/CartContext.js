import { createContext, useState, useContext } from "react";
import { AmountContext } from "../Component/Header";
import { PetsContext } from "../Context/PetsContext";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const { pets } = useContext(PetsContext)
    const { setAmount } = useContext(AmountContext)
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cartStorage")) ?? []);

    const clearAll = () => {
        setCart([])
        localStorage.setItem('cartStorage', JSON.stringify([]))
    }

    const calTotal = () => {
        const amountTotal = cart.reduce((total, item) => {
            const sum = total + item.quantity
            return sum
        }, 0)
        localStorage.setItem("amountItem", JSON.stringify(amountTotal))
        setAmount(amountTotal)
        return amountTotal
    }
    //const number = calTotal()
    //console.log(number)
    calTotal()

    const handleIncrement = (item) => {
        const cloneCart = [...cart]
        const cloneItem = { ...item }
        const index = cart.findIndex(x => x.id === item.id)
        const changeQtyItem = { ...cloneItem, quantity: item.quantity + 1 }
        cloneCart[index] = changeQtyItem
        //localStorage.setItem("amountItem", JSON.stringify(calTotal()))
        setCart([...cloneCart])
        //setAmount(number)
        localStorage.setItem("cartStorage", JSON.stringify([...cloneCart]));
        console.log('item', cart)
    }

    const handleAddCart = (id, item) => {
        const cartItem = cart.find((item) => item.id === id)
        if (cartItem === undefined) {
            const addPet = pets.find((pet) => pet.id === id);
            setCart([...cart, addPet]);
            localStorage.setItem("cartStorage", JSON.stringify([...cart, addPet]));
            //calTotal()
            //setAmount(number)
            //localStorage.setItem("amountItem", JSON.stringify(number))
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
        //setAmount(number)
        //localStorage.setItem("amountItem", JSON.stringify(calTotal()))
    }


    return (
        <CartContext.Provider value={{ cart, handleRemove, handleAddCart, setCart, handleIncrement, clearAll }}>
            {children}
        </CartContext.Provider>)
};

export { CartContext, CartProvider }