import React from 'react'
import Cover from './Cover'

const AlbumCover = ({ album }) => (
    <Cover src={album.artworkUrl100} alt={album.collectionName || 'Album Cover'} />
)

export default AlbumCover

