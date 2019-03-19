import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Home from '../../containers/Home/Home';
import './MovieInfo.css';


class MovieInfo extends Component {
  state = {
    loadedMovie: null,
    redirect: false
  }

  setRedirect = () => {
    this.setState({redirect: true})
  }


  renderRedirect = () => {
    if (this.state.redirect) {
      axios.delete('http://localhost:8282/api/movie/'+ this.props.match.params.id);
      console.log("id", this.props.match.params.id);
      return <Redirect to={Home}/>
    }
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      if (!this.state.loadedMovie || (this.state.loadedMovie && this.state.loadedMovie.id !== this.props.match.params.id)) {
        axios.get('http://localhost:8282/api/movie/' + this.props.match.params.id)
          .then(response => {
            this.setState({loadedMovie: response.data.movieInfo})
          })
      }
    }
  }

  render() {
    let movie = <p style={{textAlign: 'center'}}>Please select a Movie !!!</p>
    if (this.props.match.params.id) {
      movie = <p style={{textAlign: 'center'}}> Loading...!</p>
    }
    if (this.state.loadedMovie) {
      movie = (
        <div className="MovieInfo">
          <h1>{this.state.loadedMovie.title}</h1>
          <p>{this.state.loadedMovie.yearOfRelease}</p>
          <p>{this.state.loadedMovie.plot}</p>
          <p>{this.state.loadedMovie.actors}</p>
          <div className="Button">
            {this.renderRedirect()}
            <button className="Delete"
                    onClick={this.setRedirect}>Delete</button>
          </div>
        </div>
      );
    }
    return movie;
  }
}

export default MovieInfo;

