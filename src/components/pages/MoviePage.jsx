import React, { useEffect, useState } from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import MovieSlider from "../movie/MovieSlider";
import MovieSearch from "../movie/MovieSearch";
import MovieTag from "../movie/MovieTag";
import MovieCont from "../movie/MovieCont";

const MoviePage = () => {
    const [movies, setMovies] = useState([]); //[인지한거저장공간, 몇번마다인지] = 사용

    const search = async (query) => {
        await fetch(
            //async await비동기 처리
            `https://api.themoviedb.org/3/search/movie?api_key=d318289536044275f4abc5923f180d7f&query=${query}`
        )
            .then((response) => response.json())
            .then((result) => setMovies(result.results))
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=d318289536044275f4abc5923f180d7f",
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => setMovies(result.results))
            .catch((error) => console.log("error", error));
    }, []);

    return (
        <Contents>
            <ContTitle title="movie" />
            <MovieSlider movies={movies} />
            <MovieSearch onSearch={search} />
            <MovieTag />
            <MovieCont movies={movies} />
        </Contents>
    );
};

export default MoviePage;
