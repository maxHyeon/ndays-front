import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return (
            <div>
                <MoviePoster />
                <h1>hello this is movie </h1>        
            </div>
        );   
    }
}


class MoviePoster extends Component{
    render(){
        return(
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.days.co.uk%2Fcoming-soon%2F&psig=AOvVaw34pLi5CTN7uRO1iFOzTLOi&ust=1577304245442000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKj4nbKKz-YCFQAAAAAdAAAAABAD"></img>
        );
    }
}

export default Movie;