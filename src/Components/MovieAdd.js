import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from 'react-redux'
import { addMovie, editMovie } from '../Actions/MovieActions'
import { v4 as uuidv4 } from 'uuid'

class MovieAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      filmName: "",
      year: "",
      rating: 0,
      imgUrl: ""
    };
  }
  handleShow = () => {
      this.props.info ? this.setState({ 
        show: !this.state.show,
        filmName: this.props.info.filmName,
        year: this.props.info.year,
        rating:this.props.info.rating,
        imgUrl: this.props.info.imgUrl,
        id: this.props.info.id,
    })
    : this.setState({show: !this.state.show})
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  editMyMovie = () => {
      this.props.edit(this.state)
      this.setState({show: false})
  }
  addNewMovie = () => {
      this.props.editMode ? this.editMyMovie() :
      this.props.add({...this.state, id: uuidv4()})
      this.setState({show: false})
  }

  render() {
    return (
      <div >
        <Button className='add-movie-btn btn-secondary' variant="primary" onClick={this.handleShow}>
          {this.props.editMode ? 'Edit' : 'Add New Movie'}
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                <input type="text" onChange={this.handleChange} value={this.state.filmName} name="filmName" />
              </div>
              <div>
                <label>Image:</label>
                <input type="text" onChange={this.handleChange} value={this.state.imgUrl} name="imgUrl" />
              </div>
              <div>
                <label>Rating:</label>
                <input
              type="number"
              min="1"
              max="5"
              placeholder="Select Rating"
              onChange={this.handleChange}
              value={this.state.rating} name="rating"
              
            />
              </div>
              <div>
                <label>Year:</label>
                <input type="text" onChange={this.handleChange} value={this.state.year} name="year" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button onClick={this.addNewMovie} variant="primary">
              {this.props.editMode ? 'Edit' : 'Add Movie'}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
    return{
        add: x => dispatch(addMovie(x)),
        edit: x => dispatch(editMovie(x))
    }
}

export default connect(null, mapDispatchToProps)(MovieAdd);
