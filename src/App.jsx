import Search from "./components/Search";
import WeatherInformation from "./components/WeatherInformation";
import ExtraInformation from "./components/ExtraInformation";
import { useState } from "react";
import { useEffect } from "react";
import { APP_ID, WEATHER_CITY_API } from "./utils/constants";
function App() {
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [city, setCity] = useState("");
  useEffect(() => {
    fetchWeatherData(city);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);
  const fetchWeatherData = async (city) => {
    const weatherData = await fetch(WEATHER_CITY_API + city + APP_ID);
    const jsonData = await weatherData.json();
    setWeatherInfo(jsonData);
  };
  if (weatherInfo?.length === 0) {
    return null;
  }
  return (
    <>
      <section
        className="min-h-screen w-full  bg-cover bg-no-repeat bg-center brightness-75 flex flex-col gap-5"
        style={{
          backgroundImage: "url(/src/assets/Background.jpg)",
        }}
      >
        <Search city={city} setCity={setCity} />
        <WeatherInformation />
        <ExtraInformation />
      </section>
    </>
  );
}

export default App;
