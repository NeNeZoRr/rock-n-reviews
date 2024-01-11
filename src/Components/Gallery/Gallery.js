import React from 'react'
import GalleryItem from './GalleryItem'

function Gallery ({ data }) {
    if (!data || data.length === 0) {
        return <p>No items to display.</p>
    }

    const display = data.map(item => (
        <GalleryItem key={item.trackId} item={item} />
    )) 

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery