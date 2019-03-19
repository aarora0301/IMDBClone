import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Home from './containers/Home/Home';
import MovieInfo from './components/MovieInfo/MovieInfo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Route path="/:id" component={MovieInfo}/>
        <Route path="/" exact component={Home}/>
      </div>
    );
  }
}

export default App;
