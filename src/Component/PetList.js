import axios from "axios";
import React, { useState, useEffect } from "react";
import PetItem from "./PetItem";
import Loading from './Loading';
import '../App.css';

function PetList() {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get("https://636c82727f47ef51e14a9f18.mockapi.io/api/products")
            .then((api) => setPets(api.data));

        setTimeout(() => {
            setLoading(false)
        }, 800);
    }, []);

    const prod = JSON.parse(localStorage.getItem('cartStorage')) ?? [];
    const handleAddCart = (id) => {
        const addPet = pets.find(pet => pet.id === id)
        prod.push(addPet)
        // console.log('prod', typeof prod)

        localStorage.setItem('cartStorage', JSON.stringify([...prod]))


    }
    return (
        loading ? <Loading /> :
            <div className="container">
                <div className="row p-2">
                    {pets.map((pet) => (
                        <div key={pet.id} className="col-lg-4 col-sm-6 mb-3 mt-3">
                            <PetItem
                                id={pet.id}
                                name={pet.name}
                                price={pet.price}
                                img={pet.avatar}
                                onClickForAddCart={handleAddCart}
                            />
                        </div>
                    ))}
                </div>
            </div>
    );
}

export default PetList;
