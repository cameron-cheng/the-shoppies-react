import React, { useState } from "react";
import Search from "./Search";
import Nomination from "./Nomination";
import "./App.css";

function App() {
  const [nominationList, setNominationList] = useState([]);
  const checkNominations = (movieID) => {
    const movieIDs = nominationList.map((movie) => movie.imdbID);
    if (movieIDs.includes(movieID)) return false;
    if (nominationList.length < 5) {
      return true;
    }
    return false;
  };
  const nominate = (movie) => {
    setNominationList([...nominationList, movie]);
  };

  const removeNomination = (movieToRemove) => {
    const removeNominationList = [...nominationList]; 

    const nominationIndex = removeNominationList.findIndex(
      nomination => nomination.imdbID === movieToRemove
    );
    removeNominationList.splice(nominationIndex, 1);
    setNominationList(removeNominationList);

  };

  return (
    <div>
      <Search checkNominations={checkNominations} nominate={nominate} />
      <Nomination
        nominations={nominationList}
        removeNomination={removeNomination}
      />
    </div>
  );
}

export default App;
