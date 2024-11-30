import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { getMovies } from "../context/TrendingAction";
import { Link } from "react-router-dom";
import TrendingContext from "../context/TrendingContext";
import { useState, useContext, useEffect } from "react";
function TrendingMovies() {
  const { movies, dispatch } = useContext(TrendingContext);
  const [activeIndex, setActiveIndex] = useState(0);
  // const handleSlideChange = (swiper) => {
  //   console.log(activeIndex);
  //   setActiveIndex(swiper.activeIndex);
  //   console.log(activeIndex);
  // };
  useEffect(() => {
    const getTrendingMovies = async () => {
      const temp = await getMovies();
      dispatch({ type: "MOVIES", payload: temp });
    };

    getTrendingMovies();
  }, []);

  const trendingMovies = movies.slice(0, 10);

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      centeredSlides={true}
      className="my-swiper"
    >
      {trendingMovies.map((item, index) => (
        <div className="swiper">
          <div className="swiper-wrapper">
            {
              <SwiperSlide key={index}>
                <div className={`slide-content`}>
                  <Link to="/">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                      alt={item.original_title}
                    />
                    <h2 className="text-white">{item.original_title}</h2>
                  </Link>
                </div>
              </SwiperSlide>
            }
          </div>
        </div>
      ))}
    </Swiper>
  );
}
export default TrendingMovies;
