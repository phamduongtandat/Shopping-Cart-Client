import { createContext, useState, useEffect } from "react";
import axios from "axios";
const PetsContext = createContext();

const PetsProvider = ({ children }) => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get("https://shopping-cart-zjgb.onrender.com/api/v1/product")
            .then((api) => setPets(api.data.data))
            .finally(() => { setLoading(false) })

    }, []);

    return (
        <PetsContext.Provider value={{ pets, loading }}>
            {children}
        </PetsContext.Provider>)
};

export { PetsContext, PetsProvider }