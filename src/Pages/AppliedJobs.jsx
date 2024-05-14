import { useContext, useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import { AuthContext } from "../Provider/Context";


const AppliedJobs = () => {
    const {user} = useContext(AuthContext)
    const [appliedJobs , setAppliedJobs] = useState([]);

    useEffect(()=>{
       fetch(`http://localhost:5000/appliedJobs/${user?.email}`,{credentials: 'include'})
       .then(res => res.json())
       .then(data => setAppliedJobs(data))

    },[user])
   
    console.log(appliedJobs) 
    // const {name,email,job_title,banner,job_category} =appliedJobs;
    return (
       <div className="max-w-7xl mx-auto mt-10">
        <div className="text-center my-5 text-[#5BBC2E]">
          {
            appliedJobs?.length ? <h1 className="text-4xl font-bold">The job You have Applied</h1>
            : 
            <div className="text-center">
                <h1 className="text-4xl font-bold">You have not Applied yet !! Confused ?</h1>
                <img className="h-96 max-w-3xl mx-auto" src="https://i.ibb.co/6yHmQd3/Man-thinking-bro.png" alt="" />
                <Link to='/all-jobs'>
                    <button className="mt-5  px-6 py-3 rounded-lg font-semibold text-lg   border border-green-500 text-green-600 hover:bg-[#5BBC2E] hover:text-white">Click Here To Find Your Dream Job</button>
                </Link>
            </div>
          }
        </div>
         <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
            {
                appliedJobs?.map((job, idx) => <div key={idx}>
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img className="w-60 h-full rounded-lg" src={job.banner} alt="Album"/></figure>
                    <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{job.job_title}</h2>
                    <p><span className='text-lg font-medium '>Type: </span>{job.job_category}</p>
                    <h2 className="text-xl font-medium underline">Applicants Info</h2>
                    <li><span className='text-lg font-medium '>Email: </span>{job.email}</li>
                    <li><span className='text-lg font-medium '>Name: </span>{job.name}</li>
                    <div className="card-actions justify-end">

                    <Link to={`/details/${job._id}`}><button className="bg-[#5BBC2E] px-4 py-2 rounded-lg font-semibold text-lg text-white"> Details</button>
                       
                    </Link>
                    </div>
                   </div>
                </div>
                </div>)
            }
        </div>
       </div>

    );
};

export default AppliedJobs;