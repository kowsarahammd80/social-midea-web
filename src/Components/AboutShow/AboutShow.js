import React from "react";

const AboutShow = ({ aboutData }) => {
  const { address, bathDate, bio, location, university } = aboutData;

  return (
    <div>
      <h1 className="font-semibold text-center"> About Me </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center mt-2 mb-2">
        <h1 className="mb-2 font-semibold">
          {" "}
          Location: <span className="font-semibold">{location}</span>{" "}
        </h1>
        <h1 className="mb-2 font-semibold">
          {" "}
          University Name :<span className="font-semibold">
            {" "}
            {university}{" "}
          </span>{" "}
        </h1>
        <h1 className="mb-2 font-semibold">
          {" "}
          Address: <span className="font-semibold"> {address} </span>{" "}
        </h1>
        <h1 className="font-semibold">Date of bath : {bathDate}</h1>
        <h1 className="font-semibold">Bio: <span className="font-semibold"> {bio} </span></h1>
      </div>
    </div>
  );
};

export default AboutShow;
