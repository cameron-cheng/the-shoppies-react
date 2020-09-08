import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./App.css";

const axios = require("axios");
const API_KEY = "45aaa6eb";

const apiURL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function Search({ checkNominations, nominate }) {
  const [movieTitle, setMovieTitle] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const search = async () => {
    try {
      const response = await axios.get(`${apiURL}&s=${movieTitle}`);
      setSearchResults(response.data.Search);
    } catch (error) {
      console.error(error);
    }
  };

  const movies = searchResults.map((movie) => {
    return (
      <li key={movie.imdbID}>
        <p>
          {movie.Title} ({movie.Year})
        </p>
        <Button
          variant="primary"
          onClick={() => nominate(movie)}
          disabled={!checkNominations(movie.imdbID)}
          size="sm"
        >
          {" "}
          Nominate{" "}
        </Button>
      </li>
    );
  });

  return (
    <>
      <Card className="card">
        <Card.Header>
          <h2>Search for Movies: </h2>
        </Card.Header>

        <Card.Body>
          <input
            type="text"
            name="movieTitle"
            placeholder="E.g. Black Panther"
            onChange={(event) => {
              setMovieTitle(event.target.value);
            }}
            value={movieTitle}
            className="input-spacing"
          />

          <Button variant="primary" size="sm" onClick={search} disabled={!movieTitle}>Submit</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>
          <h2>Search Results</h2>
        </Card.Header>
        <ul> {movies} </ul>
      </Card>
    </>
  );
}

export default Search;
