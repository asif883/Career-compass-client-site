import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import { useContext } from "react";
import { AuthContext } from "../Provider/Context";


const Root = () => {

    const {isDarkMode} = useContext(AuthContext)
    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <Navbar ></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;