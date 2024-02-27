/* eslint-disable react/prop-types */
const WeatherInformation = ({ weatherInfo }) => {
  console.log(weatherInfo);
  if (weatherInfo?.length === 0) {
    return;
  }
  const {
    name,
    sys: { country },
    weather,
    main: { temp },
  } = weatherInfo;
  return (
    <>
      <section className="sm:w-4/5 w-full mx-auto py-10 px-6 flex-1">
        <article className="flex justify-start items-center">
          <p className="text-lg md:text-2xl italic mb-5 text-blue-900 font-bold  bg-purple-50 px-3 py-2 rounded-lg opacity-75">
            {name}, {country}
          </p>
        </article>
        <article className=" flex flex-row justify-between p-3">
          <p className="text-blue-900  bg-purple-50 opacity-75 p-2 rounded-lg md:text-7xl text-4xl">
            {temp}&#176;C
          </p>
          <p className=" transition-transform -rotate-90 text-blue-900 bg-purple-50 p-2 opacity-75 rounded-lg md:text-7xl text-4xl">
            {weather?.[0]?.main}
          </p>
        </article>
      </section>
    </>
  );
};
export default WeatherInformation;
