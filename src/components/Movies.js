import React from "react";
import { movies } from "../data";


function Movies() {
  
  const displayMovies= movies.map((movie)=>{
      const genreList = (movie.genres).map((genre)=><li key={movie.title}>{genre}</li>);
      return (
        <div >
           <h1>{movie.title}</h1>
           <h2>{movie.time}</h2>
           <ul>
             {genreList}
           </ul>
        </div>
      )
  })
  return(
    <div>
      <h1>Movies Page</h1>
      {displayMovies}
    </div>
  )
}

export default Movies;
