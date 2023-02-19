import React from 'react'
import { Link } from 'react-router-dom';

function PetItem({ name, img, price, id, onClickForAddCart }) {
    return (
        <div className="card" style={{ width: 'auto', height: '460px' }}>
            <img src={img} className="card-img-top" style={{ height: '255px' }} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">$ {price}</p>
            </div>

            <div className="card-body">
                <Link to={`/Pet/${id}`} className=" btn btn-outline-info card-link">Detail</Link>
                <button onClick={() => { onClickForAddCart(id) }} type="button" className=" card-link btn btn-outline-success">Add cart</button>
            </div>
        </div>

    )
}

export default PetItem
