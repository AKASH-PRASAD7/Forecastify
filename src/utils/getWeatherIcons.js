const weatherICon = (icon) => {
  switch (icon) {
    case "11d":
      return "storm";

    case "11n":
      return "storm";

    case "09d":
      return "rain";

    case "09n":
      return "rain";

    case "10d":
      return "rain";

    case "10n":
      return "rain";

    case "13d":
      return "snow";

    case "13n":
      return "snow";

    case "50d":
      return "fog";

    case "50n":
      return "fog";

    case "01d":
      return "sun";

    case "01n":
      return "sun";

    case "02d":
      return "clouds";

    case "02n":
      return "clouds";

    case "03d":
      return "clouds";

    case "03n":
      return "clouds";

    case "04d":
      return "clouds";

    case "04n":
      return "clouds";

    // case "50d":
    //   setIcon(windy)
    //

    // case "50n":
    //   setIcon(windy)
    //

    default:
      return "sun";
  }
};
export default weatherICon;
