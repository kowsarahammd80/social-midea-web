import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loading from '../../Components/Loading/Loading';


const PrivateRoute = ({children}) => {
  
  const {user, loading} = useContext(AuthContext)

  const location = useLocation()

  

  if(user){

    return children;
    
  }

  if(loading){
    return <Loading></Loading>
  }
  
  return <Navigate to='/' state={{from: location}} replace>
    
    

  </Navigate>
  
};

export default PrivateRoute;