import React from "react";
import { actors } from "../data";

function Actors() {
  const displayActors= actors.map((actor)=>{
    const moviesList = (actor.movies).map((mov)=><li key={actor.name}>{mov}</li>);
    return (
      <div>
         <h1>{actor.name}</h1>
         <ul>
           {moviesList}
         </ul>
      </div>)                                 
  })
  return(
  <div>
    <h1>Actors Page</h1>
      {displayActors}
  </div>)
}

export default Actors;
