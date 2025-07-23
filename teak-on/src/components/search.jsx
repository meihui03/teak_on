const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className = "text-3xl ">
       
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