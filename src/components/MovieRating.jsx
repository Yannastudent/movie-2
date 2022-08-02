import React from 'react';

//Movielist from data

const MovieRating = ({ eachEngmovies }) => {
    console.log('MovieRating', eachEngmovies);
    return (
        <div>
            <img src={eachEngmovies.img} />
            <h2>{eachEngmovies.name}</h2>
            
        </div>
        
    );
};

export default MovieRating;