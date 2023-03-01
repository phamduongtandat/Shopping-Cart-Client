// import axios from "axios";
import React, { useContext } from "react";
import PetItem from "./PetItem";
import Loading from "./Loading";
import "../App.css";
import { PetsContext } from "../Context/PetsContext";

import { SearchContext } from "../Context/SearchContext";




function PetList() {
  const { pets, loading } = useContext(PetsContext)
  const { word } = useContext(SearchContext)



  return loading ? (
    <Loading />
  ) : (
    <div className="container">

      <div className="row p-2">
        {pets.filter((item) => item.name.toLowerCase().includes(word.toLowerCase())).map((pet) => (
          <div key={pet.id} className="col-lg-4 col-sm-6 mb-3 mt-3">
            <PetItem
              pet={pet}
              id={pet.id}
              name={pet.name}
              price={pet.price}
              img={pet.avatar}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetList;
