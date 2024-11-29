import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { movies } from "../context/TrendingAction";
import { Link } from "react-router-dom";
import TrendingContext from "../context/TrendingContext";
import { useContext, useEffect } from "react";
function TrendingMovies() {
  const { state, dispatch } = useContext(TrendingContext);
  useEffect(() => {
    const getTrendingMovies = async () => {
      const temp = await movies();
      dispatch({ type: "MOVIES", payload: temp });
    };
    console.log(state.movies)
    getTrendingMovies();
    console.log(state.movies)
  }, []);
  const trendingMovies = state.movies.slice(0, 10);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      // onSlideChange={() => }
      // onSwiper={(swiper) => }
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      centeredSlides={true}
      className="my-swiper"
      effect="fade"
    >
      {trendingMovies.map((item, index) => (
        <SwiperSlide>
          <div className={`slide-content index===0?focus-slide:faded-slide`}>
            <Link to="/">
              <img src={item.backdrop_path} />
              <h2 className="text-white">{item.original_title}</h2>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default TrendingMovies;
