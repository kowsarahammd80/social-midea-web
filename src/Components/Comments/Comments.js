import React, { useEffect, useState } from "react";
import './Comments.css'

const Comments = ({commentData}) => {
  
  const {
    userName, userImage, userComment} = commentData

  return (
    <div className="flex items-center justify-center rounded-lg">
      <div className="flex items-center bg-indigo-300 comment-Width my-2">
        <div className="text-neutral-content flex rounded-full w-16 p-2">
          <img src={userImage} alt="" className="" />
        </div>
        <div className="">
          <p>{userName}</p>
          <div className="bg-indigo-200">
          <p className="text-center p-1">{userComment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
