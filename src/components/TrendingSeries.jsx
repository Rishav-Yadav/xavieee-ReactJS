import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import TrendingContext from "../context/TrendingContext";
import { getSeries } from "../context/TrendingAction";
import "swiper/css";
function TrendingSeries() {
  const { series, dispatch } = useContext(TrendingContext);
  useEffect(() => {
    const getSeriesLocal = async () => {
      const data = await getSeries();
      dispatchEvent({ type: "SERIES", payload: data });
    };
    getSeriesLocal();
  }, [series]);

  const trendingSeries = series.slice(0, 10);
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      centeredSlides={true}
      autoplay={{ delay: 3000, disbaleOnInteraction: false }}
    >
      {trendingSeries.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="slide-content">
            <Link to="./" className="">
              <img
                className="shadow-lg"
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                alt="backdrop"
              />
            </Link>
            <h2 className="text-accent mt-1">{item.original_title}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default TrendingSeries;
