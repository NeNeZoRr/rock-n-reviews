import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function SongView() {
    const [ songData, setSongData ] = useState({ results: []})
    const { id } = useParams()

useEffect (() => {
    const fetchData = async () => {
        // fetch itunes with dynamic id
        const url = `https://itunes.apple.com/lookup?id=${id}&entity=song`
        const response = await fetch(url)
        const data = await response.json()

        setSongData(data)
        console.log(data)
    }
    fetchData()
}, [id])


    return (
        <div>
        </div>
    )
}


export default SongView



