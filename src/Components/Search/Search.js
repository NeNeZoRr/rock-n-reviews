import React, { useState } from 'react'
import Cover from '../Covers/Cover'
import { searchITunes } from '../API/Api'

function Search({ message }) {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = async () => {
        try {
            const results = await searchITunes(searchTerm, 'US', 'all');
            setSearchResults(results);
        } catch (error) {
            console.error("Error in search:", error);
        }
    }
    return (
        <div>
            <input
                type="text"
                placeholder="Discover your next beat"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <p>{message}</p>
            {searchResults && searchResults.map((item) => (
                <Cover key={item.trackId} item={item} />
            ))}
        </div>
    )
}

export default Search
