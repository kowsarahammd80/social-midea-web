import React, { useEffect, useState } from "react";
import TextStatusPost from "../TextStatusPost/TextStatusPost";
import "./ShowStatus.css";
import ShowStatusMap from "./ShowStatusMap";

const ShowStatus = () => {
  const [allUserStatus, setAllUserStatus] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/statusPhotoAll`)
      .then((res) => res.json())
      .then((data) => setAllUserStatus(data))
      .catch((e) => console.error(e));
  }, [allUserStatus]);

  return (
    <div className="my-5 ">
       
       <TextStatusPost></TextStatusPost>

      {
        
        // myArray.slice(0).reverse().map / [...array].replace()
        [...allUserStatus].reverse().map((allUserStatu) => (
          <ShowStatusMap
            key={allUserStatu._id}
            allUserStatuData={allUserStatu}
          ></ShowStatusMap>
        ))
        
      }
       
       


    </div>
  );
};

export default ShowStatus;
