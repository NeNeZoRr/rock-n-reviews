import React, { useState, useEffect } from 'react';
import Search from './Search';
import Gallery from './Gallery/Gallery';

function Home() {
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('Search for music');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        if (search) {
          const uri = encodeURI(`https://itunes.apple.com/search?term=${search}`);
          const response = await fetch(uri);

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const resData = await response.json();

          if (resData.results.length > 0) {
            setData(resData.results);
            setMessage('Here are your results');
          } else {
            setData([]);
            setMessage('Not Found');
          }
        } else {
          if (data.length > 0) setData([]);
          setMessage('Search for music');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
        setMessage('An error occurred while fetching data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [search]);

  const handleSearch = (term) => {
    setSearch(term);
  };

  return (
    <div>
      <h1>Welcome to Rock-n-Reviews</h1>
      <p>Join us and start a conversation about the music that inspires you or your favorite artists.</p>
      <Search handleSearch={handleSearch} message={message} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Gallery data={data} />
      )}
    </div>
  );
}

export default Home;
