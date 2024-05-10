import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../public/firebase.config";
import PropTypes from 'prop-types';


export const AuthContext =createContext(null);
const auth = getAuth(app)

const Context = ({children}) => {
    const [user, setUser] = useState (null);
    const [loading , setLoading] =useState(true)


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        
         return ()=>{
            unsubscribe()
         };
    },[])

   const createUser =(email,password)=>{
    setLoading(true)
     return createUserWithEmailAndPassword(auth, email,password)
   }

    const authInfo={
        user,
        loading,
       createUser
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