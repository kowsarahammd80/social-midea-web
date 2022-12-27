import React from "react";
import './StatusePost.css'

const StatusPost = () => {
  return (
    <div>
      
        <div className=" flex items-center">
          <div className="avatar placeholder">
            <div className=" text-neutral-content rounded-full w-16">
              <img src="https://placeimg.com/192/192/people" alt="" />
            </div>
          </div>

          <div className="ml-5 ">
            {/* <input type="text" className="input-width rounded-full w-96"/> */}
            <input type="text" placeholder="What's on your mind" className="input input-bordered w-20 lg:w-96"/>
          </div>

        </div>
      
    </div>
  );
};

export default StatusPost;
