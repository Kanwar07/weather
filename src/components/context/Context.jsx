import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const weathercontext = createContext();

const api = {
  key: "08c0dd88cb2d1a099a236bdfdbe240e1",
  base: "https://api.openweathermap.org/data/2.5/forecast",
};

function Context({ children }) {
  const [search, setsearch] = useState("Bangalore");
  const [weatherdata, setweatherdata] = useState([]);
  const [currentweatherdata, setcurrentweatherdata] = useState(null);

  useEffect(() => {
    const fetchweather = () => {
      axios
        .get(`${api.base}?q=${search}&appid=${api.key}`)
        .then((response) => {
          setweatherdata(response.data.list);
          setcurrentweatherdata(response.data.list[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchweather();
  }, [search]);

  return (
    <weathercontext.Provider
      value={{ search, setsearch, weatherdata, currentweatherdata }}
    >
      {children}
    </weathercontext.Provider>
  );
}

export default Context;
