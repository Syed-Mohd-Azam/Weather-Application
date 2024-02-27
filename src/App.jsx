import Search from "./components/Search";
import WeatherInformation from "./components/WeatherInformation";
import ExtraInformation from "./components/ExtraInformation";
function App() {
  return (
    <>
      <section
        className="min-h-screen w-full  bg-cover bg-no-repeat bg-center brightness-75 flex flex-col gap-5"
        style={{
          backgroundImage: "url(/src/assets/Background.jpg)",
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
