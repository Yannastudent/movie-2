
import React from "react";
import MovieListing from "./MovieRating";

import './MovieListHeading.css';

//looping data

const MovieListHeading = ({ cinema }) => {

    return (

        <div className="container">
            {cinema.map(movie => {
                return (

                    <MovieListing movie={movie} />


                )

            })}
        </div>


    );




};

export default MovieListHeading;
