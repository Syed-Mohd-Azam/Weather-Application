/* eslint-disable react/prop-types */
const Search = ({ city, setCity, fetchWeatherData }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default form submission
      fetchWeatherData();
    }
  };
  return (
    <>
      <section className=" sm:w-3/5 w-full py-10 px-6 mx-auto ">
        <input
          type="search"
          placeholder="Search City"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          onKeyDown={(event) => handleKeyDown(event)}
          className="w-full border-none outline-none text-blue-900 px-6 py-3 rounded-full bg-purple-50 bg-opacity-60 lg:text-3xl italic md:text-2xl tex-xl placeholder-blue-900 font-semibold"
        />
      </section>
    </>
  );
};
export default Search;
