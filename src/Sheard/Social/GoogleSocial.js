import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import './GoogleSocial.css'


const GoogleSocial = () => {
  
  const {socialSignUp} = useContext(AuthContext)
  const provider = new GoogleAuthProvider()
  
  const handleGoogle = () => {
    socialSignUp(provider)
     .then(result => {
       const user = result.user
       console.log(user)
     })
     .catch(error => console.log(error))
  }

  return (
    <div>
      <div className="form-control mt-6">
        <button onClick={handleGoogle} className="btn bg-gradient-to-r from-success to-warning"> <i class="fa-brands fa-google mr-5 google-size"></i> Login With Google </button>
      </div>
    </div>
  );
};

export default GoogleSocial;
