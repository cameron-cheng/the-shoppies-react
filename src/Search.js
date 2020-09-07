import React, { useState } from 'react';

const axios = require('axios');
const API_KEY = '45aaa6eb'

const apiURL = `https://www.omdbapi.com/?apikey=${API_KEY}` 

function Search() {

  const [movieTitle, setMovieTitle] = useState('');

  const search = async (movieTitle) => {
      try {
        const response = await axios.get(`${apiURL}&s=${movieTitle}`);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
  }
  
  
  return (
    <div>
      
        <input type="text" name="movieTitle" onChange={ value => setMovieTitle(value) }value={ movieTitle } />

        <button onClick={ search }>Submit</button>
   
    </div>
  );
}

export default Search;
