import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {
  
  // componentWillMount(){
  //   console.log('compWillMT')
  // }
  state = {
    greeting:'Hello',
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
  }
  componentDidMount(){
    setTimeout(() =>{
        this.setState({
          movies : [
            ...this.state.movies,
            {
              title:"test",
               poster:"thisis starwars poster"
            }
          ]
        })
      }, 5000)
    }
  render (){
    return (
        <div className="App">
            {this.state.greeting}
            {this.state.movies.map((movie, index)=>{
              return <Movie title={movie.title} poster={movie.poster} key={index} />
            })}      
        </div>
      );
    }
  }
  
export default App;
