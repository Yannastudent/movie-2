import React, { useState } from 'react';

import data from "./assets/data/data.json";


import './assets/css/App.css';

function App() {
  const [ movieRating, setMovieRating ] = useState(data);
  console.log( movieRating );

  return (
    <div className="App">
      <div id="movie1" className="movie-rating">
        <h2>Addams Family</h2>
        <p><img src={process.env.PUBLIC_URL+"images/Addams-Family.jpg"} alt="Movie 1" /></p>
        <p>Let user rate movie here</p>
        <p>Calculate current rating here ie 4.25 from 4 votes</p>
      </div>

      <div id="movie2" className="movie-rating">
        <h2>Avatar</h2>
        <p><img src={process.env.PUBLIC_URL+"images/Avatar.jpg"} alt="Movie 2" /></p>
        <p>Let user rate movie here</p>
        <p>Calculate current rating here ie 3.67 from 3 votes</p>
      </div>

      <div id="movie3" className="movie-rating">
        <h2>Grinch</h2>
        <p><img src={process.env.PUBLIC_URL+"images/Grinch.jpg"} alt="Movie 3" /></p>
        <p>Let user rate movie here</p>
        <p>Calculate current rating here ie 3.67 from 3 votes</p>
      </div>

      <div id="movie4" className="movie-rating">
        <h2>Onward</h2>
        <p><img src={process.env.PUBLIC_URL+"images/Onward.jpg"} alt="Movie 4" /></p>
        <p>Let user rate movie here</p>
        <p>Calculate current rating here ie 3.67 from 3 votes</p>
      </div>

      
      <div id="movie5" className="movie-rating">
        <h2>Paws and fury</h2>
        <p><img src={process.env.PUBLIC_URL+"images/Paws-and-fury.jpg"} alt="Movie 5" /></p>
        <p>Let user rate movie here</p>
        <p>Calculate current rating here ie 3.67 from 3 votes</p>
      </div>

      <div id="movie6" className="movie-rating">
        <h2>Sonic</h2>
        <p><img src={process.env.PUBLIC_URL+"images/Sonic.jpg"} alt="Movie 6" /></p>
        <p>Let user rate movie here</p>
        <p>Calculate current rating here ie 3.67 from 3 votes</p>
      </div>


    </div>
    
  );
}

export default App;
