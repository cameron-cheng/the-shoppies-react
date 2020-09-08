import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import "./App.css";

function Nomination({ nominations, removeNomination }) {
  const nominees = nominations.map((movie) => {
    return (
      <li key={movie.imdbID}>
        <p>
          {movie.Title} {movie.Year}{" "}
        
        <Button
          variant="danger"
          size="sm"
          className="button-spacing"
          onClick={() => {
            removeNomination(movie.imdbID);
          }}
        >
          {" "}
          Remove{" "}
        </Button>
        </p>
      </li>
    );
  });

  return (
    <>
      <Container>
        <Card>
          <Card.Header>
            <h2 className="card-header"> Nominations </h2>
          </Card.Header>
          <Card.Body>
            <ul> {nominees} </ul>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Nomination;
