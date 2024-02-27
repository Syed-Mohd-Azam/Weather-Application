/* eslint-disable react/prop-types */
const WeatherInformation = ({ weatherInfo }) => {
  console.log(weatherInfo);
  if (weatherInfo.length === 0) {
    return;
  }
  return (
    <>
      <section className="sm:w-3/5 w-full mx-auto py-10 px-6 flex-1"></section>
    </>
  );
};
export default WeatherInformation;
