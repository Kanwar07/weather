import React, { useContext } from "react";
import { weathercontext } from "../context/Context";
import WeatherCard from "../card/WeatherCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

function WeatherForcast() {
  const { weatherdata } = useContext(weathercontext);
  return (
    <>
      {weatherdata ? (
        <>
          <div className="text-[32px] mt-10 flex justify-center mx-10 text-center">
            Weather Forcast for next 6 Days
          </div>
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              1080: {
                slidesPerView: 4,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper w-screen mb-20 mx-20"
          >
            {weatherdata.map((currentweather) => {
              const { main, weather, wind, dt_txt } = currentweather;
              return (
                <SwiperSlide>
                  <WeatherCard {...{ main, weather, wind, dt_txt }} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </>
  );
}

export default WeatherForcast;
