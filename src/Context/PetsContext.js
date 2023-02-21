import { createContext, useState, useEffect } from "react";
import axios from "axios";
const PetsContext = createContext();

const PetsProvider = ({ children }) => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get("https://636c82727f47ef51e14a9f18.mockapi.io/api/products")
            .then((api) => setPets(api.data));

        setTimeout(() => {
            setLoading(false);
        }, 800);
    }, []);

    return (
        <PetsContext.Provider value={{ pets, loading }}>
            {children}
        </PetsContext.Provider>)
};

export { PetsContext, PetsProvider }