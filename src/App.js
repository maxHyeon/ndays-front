import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


const movies = [
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

class App extends Component {
  
  // componentWillMount(){
  //   console.log('compWillMT')
  // }
  state = {
    greeting:'Hello'
  }
  componentDidMount(){
    setTimeout(() =>{
      // this.state.greeting ='something'
      this.setState({
        greeting : 'hello again'
      })
    },5000)
  }
  render (){
    return (
        <div className="App">
            {this.state.greeting}
            {movies.map((movie, index)=>{
              return <Movie title={movie.title} poster={movie.poster} key={index} />
            })}      
        </div>
      );
    }
  }
  
export default App;
