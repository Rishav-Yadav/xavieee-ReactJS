import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import TrendingContext from "../context/TrendingContext";
import { getSeries } from "../context/TrendingAction";
import "swiper/css";
function TrendingSeries() {
  const { series, dispatch } = useContext(TrendingContext);
  useEffect(() => {
    const getSeriesLocal = async () => {
      const data = await getSeries();
      dispatch({ type: "SERIES", payload: data });
    };
    getSeriesLocal();
  }, [dispatch]);

  const trendingSeries = series.slice(0, 10);
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      pagination={{ clickable: true }}
      centeredSlides={true}
      autoplay={{ delay: 3000, disbaleOnInteraction: false }}
    >
      {trendingSeries.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="slide-content ">
            <Link to="./" className="">
              <img
                className="shadow-lg w-full lg:max-h-[500px] xl:max-h-[500px] lg:max-w-[500px] xl:max-w-[500px]"
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt="backdrop"
              />
            </Link>
            <h2 className="text-lg text-white mt-6 text-center font-semi-bold">
              {item.name}
            </h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default TrendingSeries;
