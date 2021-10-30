import { useEffect, useState } from "react"
import {
    getAuth, signOut, signInWithPopup,
    GoogleAuthProvider, onAuthStateChanged
} from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";


initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
         signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
        })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    //Observe whether user auth state chanee

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });

    }, [])

    return {
        user,
        logOut,
        signInUsingGoogle

    }

}
export default useFirebase;