import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {
  
  // componentWillMount(){
  //   console.log('compWillMT')
  // }
  state = {
  }
  componentDidMount(){
    //https://yts.lt/api/v2/list_movies.json?sort_by=rating
    fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json=>console.log(json))
    .catch(err=>console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie,index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }
  render (){
    return (
        <div className="App">
          {this.state.movies ? this._renderMovies() : 'loading'}      
        </div>
      );
    }
  }
  
export default App;
