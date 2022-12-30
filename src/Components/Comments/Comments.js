import React, { useEffect, useState } from "react";

const Comments = ({commentData}) => {
  
  const {
    userName, userImage, userComment} = commentData

  return (
    <div>
      <div className="flex items-center bg-green-300 my-2">
        <div className="text-neutral-content flex rounded-full w-16 p-2">
          <img src={userImage} alt="" className="" />
        </div>
        <div className="">
          <p>{userName}</p>
          <p>{userComment}</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
