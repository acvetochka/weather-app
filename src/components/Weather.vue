<template>
  <div
    class="weather"
    :class="
      typeof weather?.current !== 'undefined' && weather?.current.temp_c > 16
        ? 'warm'
        : ''
    "
  >
    <main>
      <div class="search-box">
        <input
          type="text"
          id="city"
          list="cityname"
          class="search-bar"
          placeholder="Search..."
          v-model="city"
          @keyup.enter="fetchLocation"
          @input="fetchLocation"
        />
        <!-- <datalist id="cityname">
          <option v-for="(item, index) in locations" :key="index" @click="selectLocation(item.properties)">
            {{ item.properties.formatted }}
          </option>
        </datalist> -->
      </div>
      <div class="location-container">
        <ul class="location-list">
          <li
            class="location-item"
            v-for="(item, index) in locations"
            :key="index"
            @click="selectLocation(item.properties)"
          >
            <!-- {{ item.properties.formatted }} -->
            {{ item.properties.city }}, {{ item.properties.country }},
            {{ item.properties.postcode }}
            <!-- <div v-if="item.properties.district">
                ({{ item.properties.district }})
              </div> -->
            <div v-if="item.properties.state">
              ({{ item.properties.state }})
            </div>
          </li>
        </ul>
      </div>

      <div v-if="weather?.main" class="weather-container">
                <div class="weather-wrap">
                    <div class="location-box">
                    <div class="location">
                        {{ weather?.name }}, {{ weather.sys.country }}
                        <div class="date">
                            {{ dateBuilder() }}
                        </div>
                    </div>
                    </div>
                </div>
    
                <div class="weather-box">
                    <div class="temp">{{ (weather?.main.temp - 273.15).toFixed(1) }}°C</div>
                    <div class="weather">{{ weather?.weather[0].main }}</div>
                </div>
    
            </div>

      <div v-if="weather?.current" class="weather-container">
        <div class="weather-wrap">
          <div class="location-box">
            <div class="location">
              {{ locationData?.name }}, {{ locationData?.country }}
              <!-- <div v-if="locationData?.district">
                ({{ locationData.district }})
              </div> -->
              <div v-if="locationData?.state">({{ locationData.state }})</div>

              <!-- {{ weather?.location.name }}, {{ weather.location.country }}
              <div v-if="weather?.location.region">
                ({{ weather.location.region }})
              </div> -->
              <div class="date">
                {{ dateBuilder() }}
              </div>
            </div>
          </div>
        </div>

        <div class="weather-box">
          <div class="temp">
            {{ (weather?.current.temp_c).toFixed(1) }}°C

            <div class="temp-feels">
              feels: {{ weather?.current.feelslike_c }}°C
            </div>
          </div>
          <div class="weather">
            <!-- <img src={{ weather?.current.condition.icon }}/> -->
            {{ weather?.current.condition.text }}
            <div class="wind-container">
              <svg-icon type="mdi" :path="windy"></svg-icon>
              {{ convertWind(weather?.current.wind_kph) }} m/s
              <svg-icon
                type="mdi"
                width="32"
                height="32"
                :path="arrow"
                :style="{
                  transform: `rotate(${weather?.current.wind_degree}deg)`,
                }"
              ></svg-icon>
            </div>
            <div>
              <svg-icon type="mdi" :path="water"></svg-icon>
              {{ weather?.current.humidity }} %
            </div>
            <div>{{ weather?.current.pressure_mb }} Pa</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useWeatherStore } from "@/store";
import { dateBuilder } from "@/helpers/dateBuilder";
import { convertWind } from "@/helpers/convertWind";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiArrowUpThin, mdiWeatherWindy, mdiThermometerWater } from "@mdi/js";
// import WeatherFiveDays from "./WeatherFiveDays.vue";
// import WeatherFiveDays from "./WeatherFiveDays.vue";

export default defineComponent({
  props: {
    counter: Number,
  },
  components: { SvgIcon },
  // {WeatherFiveDays},
  setup() {
    const city = ref("");
    const store = useWeatherStore();

    const weather = computed(() => store.weatherData);
    const locations = computed(() => store.locations);
    const locationData = computed(() => store.locationData);
    console.log(locations);

    async function selectLocation(location) {
      // Викликаємо fetchData з переданими lon і lat

      const { lat, lon, city: name, state, country, postcode } = location;
      const cityCoor = `${lat},${lon}`; // Формуємо значення для fetch-запиту

      console.log("city", cityCoor);

      const locationData = {
        lat,
        lon,
        state,
        cityCoor,
        name,
        country,
        postcode,
      };
      console.log("locationData", locationData);

      await store.getWeatherData(locationData);
      city.value = "";
      // await this.fetchData(city);
    }

    // async function fetchData() {
    //   await store.getWeatherData(city.value);
    // }

    async function fetchLocation() {
      if (city.value.length >= 3) {
        // this.inputText = value;
        // console.log("User typed:", this.inputText);
        await store.getLocations(city.value);
        console.log(store.locations);
      }
    }

    return {
      city,
      weather,
      locations,
      locationData,
      // fetchData,
      fetchLocation,
      dateBuilder,
      selectLocation,
      convertWind,
      arrow: mdiArrowUpThin,
      windy: mdiWeatherWindy,
      water: mdiThermometerWater,
    };
  },
});
</script>

<style>
.weather {
  background-image: url("../../assets/cold-bg.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

.weather.warm {
  background-image: url("../../assets/warm-bg.jpg");
}

.search-box {
  width: 100%;
  /* margin-bottom: 30px; */
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  transition: 0.4s;
}

.search-box .search-bar:focus {
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 16px 0 0;
}

.location-box .location {
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
  margin-top: 20px;
}

.location-box .date {
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
  margin-top: 20px;
}

.weather-box {
  text-align: center;
}

.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.temp-feels {
  font-size: 20px;
  text-shadow: 2px 3px rgba(0, 0, 0, 0.25);
}

@media screen and (max-width: 468px) {
  .weather-box .temp {
    font-size: 62px;
  }
}

.weather-box .weather {
  background: none;
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.location-container {
  position: relative;
}

.location-list {
  position: absolute;
  top: 0;
  width: 100%;
}
.location-item {
  display: flex;
  gap: 3px;
  background-color: rgb(180 147 174);
  padding: 15px;
  border: 1px rgba(0, 0, 0, 1);
  /* border-radius: 10px; */
}

.wind-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
