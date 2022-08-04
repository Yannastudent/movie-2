import React from 'react';
import RatingForm from './RatingForm';
import ResetRating from './ResetRating';
import Avarage from './Avarage';


//Movielist from data,buttons, stars


const MovieRating = ({ movie }) => {
    console.log('MovieRating', movie);

    return (


        <div className='box'>
            <h2>{movie.name}</h2>
            <img src={movie.img} />
            <div>
                <Avarage rating={movie.rating} />
            </div>
            <div className='subtitle'>
                <RatingForm />
                <ResetRating placeholderRating={3} />
            </div>


        </div>

    );


};

export default MovieRating;
