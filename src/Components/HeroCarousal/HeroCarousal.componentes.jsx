import React,{useState} from 'react'
import HeroSlider from 'react-slick'
import { nextArrow, prevArrow } from './Arrow.components'


const HeroCarousal = () => {

  const [image,setimage]=useState([
    {
      "adult": false,
      "backdrop_path": "/2RSirqZG949GuRwN38MYCIGG4Od.jpg",
      "genre_ids": [
        53
      ],
      "id": 985939,
      "original_language": "en",
      "original_title": "Fall",
      "overview": "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights.",
      "popularity": 8433.274,
      "poster_path": "/v28T5F1IygM8vXWZIycfNEm3xcL.jpg",
      "release_date": "2022-08-11",
      "title": "Fall",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 507
    },
    {
      "adult": false,
      "backdrop_path": "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
      "genre_ids": [
        16,
        878,
        28
      ],
      "id": 610150,
      "original_language": "ja",
      "original_title": "ドラゴンボール超 スーパーヒーロー",
      "overview": "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
      "popularity": 4281.192,
      "poster_path": "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
      "release_date": "2022-06-11",
      "title": "Dragon Ball Super: Super Hero",
      "video": false,
      "vote_average": 8,
      "vote_count": 1532
    }
])



 
  const settingLG={
    arrows:true,
    slidesToShow:1,
    infinite:true,
    speed:500,
    slidesToScroll:1,
    nextArrow: <nextArrow/> ,
    prevArrow: <prevArrow/> , 
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "ease"
  }

  const settingSM={
    arrows:true,
    slidesToShow:1,
    infinite:true,
    speed:500,
    slidesToScroll:1,
    nextArrow: <nextArrow/> ,
    prevArrow: <prevArrow/> ,
  }





  return (
    <>
    <div className='lg:hidden'>
      <HeroSlider {...settingSM}>
        {
          image.map((images) =>(
            <div className='w-full h-56 md:h-80 py-3'>
              <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path }`} alt='Hero Banner' className='w-full h-full rounded-md object-cover'/>
            </div>
          ) )
        }
      </HeroSlider>

    </div>
    <div className='hidden lg:block'>
    <HeroSlider {...settingLG}>
        {
          image.map((images) =>(
            <div className='w-full h-96 px-2 py-3'>
              <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path }`} alt='Hero Banner' className='w-full h-full rounded-md object-cover'/>
            </div>
          ) )
        }
      </HeroSlider>
    </div>
    </>
  )
}

export default HeroCarousal