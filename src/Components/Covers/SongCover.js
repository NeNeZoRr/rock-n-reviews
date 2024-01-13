import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

async function lookupContentById(contentId) {
  try {
    const apiUrl = `https://itunes.apple.com/lookup?id=${contentId}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error('Error looking up content by ID:', error)
    return []
  }
}

function SongCover() {
  const { id } = useParams()
  const [songData, setSongData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const songs = await lookupContentById(id)
        setSongData(songs)
      } catch (error) {
        console.error('Error fetching song data:', error)
      }
    }
    fetchData()
  }, [id])

  return (
    <div>
      <p>Song Data Goes Here!</p>
      <p>ID: {id}</p>
      <pre>{JSON.stringify(songData, null, 2)}</pre>
    </div>
  )
}

export default SongCover
