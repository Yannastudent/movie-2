
import React from "react";
import MovieListing from "./MovieRating";

import './MovieListHeading.css';

//looping data

const MovieListHeading = ({ cinema }) => {

    return (

        <div className="container">
            {cinema.map(eachEngmovies => {
                return (

                    <MovieListing eachEngmovies={eachEngmovies} />


                )

            })}
        </div>


    );




};

export default MovieListHeading;
