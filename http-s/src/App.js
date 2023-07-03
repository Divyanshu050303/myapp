import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie'

function App() {
  const [movies, SetMovies]=useState([]);
  const [isLoading,setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  // function fetchMoviesHandler() {
  //   fetch('https://swapi.dev/api/films/').then((response)=>{
  //     return response.json();
  //   }).then((data)=>{
  //     const transformedMovies=data.results.map(moviesData=>{
  //       return {
  //         id:moviesData.episode_id,
  //         title:moviesData.title,
  //         openingText:moviesData.opening_crawl,
  //         releaseDate:moviesData.release_date
  //       }
  //     })
  //     SetMovies(transformedMovies);
  //   });
  // }
  async function fetchMoviesHandler(){
    setIsLoading(true)
    setError(null);
    try{
    const response=await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=27bf5569ec504c39a70da5ae163bb872')
    const data=await response.json();
    if(!response.ok){
      throw new Error("Something went wrong here")
    }
    const transformedMovies =data.articles.map((moviesData)=>{
      return {
        id:moviesData.author,
          title:moviesData.title,
          openingText:moviesData.discription,
          releaseDate:moviesData.url
      }
    })
    SetMovies(transformedMovies)
    
  } catch(error){
    setError(error.message)
  }
  setIsLoading(false)
  }
  function addMovieHandler(movie){
    console.log(movie.title)
  }
  return (
    <React.Fragment>
    <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {isLoading && <p>Loading...</p> }
        {!isLoading && error &&<p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
