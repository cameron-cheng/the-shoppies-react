import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./App.css";

function Nomination({ nominations, removeNomination }) {
  const nominees = nominations.map((movie) => {
    return (
      <li key={movie.imdbID}>
        <p>
          {movie.Title} {movie.Year}{" "}
        </p>
        <Button
          variant="danger"
          size="sm"
          onClick={() => {
            removeNomination(movie.imdbID);
          }}
        >
          {" "}
          Remove{" "}
        </Button>
      </li>
    );
  });

  return (
    <Card>
      <Card.Header>
        <h2> Nominations </h2>
      </Card.Header>
      <Card.Body>
        <ul> {nominees} </ul>
      </Card.Body>
    </Card>
  );
}

export default Nomination;
