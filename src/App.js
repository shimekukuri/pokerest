import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./componants/Search";
import Pokecard from "./componants/Pokecard";

function App() {
  const [searchString, setSearchString] = useState(``);
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    if(searchString === "") {
      return;
    }
    const debounce = setTimeout(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${searchString}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSearchResults([data]);
        })
        .catch((error) => console.error(error));
    }, 1000);
    console.log(searchResults);
    return () => clearTimeout(debounce);
  }, [searchString]);

  const handleSearchString = (e) => {
    setSearchString(e.target.value);
    console.log(searchString);
  };

  return (
    <>
      <Search onSearch={handleSearchString} />
      <Pokecard />
    </>
  );
}

export default App;
