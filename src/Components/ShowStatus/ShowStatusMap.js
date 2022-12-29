import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ShowStatusMap = ({allUserStatuData}) => {

  const {user} = useContext(AuthContext)
  
  const {text, image, email, displayName, photoURL} = allUserStatuData

  

  return (
    <div className="my-5 bg-base-400">
      <div className="flex items-center">
        <div className="avatar placeholder">
          <div className="text-neutral-content rounded-full w-16 p-2">
            <img
              src={photoURL}
              alt=""
              className=""
            />
          </div>
        </div>

        <div>
          <h1 className="font-semibold">{displayName}</h1>
        </div>

      </div>

      <div>
        <p className="px-3">This for text</p>
      </div>

      <div className="">
        <img
          src={image}
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
              src={user?.photoURL}
              alt=""
              className=""
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Shear your coments"
              className="input input-bordered w-50 lg:w-96"
            />
          </div>
        </div>
      </div>

      </div>

  );
};

export default ShowStatusMap;
