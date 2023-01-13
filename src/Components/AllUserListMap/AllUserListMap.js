import React from "react";

const AllUserListMap = ({allUserListData}) => {
  
  const {name, image} = allUserListData

  return (
    <div className="card mt-5 mb-3 bg-base-100 shadow-xl">
      <div className="card-body">
      <div className="flex items-center">
        <div className="avatar placeholder">
          <div className="text-neutral-content rounded-full w-16 p-2">
            <img src={image} alt="" className="" />
          </div>
        </div>

        <div>
          <h1 className="font-semibold">{name}</h1>
          
          <p></p>
        </div>
        <div></div>
      </div>

        

        <div className="card-actions justify-center">
          <button className="btn bg-indigo-700">Add Now</button>
        </div>
      </div>
    </div>
  );
};

export default AllUserListMap;
