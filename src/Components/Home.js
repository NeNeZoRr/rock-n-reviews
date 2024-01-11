import React, { useState, useEffect } from 'react'
import Search from './Search'
import Gallery from './Gallery/Gallery'

function Home() {
    const [search, setSearch] = useState("")
    const [message, setMessage] = useState("Search for music")
    const [data, setData] = useState([])

    useEffect(() => {
        if (search) {
            const fetchData = async () => {
                try {
                    const uri = encodeURI(`https://itunes.apple.com/search?term=${search}`)
                    const response = await fetch(uri)
                    const resData = await response.json()
                    if (resData.results.length > 0) {
                        setData(resData.results)
                        setMessage('Here are your results')
                    } else {
                        setData([])
                        setMessage('Not Found')
                    }
                } catch (error) {
                    console.error("Error fetching data:", error)
                }
            }

            fetchData()
        } else {
            if (data.length > 0) setData([])
            setMessage("Search for music")
        }
    }, [search])

    const handleSearch = (term) => {
        setSearch(term)
    }

    return (
        <div>
            <h1>Welcome to Rock-n-Reviews</h1>
            <p>Join us and start a conversation in what kind of music inspires you or who is simply your favorite artist</p>
            <Search handleSearch={handleSearch} message={message} />
            <Gallery data={data} />
        </div>
    )
}

export default Home
