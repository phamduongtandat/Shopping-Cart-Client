import { createContext, useState, useContext, useEffect } from "react";
import { AmountContext } from "../Component/Header";
import { PetsContext } from "../Context/PetsContext";
import axios from 'axios';
import requestUpdateCart from './../Utils/requestUpdateCart';


const CartContext = createContext();

const CartProvider = ({ children }) => {
    const { pets } = useContext(PetsContext)
    const { setAmount } = useContext(AmountContext)
    //const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cartStorage")) ?? []);
    const [cart, setCart] = useState([])

    console.log('cart :', cart)
    useEffect(() => {
        if (!localStorage.getItem("access_token")) {
            return
        }

        axios.get('https://shopping-cart-zjgb.onrender.com/api/v1/cart/get-cart', {
            headers: {
                Authorization: JSON.parse(localStorage.getItem("access_token"))
            }
        })
            .then((res) => {
                setCart(res.data.data.products)
            })
            .catch((err) => {
                console.log(' errGetCart:', err)
            })
    }, [])


    const grossMoney = cart.reduce((total, item) => {

        total += item.quantity * item.prodID.price
        return total
    }, 0)

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

    const clearAll = (cartID) => {

        requestUpdateCart(cartID, 'delAll').then((res) => {
            console.log('res :', res.data.data.products)
            setCart(res.data.data.products)
        }).catch((err) => {
            console.log('errupdate-cart :', err)
        })


        // setCart([])
        // localStorage.setItem('cartStorage', JSON.stringify([]))
    }

    //       _____ handleIncrement _____

    const handleIncrement = (petID) => {

        requestUpdateCart(petID, 'inc').then((res) => {
            console.log('res :', res.data.data.products)
            setCart(res.data.data.products)
        }).catch((err) => {
            console.log('errupdate-cart :', err)
        })



        // const cloneCart = [...cart]
        // const cloneItem = { ...item }
        // const index = cart.prodID.findIndex(x => x.id === item.id)
        // const changeQtyItem = { ...cloneItem, quantity: item.quantity + 1 }
        // cloneCart[index] = changeQtyItem
        // setCart([...cloneCart])
        // localStorage.setItem("cartStorage", JSON.stringify([...cloneCart]));
    }


    //       _____ handleDecrement _____

    const handleDecrement = (petID) => {

        requestUpdateCart(petID, 'dec').then((res) => {
            console.log('res :', res.data.data.products)
            setCart(res.data.data.products)
        }).catch((err) => {
            console.log('errupdate-cart :', err)
        })





        // const cloneCart = [...cart]
        // const cloneItem = { ...item }
        // const index = cart.prodID.findIndex(x => x.id === item.id)
        // const changeQtyItem = { ...cloneItem, quantity: item.quantity - 1 }
        // if (changeQtyItem.quantity > 0) {
        //     cloneCart[index] = changeQtyItem
        //     setCart([...cloneCart])
        //     localStorage.setItem("cartStorage", JSON.stringify([...cloneCart]));
        // } else {
        //     alert(`You should click Remove button for ${cloneItem.name} if no choice`)
        // }
    }


    //       _____ handleAddCart _____

    const handleAddCart = (petID) => {


        requestUpdateCart(petID, 'inc').then((res) => {
            console.log('res :', res.data.data.products)
            setCart(res.data.data.products)
        }).catch((err) => {
            console.log('errupdate-cart :', err)
        })

    };

    // const handleAddCart = (id, item) => {
    //     const cartItem = cart.prodID.find((item) => item.id === id)
    //     if (cartItem === undefined) {
    //         const addPet = pets.find((pet) => pet.id === id);
    //         setCart([...cart, addPet]);
    //         localStorage.setItem("cartStorage", JSON.stringify([...cart, addPet]));
    //     } else {
    //         const cloneCart = [...cart]
    //         const index = cloneCart.findIndex(x => x.id === item.id)
    //         const cloneItem = { ...cloneCart[index] }
    //         const changeQtyItem = { ...cloneItem, quantity: cloneItem.quantity + 1 }
    //         cloneCart[index] = changeQtyItem
    //         setCart([...cloneCart])
    //         localStorage.setItem("cartStorage", JSON.stringify([...cloneCart]));
    //     }
    // };







    //       _____ handleRemove _____

    const handleRemove = (petID) => {

        requestUpdateCart(petID, 'del').then((res) => {
            console.log('res :', res.data.data.products)
            setCart(res.data.data.products)
        }).catch((err) => {
            console.log('errupdate-cart :', err)
        })

        // const remainItem = cart.filter(item => item.id !== id)
        // setCart([...remainItem])
        // localStorage.setItem('cartStorage', JSON.stringify([...remainItem]))
    }

    return (
        <CartContext.Provider value={{ grossMoney, handleDecrement, cart, handleRemove, handleAddCart, setCart, handleIncrement, clearAll }}>
            {children}
        </CartContext.Provider>)
};

export { CartContext, CartProvider }