import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./Components/Gallery";
import SearchBar from "./Components/SearchBar";
import AlbumView from "./Components/AlbumView";
import ArtistView from "./Components/ArtistView";

function App() {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("Search for Music!");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = `https://itunes.apple.com/search?term=${encodeURI(
        search
      )}`;
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      if (data.results.length > 0) {
        setData(data.results);
      } else {
        setMessage("Not Found");
      }
    };

    if (search) fetchData();
  }, [search]);

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearch(term);
  };

  return (
    <div>
      {message}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar handleSearch={handleSearch} />
                <Gallery data={data} />
              </>
            }
          />
          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/artist/:id" element={<ArtistView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// We have 3 Stateful variables: search, message, data.
// We have search in our Dependancy Array. Which means, only when search changes will our data run. We want new data everytime we make a search.
// e.preventDefault() - This prevents resetting the form. Must always have this with forms in react. (Look to SeachBar.js)
// if(search) fetchData() - We only want to fetch Data when we make a search in our music library.
// encodeURI - This will allow us to put spaces in our search. Aka I can search "Black Sabbath" and the space between wont mess up the search. Without the encodeURI it would just search "Black".
// We've also installed "npm install react-router-dom" package so that we can place Routes to our different webpages. Remember, this is a 1 page application but will be acting like multiple pages thansk to React.
