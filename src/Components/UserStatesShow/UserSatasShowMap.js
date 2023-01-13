import moment from "moment/moment";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Comments from "../Comments/Comments";

const UserSatasShowMap = ({ useStatuData }) => {
  const { user } = useContext(AuthContext);

  const { text, image, displayName, photoURL, status } = useStatuData;

  const [comments, setComments] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/userComment/${useStatuData._id}`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((e) => console.error(e));
  }, [comments]);


  const handleCommentPost = (event) => {
    const postTime = moment().format("lll");
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;
    // console.log(comment)

    CommentPost(
      comment,
      user.displayName,
      user.photoURL,
      useStatuData._id,
      postTime
    );
    form.reset('')
  };

  const CommentPost = (comment, displayName, photoURL, _id, postTime) => {
    const commentsInfo = {
      userName: displayName,
      userImage: photoURL,
      userComment: comment,
      statusId: _id,
      time: postTime,
    };

    // console.log(commentsInfo);
    fetch(`http://localhost:5000/userComment`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(commentsInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="my-5 bg-indigo-50">
      <div className="flex items-center">
        <div className="avatar placeholder">
          <div className="text-neutral-content rounded-full w-16 p-2">
            <img src={photoURL} alt="" className="" />
          </div>
        </div>

        <div>
          <h1 className="font-semibold">{displayName}</h1>
          
        </div>
      </div>
      <div>
        <p className="px-3">{text}</p>
      </div>

      <div className="">
        {useStatuData?.image ? (
          <img src={image} alt="" className="w-full height-post-image p-5" />
        ) : (
          <div className="">
            <p className="text-center text-lg font-semibold mb-3">{status}</p>
          </div>
        )}
      </div>

      <hr />
      <div className="p-1">
        <button className="ml-5">
          {" "}
          <i class="fa-solid fa-thumbs-up like"></i>{" "}
        </button>
        <button className="ml-5">
          {" "}
          <i class="fa-solid fa-heart love"></i>{" "}
        </button>
      </div>
      <hr />

      {/* comments text show */}

      <div>
        {comments?.map((comment) => (
          <Comments key={comment._id} commentData={comment}></Comments>
        ))}
      </div>

      {/* comments text */}
      <div>
        <div className="flex items-center">
          <div className="text-neutral-content rounded-full w-16 p-2">
            <img src={user?.photoURL} alt="" className="" />
          </div>

          <div>
            <form onSubmit={handleCommentPost}>
              <input
                type="text"
                name="comment"
                placeholder="Shear your comments"
                className="input input-bordered w-50 lg:w-96"
              />
              <button className="btn-ghost ml-3 p-2 rounded-lg">
                <i class="fa-solid fa-play"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSatasShowMap;
