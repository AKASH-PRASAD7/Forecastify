import { useState, useEffect, useCallback, useMemo } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("Delhi");
  const [search, setSearch] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
    import.meta.env.VITE_API_KEY
  }&units=metric`;

  const getWeather = useCallback(async () => {
    try {
      const res = await fetch(url);
      const dataObj = await res.json();
      setData(dataObj);
    } catch (error) {
      console.error("Error fetching weather:", error);
      // Handle error gracefully, e.g., display an error message to the user
    }
  }, [url]); // Only re-create getWeather if url changes

  const memoizedWeatherData = useMemo(() => getWeather(), [getWeather]);

  const handleSearch = (searchString) => {
    setSearch(searchString);
    // setCity(searchString);
    console.log(city);
  };

  // useEffect(() => {
  //   getWeather();
  // }, []);
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
            onChange={(e) => handleSearch(e.target.value)}
            className="outline-none mx-auto  bg-transparent glassCard rounded-xl p-2 font-semibold text-indigo-500 m-4"
            placeholder="Enter your city name"
          />
          {memoizedWeatherData && (
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
          )}
        </section>
      </main>
    </>
  );
}

export default App;
