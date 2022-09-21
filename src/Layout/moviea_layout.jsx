import React, { useEffect, useContext } from "react";
// Navbar
import Moviee from "../Components/Navbar/movie_navbar";

// movie context

const moviea_layout =
  (Component) =>
  (...props) => {
    return (
      <div>
        <Moviee />
        <Component {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default moviea_layout;
