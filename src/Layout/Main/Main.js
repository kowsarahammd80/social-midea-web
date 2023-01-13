import React from "react";
import { Outlet } from "react-router-dom";
import AllUserList from "../../Components/AllUserList/AllUserList";
import Footer from "../../Sheard/Footer/Footer";

import Navbar from "../../Sheard/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="container grid grid-cols-3 lg:grid-cols-8 md:grid-cols-5">
        {/* left side  */}
        <div className="hidden lg:block  lg:col-span-2 bg-indigo-50">
          <ul className="ml-3">
            <li>
              <h1 className="text-lg font-semibold mt-5 mb-3">
                {" "}
                <i class="fa-solid fa-user-group"></i> Friends
              </h1>
            </li>

            <li>
              <h1 className="text-lg font-semibold mt-5 mb-3">
                {" "}
                <i class="fa-solid fa-calendar-minus"></i> Most Resent{" "}
              </h1>
            </li>

            <li>
              <h1 className="text-lg font-semibold mt-5 mb-3">
                {" "}
                <i class="fa-solid fa-flag-checkered"></i> Pages{" "}
              </h1>
            </li>

            <li>
              <h1 className="text-lg font-semibold mt-5 mb-3">
                {" "}
                <i class="fa-solid fa-users-rectangle"></i> Groups
              </h1>
            </li>
          </ul>
        </div>

        {/* middel side */}
        <div className="col-span-12 lg:col-span-4 mx-0 lg:mx-14">
          <Outlet></Outlet>
        </div>

        {/* left side */}
        <div className="hidden lg:block lg:col-span-2 bg-indigo-50">
          <div className="mx-1">
            <h1 className="text-center text-xl font-semibold"> User List </h1>
            <AllUserList></AllUserList>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main;
