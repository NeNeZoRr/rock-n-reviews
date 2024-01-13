import GalleryItem from './GalleryItem'

function Gallery ({ data }) {
    const display = data.map(item => {
        return <GalleryItem key={item.trackId} item={item} />
    }) 
    // console.log(data)
    
    return (
        <div>
            {display}
        </div>
    )
}



export default Gallery