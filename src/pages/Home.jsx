import TrendingMovies from "../components/TrendingMovies";
import TrendingSeries from "../components/TrendingSeries";
function Home() {
  return (
    <div className="m-8 ">
      <h2 className="text-2xl text-secondary mb-4">Trending Movies</h2>
      {<TrendingMovies />}
      <h2 className="text-2xl text-secondary mb-4">Trending Series</h2>
      {<TrendingSeries />}
    </div>
  );
}
export default Home;
