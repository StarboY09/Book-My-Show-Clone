import React, { useState } from "react";
import defult_layout from "../Layout/defult_layout";
import EntertainmetCard from "../Components/Entertainment/Entertainmet.card";
import HeroCarousal from "../Components/HeroCarousal/HeroCarousal.componentes";
import PostSlide from "../Components/PostSlider/PostSlider.components";
import axios from "axios";
import { useEffect } from "react";
const Home_page = () => {
  const [recommend, setrecommend] = useState([]);
  const [premierMoves, setpremierMoves] = useState([]);
  const [onlineevents, setonlineevents] = useState([]);

  useEffect(() => {
    const reqPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setpremierMoves(getPopularMovies.data.results);
    };

    reqPopularMovies();
  }, []);

  useEffect(() => {
    const reqTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setrecommend(getTopRatedMovies.data.results);
      // console.log(getTopRatedMovies);
    };

    reqTopRatedMovies();
  }, []);

  useEffect(() => {
    const requpcomingMovies = async () => {
      const getupcomingMovies = await axios.get("/movie/upcoming");
      setonlineevents(getupcomingMovies.data.results);
    };

    requpcomingMovies();
  }, []);

  return (
    <>
      <HeroCarousal />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmetCard />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PostSlide
          title="Recommended Movies"
          subtitle="List of recommended movies"
          posters={recommend}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <PostSlide
            title="Premiers"
            subtitle="Brand new releases every Friday"
            posters={premierMoves}
            isDark={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8 ">
        <PostSlide
          title="Online Streaming Event"
          subtitle=""
          posters={onlineevents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default defult_layout(Home_page);
