import { v4 as uuidv4 } from "uuid";
import { DELETE_MOVIE, ADD_MOVIE, EDIT_MOVIE, SEARCH, GET_SEARCH } from "../Actions/types";
const movieList = [
  {
    filmName: "Game Of Thrones",
    rating: 5,
    imgUrl: "https://image.tmdb.org/t/p/w500/gwPSoYUHAKmdyVywgLpKKA4BjRr.jpg",
    id: uuidv4(),
    year: "2013",
  },
  {
    filmName: "Peaky Blinders",
    rating: 5,
    imgUrl:
      "https://img.moviesjoy.net/resize/188x288/ea/b4/eab48fa4c71804c00008616715dd3777/eab48fa4c71804c00008616715dd3777.jpg",
    id: uuidv4(),
    year: "2016",
  },
  {
    filmName: "Breaking Bad",
    rating: 4,
    imgUrl:
      "https://img.moviesjoy.net/resize/188x288/7a/78/7a78d2a44e33d64d6c35e1a2c1e2cdc9/7a78d2a44e33d64d6c35e1a2c1e2cdc9.jpg",
    id: uuidv4(),
    year: "2011",
  },
  {
    filmName: "Sherlock",
    rating: 3,
    imgUrl:
      "https://img.moviesjoy.net/resize/188x288/f6/5e/f65e4553a4cb3cbba9ea5e957f02d3a7/f65e4553a4cb3cbba9ea5e957f02d3a7.jpg",
    id: uuidv4(),
    year: "2014",
  },
  {
    filmName: "Shernobyl",
    rating: 2,
    imgUrl: "https://image.tmdb.org/t/p/w500/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
    id: uuidv4(),
    year: "2018",
  },
];
const MovieReducer = (state = {movieList,userSearch:'',userRating:''}, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {...state,movieList:[...state.movieList,action.payload]};
    case EDIT_MOVIE:
      return state.movieList.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    case DELETE_MOVIE:
      return {...state,movieList:state.movieList.filter((el) => el.id !== action.payload)};

      case GET_SEARCH:
      return {...state,userSearch:action.payload.userSearch,userRating:action.payload.userRating};


    // case SEARCH:
    //   return state.movieList.filter(
    //     (el) =>
    //       el.rating >= action.payload.rating &&
    //       el.filmName
    //         .toUpperCase()
    //         .includes(action.payload.keyword.toUpperCase().trim())
    //   );
    default:
      return state;
  }
};
export default MovieReducer;
