import React, { createContext, useState } from "react";
const SearchContext = createContext();
const SearchProvider = ({ children }) => {

    const [keyWord, setKeyWord] = useState("");
    const handleSearch = (e) => {
        setKeyWord(e.target.value)

    }
    //console.log('keyWord', keyWord)
    return (
        <SearchContext.Provider value={{ keyWord, setKeyWord, handleSearch }}>
            {children}
        </SearchContext.Provider>)
};







export { SearchContext, SearchProvider } 