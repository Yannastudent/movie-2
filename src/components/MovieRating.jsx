import React from 'react';
import RatingForm from './RatingForm';
import ResetRating from './ResetRating';





//Movielist from data


const MovieRating = ({ eachEngmovies }) => {
    console.log('MovieRating', eachEngmovies);
    
    return (
      
        
        <div className='box'>
            <h2>{eachEngmovies.name}</h2>
            <img src={eachEngmovies.img} />
            <div className='subtitle'>
            <RatingForm/>
            <ResetRating placeholderRating={3} />
            </div>
        </div> 
         
    );
    
  
};

export default MovieRating;
