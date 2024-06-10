import axios from "axios"



export function getWeatherData(city) {
    return axios.get(`${process.env.BASE_URL}?q=${city}&appid=${process.env.API_KEY}`)
}