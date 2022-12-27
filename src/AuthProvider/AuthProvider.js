import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)

  const [loading, setLoading] = useState(true)

  

  const creatUser = (email, password) =>{
    setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password) 

  }

  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const socialSignUp = (provider) => {
    return signInWithPopup(auth, provider)
  }

  const setProfile = (profile) =>{

     return updateProfile (auth.currentUser , profile)

  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() =>{
    const unsubscribe =onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoading(false)
    });
    
    return () => {
      unsubscribe()
    }

  },[])


  

  const authInfo= {
    user,
    loading,
    creatUser,
    setProfile,
    login,
    socialSignUp,
    logOut
  }



  return (
    <div>
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>

    </div>
  );
};

export default AuthProvider;