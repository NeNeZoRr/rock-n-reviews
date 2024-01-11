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
                 <h2>Song Title: {view ? <Link to={`/song/${item.trackId}`}>{item.trackName}</Link> : item.trackName}</h2>
                <h3>Artist: {item.artistName}</h3>
                <h3>Album Title: {view? <Link to={`/album/${item.collectionId}`} > {item.trackName}</Link> : item.collectionName}</h3>
                <h4>Genre: {item.primaryGenreName}</h4>
                <h4>Release Date: {item.releaseDate}</h4>
            </div>
        )
    }

console.log(item)

    return (
        <div onClick={() => setView(!view)}
            style={{'display': 'inline-block'}}>
            {view ? detailView() : simpleView()}
        </div>
    )
}

export default GalleryItem