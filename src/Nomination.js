import React from "react";

function Nomination({ nominations }) {
  console.log('nominations :>> ', nominations);
  const nominees = nominations.map((nominee) => {
    console.log('nominee :>> ', nominee);
    return (
      <li> 
        <p>{nominee}</p>
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
