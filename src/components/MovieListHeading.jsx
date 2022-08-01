//movielistheading  - movies title
import React from "react";
import './MovieListHeading.css';


const MovieListHeading = (props) => {
    return (
        <div className="container">
            <div className="box">
                <h1>{props.heading}</h1>
            </div>
            <div className="title">
                <div id="movie1" className="movie-rating">
                    <h2>Addams Family</h2>
                    <p><img src={process.env.PUBLIC_URL + "images/Addams-Family.jpg"} alt="Movie 1" /></p>
                    <p>Let user rate movie here</p>
                    <p>Calculate current rating here ie 4.25 from 4 votes</p>
                </div>

                <div id="movie2" className="movie-rating">
                    <h2>Avatar</h2>
                    <p><img src={process.env.PUBLIC_URL + "images/Avatar.jpg"} alt="Movie 2" /></p>
                    <p>Let user rate movie here</p>
                    <p>Calculate current rating here ie 3.67 from 3 votes</p>
                </div>

                <div id="movie3" className="movie-rating">
                    <h2>Grinch</h2>
                    <p><img src={process.env.PUBLIC_URL + "images/Grinch.jpg"} alt="Movie 3" /></p>
                    <p>Let user rate movie here</p>
                    <p>Calculate current rating here ie 3.67 from 3 votes</p>
                </div>

                <div id="movie4" className="movie-rating">
                    <h2>Onward</h2>
                    <p><img src={process.env.PUBLIC_URL + "images/Onward.jpg"} alt="Movie 4" /></p>
                    <p>Let user rate movie here</p>
                    <p>Calculate current rating here ie 3.67 from 3 votes</p>
                </div>

                <div id="movie5" className="movie-rating">
                    <h2>Paws and fury</h2>
                    <p><img src={process.env.PUBLIC_URL + "images/Paws-and-fury.jpg"} alt="Movie 5" /></p>
                    <p>Let user rate movie here</p>
                    <p>Calculate current rating here ie 3.67 from 3 votes</p>
                </div>

                <div id="movie6" className="movie-rating">
                    <h2>Sonic</h2>
                    <p><img src={process.env.PUBLIC_URL + "images/Sonic.jpg"} alt="Movie 6" /></p>
                    <p>Let user rate movie here</p>
                    <p>Calculate current rating here ie 3.67 from 3 votes</p>
                </div>
            </div>
        </div>
    );
};

export default MovieListHeading;