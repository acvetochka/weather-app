import axios from "axios";

// const VUE_APP_BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
// const URL = "https://api.openweathermap.org/data/2.5/onecall"
// const URL = "https://api.openweathermap.org/data/2.5/forecast"

// const URL= "https://api.openweathermap.org/data/3.0/onecall"



const VUE_APP_BASE_URL = "http://api.weatherapi.com";
const VUE_APP_GEO_BASE_URL = "https://api.geoapify.com/v1/geocode/search";
const VUE_APP_GEO_API_KEY = "574c148822cb4a1693bb2fadf14f335b"

// ?key=b1253bd611054724865203239242208&q=erkheim&aqi=yes

export async function getWeatherData(city) {
    // console.log("lon: ", lon, "lat: ", lat);
    // console.log(city);
    
    
//   try {
    // const res = axios.get(`${VUE_APP_BASE_URL}?lat=${lat}&lon=${lon}&appid=${process.env.VUE_APP_API_KEY_OPEN}`)
    const res = await
    axios.get(
      `${VUE_APP_BASE_URL}/v1/current.json?key=${process.env.VUE_APP_API_KEY}&q=${city}&aqi=yes`
    // `${URL}?lat=${lat}&lon=${lon}&exclude=current&appid=${process.env.VUE_APP_API_KEY_OPEN}`
    // `${VUE_APP_BASE_URL}?lat=${lat}&lon=${lon}&appid=${process.env.VUE_APP_API_KEY}`
    )
    console.log(res);
    return res.data;
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//     throw error; // Повторно кидаємо помилку для подальшої обробки
//   }
}

export function getDataFiveDays(city) {
  //    const res = axios.get(`${URL}?q=${city}&appid=${process.env.VUE_APP_API_KEY}`)
    //    const res = axios.get(`${URL}?q=${city}&appid=${process.env.VUE_APP_API_KEY}`)
  const res = axios.get(
    // `${VUE_APP_BASE_URL}?key=${process.env.VUE_APP_API_KEY}&q=${city}&aqi=yes`
    `${VUE_APP_BASE_URL}?key=${process.env.VUE_APP_API_KEY}&q=${city}&aqi=yes`

  );
  console.log(res);
  return res;
}

export function getLocations(city) {
    const res = axios.get(`${VUE_APP_GEO_BASE_URL}?text=${city}&type=city&limit=10&apiKey=${VUE_APP_GEO_API_KEY}`
    );
    console.log(res);
    return res; 
}