import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Home.css'
import Movie from '../../components/Movie/Movie';

class Home extends Component {

  state = {
    movies: [],
    selectedPostId: null
  };

  componentDidMount() {
    this.props.history.listen(()=>{
      this.getMovies();
    })
    this.getMovies()
  }

  getMovies=()=>{
    axios.get('http://localhost:8282/api/movie/')
      .then(response => {
        this.setState({movies: response.data.movie});
      });
}
  movieSelectedHandler=(id)=>{
    this.setState({selectedPostId:id})
  }

  render() {
    const movies = this.state.movies.map(movie => {
      return(
        <Link to={'/'+movie._id} key={movie._id}>
          <Movie
            title={movie.title}
            clicked={()=>this.movieSelectedHandler(movie._id)}/>
        </Link>)

    });

    return (
      <div>
        <section className="Home" >
          {movies}
        </section>
        <section>
        </section>
      </div>
    );
  }
}

export default Home;
