
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function PetDetailPage() {
    const { detail } = useParams()
    const [petDetail, setPetDetail] = useState([]);

    useEffect(() => {
        axios
            .get(`https://636c82727f47ef51e14a9f18.mockapi.io/api/products/${detail}`)
            .then((api) => setPetDetail(api.data));

    }, [detail]);
    return (
        <div className="container card mb-3 mt-3" style={{ maxWidth: 1000 }}>
            <div className="row g-0 p-2">
                <div className="col-md-4">
                    <img src={petDetail.avatar} className="img-fluid text-center rounded-start" alt="" />
                </div>
                <div className="col-md-8">
                    <div className="  card-body">
                        <h3 className="text-info card-title">{petDetail.name}</h3>
                        <p className="card-text">{petDetail.Desc}</p>
                        <h6 className="card-title">$ {petDetail.price}</h6>
                        <p className="card-text"><small className="text-danger ">Favourist : {petDetail.favourite}</small></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PetDetailPage
