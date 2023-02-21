import { createContext, useState, useContext } from "react";
import { AmountContext } from "../Component/Header";
import { PetsContext } from "../Context/PetsContext";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const { pets } = useContext(PetsContext)
    const { setAmount } = useContext(AmountContext)
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cartStorage")) ?? []);

    const handleAddCart = (id) => {




        const cartItem = cart.find((item) => item.id === id)
        if (cartItem === undefined) {
            const addPet = pets.find((pet) => pet.id === id);
            setCart([...cart, addPet]);
            setAmount(cart.length + 1)
            localStorage.setItem("cartStorage", JSON.stringify([...cart, addPet]));

        } else {
            alert('exist')
        }
    };







    const handleRemove = (id) => {
        const remainItem = cart.filter(item => item.id !== id)
        localStorage.setItem('cartStorage', JSON.stringify([...remainItem]))
        setCart([...remainItem])
        setAmount(cart.length - 1)
    }


    return (<CartContext.Provider value={{ cart, handleRemove, handleAddCart, setCart }}>
        {children}
    </CartContext.Provider>)
};

export { CartContext, CartProvider }