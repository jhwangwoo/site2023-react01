import React from "react";

const movieTag = [
  {
    name: "높은 평점",
    url: "https://api.themoviedb.org/3/movie/top_rated",
  },
  {
    name: "인기 영화",
    url: "https://api.themoviedb.org/3/movie/popular",
  },
  {
    name: "상영중인 영화",
    url: "https://api.themoviedb.org/3/movie/now_playing",
  },
  {
    name: "상영예정작",
    url: "https://api.themoviedb.org/3/movie/upcoming",
  },
];

const MovieTag = ({ onSearch }) => {
  function btnClick(e) {
    const clickedTag = movieTag.find((tag) => tag.name === e.target.innerText);
    if (clickedTag) {
      onSearch(clickedTag.url);
    }
  }
  return (
    <div className="movie__tag jamsil">
      <div>
        {movieTag.map((tag, index) => (
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieTag;
