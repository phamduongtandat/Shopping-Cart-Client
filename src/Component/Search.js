import React from 'react'
import { useContext } from 'react';
import { SearchContext } from '../Context/SearchContext';

function Search() {

    const { word, handleSearch } = useContext(SearchContext)

    return (
        <form className="d-flex">
            <input value={word} onChange={handleSearch} className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />

        </form>


    )
}

export default Search
