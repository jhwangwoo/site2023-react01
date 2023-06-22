import React from "react";
import MovieItem from "./MovieItem";

const MovieCont = ({ movies }) => {
    return (
        <div className="movie__cont container mb50">
            <ul>
                {movies.map((movie, index) => (
                    <MovieItem key={index} movie={movie} />
                ))}
            </ul>
        </div>
    );
};
export default MovieCont;
