import React from 'react';
import RatingForm from './RatingForm';
import ResetRating from './ResetRating';
import Avarage from './Avarage';


//Movielist from data,buttons, stars


const MovieRating = ({ eachEngmovies }) => {
    console.log('MovieRating', eachEngmovies);

    return (


        <div className='box'>
            <h2>{eachEngmovies.name}</h2>
            <img src={eachEngmovies.img} />
            <div>
                <Avarage />
            </div>
            <div className='subtitle'>
                <RatingForm />
                <ResetRating placeholderRating={3} />
            </div>


        </div>

    );


};

export default MovieRating;
