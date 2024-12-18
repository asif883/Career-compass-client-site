import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Context";
import Loader from "../Components/Loader";


const Root = () => {
    const [loading , setLoading] = useState(true)
    
        useEffect(()=>{
               fetch('https://career-compass-psi.vercel.app/jobs') 
               .then(res => res.json())
               .then(data => {
                   setLoading(false)
               })
        },[])
    const {isDarkMode} = useContext(AuthContext)
    return (
         
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            {
               loading 
               ? 
               <><Loader/></>
               :
               <>
               <Navbar ></Navbar>
               <Outlet></Outlet>
               <Footer></Footer>
               </>
            }
            
        </div>
    );
};

export default Root;