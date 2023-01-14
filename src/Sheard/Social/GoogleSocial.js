import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loading from "../../Components/Loading/Loading";
import "./GoogleSocial.css";

const GoogleSocial = () => {
  const { socialSignUp, user } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleGoogle = () => {
    socialSignUp(provider)
      .then((result) => {
        const user = result.user;

        console.log(user);

        userData(user.displayName, user.email, user.photoURL);

        navigate("/home");
      })
      .catch((error) => console.log(error));

    if (loading) {
      return <Loading />;
    }
  };

  const userData = (displayName, email, photoURL) => {
    const socialUserInfo = {
      name: displayName,
      email: email,
      image: photoURL,
    };

    fetch(`https://y-kowsarahammd80.vercel.app/userabout/${user?.email}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(socialUserInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

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
