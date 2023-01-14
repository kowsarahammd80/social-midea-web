import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import IfDataDontHave from "../IfDataDontHave/IfDataDontHave";
import Loading from "../Loading/Loading";
import UserSatasShowMap from "./UserSatasShowMap";

const UserStatesShow = () => {
  const [useStatus, setUserStatus] = useState([]);

  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://y-kowsarahammd80.vercel.app/statusPhotoAll/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserStatus(data);
        setLoading(false);
      })
      .catch((e) => console.error(e));
  }, [user?.email]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mt-5 mb-5">
      {useStatus.length ? (
        [...useStatus]
          .reverse()
          .map((useStatu) => (
            <UserSatasShowMap
              key={useStatu._id}
              useStatuData={useStatu}
            ></UserSatasShowMap>
          ))
      ) : (
        <IfDataDontHave></IfDataDontHave>
      )}
    </div>
  );
};

export default UserStatesShow;
