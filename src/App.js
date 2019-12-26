import React from 'react';
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

function App() {
    return (
        <div className="App">
            {movies.map(movie =>{
              return <Movie title={movie.title} poster={movie.poster} />
            })}      
        </div>
    );
    }

export default App;
