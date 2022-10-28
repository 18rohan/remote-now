import * as React from "react";
import { auth } from "../firebase/firebase-config";
import { useNavigate } from "react-router";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";
import {User, UserCredential} from 'firebase/auth';
interface user {
  email:string;
  uid:string;
  name:string;

}

const AuthenticationServices = {  
  signInUser: async (data: { email: string; password: string }) => {
    try{
      const res:UserCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      if(res){
        return res.user;
      }
    } catch(err){
      return err;
    }
  },
  signUpUser: async (data: { email: string; password: string }) => {
    try{
      const res:UserCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      if(res){
        return res.user;
      }
      
    } catch(err){
        return err;
    }
  },
  signOutUser:async()=>{
    signOut(auth)
    .then(()=>{sessionStorage.removeItem('Auth Token')})
    .catch((error:any)=>console.log(error))
  }
};
export default AuthenticationServices;
