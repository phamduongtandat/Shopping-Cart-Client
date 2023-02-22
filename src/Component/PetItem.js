import React from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
function PetItem({ name, img, price, id, pet }) {
    const { handleAddCart } = useContext(CartContext)
    return (
        <div className="card" style={{ width: 'auto', height: '460px' }}>
            <img src={img} className="card-img-top" style={{ height: '255px' }} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">$ {price}</p>
            </div>

            <div className="card-body">
                <Link to={`/Pet/${id}`} className=" btn btn-outline-info card-link">Detail</Link>
                <button onClick={() => { handleAddCart(id, pet) }} type="button" className=" card-link btn btn-outline-success">Add cart</button>
            </div>
        </div>

    )
}

export default PetItem
