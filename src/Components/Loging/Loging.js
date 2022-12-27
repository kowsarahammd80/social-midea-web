import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import GoogleSocial from "../../Sheard/Social/GoogleSocial";

const Loging = () => {
  
  const {login, loading} = useContext(AuthContext)
   
  const handleLogin = (event) =>{

    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password) 
    login(email, password)
     .then(result => {
      // if(loading){
      //   return <h1>loading..</h1>
      // }
      const user = result.user
       console.log(user)
     })
     .catch(error => {
      
      console.error(error)
    })


  } 

  return (
    <div>

      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Welcome To Facklook!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
          </div>

          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl">
            <div className="card-body">
               
               <h1 className="text-xl font-bold text-center">Login Now !</h1>

              <form onSubmit={handleLogin}>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">

                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>

                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>

                </div>

                <div className="form-control mt-6">

                  <button className="btn btn-primary"> Login </button>

                </div>

               

                <p className="mt-2 text-center font-semibold"> Do You Have Account?  <span> <Link to='/register' className="text-success font-bold"> Register </Link> </span> </p>

              </form>

               <GoogleSocial></GoogleSocial>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loging;
