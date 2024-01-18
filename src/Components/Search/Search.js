import { useState } from 'react'
import { searchITunes } from '../API/Api'
import Gallery from './Gallery/Gallery'

function Search() {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = async () => {
        try {
            const results = await searchITunes(searchTerm);
            setSearchResults(results);
            // console.log(results)
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
            <button onClick={handleSearch}> Search</button>
            <Gallery results={searchResults}/>
        </div>
    )
}

export default Search