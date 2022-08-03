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
            <RatingForm/>
            <ResetRating/>
            
            
                  
         
         </div> 
         
    );
    
  
};

export default MovieRating;
