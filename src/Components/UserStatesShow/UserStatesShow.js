import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import UserSatasShowMap from "./UserSatasShowMap";

const UserStatesShow = () => {
  const [useStatus, setUserStatus] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/statusPhotoAll/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserStatus(data))
      .catch((e) => console.error(e));
  }, [user?.email]);

  return (
    <div className="mt-5 mb-5">

         {
          useStatus.map(useStatu => <UserSatasShowMap
           key={useStatu._id}
           useStatuData ={useStatu}
          ></UserSatasShowMap>)
         }

    </div>
  );
};

export default UserStatesShow;
