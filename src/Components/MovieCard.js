import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { connect } from "react-redux";
import { deleteMovie } from "../Actions/MovieActions";
import MovieAdd from "./MovieAdd";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  return (
    <div className="card">
      <img className="card-img-top" src={props.movie.imgUrl} alt="" />
      <div className="card-body">
        <h3 className="card-title">{props.movie.filmName}</h3>
        <div className="card-text">
          {props.movie.year}
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={props.movie.rating}
          />
          <div className="">
            <Link to={`/${props.movie.id}`}>
            <button className="btn m-1 btn-primary">
              Description
            </button>
            </Link>
            
            <button
            className="btn btn-primary m-1"
              onClick={() => props.delete(props.movie.id)}
            >
              Delete
            </button>
            <MovieAdd editMode={true} info={props.movie} />
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    delete: (x) => dispatch(deleteMovie(x)),
  };
};
export default connect(null, mapDispatchToProps)(MovieCard);
