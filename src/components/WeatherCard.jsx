import React, { useState, useEffect } from "react";
import { useDate } from "../utils/useDate";
import clouds from "../assets/icons/cloud.png";
import sun from "../assets/icons/sun.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import fog from "../assets/icons/fog.png";
import storm from "../assets/icons/storm.png";
import windy from "../assets/icons/windy.png";
import humidityimg from "../assets/icons/humidity.png";
import mintemp from "../assets/icons/mintemp.png";
import maxtemp from "../assets/icons/maxtemp.png";

const WeatherCard = ({
  place,
  weather,
  temp,
  temp_min,
  temp_max,
  feels_like,
  icon,
  humidity,
  wind,
}) => {
  const { time } = useDate();
  const [WeatherIcon, setWeatherIcon] = useState(sun);

  useEffect(() => {
    switch (icon) {
      case "11d":
        setWeatherIcon(storm);
        break;
      case "11n":
        setWeatherIcon(storm);
        break;
      case "09d":
        setWeatherIcon(rain);
        break;

      case "09n":
        setWeatherIcon(rain);
        break;

      case "10d":
        setWeatherIcon(rain);
        break;
      case "10n":
        setWeatherIcon(rain);
        break;

      case "13d":
        setWeatherIcon(snow);
        break;

      case "13n":
        setWeatherIcon(snow);
        break;

      case "50d":
        setWeatherIcon(fog);
        break;

      case "50n":
        setWeatherIcon(fog);
        break;

      case "01d":
        setWeatherIcon(sun);
        break;

      case "01n":
        setWeatherIcon(sun);
        break;

      case "02d":
        setWeatherIcon(clouds);
        break;

      case "02n":
        setWeatherIcon(clouds);
        break;

      case "03d":
        setWeatherIcon(clouds);
        break;

      case "03n":
        setWeatherIcon(clouds);
        break;

      case "04d":
        setWeatherIcon(clouds);
        break;

      case "04n":
        setWeatherIcon(clouds);
        break;

      // case "50d":
      //   setWeatherIcon(windy)
      //   break;

      // case "50n":
      //   setWeatherIcon(windy)
      //   break;

      default:
        setWeatherIcon(sun);
        break;
    }
  }, [icon]);

  return (
    <>
      <section>
        <div className="w-[22rem] text-white   glassCard mb-4 p-4">
          <div className="flex w-full justify-center flex-col items-center gap-4  mb-2">
            <img src={WeatherIcon} alt={weather} className="w-16" />
            <p className="font-bold text-5xl flex justify-center items-center">
              {temp} &deg;C
            </p>
            <p className="font-bold text-lg flex justify-center items-center">
              Feels like {feels_like} &deg;C
            </p>
          </div>
          <div className="font-bold text-center text-xl">{place}</div>
          <div className="w-full flex justify-between items-center ">
            <p className="flex-1 text-center p-2">
              {new Date().toDateString()}
            </p>
          </div>
          <div className="w-full flex  justify-evenly items-center mt-2 gap-4">
            <div className="flex flex-col justify-center items-center">
              <img src={windy} alt="wind" className="w-8" />
              <span className="font-normal">{wind} m/s</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={humidityimg} alt="humidity" className="w-8" />
              <span className="font-normal">{humidity} %</span>
            </div>
          </div>
          <div className="flex justify-evenly items-center">
            <div className="w-full p-3 mt-4 flex flex-col justify-between items-center">
              <img src={mintemp} alt="minimum temperature" className="w-8" />
              <p className="text-lg">{temp_min}</p>
            </div>
            <div className="w-full p-3 mt-4 flex flex-col justify-between items-center">
              <img src={maxtemp} alt="maximum temperature" className="w-8" />
              <p className="text-lg">{temp_max}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeatherCard;
