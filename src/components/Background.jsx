import React, { useEffect, useState } from "react";
import Clear from "../assets/images/Clear.jpg";
import Cloudy from "../assets/images/Cloudy.jpg";
import Rainy from "../assets/images/Rainy.jpg";
import snow from "../assets/images/snow.jpg";
import Stormy from "../assets/images/Stormy.jpg";
import fog from "../assets/images/fog.png";
import Sunny from "../assets/images/Sunny.jpg";
import Windy from "../assets/images/Windy.jpg";

const Background = ({ weather = "09d" }) => {
  const [image, setImage] = useState(Clear);

  useEffect(() => {
    switch (weather) {
      case "11d":
        setImage(Stormy);
        break;
      case "11n":
        setImage(Stormy);
        break;
      case "09d":
        setImage(Rainy);
        break;
      case "09n":
        setImage(Rainy);
        break;
      case "10d":
        setImage(Rainy);
        break;
      case "10n":
        setImage(Rainy);
        break;

      case "13d":
        setImage(snow);
        break;
      case "13n":
        setImage(snow);
        break;
      case "50d":
        setImage(fog);
        break;
      case "50n":
        setImage(fog);
        break;
      case "01d":
        setImage(Sunny);
        break;
      case "01n":
        setImage(Sunny);
        break;
      case "02d":
        setImage(Cloudy);
        break;
      case "02n":
        setImage(Cloudy);
        break;
      case "03d":
        setImage(Cloudy);
        break;
      case "03n":
        setImage(Cloudy);
        break;
      case "04d":
        setImage(Cloudy);
        break;
      case "04n":
        setImage(Cloudy);
        break;
      default:
        setImage(Windy);
    }
  }, [weather]);

  return (
    <div className="relative">
      <img
        src={image}
        alt="weather_image"
        className="h-screen w-full fixed left-0 top-0 -z-[10]"
      />
      <div
        className="h-screen w-full fixed left-0 top-0 bg-black opacity-35"
        style={{ zIndex: -5 }}
      ></div>
    </div>
  );
};

export default Background;
