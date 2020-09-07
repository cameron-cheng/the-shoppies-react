import React from "react";

function Nomination({ nominations }) {
  console.log('nominations :>> ', nominations);
  const nominees = nominations.map((movie) => {
    return (
      <li> 
        <p>{movie.Title}</p>
        <button> Remove </button>
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
