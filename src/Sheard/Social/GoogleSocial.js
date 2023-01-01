import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "./GoogleSocial.css";

const GoogleSocial = () => {
  const { socialSignUp, user } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const handleGoogle = () => {
    socialSignUp(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        userData(user.displayName, user.email, user.photoURL)
        navigate("/home");
      })
      .catch((error) => console.log(error));

     
      
  };

  const userData = (displayName, email, photoURL) => {
    
    const socialUserInfo ={
      name: displayName,
      email: email,
      image: photoURL
    }

    fetch(`http://localhost:5000/userabout/${user?.email}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(socialUserInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
  }

  return (
    <div>
      <div className="form-control mt-6">
        <button
          onClick={handleGoogle}
          className="btn bg-gradient-to-r from-success to-warning"
        >
          {" "}
          <i class="fa-brands fa-google mr-5 google-size"></i> Login With Google{" "}
        </button>
      </div>
    </div>
  );
};

export default GoogleSocial;
