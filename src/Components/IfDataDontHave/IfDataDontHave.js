import React from "react";

const IfDataDontHave = () => {
  return (
    <div className="shadow-xl mt-5 mb-5">

      <div className="card bg-base-100 ">
        <div className="card-body">
          <h2 className="card-title"></h2>
          <p className="text-center font-semibold text-2xl text-red-400">Oops! Sorry you have no post data</p>
          <div className="card-actions justify-end">
           
          </div>
        </div>
      </div>

    </div>
  );
};

export default IfDataDontHave;
