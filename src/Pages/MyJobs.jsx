import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Context";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const MyJobs = () => {
    const {user} = useContext(AuthContext);

    const [myJObs , setMyJobs] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/myJobs/${user?.email}`, {credentials: 'include'})
        .then(res=> res.json())
        .then(data => setMyJobs(data))
    },[user]);

    const handleDelete = _id =>{
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
         
            if(result.isConfirmed){
                fetch(`http://localhost:5000/myJobs/${_id}`,{
                        method: "DELETE"
                })
                .then(res => res.json())
                .then(data =>{
                      console.log(data);
                      if(data.deletedCount > 0 ){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                     }
                } )

                 
            
           
                
            }
          });
           
        

    }


    return (
        <div className="max-w-7xl mt-10 mx-auto">

            <div className="text-center mb-5">
                <h1 className="text-3xl font-bold text-[#5BBC2E]">You Have added {myJObs.length} Job</h1>
            </div>
            <div className="mt-4 grid gap-4 grid-cols-1 lg:grid-cols-2">
                {
                    myJObs?.map((myJob, idx)=>  <div key={idx}>

                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img className="w-60 h-full rounded-lg" src={myJob.banner} alt="Album"/></figure>
                    <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{myJob.job_title}</h2>
                    <p><span className='text-lg font-medium '>Type: </span>{myJob.job_category}</p>
                    <li><span className='text-lg font-medium '>Email: </span>{myJob.email}</li>
                    <li><span className='text-lg font-medium '>Salary: </span>{myJob.salary_range}</li>
                    <div className="card-actions justify-end">

                    <Link to={`/update/${myJob._id}`}><button className="bg-[#5BBC2E] px-4 py-2 rounded-lg font-semibold text-lg text-white"> Update </button>                     
                    </Link>
                    <button onClick={()=> handleDelete(myJob._id)} className="bg-[#5BBC2E] px-4 py-2 rounded-lg font-semibold text-lg text-white">Delete</button>                     
                  
                    </div>
                   </div>
                </div>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default MyJobs;