import {defineStore} from "pinia";
// import {getWeatherData} from "@/api";
import { getDataFiveDays, getWeatherData } from "@/api";

export const useWeatherStore = defineStore({
    id: "weather",
    state: ()=> ({
        city: "",
        weatherData: null,
        weatherDataFiveDays: null
    }),
    actions: {
        async getWeatherData(city) {
            const response = await getWeatherData(city);
            // const response = await getData(city);
            this.weatherData = response.data;
            console.log("weatherData: ", this.weatherData);
            this.city = city;
        },
        async getDataFiveDays(city) {
            const response = await getDataFiveDays(city);
            this.weatherDataFiveDays = response.data;
            console.log("weatherDataFiveDays: ", this.weatherDataFiveDays);
            this.city = city;
        }
    }
})
