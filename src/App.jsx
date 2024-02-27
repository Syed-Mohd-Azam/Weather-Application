import Search from "./components/Search";
import WeatherInformation from "./components/WeatherInformation";
import ExtraInformation from "./components/ExtraInformation";
import { useState } from "react";
import { APP_ID, WEATHER_CITY_API } from "./utils/constants";
function App() {
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [city, setCity] = useState("");
  const fetchWeatherData = async () => {
    try {
      if (city.trim() === "") {
        setCity("");
        setWeatherInfo([]);
        return;
      }
      const weatherData = await fetch(
        WEATHER_CITY_API + city + "&units=metric" + APP_ID
      );
      if (!weatherData.ok) {
        const errorResponse = await weatherData.json();
        if (errorResponse.cod === "404") {
          console.log("City not found");
        } else {
          throw new Error(
            `Weather data request failed with status: ${weatherData.status}`
          );
        }
      }
      const jsonData = await weatherData.json();
      console.log(jsonData);
      setWeatherInfo(jsonData);
    } catch (error) {
      setCity("");
      setWeatherInfo([]);
    }
  };
  return (
    <>
      <section
        className="min-h-screen w-full  bg-cover bg-no-repeat bg-center brightness-75 flex flex-col gap-5"
        style={{
          backgroundImage: "url(/Background.jpg)",
        }}
      >
        <Search
          city={city}
          setCity={setCity}
          fetchWeatherData={fetchWeatherData}
        />
        {!(city === "") && <WeatherInformation weatherInfo={weatherInfo} />}
        {!(city === "") && <ExtraInformation weatherInfo={weatherInfo} />}
      </section>
    </>
  );
}

export default App;
