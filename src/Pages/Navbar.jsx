import { Link, NavLink } from "react-router-dom";
import './Css/nav.css'
import { useContext } from "react";
import { AuthContext } from "../Provider/Context";
import { motion } from "framer-motion"

const Navbar = () => {
    const {user,logOut,toggleDarkMode} =useContext(AuthContext);

   

    const handleDarkMode=() =>{
        toggleDarkMode()
    }


    const handleLogout=()=>{
      logOut()
      .then()
      .catch()
    }
    return (
       <div className="">
             <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 ">
                    <ul className="menu menu-horizontal px-1 flex flex-col  ">
                    <li>
                        <Link className='text-lg font-semibold' to="/">Home</Link>
                    </li>
                    
                    <li>
                        <Link className='text-lg font-semibold' to="/all-jobs">All Jobs</Link>
                    </li>
                      {
                        user &&
                        <ul>
                            <li>
                                <Link className='text-lg font-semibold' to="/applied-jobs"> Applied Jobs</Link>
                            </li>

                            <li>
                               <Link className='text-lg font-semibold' to="/my-jobs"> My Jobs</Link>
                            </li>
                            <li>
                                <Link className='text-lg font-semibold' to="/profile"> Profile</Link>
                            </li>
                        </ul>
                        
                      }
                    
                    
                    <li>
                        <Link className='text-lg font-semibold' to="/add-job">Add A Job</Link>
                    </li>
                    
                    
                   
                    <li>
                        <Link className='text-lg font-semibold' to="/blogs">Blogs</Link>
                    </li>
                    
                    
                   
                    </ul>
                    </ul>
                    </div>
                    <Link to='/' className="text-2xl md:text-4xl font-bold"><span className="text-[#5BBC2E]">Car</span>eer<span className="text-[#5BBC2E]">-</span>Compa<span className="text-[#5BBC2E]">ss</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 pt-4">
                    <NavLink className='text-lg font-medium mr-4 hover:underline' to="/"><li>Home</li></NavLink>
                    <NavLink className='text-lg font-medium mr-4 hover:underline' to="/all-jobs"><li>All Jobs</li></NavLink>
                    
                    <NavLink className='text-lg font-medium mr-4 hover:underline' to="/add-job"><li>Add A Job</li></NavLink>

                     {
                        user ? <div className="flex">
                            <NavLink className='text-lg font-medium mr-4 hover:underline' to="/applied-jobs"><li> Applied Jobs</li></NavLink>
                            
                            <NavLink className='text-lg font-medium mr-4 hover:underline' to="/my-jobs"><li> My Jobs</li></NavLink>
                            <NavLink className='text-lg font-medium mr-4 hover:underline' to="/profile"><li> Profile</li></NavLink>
                            
                        </div>
                        : <p></p>
                     }
                    
                    <NavLink className='text-lg font-medium mr-4 hover:underline' to="/blogs"><li>Blogs</li></NavLink>
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <div className="dropdown dropdown-left ">
                        <div tabIndex={0} role="button" className=" m-1">
                            {
                                user?.displayName ? <img className="w-12 h-12 border rounded-full" src={user?.photoURL} alt={user?.email} />

                                :
                                <img className="w-12 h-12 border rounded-full" src="https://i.ibb.co/yVMCWV5/images-3.png" alt={user?.email} />

                            }
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
                            
                            <Link><button onClick={handleLogout} className="bg-[#5BBC2E] px-4 py-2 rounded-lg font-semibold text-lg text-white">Sing Out</button>
                            </Link>
                            
                        </ul>
                       </div>
                        :
                        <div className="text-end">
                        <Link to='register'><motion.button 
                        whileTap={{scale :0.9}}
                        whileHover={{
                            scale:1.1,
                            backgroundColor:"#ffff",
                            color:"#5BBC2E",
                            borderColor:"#5BBC2E"
                        }}
                        style={{
                            border: '2px solid transparent',
                            borderRadius: '10px',
                            padding: '10px 15px',
                            cursor: 'pointer',
                            outline: 'none',
                            transition: 'border-color 0.2s ease-in-out, color 0.2s ease-in-out',
                          }}
                         className="bg-[#5BBC2E] px-2 md:px-3 py-1 md:py-2 rounded-lg font-semibold text-sm md:text-lg text-white mb-1 mr-1 md:mr-3">Register</motion.button>
                        </Link>
                        <Link to='/login'><motion.button whileTap={{scale :0.9}}
                        whileHover={{
                            scale:1.1,
                            backgroundColor:"#ffff",
                            color:"#5BBC2E",
                            borderColor:"#5BBC2E"
                        }}
                        style={{
                            border: '2px solid transparent',
                            borderRadius: '10px',
                            padding: '10px 15px',
                            cursor: 'pointer',
                            outline: 'none',
                            transition: 'border-color 0.3s ease-in-out, color 0.3s ease-in-out',
                          }}
                         className="bg-[#5BBC2E] px-2 md:px-3 py-1 md:py-2 rounded-lg font-semibold  text-sm md:text-lg text-white">Login</motion.button>
                        </Link>
                      </div>

                    }
                    

                    <div className="ml-3">
                       <label  className="swap swap-rotate">
  
                            {/* this hidden checkbox controls the state */}
                            <input onClick={handleDarkMode} type="checkbox" className="theme-controller " value="synthwave" />
                            
                            {/* sun icon */}
                            <svg className=" swap-off fill-current w-8 h-8 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                            
                            {/* moon icon */}
                            <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                            
                            </label>
                    </div>
                 
                </div>
        </div>
       </div>
    );
};

export default Navbar;