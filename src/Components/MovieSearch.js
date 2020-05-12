import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { connect } from "react-redux";
import { getSearch } from "../Actions/MovieActions";

class MovieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1,
      searchterm:''
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue }, () =>
      this.props.getSearch({
        userSearch: this.state.searchterm,
        userRating: this.state.rating,
      })
    );
  }
  handleChange = (e) => {
    this.setState({ searchterm: e.target.value }, () =>
      this.props.getSearch({
        userSearch: this.state.searchterm,
        userRating: this.state.rating,
      })
    );
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="input-group m-3">
            <input
              type="text"
              className="form-control"
              placeholder="search..."
              onChange={this.handleChange}
            />
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={this.state.rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getSearch: (x) => dispatch(getSearch(x)),
  };
};

export default connect(null, mapDispatchToProps)(MovieSearch);
