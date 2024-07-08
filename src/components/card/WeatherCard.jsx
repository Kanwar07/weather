import React from "react";

function formatToLongDate(dt_txt) {
  const date = new Date(dt_txt.replace(" ", "T"));
  const dateOptions = {
    weekday: "short",
    month: "long",
    day: "2-digit",
    year: "numeric",
  };
  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const formattedDate = date.toLocaleDateString("en-US", dateOptions);
  const formattedTime = date.toLocaleTimeString("en-US", timeOptions);
  const format2 = `${formattedTime}, ${formattedDate}`;
  return format2;
}

function WeatherCard({ main, weather, wind, dt_txt }) {
  const { temp } = main;

  const formattedDate = formatToLongDate(dt_txt);

  return (
    <div className="mx-[10%] my-20 p-10 rounded-2xl bg-gray-300 shadow-2xl">
      <div className="flex flex-row justify-between max-sm:flex-col max-sm:items-center">
        <div className="flex flex-col justify-between items-center">
          <div>
            <div>{formattedDate}</div>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
                alt="weather"
                className="w-[120px]"
              />
            </div>
            <div className="text-sm opacity-60 max-sm:mb-4">
              {weather[0].description}
            </div>
          </div>
          <div className="text-[20px] font-semibold max-sm:mb-10">
            {(temp - 273.15).toFixed(2)} °C
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
