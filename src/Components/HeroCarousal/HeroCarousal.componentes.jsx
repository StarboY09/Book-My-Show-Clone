import React, { useState } from "react";
import HeroSlider from "react-slick";
import { nextArrow, prevArrow } from "./Arrow.components";

const HeroCarousal = () => {
  const [image, setimage] = useState([
    {
      adult: false,
      backdrop_path: "/2RSirqZG949GuRwN38MYCIGG4Od.jpg",
      genre_ids: [53],
      id: 985939,
      original_language: "en",
      original_title: "Fall",
      overview:
        "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights.",
      popularity: 8433.274,
      poster_path: "/v28T5F1IygM8vXWZIycfNEm3xcL.jpg",
      release_date: "2022-08-11",
      title: "Fall",
      video: false,
      vote_average: 7.4,
      vote_count: 507,
    },
    {
      adult: false,
      backdrop_path: "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
      genre_ids: [16, 878, 28],
      id: 610150,
      original_language: "ja",
      original_title: "ドラゴンボール超 スーパーヒーロー",
      overview:
        "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
      popularity: 4281.192,
      poster_path: "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
      release_date: "2022-06-11",
      title: "Dragon Ball Super: Super Hero",
      video: false,
      vote_average: 8,
      vote_count: 1532,
    },
    {
      adult: false,
      backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
      genre_ids: [18, 80],
      id: 238,
      original_language: "en",
      original_title: "The Godfather",
      overview:
        "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      popularity: 94.558,
      poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      release_date: "1972-03-14",
      title: "The Godfather",
      video: false,
      vote_average: 8.7,
      vote_count: 16593,
    },
    {
      adult: false,
      backdrop_path: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
      genre_ids: [18, 80],
      id: 278,
      original_language: "en",
      original_title: "The Shawshank Redemption",
      overview:
        "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
      popularity: 63.742,
      poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      release_date: "1994-09-23",
      title: "The Shawshank Redemption",
      video: false,
      vote_average: 8.7,
      vote_count: 22312,
    },
    {
      adult: false,
      backdrop_path: "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
      genre_ids: [18, 80],
      id: 240,
      original_language: "en",
      original_title: "The Godfather Part II",
      overview:
        "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
      popularity: 48.482,
      poster_path: "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
      release_date: "1974-12-20",
      title: "The Godfather Part II",
      video: false,
      vote_average: 8.6,
      vote_count: 10035,
    },
    {
      adult: false,
      backdrop_path: "/vI3aUGTuRRdM7J78KIdW98LdxE5.jpg",
      genre_ids: [35, 18, 10749],
      id: 19404,
      original_language: "hi",
      original_title: "दिलवाले दुल्हनिया ले जायेंगे",
      overview:
        "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
      popularity: 21.274,
      poster_path: "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
      release_date: "1995-10-19",
      title: "Dilwale Dulhania Le Jayenge",
      video: false,
      vote_average: 8.6,
      vote_count: 3870,
    },
    {
      adult: false,
      backdrop_path: "/loRmRzQXZeqG78TqZuyvSlEQfZb.jpg",
      genre_ids: [18, 36, 10752],
      id: 424,
      original_language: "en",
      original_title: "Schindler's List",
      overview:
        "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
      popularity: 45.941,
      poster_path: "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      release_date: "1993-12-15",
      title: "Schindler's List",
      video: false,
      vote_average: 8.6,
      vote_count: 13225,
    },
    {
      adult: false,
      backdrop_path: "/2RSirqZG949GuRwN38MYCIGG4Od.jpg",
      genre_ids: [53],
      id: 985939,
      original_language: "en",
      original_title: "Fall",
      overview:
        "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
      popularity: 6824.053,
      poster_path: "/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
      release_date: "2022-08-11",
      title: "Fall",
      video: false,
      vote_average: 7.4,
      vote_count: 753,
    },
    {
      adult: false,
      backdrop_path: "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
      genre_ids: [16, 878, 28],
      id: 610150,
      original_language: "ja",
      original_title: "ドラゴンボール超 スーパーヒーロー",
      overview:
        "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
      popularity: 2976.814,
      poster_path: "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
      release_date: "2022-06-11",
      title: "Dragon Ball Super: Super Hero",
      video: false,
      vote_average: 8,
      vote_count: 1667,
    },
    {
      adult: false,
      backdrop_path: "/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
      genre_ids: [27, 53],
      id: 760161,
      original_language: "en",
      original_title: "Orphan: First Kill",
      overview:
        "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
      popularity: 1573.405,
      poster_path: "/wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg",
      release_date: "2022-07-27",
      title: "Orphan: First Kill",
      video: false,
      vote_average: 7.1,
      vote_count: 622,
    },
    {
      adult: false,
      backdrop_path: "/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
      genre_ids: [28, 12, 878],
      id: 634649,
      original_language: "en",
      original_title: "Spider-Man: No Way Home",
      overview:
        "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      popularity: 1098.544,
      poster_path: "/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
      release_date: "2021-12-15",
      title: "Spider-Man: No Way Home",
      video: false,
      vote_average: 8,
      vote_count: 15158,
    },
    {
      adult: false,
      backdrop_path: "/rwgmDkIEv8VjAsWx25ottJrFvpO.jpg",
      genre_ids: [10749, 18],
      id: 744276,
      original_language: "en",
      original_title: "After Ever Happy",
      overview:
        "As a shocking truth about a couple's families emerges, the two lovers discover they are not so different from each other. Tessa is no longer the sweet, simple, good girl she was when she met Hardin — any more than he is the cruel, moody boy she fell so hard for.",
      popularity: 913.358,
      poster_path: "/6b7swg6DLqXCO3XUsMnv6RwDMW2.jpg",
      release_date: "2022-08-24",
      title: "After Ever Happy",
      video: false,
      vote_average: 6.4,
      vote_count: 65,
    },
  ]);

  const settingLG = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <nextArrow />,
    prevArrow: <prevArrow />,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "ease",
  };

  const settingSM = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <nextArrow />,
    prevArrow: <prevArrow />,
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settingSM}>
          {image.map((images) => (
            <div className="w-full h-56 md:h-80 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingLG}>
          {image.map((images) => (
            <div className="w-full h-96 px-2 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousal;
