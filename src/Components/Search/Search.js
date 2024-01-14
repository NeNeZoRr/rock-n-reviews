import React from 'react'
import Cover from '../Covers/Cover'

function Search({ handleSearch, message, data }) {
  return (
    <div>
      <input type="text" onChange={(e) => handleSearch(e.target.value)} />
      <p>{message}</p>
      {data.map((item) => (
        <Cover key={item.trackId} item={item} />
      ))}
    </div>
  )
}

export default Search
