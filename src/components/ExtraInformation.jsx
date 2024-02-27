/* eslint-disable react/prop-types */
const ExtraInformation = ({ weatherInfo }) => {
  if (weatherInfo?.length === 0) {
    return;
  }
  const {
    main: { feels_like, humidity },
    wind: { speed },
  } = weatherInfo;
  return (
    <>
      <section className="sm:w-3/5 w-full mx-auto flex md:gap-4 lg:gap-6 gap-2  px-6 py-3 ">
        <article className="px-5 py-2 rounded-lg border-2 bg-purple-50 opacity-60 flex-1">
          <p className="text-blue-900 font-bold italic text-2xl">
            {feels_like}&#176;C
          </p>
          <p className="text-blue-900 font-bold italic text-2xl">Feels Like</p>
        </article>
        <article className="px-5 py-2 rounded-lg border-2 bg-purple-50 opacity-70 flex-1">
          <p className="text-blue-900 font-bold italic text-2xl">{humidity}%</p>
          <p className="text-blue-900 font-bold italic text-2xl">Humidity</p>
        </article>
        <article className="px-5 py-2 border-2 rounded-lg bg-purple-50 opacity-60 flex-1">
          <p className="text-blue-900 font-bold italic text-2xl">
            {speed} meter/sec
          </p>
          <p className="text-blue-900 font-bold italic text-2xl">Wind</p>
        </article>
      </section>
    </>
  );
};
export default ExtraInformation;
