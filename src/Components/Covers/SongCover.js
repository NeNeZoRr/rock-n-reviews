import React from 'react'
import Cover from './Cover'

const SongCover = ({ song }) => (
  <Cover src={song.artworkUrl100} alt={song.trackName || 'Song Cover'} />
)

export default SongCover
