import Search from "./components/Search";
import WeatherInformation from "./components/WeatherInformation";
import ExtraInformation from "./components/ExtraInformation";
function App() {
  return (
    <>
      <section
        className="min-h-screen w-full  "
        style={{
          backgroundImage: "url(/src/assets/Background.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Search />
        <WeatherInformation />
        <ExtraInformation />
      </section>
    </>
  );
}

export default App;
