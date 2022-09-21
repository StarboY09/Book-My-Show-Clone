import React, { useContext } from "react";
import { Link } from "react-router-dom";

import {
  BiChevronDown,
  BiMenu,
  BiSearch,
  BiSearchAlt,
  BiShareAlt,
} from "react-icons/bi";
import { MoviesContext } from "../../context/Movies.context";

const Smallnav = () => {
  const { movie } = useContext(MoviesContext);

  return (
    <>
      <div className="text-gray-700 flex items-center justify-between ">
        <div>
          <h3 className="text-xl font-bold ">
            {/* {movie.original_title}  */}
          </h3>
        </div>
        <div className="w-8 h-8">
          <BiSearchAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

const Largenav = () => {
  const { movie } = useContext(MoviesContext);
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-2">
          <div className="w-10 h-10">
            <Link to="/">
              <img
                src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                alt="logo"
                className="w-full h-full"
              />
            </Link>
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, plays, sports and activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-3  ">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Indore,M.P <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign In
          </button>
          <div className="w-8 h-8 text-white ">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

const movie_navbar = () => {
  return (
    <>
      <nav className="bg-white border-b-2 lg:border-b-0 lg:bg-dark-700 p-4">
        {/* for small screen */}
        <div className="lg:hidden">
          <Smallnav />
        </div>
        {/* for large screen */}
        <div className="hidden lg:flex w-full">
          <Largenav />
        </div>
      </nav>
    </>
  );
};

export default movie_navbar;
