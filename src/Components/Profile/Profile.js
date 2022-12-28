import React from "react";
import StatusPost from "../StatusPost/StatusPost";
import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <div className="mb-5">
        <div className="mx-5">
          <img
            src="https://blog.playstation.com/tachyon/2022/06/0c3c20a8d8514501524a0859461f391572ea6e61.jpg"
            alt=""
            className="cover-photo"
          />
        </div>

        <div className="-mt-6 ml-10 p-2">
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
              <img
                src="https://blog.playstation.com/tachyon/2022/06/0c3c20a8d8514501524a0859461f391572ea6e61.jpg"
                alt=""
              />
            </div>
          </div>

          <hr />

          <div className="flex justify-evenly">
             <h1 className="font-semibold">About</h1>
             <h1 className="font-semibold">Friend</h1>
             <h1 className="font-semibold">Photos</h1>
             <h1 className="font-semibold">Video</h1>
          </div>
            
        </div>
      </div>

      <StatusPost></StatusPost>

    </div>
  );
};

export default Profile;
