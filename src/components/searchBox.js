import React from 'react'
import './searchBox.css'

const SearchBox = ({placeholder,handleChange}) => (
    <div className="search-container">
      <input
      className='search' 
      placeholder={placeholder}
      type='search'
      onChange={handleChange} 
      />
    </div>
)

export default SearchBox