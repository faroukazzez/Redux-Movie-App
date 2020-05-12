import React,{Component} from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
class Description extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            movieToDisplay:{}
         }
        console.log(this.props)
    }
    componentDidMount(){
        this.setState({
            movieToDisplay:this.props.movies.filter(el=>el.id === this.props.match.params.id)[0]
        })
    }
    render() { 
        return ( 
            <div>
                <MovieCard movie={this.state.movieToDisplay}/>
            </div>
         );
    }

}
const mapStateToProps =(state)=>{
    return{
        movies:state.MovieReducer
    }
}
 
export default connect(mapStateToProps) (Description);