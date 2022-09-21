import "./App.css";

//REACT SLICK
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//ROUTERING
import { Route, Routes } from "react-router-dom";

//PAGES
import Home_page from "./Pages/Home_page";
import Plays_page from "./Pages/Plays_page";
import Movie_page from "./Pages/Movie_page";

import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home_page />} />
      <Route path="/movie/:id" element={<Movie_page />} />
      <Route path="/plays" element={<Plays_page />} />
    </Routes>
  );
}

export default App;
