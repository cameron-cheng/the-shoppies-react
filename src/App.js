import React, { useState } from 'react';
import Search from './Search'
import Nomination from './Nomination'
import './App.css';

function App() {
  const [nominationList, setNominationList] = useState([])
  const checkNominations = (movieID) => {
    const movieIDs = nominationList.map(movie =>  movie.imdbID
    )
    if (movieIDs.includes(movieID))
      return false;
    if (nominationList.length < 5) {
      return true;
    }
    return false
  }
  const nominate = (movie) => {
    setNominationList([...nominationList, movie])
  }

  return (
    <div>
      
      <Search  checkNominations={checkNominations} nominate={nominate}/>
      <Nomination nominations={nominationList}/>

    </div>
      


  );
}

export default App;
