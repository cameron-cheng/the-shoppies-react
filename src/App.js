import React, { useState } from "react";
import Search from "./Search";
import Nomination from "./Nomination";
import Banner from "./Banner";
import "./App.css";

function App() {
  const [nominationList, setNominationList] = useState(() => {
    const storedNominationList = localStorage.getItem("nominationList");
    return storedNominationList !== null
      ? JSON.parse(storedNominationList)
      : [];
  });

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
    console.log("nominationList :>> ", nominationList);
    localStorage.setItem(
      "nominationList",
      JSON.stringify([...nominationList, movie])
    );
  };

  const removeNomination = (movieToRemove) => {
    const removeNominationList = [...nominationList];

    const nominationIndex = removeNominationList.findIndex(
      (nomination) => nomination.imdbID === movieToRemove
    );
    removeNominationList.splice(nominationIndex, 1);
    setNominationList(removeNominationList);
    localStorage.setItem("nominationList", JSON.stringify(removeNominationList));
  };

  return (
    <div>
      <Banner nominationList={nominationList} />
      <Search checkNominations={checkNominations} nominate={nominate} />
      <Nomination
        nominations={nominationList}
        removeNomination={removeNomination}
      />
    </div>
  );
}

export default App;
