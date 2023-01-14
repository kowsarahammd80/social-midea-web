import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import GoogleSocial from "../../Sheard/Social/GoogleSocial";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { creatUser, setProfile, loading } = useContext(AuthContext);
  const [error, setError] = useState("");

  const imageHostKey = process.env.REACT_APP_image_key;
  // console.log(imageHostKey);

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    // const image = event.target.image.files[0];
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, email, password);
    const image = event.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const image = imageData.data.display_url;
        console.log(image);

        creatUser(email, password)
          .then((result) => {
            const user = result.user;
            if (loading) {
              return <h1>loading...</h1>;
            }
            setError("");
            console.log(user);
            setUserInfo(name, image);
            saveUser(name, email, image);
            navigate("/");
          })
          .catch((error) => {
            setError(error.message);
            console.error(error.message);
          });
      });

    // fetch for data base
  };

  const setUserInfo = (name, image) => {
    const profile = {
      displayName: name,
      photoURL: image,
    };
    console.log(profile);
    setProfile(profile)
      .then(() => {})
      .catch((e) => console.error(e));
  };

  const saveUser = (name, email, image) => {
    const userInfo = {
      name: name,
      email: email,
      image: image,
    };

    fetch(`https://y-kowsarahammd80.vercel.app/registerData`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //  if(data.acknowledged){
        //       toast("Wow so easy!");
        //  }
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="mx-0 lg:mx-10">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold">Welcome To Facklook!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
          </div>

          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl ">
            <div className="card-body">
              <h1 className="text-xl font-bold text-center">Register Now !</h1>

              <form onSubmit={handleRegister}>
                {/* <div className="form-control">

                  <label className="label">
                    <span className="label-text"> image </span>
                  </label>

                  <input
                    type="file"
                    name="file"
                    placeholder=""
                    className="input input-bordered"
                    required
                  />

                </div> */}

                <div>
                  <label htmlFor="image" className="block mb-2 text-sm">
                    Select Image:
                  </label>
                  <input
                    required
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Full Name </span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Email </span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Password </span>
                  </label>

                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>

                <p className="mt-2 text-center font-semibold">
                  Do You Have Account?
                  <span>
                    <Link to="/" className="text-success font-bold">
                      Login
                    </Link>
                  </span>
                </p>

                <p className="font-semibold text-red-500">{error}</p>
              </form>

              <GoogleSocial></GoogleSocial>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
