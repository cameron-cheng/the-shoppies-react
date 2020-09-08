import React from "react";
import Button from 'react-bootstrap/Button' 

function Nomination({ nominations, removeNomination }) {
  const nominees = nominations.map((movie) => {
    return (
      <li key={movie.imdbID}> 
        <p>{movie.Title} {movie.Year} </p>
        <Button variant="danger" onClick={() => {removeNomination(movie.imdbID)}}> Remove </Button>
      </li>
    )
  })

  return (
    <div>
      <h1> Nomination </h1>
      <ul> {nominees} </ul>
      
    </div>
  );
}

export default Nomination;
