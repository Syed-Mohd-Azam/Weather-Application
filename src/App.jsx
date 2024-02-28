import Search from "./components/Search";
import WeatherInformation from "./components/WeatherInformation";
import ExtraInformation from "./components/ExtraInformation";
import { useState } from "react";
import { APP_ID, WEATHER_CITY_API } from "./utils/constants";
function App() {
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const fetchWeatherData = async () => {
    try {
      if (city.trim() === "") {
        setCity("");
        setError("Please enter the correct city name! ");
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
      setError("");
      setWeatherInfo(jsonData);
    } catch (error) {
      setError("City not found!");
      setWeatherInfo([]);
    }
  };
  return (
    <>
      <section
        className="h-screen w-full  bg-cover bg-no-repeat bg-center brightness-75 flex flex-col gap-5"
        style={{
          backgroundImage: "url(/Background.jpg)",
        }}
      >
        <Search
          city={city}
          setCity={setCity}
          fetchWeatherData={fetchWeatherData}
        />
        {error && (
          <>
            <section className="w-3/5  p-5 flex justify-center items-center  text-blue-900 font-semibold mx-auto rounded-lg mt-20">
              <p className="text-center italic text-3xl bg-purple-50 bg-opacity-60 p-5 rounded-xl rotate-50 animate-bounce">
                {error}
              </p>
            </section>
          </>
        )}
        {!error && <WeatherInformation weatherInfo={weatherInfo} />}
        {!error && <ExtraInformation weatherInfo={weatherInfo} />}
      </section>
    </>
  );
}

export default App;
