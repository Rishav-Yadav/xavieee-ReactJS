import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
function Navbar() {
  const [isExpandable, setIsExpandable] = useState(false);
  const handleClick = () => {
    setIsExpandable(true);
  };
  return (
    <div className="navbar bg-base-100 shadow-lg ">
      <div className="navbar-start flex-1">
        <a className="btn btn-ghost text-xl text-primary font-bold" href="/">
          XAVIEEE
        </a>
      </div>
      <div className=" navbar-end gap-2 mr-1">
        <Link className="link link-secondary link-hover" to="/">
          Home
        </Link>

        <Link className=" link link-secondary link-hover" to="/series">
          TV Series
        </Link>

        <Link className=" link link-secondary link-hover" to="/movies">
          Movies
        </Link>
      </div>
      {/* <div className="ml-5 flex-none ">
        <div className="form-control">
          <label
            className={`flex items-center input  input-sm w-auto md:w-auto shadow-lg rounded-full focus:ring-violet-300 ${
              isExpandable ? "px-2 py-1" : "p-2 w-10"
            }transition-all duration-300`}
          >
            <FaSearch className="cursor-pointer" onClick={handleClick} />
            {isExpandable && (
              <input
                type="text"
                className="w-20  focus:outline-none transition-all duration-300"
                placeholder="  Search"
              />
            )}
          </label>
        </div>
      </div> */}
    </div>
  );
}
export default Navbar;
