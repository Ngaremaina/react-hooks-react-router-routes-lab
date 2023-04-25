import React from "react";
import { directors } from "../data";

function Directors() {

  const displayDirectors= directors.map((director)=>{
    const moviesList = (director.movies).map((movie)=><li key={director.name}>{movie}</li>)
      return (
        <div>
           <h1>{director.name}</h1>
           <ul>
             {moviesList}
           </ul>
        </div>)                                 
  })

  return (
      <div>
        <h1>Directors Page</h1>
        {displayDirectors}
      </div>
  )
}

export default Directors;
