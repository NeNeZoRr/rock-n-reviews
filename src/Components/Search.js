import React, { useState } from "react"

function Search({ handleSearch, message }) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch(searchTerm)
  }

  return (
    <form style={{ width: "18vw", margin: "1em", minWidth: "200px" }} onSubmit={handleSubmit}>
      <p>{message}</p>
      <input
        style={{ width: "12vw", minWidth: "200px" }}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Artist, Album, or Song title"
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default Search