import React from "react";

function Nomination({ nominations, removeNomination }) {
  console.log('nominations :>> ', nominations);
  const nominees = nominations.map((movie) => {
    return (
      <li key={movie.imdbID}> 
        <p>{movie.Title} {movie.Year} </p>
        <button onClick={() => {removeNomination(movie.imdbID)}}> Remove </button>
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
