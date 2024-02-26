import Search from "./components/Search";
import WeatherInformation from "./components/WeatherInformation";
function App() {
  return (
    <>
      <section>
        <Search />
        <WeatherInformation />
        <ExtraInformation />
      </section>
    </>
  );
}

export default App;
