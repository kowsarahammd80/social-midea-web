import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import AboutModal from "../AboutModal/AboutModal";
import StatusPost from "../StatusPost/StatusPost";
import UserStatesShow from "../UserStatesShow/UserStatesShow";
import "./Profile.css";

const Profile = () => {
  const { user } = useContext(AuthContext);

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

        <div className="p-2">
          <div className="avatar placeholder -mt-6 ml-10">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
              <img src={user?.photoURL} alt="" />
            </div>
            <div>
              <h1 className="ml-2 font-semibold">{user?.displayName}</h1>
            </div>
          </div>

          <hr />

          <div className="flex justify-evenly">
            <label htmlFor="my-modal1" className="font-semibold background-modal btn btn-ghost">
              About
            </label>

            <h1 className="font-semibold btn btn-ghost">Friend</h1>
            <h1 className="font-semibold btn btn-ghost">Photos</h1>
            <h1 className="font-semibold btn btn-ghost">Video</h1>
          </div>
          <AboutModal></AboutModal>
        </div>
      </div>

      <StatusPost></StatusPost>

      <UserStatesShow></UserStatesShow>
    </div>
  );
};

export default Profile;
