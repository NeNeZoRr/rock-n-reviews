import  { useState } from 'react'
import Cover from '../Covers/Cover'
import { searchITunes } from '../API/Api'
import Gallery from '../Gallery/Gallery'

function Search() {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = async () => {
        try {
            const results = await searchITunes(searchTerm);
            setSearchResults(results);
            console.log(results)
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
            <a href={`/${searchTerm}/Gallery`}>  <button onClick={handleSearch}> Search</button></a>
                {searchResults && searchResults.map((item) => (
                <Cover key={item.trackId} item={item} />
                ))}
        </div>
    )
}

export default Search