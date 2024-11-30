import { Link } from "react-router-dom";
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
    </div>
  );
}
export default Navbar;
