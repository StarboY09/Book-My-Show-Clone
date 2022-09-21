import React from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

function Navsm() {
  return (
    <>
      <div className="text-white flex item-center justify-between">
        <div>
          <h3 className="text-xl font-bold">Its starts here</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Indore, MP <BiChevronDown />
          </span>
        </div>

        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

function Navmd() {
  return (
    <>
      <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-sm">
        <BiSearch />
        <input
          type="search"
          className="w-full bg-transparent border-none focus:outline-none "
        />
      </div>
    </>
  );
}

function Navlg() {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
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
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Indore,MP <BiChevronDown />
          </span>
          <Link
            to="/plays"
            className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white"
          >
            Plays
          </Link>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign In
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

// main components
const Navbar = () => {
  return (
    <nav className="bg-darkBackground-700 px-4 py-3">
      {/* Mobile screen Navbar  */}
      <div className="md:hidden">
        <Navsm />
      </div>
      {/* Medium/Tab screen Navbar  */}
      <div className="hidden md:flex lg:hidden">
        <Navmd />
      </div>
      <div className="hidden md:hidden lg:flex">
        <Navlg />
      </div>
    </nav>
  );
};

export default Navbar;
