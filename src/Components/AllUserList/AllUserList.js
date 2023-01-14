import React, { useEffect, useState } from "react";
import AllUserListMap from "../AllUserListMap/AllUserListMap";
import Loading from "../Loading/Loading";

const AllUserList = () => {
  const [allUserLists, setAllUserLists] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://y-kowsarahammd80.vercel.app/registerData`)
      .then((res) => res.json())
      .then((data) => {
        setAllUserLists(data);
        setLoading(false);
      })
      .catch((e) => console.error(e));
  }, [allUserLists]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      {[...allUserLists].reverse().map((allUserList) => (
        <AllUserListMap
          key={allUserList._id}
          allUserListData={allUserList}
        ></AllUserListMap>
      ))}
    </div>
  );
};

export default AllUserList;
