import axios from "axios";

// const VUE_APP_BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
// const URL = "https://api.openweathermap.org/data/2.5/onecall"
// const URL = "https://api.openweathermap.org/data/2.5/forecast"

const VUE_APP_BASE_URL = "http://api.weatherapi.com/v1/current.json";

// ?key=b1253bd611054724865203239242208&q=erkheim&aqi=yes

export function getWeatherData(city) {
//   try {
    // const res = axios.get(`${VUE_APP_BASE_URL}?q=${city}&appid=${process.env.VUE_APP_API_KEY}`)
    const res = axios.get(
      `${VUE_APP_BASE_URL}?key=${process.env.VUE_APP_API_KEY}&q=${city}&aqi=yes`
    ).then( res=> res.data).catch(error => {
        console.error("Error fetching weather data:", error);
        throw error;
    });
    console.log(res);
    return res;
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//     throw error; // Повторно кидаємо помилку для подальшої обробки
//   }
}

export function getDataFiveDays(city) {
  //    const res = axios.get(`${URL}?q=${city}&appid=${process.env.VUE_APP_API_KEY}`)
  const res = axios.get(
    `${VUE_APP_BASE_URL}?key=${process.env.VUE_APP_API_KEY}&q=${city}&aqi=yes`
  );
  console.log(res);
  return res;
}
