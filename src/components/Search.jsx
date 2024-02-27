/* eslint-disable react/prop-types */
const Search = ({ city, setCity, fetchWeatherData }) => {
  const handleClick = () => {
    fetchWeatherData();
  };
  return (
    <>
      <section className=" sm:w-3/5 w-full py-10 px-6 mx-auto flex gap-2 ">
        <input
          type="search"
          placeholder="Search City"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          className="w-full border-none outline-none text-blue-900 px-6 py-3 rounded-full bg-purple-50 bg-opacity-60 lg:text-3xl italic md:text-2xl text-xl placeholder-blue-900 font-semibold flex-1"
        />
        <button
          className="bg-purple-50 p-3 rounded-full italic bg-opacity-60 lg:text-3xl md:text-2xl text-xl text-blue-900 font-semibold hover:scale-110 "
          onClick={() => handleClick()}
        >
          Search
        </button>
      </section>
    </>
  );
};
export default Search;
