import React, { useState } from 'react';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// data
import data from "./assets/data/data.json";

import MovieListHeading from './components/MovieListHeading';
import './assets/css/App.css';

function App() {
  const [ movieRating, setMovieRating ] = useState(data);
  console.log( movieRating );


//movie list
  return (
    <div className="App">
      <div>
     <MovieListHeading cinema = {data} heading ="Movies"/>
     </div>
    </div>
   
  );
}

export default App;
