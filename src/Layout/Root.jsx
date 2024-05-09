import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";


const Root = () => {
    return (
        <div className="bg-[#FAF6EB]">
            <Navbar ></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;