import { useState, useContext } from "react";
import { search } from "../context/TrendingAction";
import TrendingContext from "../context/TrendingContext";
function SearchBox() {
  const [string, setString] = useState("");
  const { searchData, dispatch } = useContext(TrendingContext);
  const handleChange = (e) => {
    setString(e.target.value);
  };
  const handleSubmission = (e) => {
    e.preventDefault();
    console.log("submiited");
    const getSearchData = async () => {
      const data = await search(string);
      const filterData = data.filter(
        (item) => item.media_type === "movie" || item.media_type === "tv"
      );
      dispatch({ type: "SEARCH", payload: filterData });
    };
    getSearchData();
  };
  return (
    <>
      <div className="w-full max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl  ">
        <div className="form-control">
          <form onSubmit={handleSubmission}>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                onChange={handleChange}
                type="text"
                className="grow"
                placeholder="Search"
              />
            </label>
            <button
              type="submit"
              className="btn btn-primary px-8 mx-auto my-8 rounded-lg lg:px-24 xl:px-24"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Search Results */}

      <div className="flex-none search-results-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {searchData.map((item, index) => (
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                />
              </figure>
              <div className="card-body text-center">
                <h2 className="card-title text-center">
                  {item.media_type === "movie" ? item.title : item.name}
                </h2>
                <h2 className="card-title uppercase text-center">
                  {item.media_type}
                </h2>
                <h2 className="card-title text-center">
                  {item.media_type === "movie"
                    ? item.release_date.slice(0, 4)
                    : item.first_air_date.slice(0, 4)}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default SearchBox;
