import React, { createContext, useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "./TextStatusPost.css";

const TextStatusPost = () => {
   
  const {user} = useContext(AuthContext)

  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl bg-indigo-100 mt-3 mb-3 mx-3 lg:mx-0">
        <div className="card-body">
          <div className="flex items-center">
            <div className="avatar placeholder">
              <div className="text-neutral-content rounded-full w-16 p-2">
                <img src="" alt="" className="" />
              </div>
            </div>

            <div>
              <h1 className="font-semibold">User Name</h1>
              <p></p>
            </div>
            <div></div>
          </div>

          <h2 className="text-center text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Aspernatur, amet?
          </h2>

          <div className="card-actions"></div>
        </div>

        {/* like */}

        <hr className="hrColor" />

        <div className="p-1">
          <div className="flex items-center">
            <button className="ml-5">
              <i class="fa-solid fa-thumbs-up like"></i>
            </button>

            {/* {likes.length ? (
              <span className="ml-3">  Peoples Like</span>
            ) : (
              <></>
            )} */}

            <button className="ml-5">
              <i class="fa-solid fa-heart love"></i>
            </button>

            <span className="ml-2"></span>
          </div>
        </div>

        <hr className="hrColor" />

        <div>
          <div className="flex items-center">
            <div className="text-neutral-content rounded-full w-16 p-2">
              <img src={user?.photoURL} alt="" className="" />
            </div>

            <div>
              <form >
                <input
                  type="text"
                  name="comment"
                  placeholder="Shear your comments"
                  className="input input-bordered w-50 lg:w-96"
                />
                <button className="btn-ghost ml-3 p-2 rounded-lg">
                  <i class="fa-solid fa-play"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextStatusPost;
