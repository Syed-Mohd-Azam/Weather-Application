/* eslint-disable react/prop-types */
const ExtraInformation = ({ weatherInfo }) => {
  if (weatherInfo?.length === 0) {
    return null;
  }
  const {
    main: { feels_like, humidity },
    wind: { speed },
  } = weatherInfo;
  return (
    <>
      <section className="sm:w-4/5 w-full mx-auto flex sm:flex-row flex-col md:gap-4 lg:gap-6 gap-2  px-6 py-3 ">
        <article className="flex flex-row sm:flex-col gap-7 sm:gap-0 px-5 py-2 rounded-lg border-2 bg-purple-50 opacity-60 flex-1 items-center justify-center">
          <p className="text-blue-900 font-bold italic text-sm md:text-lg lg:text-2xl">
            {feels_like}&#176;C
          </p>
          <p className="text-blue-900 font-bold italic text-sm md:text-lg lg:text-2xl">
            Feels Like
          </p>
        </article>
        <article className=" flex flex-row sm:flex-col gap-7 sm:gap-0 px-2 md:px-5 py-2 rounded-lg border-2 bg-purple-50 opacity-70 flex-1 items-center justify-center">
          <p className="text-blue-900 font-bold italic text-sm md:text-lg lg:text-2xl">
            {humidity}%
          </p>
          <p className="text-blue-900 font-bold italic text-sm md:text-lg lg:text-2xl">
            Humidity
          </p>
        </article>
        <article className="flex flex-row sm:flex-col gap-7 sm:gap-0 items-center justify-center px-5 py-2 border-2 rounded-lg bg-purple-50 opacity-60 flex-1">
          <p className="text-blue-900 font-bold italic text-sm md:text-lg lg:text-2xl">
            {speed}m/s
          </p>
          <p className="text-blue-900 font-bold italic text-sm md:text-lg lg:text-2xl">
            Wind
          </p>
        </article>
      </section>
    </>
  );
};
export default ExtraInformation;
