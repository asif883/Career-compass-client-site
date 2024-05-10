import { createUserWithEmailAndPassword, getAuth,signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../public/firebase.config";
import PropTypes from 'prop-types';


export const AuthContext =createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider()

const Context = ({children}) => {
    const [user, setUser] = useState (null);
    const [loading , setLoading] =useState(true)

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
      return setIsDarkMode(prevMode => !prevMode);
    };


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        
         return ()=>{
            unsubscribe()
         };
    },[])


    // register
   const createUser =(email,password)=>{
    setLoading(true)
     return createUserWithEmailAndPassword(auth, email,password)
   }

    // Login   
    const logIN =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    };

    // logout
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
     }

    //googleLogin
    const googleLogin =()=>{
        return signInWithPopup (auth, googleProvider)
    } 
    
    const gitHubLogin = ()=>{
        return signInWithPopup ( auth , gitHubProvider)
    }
    const authInfo={
        user,
        loading,
        logIN,
        googleLogin,
        gitHubLogin,
        logOut,
       createUser,
       isDarkMode, toggleDarkMode
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
Context.propTypes={
    children: PropTypes.node
}
export default Context;