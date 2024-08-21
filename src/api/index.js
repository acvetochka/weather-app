import axios from "axios"


const VUE_APP_BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

export function getWeatherData(city) {
    return axios.get(`${VUE_APP_BASE_URL}?q=${city}&appid=${process.env.VUE_APP_API_KEY}`)
}

