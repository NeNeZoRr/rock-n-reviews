import React from 'react'
import { useParams } from 'react-router-dom'
import Search from './Search'

const SearchAlbumView = () => {
    const { id } = useParams()

    const handleSearch = async (term) => {
        console.log('Search term:', term)
    }

    return <Search handleSearch={handleSearch} message="Search for music" data={[]} />
}

export default SearchAlbumView
