import axios from "axios";
import React, { useState, useEffect } from "react";
import PetItem from "./PetItem";

function PetList({ keyWord }) {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    axios
      .get("https://636c82727f47ef51e14a9f18.mockapi.io/api/products")
      .then((api) => {
        console.log("====================================");
        console.log("api.data", api.data);
        console.log("====================================");
        setPets(api.data);
      });
  }, []);

  const searchItems =
    keyWord.length > 0
      ? pets.filter((item) => {
          const isResult = item.name
            .toLowerCase()
            .includes(keyWord.toLowerCase());
          return isResult;
        })
      : pets;

  return (
    <div className="container">
      <div className="row p-2">
        {searchItems.map((pet) => (
          <div key={pet.id} className="col-4 mb-3 mt-3">
            <PetItem
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
