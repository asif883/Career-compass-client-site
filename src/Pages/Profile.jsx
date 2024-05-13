import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Context";
import { Link } from "react-router-dom";


const Profile = () => {

    const{ user ,logOut} = useContext(AuthContext);
    const [appliedJobs , setAppliedJobs] = useState([]);

    useEffect(()=>{
       fetch(`http://localhost:5000/appliedJobs/${user?.email}`)
       .then(res => res.json())
       .then(data => setAppliedJobs(data))

    },[user]);

    const handleLogout=()=>{
        logOut()
        .then()
        .catch()
      }

    return (
        <div className="max-w-3xl mt-10 mx-auto">
            <div className="text-center mb-5">
                <h1 className="text-3xl text-[#5BBC2E] font-bold">Welcome To Your Profile</h1>
            </div>
            <div>
                <div className="relative">
                   < img className="rounded-xl border border-green-300 h-[400px] w-full" src="https://i.ibb.co/CVFh1hf/Telecommuting-pana.png" alt="" />


                   <div className="absolute -bottom-9">
                
                    {
                         user?.displayName ? <img className="border rounded-xl" src={user?.photoURL} alt={user?.email} />

                          : 
                         <img className="border rounded-xl h-40" src="https://i.ibb.co/yVMCWV5/images-3.png" alt={user?.email} />

                    }
              
                   </div>
                </div>

                 <div className="mt-10">
                   <h1 className="text-2xl font-bold ">Name: {user.displayName}</h1>
                   <p className="text-xl mt-2 font-semibold mb-5"> Applied Jobs: {appliedJobs.length}
                   <Link className="ml-3 text-green-500 underline" to='/applied-jobs'>Check</Link></p>

                   <Link ><button onClick={handleLogout} className="bg-[#5BBC2E] px-4 py-2 rounded-lg font-semibold text-lg text-white">Sing Out</button>
                   </Link>
                </div>

               
                 
            </div>
            
        </div>
    );
};

export default Profile;