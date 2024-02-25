# Forecastify ⛈️ (https://akash-forecastify.vercel.app/)

Forecastify is a weather app that allows users to easily get up-to-date weather information for any city. With a clean and intuitive interface, users can quickly search for a city and access weather data for today as well as the forecast for the next 5 days.

## Screenshots

![1](https://github.com/AKASH-PRASAD7/Forecastify/assets/110546856/43e281bc-978b-4a4a-b20d-a8b341ca3b34)

![2](https://github.com/AKASH-PRASAD7/Forecastify/assets/110546856/12c3742e-cabc-4393-8d3d-02b97f20a564)

## Features

- **Current Weather:** Get real-time weather data for today, including temperature, humidity, wind speed, and more.
- **5-Day Forecast:** Plan ahead with a 5-day weather forecast to stay prepared for changing weather conditions.
- **City Search:** Easily find weather information for any city around the world.

## Technologies Used

- **React:** Built with the popular JavaScript library for building user interfaces.
- **Tailwind CSS:** Styled with Tailwind CSS for a clean and responsive design.
- **OpenWeatherMap API:** Utilizes the OpenWeatherMap API to fetch accurate and reliable weather data.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AKASH-PRASAD7/Forecastify.git
   ```

2. Install dependencies:

   ```bash
   cd forecastify
   npm install
   ```

3. Set up API Key:

   Obtain a free API key from [OpenWeatherMap](https://openweathermap.org/api) and replace the placeholder in your code with your actual API key.

4. Rename an .sample.env file to .env then
   add the following line, replacing YOUR_ACTUAL_API_KEY with your OpenWeatherMap API key:

   ```bash
   VITE_API_KEY=<YOUR_API_KEY>
   ```

5. Start the app:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

## Usage

1. Open the app in your browser.
2. Enter the name of the city you want to check the weather for in the search bar.
3. Press Enter or click on the search icon.
4. View the current weather and the 5-day forecast for the selected city.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
- This project was inspired by the desire to create a simple and effective weather app.

---
