import * as React from "react";
import { auth } from "../firebase/firebase-config";
import { useNavigate } from "react-router";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";

const AuthenticationServices = {
  signInUser: async (data: { email: string; password: string }) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        sessionStorage.setItem("Auth Token", userCredential.user.refreshToken);
      })
      .catch((error) => console.log(error));
  },
  signUpUser: async (data: { email: string; password: string }) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        sessionStorage.setItem("Auth Token", userCredential.user.refreshToken);
      })
      .catch((error) => console.log(error));
  },
  signOutUser:async()=>{
    signOut(auth)
    .then(()=>{sessionStorage.removeItem('Auth Token')})
    .catch((error:any)=>console.log(error))
  }
};
export default AuthenticationServices;
