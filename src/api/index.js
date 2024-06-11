import axios from "axios"


const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

export function getWeatherData(city) {
    return axios.get(`${BASE_URL}?q=${city}&appid=${process.env.API_KEY}`)
}