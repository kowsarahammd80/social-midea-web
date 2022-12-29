import React, { useEffect, useState } from "react";
import "./ShowStatus.css";
import ShowStatusMap from "./ShowStatusMap";

const ShowStatus = () => {
  const [allUserStatus, setAllUserStatus] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/statusPhotoAll`)
      .then((res) => res.json())
      .then((data) => setAllUserStatus(data))
      .catch((e) => console.error());
  }, [allUserStatus]);

  return (
    
      <div className="my-5 ">
         <h1>{allUserStatus.length}</h1>
         {
          // myArray.slice(0).reverse().map / [...array].replace()
           [...allUserStatus].reverse().map(allUserStatu => <ShowStatusMap
            key={allUserStatu._id}
            allUserStatuData = {allUserStatu}
           ></ShowStatusMap>)
         }
      </div>
    
  );
};

export default ShowStatus;
