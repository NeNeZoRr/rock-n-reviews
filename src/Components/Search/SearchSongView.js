import React from 'react'
import { useParams } from 'react-router-dom'
import Search from './Search'

const SearchAlbumSongs = () => {
    const { id } = useParams()

    const handleSearch = async (term) => {
        console.log('Search term:', term)
    }

    return <Search handleSearch={handleSearch} message="Search for songs" data={[]} />
}

export default SearchAlbumSongs
