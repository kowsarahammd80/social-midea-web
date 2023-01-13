import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Like = ({allUserStatuData}) => {

  const {user} = useContext(AuthContext)
   
  const handleLike = () => {
    likeInfo(user.displayName, user.email, user.PhotoURL, allUserStatuData._id)
  }

  const likeInfo = (displayName, email, PhotoURL, _id,) => {
    const likeCount = {
       name: displayName,
       email: email,
       image: PhotoURL,
       statusId: _id
    }

    
    fetch(`http://localhost:5000/userLike`,{
      method: "POST",
      headers: {
        "Content-type" : "application/json",
      },
      body: JSON.stringify(likeCount)
    })
     .then(res => res.json())
     .then(data => {
       console.log(data)
     })
     .catch(e => console.log(e))

  }

  // data get

  const [likes, setLikes] = useState([])

  useEffect(() => {

    fetch(`http://localhost:5000/userLike/${allUserStatuData._id}`)
     .then(res => res.json())
     .then(data => setLikes(data))

  },[likes])

  
  // love section
  const handleLove = () => {
    loveInfo(user.displayName, user.email, user.PhotoURL, allUserStatuData._id)
  } 

  const loveInfo = (displayName, email, PhotoURL, _id,) => {
    const loveCount = {
       name: displayName,
       email: email,
       image: PhotoURL,
       statusId: _id
    }

    
    fetch(`http://localhost:5000/userLove`,{
      method: "POST",
      headers: {
        "Content-type" : "application/json",
      },
      body: JSON.stringify(loveCount)
    })
     .then(res => res.json())
     .then(data => {
       console.log(data)
     })
     .catch(e => console.log(e))

  }

  const [loves, setLoves] = useState([])

  useEffect(() => {

    fetch(`http://localhost:5000/userLove/${allUserStatuData._id}`)
    .then(res => res.json())
    .then(data => setLoves(data))

  },[loves])

  return (
    <div>
      <div className="p-1">
        <div className="flex items-center">

          <button onClick={handleLike} className="ml-5">
            <i class="fa-solid fa-thumbs-up like"></i>
          </button>

          {
            likes.length ? <span className="ml-3"> {likes.length} Peoples Likes</span>
            : 
            <>
              
            </>
          }

          <button onClick={handleLove} className="ml-5">
            <i class="fa-solid fa-heart love"></i>
          </button>

         {
           loves.length  ?  <span className="ml-2">
               {loves.length} Peoples loves </span>  
             : 
             <></>
           }
           
         
        </div>
      </div>
    </div>
  );
};

export default Like;
