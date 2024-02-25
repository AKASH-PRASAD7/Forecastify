function getCurrentDate(date) {
  const dateObject = new Date(date);
  return dateObject.getDate();
}

function getDailyWeatherData(weatherData) {
  let currDate = getCurrentDate(weatherData.list[0].dt_txt);
  let dailyData = [];

  for (let i = 0; i < weatherData.list.length; i++) {
    let currentDate = getCurrentDate(weatherData.list[i].dt_txt);
    if (currentDate !== currDate) {
      dailyData.push(weatherData.list[i]);
      currDate = currentDate;
    }
  }
  return dailyData;
}

export default getDailyWeatherData;
