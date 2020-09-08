import React, { useState } from "react";
import Search from "./Search";
import Nomination from "./Nomination";
import Banner from "./Banner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
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
    localStorage.setItem(
      "nominationList",
      JSON.stringify(removeNominationList)
    );
  };

  return (
    <>
      <Banner nominationList={nominationList} />

      <h1 className="h1-styling"> The Shoppies </h1>
      <h2 className="h2-styling"> Nominate 5 of your favourite movies! </h2>
     
      <Container>
        <Row>
          <Search checkNominations={checkNominations} nominate={nominate} />
        </Row>
        <Row>
          <Nomination
            nominations={nominationList}
            removeNomination={removeNomination}
          />
        </Row>
      </Container>
    </>
  );
}

export default App;
