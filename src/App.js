import React, { useState } from 'react';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// data
import data from "./assets/data/data.json";
import RatingForm from "./components/RatingForm";
import MovieRating from "./components/MovieRating";
import MovieListHeading from './components/MovieListHeading';




import './assets/css/App.css';

function App() {
  const [ movieRating, setMovieRating ] = useState(data);
  console.log( movieRating );


 
  const addTask = (userInput) => {
    let copy = [...movieRating];
    copy = [...copy, { id: movieRating.length + 1, task: userInput, complete: false }];
    setMovieRating(copy);
  }
 
//declare data
  return (
    <div className="App">

      <div className='main'>
        <h1>
          Movies
        </h1>
      
      <div className='title'>
        
       <MovieListHeading cinema ={data} addTask={addTask}  />
       
      
     </div>
     
     
    </div>
    </div>
  );
  
}

export default App;
