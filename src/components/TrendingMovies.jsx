import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { getMovies } from "../context/TrendingAction";
import { Link } from "react-router-dom";
import TrendingContext from "../context/TrendingContext";
import { useState, useContext, useEffect } from "react";
function TrendingMovies() {
  const { movies, dispatch } = useContext(TrendingContext);
  const [activeIndex, setActiveIndex] = useState(0);
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
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={10}
      slidesPerView={3}
      loop={true}
      centeredSlides={true}
      autoplay={{ delay: 3000, disbaleOnInteraction: false }}
      className="carousel carousel-center rounded-box"
    >
      {trendingMovies.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="slide-content carousel-item">
            <div className="wrapper">
              <Link to="./" className="">
                <img
                  className="shadow-lg  w-full  xl:max-h-[500px] lg-max-h-[500px] lg:max-w-[500px] xl:max-w-[500px]"
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt="backdrop"
                />
              </Link>
              <h2 className="text-lg text-white mt-6 text-center font-semi-bold truncate w-[8] ">
                {item.title}
              </h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default TrendingMovies;
