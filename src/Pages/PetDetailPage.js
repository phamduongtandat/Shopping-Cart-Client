import "../App.css";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from "../Context/CartContext";
import Loading from "../Component/Loading";

function PetDetailPage() {
    const { detail } = useParams()
    const navigate = useNavigate()
    const [petDetail, setPetDetail] = useState([]);
    const { handleAddCart } = useContext(CartContext)
    const isLogin = JSON.parse(localStorage.getItem('isLogin'))
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios
            .get(`https://636c82727f47ef51e14a9f18.mockapi.io/api/products/${detail}`)
            .then((api) => setPetDetail(api.data))
            .finally(() => { setLoading(false) })

    }, [detail]);



    return loading ? <Loading /> : (



        <div className="container card mb-3 mt-3" style={{ maxWidth: 1000 }}>
            <div className="row g-0 p-2">
                <div className="col-md-4">
                    <img src={petDetail.avatar} className="img-fluid text-center rounded-start" alt="" />
                </div>
                <div className=" col-md-8">
                    <div className="  card-body">
                        <h3 className="text-info card-title">{petDetail.name}</h3>
                        <p className="card-text">{petDetail.Desc}</p>
                        <div className="d-flex align-items-center justify-content-between ">
                            <div>
                                <h6 className="card-title">$ {petDetail.price}</h6>
                                <p className="card-text"><small className="text-danger ">Favourist : {petDetail.favourite}</small></p>
                            </div>
                            <div style={{ position: 'relative', zIndex: '1' }}>
                                {isLogin
                                    ?
                                    <button onClick={() => { handleAddCart(petDetail.id, petDetail) }} className=" btn-pet-detail">PLEASE BUY ME </button>
                                    :
                                    <button onClick={() => { navigate('/Login') }} className=" btn-pet-detail">PLEASE BUY ME </button>}


                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>




    )
}

export default PetDetailPage
