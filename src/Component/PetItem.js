import React from 'react'
import { Link } from 'react-router-dom';

function PetItem({ name, img, price, id }) {
    return (
        <div className="card" style={{ width: 'auto', height: '30rem' }}>
            <img src={img} className="card-img-top" style={{ height: '18rem' }} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price} $</p>
            </div>

            <div className="card-body">
                <Link to={`/Pet/${id}`} className=" btn btn-outline-info card-link">Detail</Link>
                <button type="button" className=" card-link btn btn-outline-success">Buy</button>
            </div>
        </div>

    )
}

export default PetItem
