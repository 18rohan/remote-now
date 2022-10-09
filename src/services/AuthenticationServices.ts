import * as React from 'react';
import { auth } from '../firebase/firebase-config';
import { useNavigate } from 'react-router';
import {getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth';

const AuthenticationServices = {
    signInUser:async(data:{email:string, password:string})=>{
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential)=>console.log(userCredential))
    .catch((error)=>console.log(error));
    },
    signUpUser:async(data:{email:string, password:string})=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential)=>console.log(userCredential))
        .catch((error)=>console.log(error));
        }
}
export default AuthenticationServices;

