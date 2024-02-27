/* eslint-disable react/prop-types */
const WeatherInformation = ({ weatherInfo }) => {
  console.log(weatherInfo);
  if (weatherInfo.length === 0) {
    return;
  }
  const {
    name,
    sys: { country },
    weather,
  } = weatherInfo;
  return (
    <>
      <section className="sm:w-3/5 w-full mx-auto py-10 px-6 flex-1">
        <p className=" text-2xl italic mb-5 text-blue-900 font-bold">
          {name}, {country}
        </p>
        <article className="text-7xl flex flex-row justify-between">
          <p className="text-blue-900">32F</p>
          <p className=" transition-transform -rotate-90 text-blue-900">
            {weather?.[0]?.main}
          </p>
        </article>
      </section>
    </>
  );
};
export default WeatherInformation;
