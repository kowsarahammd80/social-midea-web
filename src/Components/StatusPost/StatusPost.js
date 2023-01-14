import React, { useContext } from "react";
import moment from "moment/moment";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import StatusPostModal from "../StatusPostModal/StatusPostModal";
import "./StatusePost.css";

const StatusPost = () => {
  const { user } = useContext(AuthContext);

  const textStatusPost = (event) => {
    const postTime = moment().format("lll");
    event.preventDefault();
    const form = event.target;
    const status = form.status.value;

    const textStatusInfo = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      email: user.email,
      status: status,
      postTime: postTime,
    };

    fetch(`https://y-kowsarahammd80.vercel.app/statusPhoto`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(textStatusInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset("");
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="bg-indigo-200 mb-5 mt-1">
      <div className=" flex items-center justify-center">
        <div className="avatar placeholder">
          <div className=" text-neutral-content rounded-full w-16 p-2">
            <img src={user?.photoURL} alt="" className="" />
          </div>
        </div>

        <div className="ml-5 ">
          <form onSubmit={textStatusPost}>
            <input
              type="text"
              name="status"
              placeholder="What's on your mind ?"
              className="input input-bordered w-50 lg:w-96"
              required
            />
            <button
              type="submit"
              className="status-post-btn rounded-md font-semibold"
            >
              Post
            </button>
          </form>
        </div>
      </div>

      {/* hr */}

      <div className="divider"></div>

      <div className="p-1 flex justify-around ">
        <label htmlFor="my-modal" className="btn-ghost p-1 rounded-lg">
          <i class="fa-solid fa-image"></i>{" "}
          <span className="font-semibold">Image Upload</span>
        </label>

        {/* <label htmlFor="photo">
        <i class="fa-solid fa-image upload-image"></i>
        </label>
        <input
          type="file"
          id="photo"
          name="photo"
          className="w-0  border-none"
        />
         */}

        <button className="btn-ghost  p-1 font-semibold rounded-lg">
          <i class="fa-solid fa-podcast"></i> Live Video{" "}
        </button>

        <button className="btn-ghost  p-1 font-semibold rounded-lg">
          {" "}
          <i class="fa-solid fa-face-smile"></i> Feeling
        </button>

        <StatusPostModal></StatusPostModal>
      </div>
    </div>
  );
};

export default StatusPost;
