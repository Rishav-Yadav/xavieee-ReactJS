import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { movies } from "../context/TrendingAction";

function TrendingMovies() {
  movies();
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
      <SwiperSlide>
        <div className=" slide-content focus-slide">Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" slide-content faded-slide">Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" slide-content faded-slide">Slide 3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" slide-content faded-slide">Slide 4</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content faded-slide">Slide 5</div>
      </SwiperSlide>
    </Swiper>
  );
}
export default TrendingMovies;
