import axios from "axios"

const API_KEY = "03592c99ed3af1a8ee625d106921133f"
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

export function getWeatherData(city) {
    return axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`)
}