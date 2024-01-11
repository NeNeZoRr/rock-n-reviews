import { useState } from "react";

function Search({ handleSearch, message }) {
  let [searchTerm, setSearchTerm] = useState("");

  return (
    <form style={{width:"18vw", margin: "1em", minWidth:"200px"}} onSubmit={(e) => handleSearch(e, searchTerm)}>
      {message}
      <input style={{width:"12vw", minWidth:"200px"}}onChange={(e) => setSearchTerm(e.target.value)} placeholder="Artist, Album, or Song title" />
      <input type='submit'/>
    </form>
  );
}

export default Search;