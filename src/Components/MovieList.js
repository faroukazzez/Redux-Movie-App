import React from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
const MovieList = (props) => {
  return (
    <div className="movie-list">
      {props.movies.movieList
        .filter(
          (el) =>
            el.rating >= props.movies.userRating &&
            el.filmName
              .toUpperCase()
              .includes(props.movies.userSearch.toUpperCase().trim())
        )
        .map((el) => (
          <MovieCard movie={el} />
        ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    movies: state.MovieReducer,
  };
};
export default connect(mapStateToProps)(MovieList);
