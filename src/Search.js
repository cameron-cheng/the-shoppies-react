import React, { useState } from "react";

const axios = require("axios");
const API_KEY = "45aaa6eb";

const apiURL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function Search( { checkNominations, nominate }) {
  const [movieTitle, setMovieTitle] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const search = async () => {
    try {
      const response = await axios.get(`${apiURL}&s=${movieTitle}`);
      console.log(response.data.Search);
      setSearchResults(response.data.Search);
    } catch (error) {
      console.error(error);
    }
  };

  const movies = searchResults.map((movie) => {
    return (
      <li key={movie.imdbID}>
        <p>{movie.Title} ({movie.Year})</p>
        <button onClick={() => nominate(movie)} disabled={!checkNominations(movie.imdbID)}> Nominate </button>
      </li> 
    )
  })

  return (
    <div>
      <input
        type="text"
        name="movieTitle"
        onChange={(event) => {
          setMovieTitle(event.target.value);
        }}
        value={movieTitle}
      />

      <button onClick={search}>Submit</button>

      <h2>Search Results</h2>
      <ul> {movies} </ul>
    </div>
  );
}

export default Search;
