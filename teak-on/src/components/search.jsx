import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className = "text-3xl ">
        {/* <img src="./search.png" alt="Search Icon" /> */}
        <input
          type="text"
          placeholder="Search for furniture..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>
  )
}

export default Search