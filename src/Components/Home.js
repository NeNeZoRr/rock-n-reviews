import { useEffect, useState } from "react";
import Search from "./Search";
import Gallery from './Gallery/Gallery'

function Home() {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("Search for music");
  const [data, setData] = useState([]);


  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        const url = encodeURI(`https://itunes.apple.com/search?term=${search}&entity=allArtist&attribute=allArtistTerm&entity=album`)
        const response = await fetch(url)
        const data = await response.json()
  
        if (data.results.length > 0) {
          setData(data.results)
          setMessage('Here are a your results')
        } else {
          setData([])
          setMessage('Not Found')
        }
      }
      fetchData()
      console.log(data)
    } 
    else {
      if (data) setData([])
      if (data) setMessage("Search for music")
    }
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearch(term);
  };
  
  return (
    <div>
      <h1>Welcome to Rock-n-Reviews</h1>
      <p>Join us and start a conversation in what kind of music inspires you or who is simply your favorite artist</p>
              <Search handleSearch={handleSearch} message={message}/>
              <Gallery data={data} />
      
    </div>
  );
}

export default Home;