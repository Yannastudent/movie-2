import React from 'react';
import RatingForm from './RatingForm';
import Todo from './Todo';



//Movielist from data


const MovieRating = ({ eachEngmovies }) => {
    console.log('MovieRating', eachEngmovies);
    return (
      
        
        <div className='box'>
            <h2>{eachEngmovies.name}</h2>
            <img src={eachEngmovies.img} />
            
            <RatingForm/>
            
                  
         
         </div> 
         
    );
    
  
};

export default MovieRating;
