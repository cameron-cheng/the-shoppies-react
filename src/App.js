import React, { useState } from 'react';
import Search from './Search'
import Nomination from './Nomination'
import './App.css';

function App() {
  const [nominationList, setNominationList] = useState([])
  const checkNominations = (movieID) => {
    if (nominationList.includes(movieID))
      return false;
    if (nominationList.length < 5) {
      return true;
    }
    return false
  }
  const nominate = (movieID) => {
    setNominationList([...nominationList, movieID])
  }

  return (
    <div>
      
      <Search  checkNominations={checkNominations} nominate={nominate}/>
      <Nomination nominations={nominationList}/>

    </div>
      


  );
}

export default App;
