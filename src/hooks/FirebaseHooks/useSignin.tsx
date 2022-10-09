import * as React from 'react';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

interface Props {
    email:string;
    password:string;
}
export const useSignIn = ({email, password}:Props) =>{
    const [useCredential, setUserCredential] = React.useState<any>();
    const [error, setError] = React.useState<any>();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>setUserCredential(userCredential))
    .catch((error)=>setError(error));

    return {useCredential, error};
}
