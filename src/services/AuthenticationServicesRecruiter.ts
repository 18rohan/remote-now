import * as React from "react";
import { auth } from "../firebase/firebase-config";
import { useNavigate } from "react-router";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";
import {doc, getDoc} from 'firebase/firestore';
import {User, UserCredential} from 'firebase/auth';
import {db} from '../firebase/firebase-config';

interface user {
  email:string;
  uid:string;
  name:string;

}
import storage from 'redux-persist/lib/storage';
const AuthenticationServicesRecruiter = {  
  signInRecruiter: async (data: { email: string; password: string }) => {
    try{
      const res:UserCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      if(res){
        return res.user;
      }
    } catch(err){
      return err;
    }
  },
  signUpRecruiter: async (data: { email: string; password: string }) => {
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
    .catch((error:any)=>console.log(error))
  },
  getUserData:async(uid:string)=>{
    const docRef = doc(db, 'recruiter',uid);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
      return docSnap.data();
    } else {
      console.log("No such documents!");
    }
  }
};
export default AuthenticationServicesRecruiter;
