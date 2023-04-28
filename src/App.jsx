import Characters from "./components/Characters/Characters";
import Navbar from "./components/Navbar"
import React, { useEffect, useState } from "react";
import Paginacion from "./components/paginacion/Paginacion";


function App() {


  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const urlInicial = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  };

  const onPrevious = () => {
     fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(urlInicial);
  }, [])

  return (
    <>
      <Navbar brand="Rick and Morty App" />

      <div className="container mt-5">
         <Paginacion 
         prev={info.prev} 
         next={info.next} 
         onPrevious={onPrevious} 
         onNext={onNext}
         />
         <Characters characters={characters}/>
         <Paginacion 
         prev={info.prev} 
         next={info.next} 
         onPrevious={onPrevious} 
         onNext={onNext}
         />
      </div>
    </>
  );
}

export default App
