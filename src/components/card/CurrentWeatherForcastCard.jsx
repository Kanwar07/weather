import React from "react";

function CurrentWeatherForcastCard({ currentweatherdata, search }) {
  const { main, weather, wind } = currentweatherdata;

  return (
    <div className="w-screen flex justify-center">
      <div className="w-[40%] p-10 rounded-2xl bg-gray-300 shadow-[0_0_60px_10px_rgba(0,0,0,0.3)] max-lg:w-[60%] max-md:w-[80%]">
        <div className="flex flex-row justify-between max-sm:flex-col max-sm:items-center">
          <div className="flex flex-col justify-between">
            <div>
              <div className="text-4xl mb-2">{search}</div>
              <div className="text-sm opacity-60 max-sm:mb-4">
                {weather[0].description}
              </div>
            </div>
            <div className="text-[60px] font-semibold max-sm:mb-10 max-sm:text-[50px]">
              {(main.temp - 273.15).toFixed(2)} °C
            </div>
          </div>
          <div className="flex flex-col justify-center pr-10 max-sm:flex-col max-sm:justify-between">
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
                alt="weather"
                className="w-[120px]"
              />
            </div>
            <div>
              <div className="text-md text-nowrap">
                <span className="opacity-60">Feels Like:</span>{" "}
                <span className="font-medium">{main.feels_like}</span>
              </div>
              <div className="text-md text-nowrap">
                <span className="opacity-60">Humidity:</span>{" "}
                <span className="font-medium">{main.humidity}</span>
              </div>
              <div className="text-md text-nowrap">
                <span className="opacity-60">Wind Speed:</span>{" "}
                <span className="font-medium">{wind.speed}</span>
              </div>
              <div className="text-md text-nowrap">
                <span className="opacity-60">Pressure:</span>{" "}
                <span className="font-medium">{main.pressure}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeatherForcastCard;
