import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const signOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
  };

  const navbar = (
    <>
      <li></li>

      <li>
        <Link to="/home">
          <i class="fa-solid fa-house"></i> Home
        </Link>
      </li>

      <li>
        <Link>
          <i class="fa-solid fa-calendar-days"></i> Timeline
        </Link>
      </li>

      <li>
        <Link>
          <i class="fa-solid fa-user"></i>
        </Link>
      </li>

      <li>
        <Link to="/massage">
          <i class="fa-solid fa-message"></i>
        </Link>
      </li>

      <li>
        <Link>
          <i class="fa-solid fa-bell"></i>
        </Link>
      </li>
      
      <li>
        <Link to='/media'>
            Media
        </Link>
      </li>

    </>
  );

  return (
    <div className="">
      <div className="navbar bg-indigo-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbar}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">FaceLook</a>

          <div className="search-container px-5">
            <form className="form-control">
              <input
                type="text"
                placeholder=""
                className="input w-50 input-bordered rounded-full search-input"
              />

              <button className="button">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbar}</ul>
        </div>
        {" "}
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  {/* <span className="badge"></span> */}
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              {user?.uid && (
                <li>
                  <button onClick={signOut} className="">
                    Log Out
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
