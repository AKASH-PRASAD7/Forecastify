function getDailyWeatherData(weatherData) {
  const { list = [] } = weatherData; // Destructure the list of weather data
  const dailyWeather = {};

  list.forEach((dataPoint) => {
    const dateText = new Date(dataPoint.dt_txt).toDateString(); // Convert timestamp to a more readable date string

    // Check if we already have an entry for this date, only set it if we don't
    if (!dailyWeather[dateText]) {
      dailyWeather[dateText] = dataPoint;
    }
  });

  // Return an array of the filtered daily weather data
  return Object.values(dailyWeather);
}

export default getDailyWeatherData;
