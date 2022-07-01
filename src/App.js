import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import Search from "./componants/Search";
import Pokecard from "./componants/Pokecard";

function App() {
  const [searchString, setSearchString] = useState(``)

  useEffect(() => {
    
  },[searchString])

  return (<>
    <Search />
    <Pokecard />
  </>);
}

export default App;
