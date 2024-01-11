import { useState } from 'react'
import { Link } from 'react-router-dom'

function GalleryItem({ item }) {
    let [view, setView] = useState(false)

    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${item.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow'
    }

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3>{item.trackName}</h3>
                <h4>{item.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div style={detailStyle}>
                <h2>Song Title: <Link to={`/song/${item.trackId}`} > {item.trackName} </Link></h2> 
                {/* 1496872375 */}
                <h3>Artist: {item.artistName}</h3>
                <h3>Album Title: <Link to={`/album/${item.collectionId}`} > {item.collectionName} </Link></h3>
                {/* 1496872374 */}
                <h4>Genre: {item.primaryGenreName}</h4>
                <h4>Release Date: {item.releaseDate}</h4>
            </div>
        )
    }

// console.log(item)

    return (
        <div onClick={() => setView(!view)}
            style={{'display': 'inline-block'}}>
        
            {/* This simple ternary shows the simple view when 'view' is false! */}
            {view ? detailView() : simpleView()}

        </div>
    )

}
export default GalleryItem