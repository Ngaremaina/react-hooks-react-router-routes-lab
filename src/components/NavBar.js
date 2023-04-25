import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles={
  display:"inline",
  width:"min-content",
  padding: "12px",
  margin: "0 3px 3px",
  background: "black",
  textDecoration: "none",
  color: "white",
}

function NavBar() {
  return (
  <div className="navbar">
    <NavLink to="/"
         style={linkStyles}
         activeStyle={{
          color:"aliceblue"
         }} >
          Home
         </NavLink>

         <NavLink to="/movies" 
         style={linkStyles}
         
         >
          Movies
         </NavLink>

         <NavLink
         to="/directors" 
         style={linkStyles}
         >
           Directors
         </NavLink>

         <NavLink
         to="/actors" 
         style={linkStyles}
         >
           Actors
         </NavLink>

          </div>)
}

export default NavBar;
