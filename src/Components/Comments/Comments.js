import React, { useEffect, useState } from "react";
import './Comments.css'

const Comments = ({commentData}) => {
  
  const {
    userName, userImage, userComment, time} = commentData

  return (
    <div className="flex items-center justify-center rounded-lg">
      <div className="flex items-center  comment-Width my-2">
        <div className="text-neutral-content flex rounded-full w-16 p-2">
          <img src={userImage} alt="" className="" />
        </div>
        <div className="bg-indigo-100 rounded-lg">
        <div className="p-2">
         <div className="flex">
         <p className="font-semibold">{userName}</p>
         <span className="ml-3">{time}</span>
         </div>
         
          <p className="p-1">{userComment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
