import React, { useContext, useEffect, useState } from "react";
import './ShowStatus.css'
import moment from "moment/moment";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Comments from "../Comments/Comments";
import Like from "../Like/Like";

const ShowStatusMap = ({ allUserStatuData }) => {
  const { user } = useContext(AuthContext);

  const { text, image, email, displayName, photoURL, postTime } =
    allUserStatuData;

  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/userComment/${allUserStatuData._id}`)
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
      allUserStatuData._id,
      postTime
    );
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
    <div className="my-5 mx-3 lg:mx-0 bg-indigo-100 rounded-xl shadow-xl">
      <div className="flex items-center">
        <div className="avatar placeholder">
          <div className="text-neutral-content rounded-full w-16 p-2">
            <img src={photoURL} alt="" className="" />
          </div>
        </div>

        <div>
          <h1 className="font-semibold">{displayName}</h1>
          <p>{postTime}</p>
        </div>
        <div></div>
      </div>

      <div>
        <p className="px-3">{text}</p>
      </div>

      <div className="">
        <img src={image} alt="" className="w-full height-post-image p-5" />
      </div>

      <hr />
      <Like allUserStatuData={allUserStatuData}></Like>
      <hr />

      {/* comments text show */}

      <div>
        {comments.map((comment) => (
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
                placeholder="Shear your coments"
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

export default ShowStatusMap;
