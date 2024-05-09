import { NavLink } from "react-router-dom";
import './Css/nav.css'

const Navbar = () => {
    return (
       <div className="max-w-7xl mx-auto">
             <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <ul className="menu menu-horizontal px-1 pt-4">
                    <NavLink className='text-lg font-semibold mr-4' to="/"><li>Home</li></NavLink>
                    <NavLink className='text-lg font-semibold mr-4' to="/all-jobs"><li>All Jobs</li></NavLink>
                    <NavLink className='text-lg font-semibold mr-4' to="/applied-jobs"><li> Applied Jobs</li></NavLink>
                    <NavLink className='text-lg font-semibold mr-4' to="/add-job"><li>Add A Job</li></NavLink>
                    <NavLink className='text-lg font-semibold mr-4' to="/my-jobs"><li> My Jobs</li></NavLink>
                    <NavLink className='text-lg font-semibold mr-4' to="/blogs"><li>Blogs</li></NavLink>
                    <NavLink className='text-lg font-semibold' to="/profile"><li> Profile</li></NavLink>
                    </ul>
                    </ul>
                    </div>
                    <a className="text-5xl font-bold"><span className="text-[#5BBC2E]">R</span>emotib</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 pt-4">
                    <NavLink className='text-lg font-semibold mr-4' to="/"><li>Home</li></NavLink>
                    <NavLink className='text-lg font-semibold mr-4' to="/all-jobs"><li>All Jobs</li></NavLink>
                    <NavLink className='text-lg font-semibold mr-4' to="/applied-jobs"><li> Applied Jobs</li></NavLink>
                    <NavLink className='text-lg font-semibold mr-4' to="/add-job"><li>Add A Job</li></NavLink>
                    <NavLink className='text-lg font-semibold mr-4' to="/my-jobs"><li> My Jobs</li></NavLink>
                    <NavLink className='text-lg font-semibold mr-4' to="/blogs"><li>Blogs</li></NavLink>
                    <NavLink className='text-lg font-semibold' to="/profile"><li> Profile</li></NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="bg-[#5BBC2E] px-4 py-2 rounded-lg font-semibold text-lg text-white mr-4">Register</button>
                    <button className="bg-[#5BBC2E] px-4 py-2 rounded-lg font-semibold text-lg text-white">Login</button>
                </div>
        </div>
       </div>
    );
};

export default Navbar;