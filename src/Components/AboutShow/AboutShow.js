import React from "react";

const AboutShow = ({aboutData}) => {
   
  const {address, bathDate, bio, location, university} = aboutData

  return (
    <div>
      <h1 className="font-semibold text-center"> About Me </h1>
      <div className="grid grid-cols-2 justify-items-center mt-2 mb-2">
        <h1 className="mb-2"> Location: <span className="font-semibold">{location}</span> </h1>
        <h1 className="mb-2"> University Name :<span className="font-semibold"> {university} </span> </h1>
        <h1 className="mb-2"> Address: <span className="font-semibold"> {address} </span> </h1>
        <h1>Date of bath : {bathDate}</h1>
        <h1>Bio: {bio}</h1>
      </div>

    </div>
  );
};

export default AboutShow;
