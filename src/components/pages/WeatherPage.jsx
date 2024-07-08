import React from "react";
import SearchBar from "../search/SearchBar";
import CurrentWeatherForcast from "../weatherforcast/CurrentWeatherForcast";
import WeatherForcast from "../weatherforcast/WeatherForcast";

function WeatherPage() {
  return (
    <div className="flex flex-col justify-start items-center p-20 w-screen h-screen">
      <div>
        <SearchBar />
      </div>
      <div>
        <CurrentWeatherForcast />
      </div>
      <div>
        <WeatherForcast />
      </div>
    </div>
  );
}

export default WeatherPage;
