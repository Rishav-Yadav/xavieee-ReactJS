import TrendingMovies from "../components/TrendingMovies";
import TrendingSeries from "../components/TrendingSeries";
import SearchBox from "../components/SearchBox";
function Home() {
  return (
    <>
      <div className=" m-8 ">
        <div className="movies-section mt-6">
          <h2 className="font-bold text-2xl text-secondary my-8">
            Trending Movies
          </h2>
          {<TrendingMovies />}
        </div>
        <div className="series-section mt-12">
          <h2 className="font-bold text-2xl text-secondary my-8">
            Trending Series
          </h2>
          {<TrendingSeries />}
        </div>
      </div>
      <div className="search-section flex justify-center items-center my-12 lg:my-24 xl:my-24 py-4">
        <SearchBox />
      </div>
    </>
  );
}
export default Home;
