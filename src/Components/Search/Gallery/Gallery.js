import GalleryItem from './GalleryItem'

function Gallery ({ results }) {
    const display = []
    results.forEach(item => {
        display.push(<GalleryItem key={item.trackId} item={item} />)
    })
    
    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery;