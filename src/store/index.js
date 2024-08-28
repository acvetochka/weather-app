import {defineStore} from "pinia";
// import {getWeatherData} from "@/api";
import {  getDataFiveDays, getLocations, getWeatherData } from "@/api";

export const useWeatherStore = defineStore({
    id: "weather",
    state: ()=> ({
        city: "",
        weatherData: null,
        weatherDataFiveDays: null,
        locations: null,
        locationData: {}
    }),
    actions: {
        async getWeatherData(locationData) {
            // const response = await getWeatherData(city);
            // const {lat, lon} = locationData;

            const response = await getWeatherData(locationData.lat,locationData.lon);
            console.log(response);
            this.locationData = locationData;
            // const response = await getData(city);
            this.weatherData = response;
            console.log("weatherData: ", this.weatherData);
            this.locations = null;
            // this.city = city;
        },

        // async getWeatherData(lat,lon) {
        //     // const response = await getWeatherData(city);

        //     const response = await getWeatherData(lat,lon);
        //     console.log(response);
            
        //     // const response = await getData(city);
        //     this.weatherData = response;
        //     console.log("weatherData: ", this.weatherData);
        //     // this.city = city;
        // },

        async getDataFiveDays(city) {
            const response = await getDataFiveDays(city);
            this.weatherDataFiveDays = response.data;
            console.log("weatherDataFiveDays: ", this.weatherDataFiveDays);
            this.city = city;
        },
        async getLocations(city) {
            const response = await getLocations(city);
            this.locations = response.data.features;
            console.log("locations: ", this.locations);
            // this.locations = city;         
        }
    }
})
