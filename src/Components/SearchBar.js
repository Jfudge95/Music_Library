import { useState } from "react";

function SearchBar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <form onSubmit={(e) => handleSearch(e, searchTerm)}>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter a search term"
      />
      <input type="submit" />
    </form>
  );
}

export default SearchBar;

// We use an Arrow function in our form because it is getting an Argument.
// We Destructured handleSearch because we passed the handleSearch function from App.js.
