import React, { useState } from 'react';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// data
import data from "./assets/data/data.json";

//copmponents
import RatingForm from "./components/RatingForm";
import MovieRating from "./components/MovieRating";
import MovieListHeading from './components/MovieListHeading';




import './assets/css/App.css';
import Avarage from './components/Avarage';

function App() {
  const [movieRating, setMovieRating] = useState(data);
  console.log(movieRating);

  //input

  const addTask = (userInput) => {
    let copy = [...movieRating];
    copy = [...copy, { id: movieRating.length + 1, rating: userInput }];
    setMovieRating(copy);



  }

  //declare data from data json and tasks
  return (
    <div className="App">

      <div className='main'>
        <h1>
          Movies
        </h1>
        <div className='title'>
          <MovieListHeading cinema={data} addTask={addTask} />
        </div>
     </div>
    </div>
  );

}

export default App;
