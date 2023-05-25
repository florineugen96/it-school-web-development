const API_KEY = "355d38c78e0335ada46228b06d167c4c";

function getCurrentWeatherEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
  }