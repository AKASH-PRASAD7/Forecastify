import React, { useEffect, useState } from "react";
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

const MiniWeatherCard = ({
  weather,
  temp,
  temp_min,
  temp_max,
  date,
  icon,
  humidity,
  wind,
}) => {
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

      default:
        setWeatherIcon(windy);
        break;
    }
  }, [icon]);

  function formatDateString(inputDateString) {
    const dateObject = new Date(inputDateString);
    const formattedDate = dateObject.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    return formattedDate;
  }

  return (
    <>
      <section>
        <div className="glassCard text-white  p-4 flex flex-col">
          <p className="text-center font-semibold">{formatDateString(date)}</p>
          <hr />
          <div className="w-full flex justify-center items-center flex-1">
            {/* Weather Icon */}
            <img
              src={WeatherIcon}
              alt={weather}
              className="w-[4rem] h-[4rem]"
            />
          </div>

          <p className="text-center font-bold text-2xl">{temp}&deg;C</p>
          <div className="w-full flex  justify-evenly items-center mt-2 gap-4">
            <div className="flex flex-col justify-center items-center">
              <img src={windy} alt="wind" className="w-8" />
              <span className="font-semibold">{wind} m/s</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={humidityimg} alt="humidity" className="w-8" />
              <span className="font-semibold">{humidity} %</span>
            </div>
          </div>
          <div className="flex justify-between flex-col items-center mt-2">
            <div className="flex items-center">
              <img
                src={mintemp}
                alt="min temperature"
                className="w-5 h-5 mr-1"
              />
              <span className="font-semibold">{temp_min}&deg;C</span>
            </div>
            <div className="flex items-center">
              <img
                src={maxtemp}
                alt="max temperature"
                className="w-5 h-5 mr-1"
              />
              <span className="font-semibold">{temp_max}&deg;C</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiniWeatherCard;
