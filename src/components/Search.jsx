const Search = () => {
  return (
    <>
      <section className=" sm:w-3/5 w-full py-10 px-6 mx-auto ">
        <input
          type="search"
          placeholder="Search City"
          className="w-full border-none outline-none text-black px-6 py-3 rounded-full bg-purple-50 bg-opacity-80 lg:text-3xl italic md:text-2xl tex-xl placeholder-black"
        />
      </section>
    </>
  );
};
export default Search;
