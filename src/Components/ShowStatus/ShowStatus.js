import React from "react";
import "./ShowStatus.css";

const ShowStatus = () => {
  return (
    <div className="mt-5 mb-5">
      <div className="flex items-center">
        <div className="avatar placeholder">
          <div className="text-neutral-content rounded-full w-16 p-2">
            <img
              src="https://placeimg.com/192/192/people"
              alt=""
              className=""
            />
          </div>
        </div>

        <div>
          <h1 className="font-semibold">User Name</h1>
        </div>
      </div>
      <div>
        <p className="px-3">This for text</p>
      </div>

      <div className="">
        <img
          src="https://blog.playstation.com/tachyon/2022/06/0c3c20a8d8514501524a0859461f391572ea6e61.jpg"
          alt=""
          className="w-full height-post-image p-5"
        />
      </div>

      <hr />
      <div className="p-1">
        <button className="ml-5">
          {" "}
          <i class="fa-solid fa-thumbs-up like"></i>{" "}
        </button>
        <button className="ml-5">
          {" "}
          <i class="fa-solid fa-heart love"></i>{" "}
        </button>
      </div>
      <hr />

      <div>

        <div className="flex items-center">
          <div className="text-neutral-content rounded-full w-16 p-2">
            <img
              src="https://placeimg.com/192/192/people"
              alt=""
              className=""
            />
          </div>

           <div>
              <input type="text" placeholder="Shear your coments" className="input input-bordered w-50 lg:w-96" />
           </div>

        </div>

      </div>
    </div>
  );
};

export default ShowStatus;
