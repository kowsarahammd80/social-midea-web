import React from "react";
import StatusPostModal from "../StatusPostModal/StatusPostModal";
import "./StatusePost.css";

const StatusPost = () => {
  return (
    <div className="bg-green-100 mb-5 mt-1">
      <div className=" flex items-center">
        <div className="avatar placeholder">
          <div className=" text-neutral-content rounded-full w-16 p-2">
            <img
              src="https://placeimg.com/192/192/people"
              alt=""
              className=""
            />
          </div>
        </div>

        <div className="ml-5 ">
          <form action="">
            <input
              type="text"
              placeholder="What's on your mind ?"
              className="input input-bordered w-50 lg:w-96"
            />
            <button className="status-post-btn rounded-md">Post</button>
          </form>
        </div>
      </div>

      {/* hr */}

      <div className="divider"></div>

      <div className="p-1 flex justify-around ">
        
          <label
            htmlFor="my-modal"
            className="btn-ghost p-1 bg-yellow-300 rounded-lg"
          >
            <i class="fa-solid fa-image"></i>{" "}
            <span className="font-semibold">Image Upload</span>
          </label>
        

        
          <button className="btn-ghost bg-sky-300 p-1 font-semibold rounded-lg">
            <i class="fa-solid fa-podcast"></i> Live Video{" "}
          </button>

          <button className="btn-ghost bg-fuchsia-300 p-1 font-semibold rounded-lg"> <i class="fa-solid fa-face-smile"></i> Feeling</button>
        

        <StatusPostModal></StatusPostModal>
      </div>
    </div>
  );
};

export default StatusPost;
