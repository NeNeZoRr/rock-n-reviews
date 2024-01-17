import GalleryItem from './GalleryItem'
import './Gallery.css'

function Gallery ({ data }) {
    const display = data.map(item => {
        return <GalleryItem key={item.trackId} item={item} />
    }) 
    
    return (
        <div>
            {display}
        </div>
    )
}



export default Gallery