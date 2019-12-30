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
    setTimeout(() =>{
        this.setState({
          movies : [
            {
              title:"Matrix",
              poster:"thisis matrix poster"
            },
            {
              title:"oldboy",
              poster:"thisis oldboy poster"
            },
            {
              title:"cats",
              poster:"thisis cats poster"
            },
            {
              title:"starwars",
              poster:"thisis starwars poster"
            },
          ]
        })
    }, 5000)
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
