import React from "react";
import { useDate } from "../utils/useDate";

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
  return (
    <>
      <section>
        <div className="w-[22rem] text-white min-w-[22rem] h-[30rem] glassCard p-4">
          <div className="flex w-full just-center, items-center gap-4 mt-12 mb-4">
            <img
              src={`https://openweathermap.org/img/w/${icon}.png`}
              alt={weather}
            />
            <p className="font-bold text-5xl flex justify-center items-center">
              {temp} &deg;C
            </p>
          </div>
          <div className="font-bold text-center text-xl">{place}</div>
          <div className="w-full flex justify-between items-center mt-4">
            <p className="flex-1 text-center p-2">
              {new Date().toDateString()}
            </p>
            <p className="flex-1 text-center p-2">{time}</p>
          </div>
          <div className="w-full flex justify-between items-center mt-4 gap-4">
            <p className="flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg">
              Wind Speed <span className="font-normal">{wind} km/h</span>
            </p>
            <p className="flex-1 text-center p-2 font-bold rounded-lg bg-green-600">
              Humidity{" "}
              <span className="font-normal">{humidity} gm/m&#179;</span>
            </p>
          </div>
          <div className="w-full p-3 mt-4 flex justify-between items-center">
            <p className="font-semibold text-lg">Minimum temp</p>
            <p className="text-lg">{temp_min}</p>
          </div>
          <div className="w-full p-3 mt-4 flex justify-between items-center">
            <p className="font-semibold text-lg">Maximum temp</p>
            <p className="text-lg">{temp_max}</p>
          </div>
          {/* <hr className="bg-slate-600" /> */}
          <div className="w-full p-4 flex justify-center items-center text-3xl font-semibold">
            {weather}
          </div>
        </div>
      </section>
    </>
  );
};

export default WeatherCard;
