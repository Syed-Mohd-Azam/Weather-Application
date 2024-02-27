/* eslint-disable react/prop-types */
const ExtraInformation = ({ weatherInfo }) => {
  console.log(weatherInfo);
  if (weatherInfo?.length === 0) {
    return;
  }
  return (
    <>
      <section className="sm:w-3/5 w-full mx-auto flex md:gap-4 lg:gap-6 gap-2  px-6 py-3 ">
        <article className="border-2 bg-purple-50 opacity-70 flex-1">1</article>
        <article className="border-2 bg-purple-50 opacity-70 flex-1">2</article>
        <article className="border-2 bg-purple-50 opacity-70 flex-1">3</article>
      </section>
    </>
  );
};
export default ExtraInformation;
