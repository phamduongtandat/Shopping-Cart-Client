import React, { createContext, useState } from "react";



const SearchContext = createContext();
const SearchProvider = ({ children }) => {

    const [word, setWord] = useState("");
    const handleSearch = (e) => {
        setWord(e.target.value)

    }

    return (
        <SearchContext.Provider value={{ word, setWord, handleSearch }}>
            {children}
        </SearchContext.Provider>)
};







export { SearchContext, SearchProvider } 