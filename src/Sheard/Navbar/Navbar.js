import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navbar = (
    <>
      <li></li>

      <li>
        <Link>
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
        <Link>
          <i class="fa-solid fa-message"></i>
        </Link>
      </li>

      <li>
        <Link>
          <i class="fa-solid fa-bell"></i>
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar background">
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
          <a className="btn btn-ghost normal-case text-xl">Social Media</a>

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

        <div className="navbar-end">
          <div className="avatar hight">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
