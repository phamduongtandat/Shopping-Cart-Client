// import axios from "axios";
import React, { useContext } from "react";
import PetItem from "./PetItem";
import Loading from "./Loading";
import "../App.css";
import { PetsContext } from "../Context/PetsContext";
import { SearchContext } from "../Context/SearchContext";



function PetList() {
  const { pets, loading } = useContext(PetsContext)
  const { keyWord } = useContext(SearchContext)
  //console.log('keyWord', keyWord)

  const searchItems =
    keyWord.length > 0
      ? pets.filter((item) => {
        const isResult = item.name
          .toLowerCase()
          .includes(keyWord.toLowerCase());
        return isResult;
      })
      : pets;



  return loading ? (
    <Loading />
  ) : (
    <div className="container">

      <div className="row p-2">
        {searchItems.map((pet) => (
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
