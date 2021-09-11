import React from 'react';
import './search-box.css'

export const SearchBox = ({placeholder, handleSearch}) => (

<input className='search' type="search" placeholder="Search Monsters" 
onChange={handleSearch}
/>
)