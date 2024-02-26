import Search from "./components/Search";
import WeatherInformation from "./components/WeatherInformation";
import ExtraInformation from "./components/ExtraInformation";
function App() {
  return (
    <>
      <section
        className="min-h-screen w-full  bg-cover bg-no-repeat bg-center "
        style={{
          backgroundImage: "url(/src/assets/Background.jpg)",
        }}
      >
        <section className="absolute inset-0 bg-black opacity-70"></section>
        <Search />
        <WeatherInformation />
        <ExtraInformation />
      </section>
    </>
  );
}

export default App;
