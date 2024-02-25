import { useState, useEffect, useCallback, useMemo } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("Delhi");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
    import.meta.env.VITE_API_KEY
  }&units=metric`;

  const getWeather = async () => {
    try {
      const res = await fetch(url);
      const dataObj = await res.json();
      if (dataObj.cod !== 200) {
        setError("City not found");
      }
      if (dataObj.cod === 200) {
        setData(dataObj);
        setError("");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getWeather();
  }, [city]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setCity(search);
      setSearch("");
    }
  };

  return (
    <>
      <main>
        <p className="text-center text-white text-4xl font-bold font-sans m-4">
          Forecastify
        </p>
        <section className="flex   justify-center items-center flex-col">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            className="outline-none mx-auto  bg-transparent glassCard rounded-xl p-2 font-semibold text-indigo-500 m-4"
            placeholder="Enter your city name"
          />
          {error ? (
            <>
              <p className="text-2xl font-semibold text-center m-4 p-2 text-red-600 bg-red-300 rounded-xl">
                ⚠️ {error}
              </p>
            </>
          ) : (
            data && (
              <WeatherCard
                place={data?.name}
                weather={data?.weather[0]?.main}
                icon={data?.weather[0]?.icon}
                temp={data?.main.temp}
                temp_min={data?.main.temp_min}
                temp_max={data?.main.temp_max}
                feels_like={data?.main.feels_like}
                humidity={data?.main.humidity}
                wind={data?.wind.speed}
              />
            )
          )}
        </section>
      </main>
    </>
  );
}

export default App;
