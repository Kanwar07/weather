import React, { useContext } from "react";
import { weathercontext } from "../context/Context";
import CurrentWeatherForcastCard from "../card/CurrentWeatherForcastCard";

function CurrentWeatherForcast() {
  const { currentweatherdata, search } = useContext(weathercontext);

  return (
    <>
      {currentweatherdata ? (
        <div className="mb-10">
          <CurrentWeatherForcastCard {...{ currentweatherdata, search }} />
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </>
  );
}

export default CurrentWeatherForcast;
